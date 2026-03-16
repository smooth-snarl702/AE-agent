/**
 * Modal Bridge for JSX – bulletproof toasts for alert()
 * - alert(): fire-and-forget, never blocks, never falls back to native modal
 * - confirm: async round-trip; no native fallbacks (return safe defaults)
 */

// Global stores (ExtendScript globals live on $)
if (typeof $._modalResponses === 'undefined') $._modalResponses = {};
if (typeof $.global._pendingToasts === 'undefined') $.global._pendingToasts = [];
if (typeof $.global._panelReady === 'undefined') $.global._panelReady = false;

/**
 * Internal: dispatch a CEP event
 */
function _dispatch(type, message, title, defaultValue, id) {
    try {
        var e = new CSXSEvent();
        e.type = 'fr-modal';
        // MOD v1|id=...|type=...|message=...|title=...|default=...
        function enc(v){ try { return encodeURIComponent(String(v||'')); } catch(_){ return String(v||''); } }
        var payload = 'MOD v1'
            + '|id=' + enc(id||'')
            + '|type=' + enc(type||'')
            + '|message=' + enc(message||'')
            + '|title=' + enc(title||'')
            + '|default=' + enc(defaultValue||'');
        e.data = payload;
        e.dispatch();
    } catch (err) {
        // Never surface as modal; log only
        try { $.writeln('Modal dispatch error: ' + err.toString()); } catch (_) {}
    }
}

/**
 * Flush any queued toasts (called by panel once ready; safe to call multiple times)
 */
function _flushToasts() {
    try {
        var q = $.global._pendingToasts || [];
        if (!q.length) return;
        for (var i = 0; i < q.length; i++) {
            var t = q[i];
            _dispatch('alert', t.message, t.title || 'Alert');
        }
        $.global._pendingToasts = [];
    } catch (err) {
        try { $.writeln('Modal flush error: ' + err.toString()); } catch (_) {}
    }
}
$.global._flushToasts = _flushToasts; // expose for panel call-in

/**
 * ALERT: fire-and-forget toast. Never blocks. Never falls back to native.
 */
function modalAlert(message, title) {
    try {
        // Queue so early alerts are not lost before panel is ready
        ($.global._pendingToasts = $.global._pendingToasts || []).push({ message: String(message), title: title || 'Alert' });
        if ($.global._panelReady === true) {
            _flushToasts();
        }
    } catch (_) {}
    return true; // mimic native alert return but never show modal
}

/**
 * CONFIRM: async round-trip, no modal fallbacks
 */
function generateModalId() {
    return 'modal_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
}

function _requestWithResponse(type, message, title, defaultValue) {
    var id = generateModalId();
    try {
        _dispatch(type, message, title, defaultValue, id);

        // Wait up to 8s for a response, then return safe default (no modal)
        var attempts = 0, maxAttempts = 80; // 80 * 100ms = 8s
        while (!$._modalResponses.hasOwnProperty(id) && attempts < maxAttempts) {
            $.sleep(100);
            attempts++;
        }

        var has = $._modalResponses.hasOwnProperty(id);
        var result = has ? $._modalResponses[id] : null;
        if (has) delete $._modalResponses[id];

        if (type === 'confirm') return result === true;
        return result;
    } catch (err) {
        try { $.writeln('Modal confirm error: ' + err.toString()); } catch (_) {}
        if (type === 'confirm') return false;
        return null;
    }
}

function modalConfirm(message, title) {
    return _requestWithResponse('confirm', message, title || 'Confirm');
}

// Initialize (no-op placeholder for parity)
function setupModalResponseListener() {
    try { $.writeln('Modal bridge initialized'); } catch (_) {}
}
setupModalResponseListener();

// Replace native functions globally
var nativeAlert = alert;
var nativeConfirm = confirm;

alert   = modalAlert;
confirm = modalConfirm;
