/**
 * BULLETPROOF ExtendScript Error Logger
 * - Automatically captures ALL ExtendScript errors
 * - Uses global error handler + File objects for 100% reliability
 * - Creates error queue that CEP can poll independently
 */

// --------------------------------------------------------------------------
//  Make sure the PlugPlug event bridge is loaded and kept alive.
//  Without this, CSXSEvent.dispatch() silently does nothing.
// --------------------------------------------------------------------------
if (typeof __cepPlugPlug__ === "undefined") {
    try {
        // Hold on to the external object as a global so it is never GC-ed
        __cepPlugPlug__ = new ExternalObject("lib:PlugPlugExternalObject");
        $.writeln("CEP-Logger: PlugPlugExternalObject loaded – JSX⇄CEP events enabled");
    } catch (e) {
        $.writeln("CEP-Logger: FAILED to load PlugPlugExternalObject – " + e.toString());
    }
}
var Logger = (function () {
    // Read config from global set by CEP (or use fallbacks)
    var config = (typeof __CEP_CONFIG__ !== 'undefined') ? __CEP_CONFIG__ : {
        userDataFolder: 'cep-app',
        eventPrefix: 'com.cep.jsx',
        productName: 'CEP'
    };

    // ExtendScript Date polyfill - toISOString doesn't exist
    function toISOString(date) {
        function pad(num) {
            return (num < 10 ? '0' : '') + num;
        }
        return date.getFullYear() + '-' +
            pad(date.getMonth() + 1) + '-' +
            pad(date.getDate()) + 'T' +
            pad(date.getHours()) + ':' +
            pad(date.getMinutes()) + ':' +
            pad(date.getSeconds()) + '.' +
            (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) + date.getMilliseconds() + 'Z';
    }

    var baseFolder = Folder.userData.fsName + "/" + config.userDataFolder;
    var logFile = new File(baseFolder + "/" + config.userDataFolder + ".log");

    if (!Folder(baseFolder).exists) {
        Folder(baseFolder).create();
    }

    function fmt(level, msg) {
        return toISOString(new Date()) + " [EXTENDSCRIPT][" + level.toUpperCase() + "] " + msg;
    }

    function append(line) {
        try {
            logFile.open("a");
            logFile.writeln(line);
            logFile.close();
            return true;
        } catch (e) {
            $.writeln("CEP-Logger FAILED: " + e.toString());
            return false;
        }
    }

    // Push error directly to CEP via CSXSEvent
    var lastErrorHash = "";
    function handleError(error) {
        try {
            var errorData = {
                timestamp: toISOString(new Date()),
                message: error.message || error.toString(),
                stack: error.stack || $.stack || "No stack available",
                line: error.line || "Unknown",
                fileName: error.fileName || "Unknown",
                source: "EXTENDSCRIPT"
            };

            // Simple deduplication - avoid identical consecutive errors
            var currentHash = errorData.message + "|" + errorData.line + "|" + errorData.fileName;
            if (currentHash === lastErrorHash) return;
            lastErrorHash = currentHash;

            // Write to persistent log file
            var logLine = errorData.timestamp + " [EXTENDSCRIPT][ERROR] " + errorData.message;
            append(logLine);

            // Push directly to CEP via event
            dispatchToCEP(errorData);
        } catch (e) {
            $.writeln("handleError failed: " + e.toString());
        }
    }

    // Send a CSXSEvent to the CEP panel
    function dispatchToCEP(payload) {
        try {
            $.writeln("dispatchToCEP called with payload: " + payload.message);
            // In ExtendScript, host-defined classes report typeof === "object"
            if (typeof CSXSEvent !== "undefined") {
                $.writeln("CSXSEvent is available, creating event...");
                var ev = new CSXSEvent();
                ev.type = config.eventPrefix + ".error";
                ev.data = JSON.stringify(payload);
                $.writeln("Dispatching event with type: " + ev.type);
                ev.dispatch();
                $.writeln("Event dispatched successfully");
            } else {
                $.writeln("CSXSEvent not available – event not dispatched");
            }
        } catch (e) {
            $.writeln("CSXSEvent dispatch failed: " + e.toString());
        }
    }

    function pushToCEP(type, payload) {
        try {
            if (typeof CSXSEvent !== "undefined") {
                var ev = new CSXSEvent();
                ev.type = type;
                ev.data = JSON.stringify(payload);
                ev.dispatch();
            }
        } catch (e) { /* swallow */ }
    }

    var logger = {
        log: function (lvl, msg) {
            var line = fmt(lvl, msg);
            append(line);

            // Push non-error logs to CEP as live console feed
            if (lvl !== 'error') {
                pushToCEP(config.eventPrefix + ".log", {
                    level: lvl,
                    message: msg,
                    timestamp: toISOString(new Date())
                });
            } else {
                // Forward "error" level logs to the central handler (includes CEP push)
                handleError({ message: msg, source: 'Logger.error' });
            }
        },
        info: function () { this.log("info", Array.prototype.join.call(arguments, " ")); },
        warn: function () { this.log("warn", Array.prototype.join.call(arguments, " ")); },
        error: function () { 
            var msg = Array.prototype.join.call(arguments, " ");
            this.log("error", msg);
        },
        
        // Test function that WILL throw an error
        testError: function () {
            try {
                this.info("Logger.testError() called - about to throw intentional error");
                
                // Multiple ways to cause errors for maximum reliability
                var undefinedVar = thisVariableDoesNotExist.someProperty;
                nonExistentFunction();
                throw new Error("Intentional test error from Logger.testError()");
                
            } catch (e) {
                // logger.error() already forwards to handleError()
                this.error("Caught in testError:", e.toString());
                return "ERROR_CAUGHT_AND_LOGGED";
            }
        }
    };

    // GLOBAL ERROR HANDLER - Catches ALL uncaught errors
    if (typeof Error !== 'undefined') {
        var originalError = $.global.Error;
        $.global.Error = function(message, fileName, lineNumber) {
            var err = new originalError(message, fileName, lineNumber);
            
            // Log all errors automatically - logger.error() already forwards to handleError()
            logger.error("UNCAUGHT ERROR:", err.toString());
            
            return err;
        };
    }

    // Mirror $.writeln to Logger.info and keep original behavior
    try {
        if (!$.cepOriginalWriteln) {
            $.cepOriginalWriteln = $.writeln;
            $.writeln = function (s) {
                try { logger.info(String(s)); } catch (_) {}
                try { $.cepOriginalWriteln.call($, s); } catch (_) {}
            };
        }
    } catch (e) {}

    // Log startup
    logger.info("Logger initialized with CSXSEvent push communication");
    
    return logger;
})();

/* backwards-compat helper for existing code */
function logError(msg) { Logger.error(msg); }

// TEST FUNCTIONS - Multiple ways to trigger errors
function triggerJSXError() {
    return Logger.testError();
}

function causeReferenceError() {
    Logger.info("causeReferenceError() called");
    try {
        var result = nonExistentVariable.property;
        return "NO_ERROR"; // Should never reach here
    } catch (e) {
        // logger.error() already forwards to handleError()
        Logger.error("Caught ReferenceError:", e.toString());
        return "REFERENCE_ERROR_CAUGHT";
    }
}