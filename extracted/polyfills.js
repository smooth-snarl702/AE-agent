// Ensure Array.prototype.at, String.prototype.at, and TypedArray.prototype.at exist
// Non-enumerable, spec-like behavior sufficient for CEP Chromium gaps.
(function(){
  function defineAt(proto){
    if (!proto || Object.prototype.hasOwnProperty.call(proto, 'at')) return;
    try {
      Object.defineProperty(proto, 'at', {
        value: function(index){
          var len = this.length >>> 0;
          var k = Number(index) || 0;
          if (k < 0) k = len + k;
          if (k < 0 || k >= len) return undefined;
          return this[k];
        },
        writable: true,
        configurable: true
      });
    } catch (_) {
      // Silently ignore if definition is blocked
    }
  }

  // Array
  defineAt(Array.prototype);

  // TypedArrays
  if (typeof Object.getOwnPropertyNames === 'function') {
    try {
      Object.getOwnPropertyNames(self)
        .filter(function(n){ return /^(?:Int|Uint|Float)(?:8|16|32|64)?Array$/.test(n) && typeof self[n] === 'function'; })
        .forEach(function(n){ defineAt(self[n] && self[n].prototype); });
    } catch (_) { /* no-op */ }
  }

  // String.at must be Unicode‑aware; fall back to charAt for CEP safety
  if (!String.prototype.at) {
    try {
      Object.defineProperty(String.prototype, 'at', {
        value: function(index){
          var str = String(this);
          var len = str.length >>> 0;
          var k = Number(index) || 0;
          if (k < 0) k = len + k;
          if (k < 0 || k >= len) return undefined;
          // Basic BMP-safe; CEP engines lacking at also often lack full Unicode segs
          return str.charAt(k);
        },
        writable: true,
        configurable: true
      });
    } catch (_) { /* no-op */ }
  }
})();

