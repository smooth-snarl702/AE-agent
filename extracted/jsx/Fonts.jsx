// Fonts.jsx - Font enumeration for Atom agent
// Hybrid: app.fonts (AE 24+) with OS fallback to catch fonts AE misses

var Atom_Fonts = (function() {
    function hasAppFontsAPI() {
        try {
            var parts = app.version.split(".");
            var major = parseInt(parts[0], 10);
            return (typeof app.fonts !== 'undefined' && app.fonts && major >= 24);
        } catch (e) {
            return false;
        }
    }

    // Refresh non-system font folders (user fonts, etc.) - AE 24.6+
    function pollFontChanges() {
        try {
            if (app.fonts && typeof app.fonts.pollForAndPushNonSystemFontFoldersChanges === 'function') {
                app.fonts.pollForAndPushNonSystemFontFoldersChanges();
            }
        } catch (e) {}
    }

    function getFonts_AE24(query, limit) {
        pollFontChanges();
        var families = app.fonts.allFonts;
        var out = [];
        var queryLower = query ? query.toLowerCase() : null;

        for (var i = 0; i < families.length; i++) {
            var fam = families[i];
            for (var j = 0; j < fam.length; j++) {
                var f = fam[j];

                try {
                    if (f.isSubstitute) continue;
                } catch (e) {}

                var familyName = '';
                var styleName = '';
                var postScript = '';

                try { familyName = f.familyName || ''; } catch (e) {}
                try { styleName = f.styleName || ''; } catch (e) {}
                try { postScript = f.postScriptName || ''; } catch (e) {}

                if (queryLower) {
                    var matchFamily = familyName.toLowerCase().indexOf(queryLower) !== -1;
                    var matchStyle = styleName.toLowerCase().indexOf(queryLower) !== -1;
                    var matchPS = postScript.toLowerCase().indexOf(queryLower) !== -1;
                    if (!matchFamily && !matchStyle && !matchPS) continue;
                }

                out.push({
                    family: familyName,
                    style: styleName,
                    postScript: postScript
                });

                if (limit && out.length >= limit) break;
            }
            if (limit && out.length >= limit) break;
        }

        return { api: 'app-fonts', fonts: out };
    }

    function getFonts_Legacy_Win(query, limit) {
        var cmd =
            'powershell.exe -NoProfile -Command ' +
            '"Add-Type -AssemblyName System.Drawing; ' +
            '$c = New-Object System.Drawing.Text.InstalledFontCollection; ' +
            '$c.Families | ForEach-Object { $_.Name }"';

        var raw = '';
        try {
            raw = system.callSystem(cmd);
        } catch (e) {
            return { api: 'os-win', fonts: [], error: 'callSystem failed: ' + e.toString() };
        }

        var lines = raw.split(/\r?\n/);
        var fonts = [];
        var seen = {};
        var queryLower = query ? query.toLowerCase() : null;

        for (var i = 0; i < lines.length; i++) {
            var name = lines[i].replace(/^\s+|\s+$/g, '');
            if (!name || seen[name]) continue;

            if (queryLower && name.toLowerCase().indexOf(queryLower) === -1) continue;

            seen[name] = true;
            fonts.push({ family: name, style: null, postScript: null });

            if (limit && fonts.length >= limit) break;
        }

        return { api: 'os-win', fonts: fonts };
    }

    // Raw atsutil fetch - returns all font names without filtering
    function getAtsutilFonts() {
        var cmd = '/usr/bin/atsutil fonts -list';
        var raw = '';
        try {
            raw = system.callSystem(cmd);
        } catch (e) {
            return [];
        }

        var lines = raw.split(/\r?\n/);
        var fonts = [];
        var seen = {};

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].replace(/^\s+|\s+$/g, '');
            if (!line || seen[line]) continue;
            seen[line] = true;
            fonts.push(line);
        }

        return fonts;
    }

    function getFonts_Legacy_Mac(query, limit) {
        var allNames = getAtsutilFonts();
        var fonts = [];
        var queryLower = query ? query.toLowerCase() : null;

        for (var i = 0; i < allNames.length; i++) {
            var name = allNames[i];
            if (queryLower && name.toLowerCase().indexOf(queryLower) === -1) continue;

            fonts.push({ family: name, style: null, postScript: null });
            if (limit && fonts.length >= limit) break;
        }

        return { api: 'os-mac', fonts: fonts };
    }

    function getFonts(optionsJSON) {
        var opts = {};
        try {
            opts = optionsJSON ? JSON.parse(optionsJSON) : {};
        } catch (e) {
            opts = {};
        }

        var query = opts.q || opts.query || null;
        var limit = opts.limit || 200;

        try {
            var result;
            if (hasAppFontsAPI()) {
                result = getFonts_AE24(query, limit);

                // Hybrid: on Mac, merge any fonts atsutil sees but app.fonts missed
                if ($.os.indexOf('Windows') !== 0) {
                    var atsNames = getAtsutilFonts();

                    if (atsNames.length > 0) {
                        // Build lookup of families already in result (lowercase for matching)
                        var seen = {};
                        for (var i = 0; i < result.fonts.length; i++) {
                            var fam = result.fonts[i].family;
                            if (fam) seen[fam.toLowerCase()] = true;
                        }

                        // Add missing fonts from atsutil
                        var queryLower = query ? query.toLowerCase() : null;
                        var added = 0;
                        for (var j = 0; j < atsNames.length; j++) {
                            var name = atsNames[j];
                            var nameLower = name.toLowerCase();

                            // Skip if already have it or doesn't match query
                            if (seen[nameLower]) continue;
                            if (queryLower && nameLower.indexOf(queryLower) === -1) continue;

                            // Add with null style/postScript (atsutil doesn't provide these)
                            result.fonts.push({ family: name, style: null, postScript: null });
                            seen[nameLower] = true;
                            added++;

                            if (limit && result.fonts.length >= limit) break;
                        }

                        if (added > 0) {
                            result.api = 'hybrid';
                            result.atsutilAdded = added;
                        }
                    }
                }
            } else if ($.os.indexOf('Windows') === 0) {
                result = getFonts_Legacy_Win(query, limit);
            } else {
                result = getFonts_Legacy_Mac(query, limit);
            }

            result.count = result.fonts ? result.fonts.length : 0;
            result.limited = limit && result.count >= limit;
            return JSON.stringify(result);
        } catch (e) {
            return JSON.stringify({ api: 'error', fonts: [], error: e.toString() });
        }
    }

    return {
        getFonts: getFonts,
        hasAppFontsAPI: hasAppFontsAPI
    };
})();

// Global entry point for CEP
function Atom_getFontsJSON(optionsJSON) {
    return Atom_Fonts.getFonts(optionsJSON);
}
