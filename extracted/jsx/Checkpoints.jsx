// Checkpoint management for After Effects projects
// Loaded by Main.jsx to expose global functions:
//   atom_createCheckpoint(stepMetaJson)
//   atom_revertToCheckpoint(optionsJson)
//   atom_listCheckpoints()

function __ensureCanonicalProjectFile() {
    if (!app || !app.project) {
        throw new Error('No project open.');
    }
    if (app.project.file === null) {
        var ok = app.project.saveWithDialog();
        if (!ok || app.project.file === null) {
            throw new Error('Project must be saved to create checkpoints.');
        }
    }
    return app.project.file; // File
}

function __checkpointsFolder(mainFile) {
    var folderPath = mainFile.path + '/_atom_checkpoints';
    var folder = new Folder(folderPath);
    if (!folder.exists) {
        if (!folder.create()) {
            throw new Error('Failed to create checkpoints folder: ' + folderPath);
        }
    }
    return folder;
}

function __manifestFile(mainFile) {
    var baseName = mainFile.name.replace(/\.aepx?$/i, '');
    return new File(mainFile.path + '/' + baseName + '.atom-agent.json');
}

function atom_projectDirty() {
    try {
        var dirty = false;
        try { dirty = !!(app && app.project && app.project.dirty); } catch (_) { dirty = false; }
        return JSON.stringify({ ok: true, dirty: dirty });
    } catch (e) {
        return JSON.stringify({ ok: false, error: e.toString(), dirty: false });
    }
}

function atom_saveProject() {
    try {
        var mainFile = __ensureCanonicalProjectFile();
        app.project.save(mainFile);
        return JSON.stringify({ ok: true, path: mainFile.fsName });
    } catch (e) {
        return JSON.stringify({ ok: false, error: e.toString() });
    }
}

function __loadManifest(mainFile) {
    var f = __manifestFile(mainFile);
    if (!f.exists) {
        return {
            version: 1,
            project: {
                canonicalPath: mainFile.fsName,
                projectId: __generateId('proj'),
                createdAt: (new Date()).toUTCString()
            },
            checkpoints: []
        };
    }
    if (!f.open('r')) {
        throw new Error('Failed to open manifest: ' + f.error);
    }
    var raw = f.read();
    f.close();
    try {
        return JSON.parse(raw);
    } catch (e) {
        throw new Error('Failed to parse manifest JSON: ' + e.toString());
    }
}

function __saveManifest(mainFile, manifest) {
    var f = __manifestFile(mainFile);
    if (!f.open('w')) {
        throw new Error('Failed to write manifest: ' + f.error);
    }
    f.write(JSON.stringify(manifest, null, 2));
    f.close();
}

function __generateId(prefix) {
    var p = prefix || 'id';
    return p + '_' + (new Date().getTime()) + '_' + Math.floor(Math.random() * 1e6);
}

// Bijective base-62: 0→A, 1→B, ..., 61→9, 62→AA, 63→AB, ...
function __shortId(index) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var base = chars.length;
    var n = index + 1;
    var result = '';
    while (n > 0) {
        n--;
        result = chars.charAt(n % base) + result;
        n = Math.floor(n / base);
    }
    return result;
}

function __pad3(n) {
    var v = parseInt(n, 10);
    if (v < 10) return '00' + v;
    if (v < 100) return '0' + v;
    return '' + v;
}

// stepMetaJson: { label?, stepIndex?, agentRunId?, notes?, anchorMessageId?, scriptId? }
function atom_createCheckpoint(stepMetaJson) {
    app.beginSuppressDialogs();
    try {
        var meta = {};
        try { meta = stepMetaJson ? JSON.parse(stepMetaJson) : {}; } catch (_) { meta = {}; }

        var mainFile = __ensureCanonicalProjectFile();

        // Flush current project state to disk without changing the open project
        app.project.save(mainFile);

        var folder = __checkpointsFolder(mainFile);
        var manifest = __loadManifest(mainFile);

        var stepIndex = (typeof meta.stepIndex === 'number') ? meta.stepIndex : (manifest.checkpoints.length + 1);
        var baseName = mainFile.name.replace(/\.aepx?$/i, '');
        var ts = (new Date()).getTime();
        var checkpointName = baseName + '_atom_step-' + __pad3(stepIndex) + '_' + ts + '.aep';
        var checkpointFile = new File(folder.fsName + '/' + checkpointName);

        var ok = mainFile.copy(checkpointFile);
        if (!ok) {
            throw new Error('File.copy failed for checkpoint: ' + mainFile.error);
        }

        var cp = {
            id: __shortId(manifest.checkpoints.length),
            label: meta.label || ('Step ' + stepIndex),
            stepIndex: stepIndex,
            createdAt: (new Date()).toUTCString(),
            aeRevision: app.project.revision,
            checkpointPath: checkpointFile.fsName,
            relativePath: checkpointFile.getRelativeURI(mainFile.path),
            agentRunId: meta.agentRunId || null,
            notes: meta.notes || '',
            anchorMessageId: meta.anchorMessageId || null,
            scriptId: meta.scriptId || null
        };

        manifest.checkpoints.push(cp);
        __saveManifest(mainFile, manifest);

        return JSON.stringify(cp);
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    } finally {
        app.endSuppressDialogs(false);
    }
}

// optionsJson: { checkpointId, branchBeforeRevert?:bool }
function atom_revertToCheckpoint(optionsJson) {
    app.beginSuppressDialogs();
    try {
        var opts = {};
        try { opts = optionsJson ? JSON.parse(optionsJson) : {}; } catch (_) { opts = {}; }
        var checkpointId = opts.checkpointId;
        if (!checkpointId) {
            return JSON.stringify({ error: 'checkpointId is required' });
        }

        var mainFile = __ensureCanonicalProjectFile();
        var manifest = __loadManifest(mainFile);

        var cp = null;
        for (var i = 0; i < manifest.checkpoints.length; i++) {
            if (manifest.checkpoints[i].id === checkpointId) {
                cp = manifest.checkpoints[i];
                break;
            }
        }
        if (!cp) {
            return JSON.stringify({ error: 'Checkpoint not found: ' + checkpointId });
        }

        var cpFile = new File(cp.checkpointPath);
        if (!cpFile.exists) {
            return JSON.stringify({ error: 'Checkpoint file missing: ' + cp.checkpointPath });
        }

        var branchCp = null;

        // Optional branch copy of current state before overwrite
        if (opts.branchBeforeRevert) {
            app.project.save(mainFile);
            var branchFolder = __checkpointsFolder(mainFile);
            var baseName = mainFile.name.replace(/\.aepx?$/i, '');
            var branchName = baseName + '_branch_' + (new Date().getTime()) + '.aep';
            var branchFile = new File(branchFolder.fsName + '/' + branchName);
            var branchOk = mainFile.copy(branchFile);
            if (!branchOk) {
                return JSON.stringify({ error: 'Failed to create branch copy: ' + mainFile.error });
            }

            branchCp = {
                id: __shortId(manifest.checkpoints.length),
                label: 'Branch before revert to ' + checkpointId,
                stepIndex: manifest.checkpoints.length + 1,
                createdAt: (new Date()).toUTCString(),
                aeRevision: app.project.revision,
                checkpointPath: branchFile.fsName,
                relativePath: branchFile.getRelativeURI(mainFile.path),
                agentRunId: null,
                notes: 'auto-branch before revert to checkpoint ' + checkpointId,
                anchorMessageId: null,
                scriptId: null,
                branchFor: checkpointId
            };
            manifest.checkpoints.push(branchCp);
            __saveManifest(mainFile, manifest);
        }

        // Close without saving changes to avoid locking the file
        app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);

        var overwriteOk = cpFile.copy(mainFile.fsName);
        if (!overwriteOk) {
            throw new Error('Failed to overwrite canonical project with checkpoint: ' + cpFile.error);
        }

        app.open(mainFile);

        return JSON.stringify({ ok: true, revertedTo: cp.id, branchCheckpoint: branchCp });
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    } finally {
        app.endSuppressDialogs(false);
    }
}

function atom_listCheckpoints() {
    try {
        var mainFile = __ensureCanonicalProjectFile();
        var manifest = __loadManifest(mainFile);
        return JSON.stringify({ ok: true, manifest: manifest });
    } catch (e) {
        return JSON.stringify({ error: e.toString() });
    }
}
