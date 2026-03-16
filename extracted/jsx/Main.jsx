// Config object - read from global set by CEP or use fallback
var config = (typeof __CEP_CONFIG__ !== 'undefined') ? __CEP_CONFIG__ : {
    productName: 'Atom',
    userDataFolder: 'atom',
    eventPrefix: 'com.atom-ae.jsx',
    bundleId: 'com.atom-ae.extension'
};

var scriptName = config.productName;
var os = $.os;

// Robust UTF-8 reader: returns source; call eval() at TOP-LEVEL only
function readUtf8File(p) {
    var f = new File(p);
    f.encoding = "UTF-8";
    if (!f.exists) throw new Error("Missing JSX file: " + f.fsName);
    if (!f.open("r")) throw new Error("Cannot open JSX file: " + f.fsName);
    var src = f.read();
    f.close();
    return src;
}

// Base directory
// Prefer a loader-provided global (set by CEP before eval); fallback to $.fileName when running via $.evalFile
var __CEP_JSX_DIR__ = (function () {
    try {
        if ($.global.__CEP_JSX_DIR__ && String($.global.__CEP_JSX_DIR__).length) return $.global.__CEP_JSX_DIR__;
    } catch (_) {}
    try {
        var f = File($.fileName);
        if (f && f.parent) return f.parent.fsName;
    } catch (_) {}
    return "";
})();

// Load ES5 polyfills for ExtendScript compatibility (TOP-LEVEL eval => global binding)
eval(readUtf8File(__CEP_JSX_DIR__ + "/Polyfills.jsx"));

// Include the modal bridge for beautiful dialogs
eval(readUtf8File(__CEP_JSX_DIR__ + "/ModalBridge.jsx"));

// Robust UTF-8 loader is defined above; use it for all module loads

// JSON support + utilities (JSON2 polyfill + helpers)
// Force UTF-8 decode to avoid locale-dependent "cannot convert" errors on Windows (JP)
eval(readUtf8File(__CEP_JSX_DIR__ + "/JSON.jsx"));

// Logger (requires JSON2 to be active for all JSX⇄CEP payloads)
eval(readUtf8File(__CEP_JSX_DIR__ + "/Logger.jsx"));

// Knowledge extractor
eval(readUtf8File(__CEP_JSX_DIR__ + "/AEKnowledgeExtractorV2.jsx"));

// Project checkpoints
eval(readUtf8File(__CEP_JSX_DIR__ + "/Checkpoints.jsx"));

// Font enumeration
eval(readUtf8File(__CEP_JSX_DIR__ + "/Fonts.jsx"));

// ------------------------------------------------------------------
// Basic initialization
// ------------------------------------------------------------------

aeCheck();
function aeCheck() {
	try{
		var appVersion = parseFloat(app.version);

		if (appVersion < 15){
			alert(config.productName + " is only supported in After Effects CC 2018 (v15.0) and higher.");
			return;
		}

		// Setup user data paths
		if($.os.indexOf("Windows") !== -1){
			var userOS = "WIN";
			appDataPath = Folder.userData.toString() + "/" + config.userDataFolder;
		} else {
			var userOS = "MAC";
			appDataPath = Folder.userData.toString() + "/" + config.userDataFolder;
		}

		// Initialize core functions
		storeCurComp();
		
	}catch(err){
		logError(err);
	}	
}


//global vars
var curReactComp = "";
var appDataPath = "";

// Error logging function - now uses unified Logger (defined in Logger.jsx)
// This function is kept for backwards compatibility but delegates to Logger
function logError(errorMessage) {
	if (typeof Logger !== 'undefined') {
		Logger.error(errorMessage);
	} else {
		// Fallback if Logger isn't loaded yet
		try {
			if (appDataPath !== "") {
                var errorLog = new File(appDataPath + "/" + config.userDataFolder + ".log");
				errorLog.open("a");
				errorLog.writeln(new Date().toString() + ": " + errorMessage);
				errorLog.close();
			}
		} catch (e) {
			$.writeln("CEP Error: " + errorMessage);
		}
	}
}

// Console output function - fallback if not defined elsewhere
if (typeof writeLn === 'undefined') {
	function writeLn(message) {
		try {
			$.writeln(config.productName + ": " + message);
		} catch (e) {
			// Silent fallback
		}
	}
}

// Core functions that CEP panel will call
function storeCurComp() {
	try {
		if (app.project.activeItem !== null) {
			if (app.project.activeItem instanceof CompItem) {
				curReactComp = app.project.activeItem.name;
			}
		}
	} catch (err) {
		logError("Error storing current comp: " + err.toString());
	}
}



function reselectComp() {
	try {
		if (curReactComp !== "") {
			for (var i = 1; i <= app.project.numItems; i++) {
				if (app.project.item(i) instanceof CompItem) {
					if (app.project.item(i).name === curReactComp) {
						app.project.item(i).openInViewer();
						break;
					}
				}
			}
		}
	} catch (err) {
		logError("Error reselecting comp: " + err.toString());
	}
}
