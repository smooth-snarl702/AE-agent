(function () {
    // Ensure JSON2 is loaded, then expose JSON helpers
    try {
        // Resolve base dir robustly even when this file is eval()'d
        var base = (function(){
            try { if ($.global.__CEP_JSX_DIR__ && String($.global.__CEP_JSX_DIR__).length) return $.global.__CEP_JSX_DIR__; } catch(_){}
            try { return File($.fileName).parent.fsName; } catch(e){ return ""; }
        })();
        $.evalFile(File(base + "/vendor/json2.js"));
    } catch (e) {
        try { $.writeln("CEP_JSON: failed to load json2.js: " + e.toString()); } catch (_) {}
    }
    if (typeof JSON !== "object" || !JSON || typeof JSON.stringify !== "function") {
        throw new Error("CEP_JSON: JSON2 not available");
    }
    function writeFileString(path, text, mode) {
        var f = new File(path);
        f.encoding = "UTF-8";
        if (!f.parent.exists) f.parent.create();
        if (!f.open(mode || 'w')) throw new Error("Cannot open file for write: " + path);
        f.write(text);
        f.close();
        return true;
    }
    function appendLine(path, text) {
        var f = new File(path);
        f.encoding = "UTF-8";
        if (!f.parent.exists) f.parent.create();
        var m = f.exists ? 'a' : 'w';
        if (!f.open(m)) throw new Error("Cannot open file for append: " + path);
        // writeln normalizes newlines
        f.writeln(text);
        f.close();
        return true;
    }
    $.global.CEP_JSON = {
        stringify: function (obj) {
            try { return JSON.stringify(obj); } catch (e) { return "{}"; }
        },
        parse: function (s) {
            try { return JSON.parse(s); } catch (e) { return null; }
        },
        writeString: function (path, text) { return writeFileString(path, text, 'w'); },
        writeJSON: function (path, obj) { return writeFileString(path, JSON.stringify(obj, null, 2), 'w'); },
        writeJSONL: function (path, records) {
            var f = new File(path);
            f.encoding = "UTF-8";
            if (!f.parent.exists) f.parent.create();
            if (!f.open('w')) throw new Error("Cannot open file for write: " + path);
            for (var i = 0; i < records.length; i++) {
                f.writeln(JSON.stringify(records[i]));
            }
            f.close();
            return true;
        },
        appendJSONLRecord: function (path, obj) {
            return appendLine(path, JSON.stringify(obj));
        },
        readJSON: function (path) {
            var f = new File(path);
            if (!f.exists) return null;
            f.encoding = "UTF-8";
            if (!f.open('r')) return null;
            var data = f.read();
            f.close();
            try { return JSON.parse(data); } catch (e) { return null; }
        }
    };
    try { if (typeof Logger !== "undefined") Logger.info("CEP_JSON initialized (JSON2 active)"); } catch (_) {}
})();