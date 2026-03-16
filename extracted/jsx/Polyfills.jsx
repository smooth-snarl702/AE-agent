/*  Polyfills.jsx  –  ES5 helpers for ExtendScript runtimes.
    --------------------------------------------------------
    This file is the single source of truth for runtime polyfills.
    It is loaded by Main.jsx and injected into run_extendscript executions.
*/

if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        // ES-5 paras: 15.4.4.14
        if (this == null)           throw new TypeError('"this" is null or not defined');

        var t   = Object(this);
        var len = t.length >>> 0;                   // ToUint32
        if (len === 0) return -1;

        var n = +arguments[1] || 0;                 // fromIndex
        if (Math.abs(n) === Infinity) n = 0;

        var k = (n >= 0) ? n : Math.max(len + n, 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) return k;
        }
        return -1;
    };
}

if (typeof Array.isArray !== 'function') {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

if (typeof Array.prototype.includes !== 'function') {
    Array.prototype.includes = function (searchElement /*, fromIndex */) {
        if (this == null) throw new TypeError('"this" is null or not defined');

        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) return false;

        var n = +arguments[1] || 0;
        if (Math.abs(n) === Infinity) n = 0;
        var k = (n >= 0) ? n : Math.max(len + n, 0);

        while (k < len) {
            if (k in o) {
                var current = o[k];
                if (current === searchElement) return true;
                if (current !== current && searchElement !== searchElement) return true; // NaN
            }
            k++;
        }
        return false;
    };
}

if (typeof Array.prototype.forEach !== 'function') {
    Array.prototype.forEach = function (callback /*, thisArg */) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        if (typeof callback !== 'function') throw new TypeError('callback must be a function');

        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments.length > 1 ? arguments[1] : undefined;

        for (var i = 0; i < len; i++) {
            if (i in o) callback.call(thisArg, o[i], i, o);
        }
    };
}

if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function (callback /*, thisArg */) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        if (typeof callback !== 'function') throw new TypeError('callback must be a function');

        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments.length > 1 ? arguments[1] : undefined;
        var out = new Array(len);

        for (var i = 0; i < len; i++) {
            if (i in o) out[i] = callback.call(thisArg, o[i], i, o);
        }
        return out;
    };
}

if (typeof Array.prototype.filter !== 'function') {
    Array.prototype.filter = function (callback /*, thisArg */) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        if (typeof callback !== 'function') throw new TypeError('callback must be a function');

        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments.length > 1 ? arguments[1] : undefined;
        var out = [];

        for (var i = 0; i < len; i++) {
            if (i in o && callback.call(thisArg, o[i], i, o)) out.push(o[i]);
        }
        return out;
    };
}

if (typeof Array.prototype.reduce !== 'function') {
    Array.prototype.reduce = function (callback /*, initialValue */) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        if (typeof callback !== 'function') throw new TypeError('callback must be a function');

        var o = Object(this);
        var len = o.length >>> 0;
        var i = 0;
        var acc;

        if (arguments.length > 1) {
            acc = arguments[1];
        } else {
            while (i < len && !(i in o)) i++;
            if (i >= len) throw new TypeError('reduce of empty array with no initial value');
            acc = o[i++];
        }

        for (; i < len; i++) {
            if (i in o) acc = callback(acc, o[i], i, o);
        }
        return acc;
    };
}

if (typeof Array.prototype.find !== 'function') {
    Array.prototype.find = function (callback /*, thisArg */) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        if (typeof callback !== 'function') throw new TypeError('callback must be a function');

        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments.length > 1 ? arguments[1] : undefined;

        for (var i = 0; i < len; i++) {
            if (i in o) {
                var value = o[i];
                if (callback.call(thisArg, value, i, o)) return value;
            }
        }
        return undefined;
    };
}

if (typeof Object.keys !== 'function') {
    Object.keys = function (obj) {
        if (obj === null || obj === undefined) throw new TypeError('Object.keys called on null or undefined');
        var o = Object(obj);
        var out = [];
        for (var k in o) {
            if (Object.prototype.hasOwnProperty.call(o, k)) out.push(k);
        }
        return out;
    };
}

if (typeof Object.values !== 'function') {
    Object.values = function (obj) {
        var keys = Object.keys(obj);
        var out = [];
        for (var i = 0; i < keys.length; i++) {
            out.push(obj[keys[i]]);
        }
        return out;
    };
}

if (typeof Object.entries !== 'function') {
    Object.entries = function (obj) {
        var keys = Object.keys(obj);
        var out = [];
        for (var i = 0; i < keys.length; i++) {
            out.push([keys[i], obj[keys[i]]]);
        }
        return out;
    };
}
