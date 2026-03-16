var la = Object.defineProperty;
var Oo = (z) => {
  throw TypeError(z);
};
var ca = (z, M, R) => (M in z ? la(z, M, { enumerable: !0, configurable: !0, writable: !0, value: R }) : (z[M] = R));
var hr = (z, M, R) => ca(z, typeof M != "symbol" ? M + "" : M, R),
  we = (z, M, R) => M.has(z) || Oo("Cannot " + R);
var c = (z, M, R) => (we(z, M, "read from private field"), R ? R.call(z) : M.get(z)),
  m = (z, M, R) =>
    M.has(z) ? Oo("Cannot add the same private member more than once") : M instanceof WeakSet ? M.add(z) : M.set(z, R),
  h = (z, M, R, Mt) => (we(z, M, "write to private field"), Mt ? Mt.call(z, R) : M.set(z, R), R),
  I = (z, M, R) => (we(z, M, "access private method"), R);
(function () {
  "use strict";
  var Mo,
    at,
    it,
    Vr,
    st,
    Et,
    St,
    Xr,
    yr,
    lt,
    K,
    me,
    ye,
    xe,
    No,
    nr,
    ge,
    br,
    Kr,
    H,
    gr,
    W,
    ur,
    xr,
    Wr,
    Pr,
    ct,
    ft,
    ut,
    _r,
    jt,
    C,
    fa,
    ua,
    da,
    _e,
    qt,
    Bt,
    ke,
    Ro,
    dr,
    vr,
    G,
    Gr,
    zt,
    Tt,
    Yt;
  var z = document.createElement("style");
  ((z.textContent =
    "@font-face{font-family:SUSE;src:url(" +
    new URL(
      "../fonts/SUSE-Variable.ttf",
      (document.currentScript &&
        document.currentScript.tagName.toUpperCase() === "SCRIPT" &&
        document.currentScript.src) ||
        document.baseURI,
    ).href +
    ') format("truetype");font-weight:100 900;font-style:normal;font-display:swap}@font-face{font-family:SUSE Mono;src:url(' +
    new URL(
      "../fonts/SUSEMono-Regular.woff2",
      (document.currentScript &&
        document.currentScript.tagName.toUpperCase() === "SCRIPT" &&
        document.currentScript.src) ||
        document.baseURI,
    ).href +
    `) format("woff2");font-weight:400;font-style:normal;font-display:swap}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-suse),-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--font-suse-mono),Monaco,Consolas,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}*{box-sizing:border-box;outline:none!important}*:focus,*:focus-visible{outline:none!important}::-webkit-scrollbar{width:var(--scrollbar-width)}::-webkit-scrollbar-track{background:var(--color-scroll-track)}::-webkit-scrollbar-thumb{background-color:var(--color-scroll-thumb);border:2px solid transparent;background-clip:padding-box;border-radius:6px}::-webkit-scrollbar-thumb:hover{background-color:var(--color-scroll-thumb);filter:brightness(1.1)}body{margin:0;height:100vh;width:100vw;overflow:hidden;--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-base-rgb, 42 42 42) / var(--tw-bg-opacity, 1));padding:0;font-family:var(--font-suse),-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;font-size:15px;--tw-text-opacity: 1;color:rgb(var(--color-ink-primary-rgb, 224 224 224) / var(--tw-text-opacity, 1));-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}html,body{max-width:100%;overflow:hidden}button:not(:disabled),button:not(:disabled) *,[role=button]:not(:disabled),[role=button]:not(:disabled) *,input[type=button]:not(:disabled),input[type=button]:not(:disabled) *,input[type=submit]:not(:disabled),input[type=submit]:not(:disabled) *,input[type=reset]:not(:disabled),input[type=reset]:not(:disabled) *,a[href],a[href] *,select:not(:disabled),select:not(:disabled) *,.cursor-pointer,.cursor-pointer *{cursor:pointer!important}button:disabled,button:disabled *,[role=button]:disabled,[role=button]:disabled *,input:disabled,input:disabled *,select:disabled,select:disabled *,.cursor-not-allowed,.cursor-not-allowed *{cursor:not-allowed!important}*{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none}input,textarea,pre,.message-shell{-webkit-user-select:text;-moz-user-select:text;user-select:text}:root{--font-suse: "SUSE", -apple-system, BlinkMacSystemFont, sans-serif;--font-suse-mono: "SUSE Mono", Monaco, Consolas, monospace;--scrollbar-width: 10px;--scrollbar-gap: 4px;--scrollbar-gutter: calc(var(--scrollbar-width) + var(--scrollbar-gap));color-scheme:dark;--color-surface-base: #2a2a2a;--color-surface-base-rgb: 42 42 42;--color-surface-sunken: #1e1e1e;--color-surface-sunken-rgb: 30 30 30;--color-surface-deep: #161616;--color-surface-deep-rgb: 22 22 22;--color-surface-subtle: #323232;--color-surface-subtle-rgb: 50 50 50;--color-surface-raised: #3a3a3a;--color-surface-raised-rgb: 58 58 58;--color-surface-overlay: #404040;--color-surface-overlay-rgb: 64 64 64;--color-surface-active: #3b2626;--color-surface-active-rgb: 59 38 38;--color-surface-accent: #442c2c;--color-surface-accent-rgb: 68 44 44;--color-stroke-subtle: #404040;--color-stroke-subtle-rgb: 64 64 64;--color-stroke-strong: #555555;--color-stroke-strong-rgb: 85 85 85;--color-stroke-focus: #e61010;--color-stroke-focus-rgb: 230 16 16;--color-ink-primary: #e0e0e0;--color-ink-primary-rgb: 224 224 224;--color-ink-emphasis: #f2f2f2;--color-ink-emphasis-rgb: 242 242 242;--color-ink-secondary: #b5b5b5;--color-ink-secondary-rgb: 181 181 181;--color-ink-muted: #888888;--color-ink-muted-rgb: 136 136 136;--color-ink-soft: #6b6b6b;--color-ink-soft-rgb: 107 107 107;--color-ink-inverse: #111111;--color-ink-inverse-rgb: 17 17 17;--color-ink-on-accent: #f5f5f5;--color-ink-on-accent-rgb: 245 245 245;--color-accent-primary: #e61010;--color-accent-primary-rgb: 230 16 16;--color-accent-hover: #ff1f1f;--color-accent-hover-rgb: 255 31 31;--color-accent-subtle: #4a2222;--color-accent-subtle-rgb: 74 34 34;--color-state-positive: #4ade80;--color-state-positive-rgb: 74 222 128;--color-state-warning: #fbbf24;--color-state-warning-rgb: 251 191 36;--color-state-danger: #f87171;--color-state-danger-rgb: 248 113 113;--color-scrim-strong: rgba(0, 0, 0, .6);--color-scrim-soft: rgba(0, 0, 0, .4);--color-focus-ring: rgba(230, 16, 16, .35);--color-scroll-thumb: #5c5c5c;--color-scroll-thumb-rgb: 92 92 92;--color-scroll-track: #2a2a2a;--color-scroll-track-rgb: 42 42 42;--color-btn-primary-bg: #ffffff;--color-btn-primary-bg-hover: #f0f0f0;--color-btn-primary-text: #0a0a0a;--color-diff-add-bg: #166534;--color-diff-remove-bg: #991b1b;--color-diff-text: #f3f4f6;--color-tint-soft: rgba(255, 255, 255, .08);--color-tint-medium: rgba(255, 255, 255, .15);--color-tint-strong: rgba(255, 255, 255, .25)}:root[data-theme=light]{color-scheme:light;--color-surface-base: #f5f5f5;--color-surface-base-rgb: 245 245 245;--color-surface-sunken: #ebebeb;--color-surface-sunken-rgb: 235 235 235;--color-surface-deep: #dcdcdc;--color-surface-deep-rgb: 220 220 220;--color-surface-subtle: #f0f0f0;--color-surface-subtle-rgb: 240 240 240;--color-surface-raised: #ffffff;--color-surface-raised-rgb: 255 255 255;--color-surface-overlay: #ffffff;--color-surface-overlay-rgb: 255 255 255;--color-surface-active: #ffeaea;--color-surface-active-rgb: 255 234 234;--color-surface-accent: #d89090;--color-surface-accent-rgb: 216 144 144;--color-stroke-subtle: #d7d7d7;--color-stroke-subtle-rgb: 215 215 215;--color-stroke-strong: #bbbbbb;--color-stroke-strong-rgb: 187 187 187;--color-stroke-focus: #d82a2a;--color-stroke-focus-rgb: 216 42 42;--color-ink-primary: #1e1e1e;--color-ink-primary-rgb: 30 30 30;--color-ink-emphasis: #0a0a0a;--color-ink-emphasis-rgb: 10 10 10;--color-ink-secondary: #4a4a4a;--color-ink-secondary-rgb: 74 74 74;--color-ink-muted: #737373;--color-ink-muted-rgb: 115 115 115;--color-ink-soft: #8f8f8f;--color-ink-soft-rgb: 143 143 143;--color-ink-inverse: #ffffff;--color-ink-inverse-rgb: 255 255 255;--color-ink-on-accent: #ffffff;--color-ink-on-accent-rgb: 255 255 255;--color-accent-primary: #d82a2a;--color-accent-primary-rgb: 216 42 42;--color-accent-hover: #b92121;--color-accent-hover-rgb: 185 33 33;--color-accent-subtle: #e8b8b8;--color-accent-subtle-rgb: 232 184 184;--color-state-positive: #22c55e;--color-state-positive-rgb: 34 197 94;--color-state-warning: #f59e0b;--color-state-warning-rgb: 245 158 11;--color-state-danger: #ef4444;--color-state-danger-rgb: 239 68 68;--color-scrim-strong: rgba(0, 0, 0, .45);--color-scrim-soft: rgba(0, 0, 0, .18);--color-focus-ring: rgba(216, 42, 42, .35);--color-scroll-thumb: #c1c1c1;--color-scroll-thumb-rgb: 193 193 193;--color-scroll-track: #f0f0f0;--color-scroll-track-rgb: 240 240 240;--color-btn-primary-bg: #000000;--color-btn-primary-bg-hover: #1a1a1a;--color-btn-primary-text: #ffffff;--color-diff-add-bg: #dcfce7;--color-diff-remove-bg: #fee2e2;--color-diff-text: #1e1e1e;--color-tint-soft: rgba(0, 0, 0, .06);--color-tint-medium: rgba(0, 0, 0, .1);--color-tint-strong: rgba(0, 0, 0, .18)}:root[data-theme=medium]{color-scheme:dark}:root[data-theme=dark]{color-scheme:dark;--color-surface-base: #1d1d1d;--color-surface-base-rgb: 29 29 29;--color-surface-sunken: #141414;--color-surface-sunken-rgb: 20 20 20;--color-surface-deep: #0d0d0d;--color-surface-deep-rgb: 13 13 13;--color-surface-subtle: #232323;--color-surface-subtle-rgb: 35 35 35;--color-surface-raised: #2b2b2b;--color-surface-raised-rgb: 43 43 43;--color-surface-overlay: #333333;--color-surface-overlay-rgb: 51 51 51;--color-surface-active: #371f1f;--color-surface-active-rgb: 55 31 31;--color-surface-accent: #402424;--color-surface-accent-rgb: 64 36 36;--color-stroke-subtle: #323232;--color-stroke-subtle-rgb: 50 50 50;--color-stroke-strong: #484848;--color-stroke-strong-rgb: 72 72 72;--color-stroke-focus: #e61010;--color-stroke-focus-rgb: 230 16 16;--color-ink-primary: #dedede;--color-ink-primary-rgb: 222 222 222;--color-ink-emphasis: #f5f5f5;--color-ink-emphasis-rgb: 245 245 245;--color-ink-secondary: #b8b8b8;--color-ink-secondary-rgb: 184 184 184;--color-ink-muted: #8a8a8a;--color-ink-muted-rgb: 138 138 138;--color-ink-soft: #6f6f6f;--color-ink-soft-rgb: 111 111 111;--color-ink-inverse: #0f0f0f;--color-ink-inverse-rgb: 15 15 15;--color-ink-on-accent: #f4f4f4;--color-ink-on-accent-rgb: 244 244 244;--color-accent-primary: #ff4444;--color-accent-primary-rgb: 255 68 68;--color-accent-hover: #ff6666;--color-accent-hover-rgb: 255 102 102;--color-accent-subtle: #442525;--color-accent-subtle-rgb: 68 37 37;--color-state-positive: #4ade80;--color-state-positive-rgb: 74 222 128;--color-state-warning: #fbbf24;--color-state-warning-rgb: 251 191 36;--color-state-danger: #f87171;--color-state-danger-rgb: 248 113 113;--color-scrim-strong: rgba(0, 0, 0, .65);--color-scrim-soft: rgba(0, 0, 0, .45);--color-focus-ring: rgba(230, 16, 16, .35);--color-scroll-thumb: #505050;--color-scroll-thumb-rgb: 80 80 80;--color-scroll-track: #1e1e1e;--color-scroll-track-rgb: 30 30 30;--color-btn-primary-bg: #ffffff;--color-btn-primary-bg-hover: #ebebeb;--color-btn-primary-text: #0a0a0a;--color-diff-add-bg: #14532d;--color-diff-remove-bg: #7f1d1d;--color-diff-text: #f3f4f6;--color-tint-soft: rgba(255, 255, 255, .09);--color-tint-medium: rgba(255, 255, 255, .16);--color-tint-strong: rgba(255, 255, 255, .28)}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.overflow-y-auto{overflow-x:hidden}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.\\!visible{visibility:visible!important}.visible{visibility:visible}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-0{bottom:0}.bottom-4{bottom:1rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1\\.5{left:.375rem}.left-1\\/2{left:50%}.left-3{left:.75rem}.right-0{right:0}.right-1{right:.25rem}.right-3{right:.75rem}.right-4{right:1rem}.top-0{top:0}.top-1\\/2{top:50%}.top-4{top:1rem}.top-full{top:100%}.isolate{isolation:isolate}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.z-\\[60\\]{z-index:60}.z-\\[90\\]{z-index:90}.z-\\[95\\]{z-index:95}.m-0{margin:0}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-auto{margin-top:auto;margin-bottom:auto}.mb-0\\.5{margin-bottom:.125rem}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.ml-3{margin-left:.75rem}.ml-auto{margin-left:auto}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.\\!block{display:block!important}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.inline-grid{display:inline-grid}.contents{display:contents}.list-item{display:list-item}.\\!hidden{display:none!important}.hidden{display:none}.h-1{height:.25rem}.h-10{height:2.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[80vh\\]{height:80vh}.h-full{height:100%}.h-screen{height:100vh}.max-h-64{max-height:16rem}.max-h-full{max-height:100%}.min-h-0{min-height:0px}.min-h-\\[280px\\]{min-height:280px}.min-h-\\[32px\\]{min-height:32px}.min-h-\\[40px\\]{min-height:40px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-16{width:4rem}.w-2{width:.5rem}.w-24{width:6rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[30rem\\]{width:30rem}.w-\\[420px\\]{width:420px}.w-\\[90vw\\]{width:90vw}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-14{min-width:3.5rem}.min-w-\\[72px\\]{min-width:72px}.min-w-full{min-width:100%}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-5xl{max-width:64rem}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[90vw\\]{max-width:90vw}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.select-text{-webkit-user-select:text;-moz-user-select:text;user-select:text}.select-all{-webkit-user-select:all;-moz-user-select:all;user-select:all}.resize-none{resize:none}.resize{resize:both}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\]{grid-template-columns:minmax(0,1fr) auto}.grid-cols-\\[minmax\\(0\\,2fr\\)_minmax\\(0\\,1fr\\)\\]{grid-template-columns:minmax(0,2fr) minmax(0,1fr)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-2\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.625rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.625rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-t{border-top-width:1px}.border-none{border-style:none}.\\!border-accent-primary{--tw-border-opacity: 1 !important;border-color:rgb(var(--color-accent-primary-rgb, 230 16 16) / var(--tw-border-opacity, 1))!important}.border-accent-primary\\/40{border-color:rgb(var(--color-accent-primary-rgb, 230 16 16) / .4)}.border-amber-300\\/80{border-color:#fcd34dcc}.border-amber-400\\/30{border-color:#fbbf244d}.border-amber-400\\/60{border-color:#fbbf2499}.border-btn-primary-bg{border-color:var(--color-btn-primary-bg)}.border-emerald-300\\/80{border-color:#6ee7b7cc}.border-emerald-400\\/60{border-color:#34d39999}.border-green-400\\/30{border-color:#4ade804d}.border-orange-300\\/80{border-color:#fdba74cc}.border-orange-400\\/60{border-color:#fb923c99}.border-purple-400\\/30{border-color:#c084fc4d}.border-red-300\\/80{border-color:#fca5a5cc}.border-red-400\\/30{border-color:#f871714d}.border-red-400\\/60{border-color:#f8717199}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.border-sky-300\\/80{border-color:#7dd3fccc}.border-sky-400\\/30{border-color:#38bdf84d}.border-sky-400\\/60{border-color:#38bdf899}.border-slate-300\\/80{border-color:#cbd5e1cc}.border-slate-400\\/60{border-color:#94a3b899}.border-state-danger\\/30{border-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .3)}.border-state-danger\\/40{border-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .4)}.border-state-positive\\/40{border-color:rgb(var(--color-state-positive-rgb, 74 222 128) / .4)}.border-state-warning\\/40{border-color:rgb(var(--color-state-warning-rgb, 251 191 36) / .4)}.border-stroke-strong{--tw-border-opacity: 1;border-color:rgb(var(--color-stroke-strong-rgb, 85 85 85) / var(--tw-border-opacity, 1))}.border-stroke-subtle{--tw-border-opacity: 1;border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / var(--tw-border-opacity, 1))}.border-stroke-subtle\\/40{border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / .4)}.border-stroke-subtle\\/50{border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / .5)}.border-stroke-subtle\\/60{border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / .6)}.border-transparent{border-color:transparent}.border-violet-300\\/80{border-color:#c4b5fdcc}.border-violet-400\\/60{border-color:#a78bfa99}.bg-accent-primary\\/10{background-color:rgb(var(--color-accent-primary-rgb, 230 16 16) / .1)}.bg-amber-200\\/90{background-color:#fde68ae6}.bg-amber-500\\/10{background-color:#f59e0b1a}.bg-amber-500\\/20{background-color:#f59e0b33}.bg-btn-primary-bg{background-color:var(--color-btn-primary-bg)}.bg-emerald-200\\/90{background-color:#a7f3d0e6}.bg-emerald-500\\/20{background-color:#10b98133}.bg-green-500\\/10{background-color:#22c55e1a}.bg-orange-200\\/90{background-color:#fed7aae6}.bg-orange-500\\/20{background-color:#f9731633}.bg-purple-500\\/10{background-color:#a855f71a}.bg-red-200\\/90{background-color:#fecacae6}.bg-red-500\\/10{background-color:#ef44441a}.bg-red-500\\/20{background-color:#ef444433}.bg-scrim-soft{background-color:var(--color-scrim-soft)}.bg-scrim-strong{background-color:var(--color-scrim-strong)}.bg-sky-200\\/90{background-color:#bae6fde6}.bg-sky-500\\/10{background-color:#0ea5e91a}.bg-sky-500\\/20{background-color:#0ea5e933}.bg-slate-200\\/90{background-color:#e2e8f0e6}.bg-slate-500\\/20{background-color:#64748b33}.bg-state-danger{--tw-bg-opacity: 1;background-color:rgb(var(--color-state-danger-rgb, 248 113 113) / var(--tw-bg-opacity, 1))}.bg-state-danger\\/10{background-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .1)}.bg-state-positive{--tw-bg-opacity: 1;background-color:rgb(var(--color-state-positive-rgb, 74 222 128) / var(--tw-bg-opacity, 1))}.bg-state-positive\\/10{background-color:rgb(var(--color-state-positive-rgb, 74 222 128) / .1)}.bg-state-warning\\/10{background-color:rgb(var(--color-state-warning-rgb, 251 191 36) / .1)}.bg-state-warning\\/20{background-color:rgb(var(--color-state-warning-rgb, 251 191 36) / .2)}.bg-surface-base{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-base-rgb, 42 42 42) / var(--tw-bg-opacity, 1))}.bg-surface-deep{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-deep-rgb, 22 22 22) / var(--tw-bg-opacity, 1))}.bg-surface-raised{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-raised-rgb, 58 58 58) / var(--tw-bg-opacity, 1))}.bg-surface-raised\\/30{background-color:rgb(var(--color-surface-raised-rgb, 58 58 58) / .3)}.bg-surface-subtle{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / var(--tw-bg-opacity, 1))}.bg-surface-subtle\\/10{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .1)}.bg-surface-subtle\\/20{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .2)}.bg-surface-subtle\\/30{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .3)}.bg-surface-subtle\\/35{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .35)}.bg-surface-subtle\\/40{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .4)}.bg-surface-subtle\\/60{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .6)}.bg-surface-sunken{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-sunken-rgb, 30 30 30) / var(--tw-bg-opacity, 1))}.bg-surface-sunken\\/40{background-color:rgb(var(--color-surface-sunken-rgb, 30 30 30) / .4)}.bg-transparent{background-color:transparent}.bg-violet-200\\/90{background-color:#ddd6fee6}.bg-violet-500\\/20{background-color:#8b5cf633}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-12{padding-left:3rem;padding-right:3rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pl-5{padding-left:1.25rem}.pl-9{padding-left:2.25rem}.pr-3{padding-right:.75rem}.pr-9{padding-right:2.25rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-ae{font-family:var(--font-suse),-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif}.font-mono{font-family:var(--font-suse-mono),Monaco,Consolas,monospace}.font-sans{font-family:var(--font-suse),-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[9px\\]{font-size:9px}.text-ae-base{font-size:15px}.text-ae-sm{font-size:14px}.text-ae-xs{font-size:12px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.\\!ordinal{--tw-ordinal: ordinal !important;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)!important}.ordinal{--tw-ordinal: ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-accent-primary{--tw-text-opacity: 1;color:rgb(var(--color-accent-primary-rgb, 230 16 16) / var(--tw-text-opacity, 1))}.text-accent-primary\\/70{color:rgb(var(--color-accent-primary-rgb, 230 16 16) / .7)}.text-amber-200{--tw-text-opacity: 1;color:rgb(253 230 138 / var(--tw-text-opacity, 1))}.text-amber-300{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity, 1))}.text-amber-800{--tw-text-opacity: 1;color:rgb(146 64 14 / var(--tw-text-opacity, 1))}.text-btn-primary-text{color:var(--color-btn-primary-text)}.text-emerald-200{--tw-text-opacity: 1;color:rgb(167 243 208 / var(--tw-text-opacity, 1))}.text-emerald-800{--tw-text-opacity: 1;color:rgb(6 95 70 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-ink-emphasis{--tw-text-opacity: 1;color:rgb(var(--color-ink-emphasis-rgb, 242 242 242) / var(--tw-text-opacity, 1))}.text-ink-muted{--tw-text-opacity: 1;color:rgb(var(--color-ink-muted-rgb, 136 136 136) / var(--tw-text-opacity, 1))}.text-ink-muted\\/50{color:rgb(var(--color-ink-muted-rgb, 136 136 136) / .5)}.text-ink-muted\\/70{color:rgb(var(--color-ink-muted-rgb, 136 136 136) / .7)}.text-ink-primary{--tw-text-opacity: 1;color:rgb(var(--color-ink-primary-rgb, 224 224 224) / var(--tw-text-opacity, 1))}.text-ink-secondary{--tw-text-opacity: 1;color:rgb(var(--color-ink-secondary-rgb, 181 181 181) / var(--tw-text-opacity, 1))}.text-ink-soft{--tw-text-opacity: 1;color:rgb(var(--color-ink-soft-rgb, 107 107 107) / var(--tw-text-opacity, 1))}.text-orange-200{--tw-text-opacity: 1;color:rgb(254 215 170 / var(--tw-text-opacity, 1))}.text-orange-500{--tw-text-opacity: 1;color:rgb(249 115 22 / var(--tw-text-opacity, 1))}.text-orange-800{--tw-text-opacity: 1;color:rgb(154 52 18 / var(--tw-text-opacity, 1))}.text-purple-300{--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity, 1))}.text-red-200{--tw-text-opacity: 1;color:rgb(254 202 202 / var(--tw-text-opacity, 1))}.text-red-300{--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-sky-200{--tw-text-opacity: 1;color:rgb(186 230 253 / var(--tw-text-opacity, 1))}.text-sky-300{--tw-text-opacity: 1;color:rgb(125 211 252 / var(--tw-text-opacity, 1))}.text-sky-800{--tw-text-opacity: 1;color:rgb(7 89 133 / var(--tw-text-opacity, 1))}.text-slate-200{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-800{--tw-text-opacity: 1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.text-state-danger{--tw-text-opacity: 1;color:rgb(var(--color-state-danger-rgb, 248 113 113) / var(--tw-text-opacity, 1))}.text-state-positive{--tw-text-opacity: 1;color:rgb(var(--color-state-positive-rgb, 74 222 128) / var(--tw-text-opacity, 1))}.text-state-warning{--tw-text-opacity: 1;color:rgb(var(--color-state-warning-rgb, 251 191 36) / var(--tw-text-opacity, 1))}.text-violet-200{--tw-text-opacity: 1;color:rgb(221 214 254 / var(--tw-text-opacity, 1))}.text-violet-800{--tw-text-opacity: 1;color:rgb(91 33 182 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.accent-accent-primary{accent-color:rgb(var(--color-accent-primary-rgb, 230 16 16))}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-surface-md{--tw-shadow: 0 1px 3px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.15);--tw-shadow-colored: 0 1px 3px var(--tw-shadow-color), 0 4px 12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-surface-md-light{--tw-shadow: 0 1px 2px rgba(0,0,0,.08), 0 3px 10px rgba(0,0,0,.1);--tw-shadow-colored: 0 1px 2px var(--tw-shadow-color), 0 3px 10px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow{--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.theme-card{background:var(--color-surface-raised);border-color:var(--color-stroke-subtle)}@keyframes pulse-subtle{0%,to{opacity:1}50%{opacity:.8}}.animate-pulse-subtle{animation:pulse-subtle 2s cubic-bezier(.4,0,.6,1) infinite}.\\[x\\:\\\\\\/\\]{x:\\/}.cep-resize-handler{will-change:transform;backface-visibility:hidden;transform:translateZ(0)}.disabled\\:cursor-not-allowed:disabled,.disabled\\:cursor-not-allowed:disabled *{cursor:not-allowed!important}.placeholder\\:text-ink-muted::-moz-placeholder{--tw-text-opacity: 1;color:rgb(var(--color-ink-muted-rgb, 136 136 136) / var(--tw-text-opacity, 1))}.placeholder\\:text-ink-muted::placeholder{--tw-text-opacity: 1;color:rgb(var(--color-ink-muted-rgb, 136 136 136) / var(--tw-text-opacity, 1))}.last\\:mb-0:last-child{margin-bottom:0}.hover\\:-translate-y-px:hover{--tw-translate-y: -1px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-\\[1\\.08\\]:hover{--tw-scale-x: 1.08;--tw-scale-y: 1.08;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-state-danger\\/30:hover{border-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .3)}.hover\\:border-stroke-strong:hover{--tw-border-opacity: 1;border-color:rgb(var(--color-stroke-strong-rgb, 85 85 85) / var(--tw-border-opacity, 1))}.hover\\:border-stroke-subtle:hover{--tw-border-opacity: 1;border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / var(--tw-border-opacity, 1))}.hover\\:bg-state-danger\\/10:hover{background-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .1)}.hover\\:bg-state-danger\\/20:hover{background-color:rgb(var(--color-state-danger-rgb, 248 113 113) / .2)}.hover\\:bg-state-positive\\/20:hover{background-color:rgb(var(--color-state-positive-rgb, 74 222 128) / .2)}.hover\\:bg-state-warning\\/20:hover{background-color:rgb(var(--color-state-warning-rgb, 251 191 36) / .2)}.hover\\:bg-surface-overlay:hover{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-overlay-rgb, 64 64 64) / var(--tw-bg-opacity, 1))}.hover\\:bg-surface-raised:hover{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-raised-rgb, 58 58 58) / var(--tw-bg-opacity, 1))}.hover\\:bg-surface-subtle:hover{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / var(--tw-bg-opacity, 1))}.hover\\:bg-surface-subtle\\/20:hover{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .2)}.hover\\:bg-surface-subtle\\/40:hover{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .4)}.hover\\:bg-surface-subtle\\/50:hover{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .5)}.hover\\:bg-surface-subtle\\/80:hover{background-color:rgb(var(--color-surface-subtle-rgb, 50 50 50) / .8)}.hover\\:text-ink-emphasis:hover{--tw-text-opacity: 1;color:rgb(var(--color-ink-emphasis-rgb, 242 242 242) / var(--tw-text-opacity, 1))}.hover\\:text-ink-primary:hover{--tw-text-opacity: 1;color:rgb(var(--color-ink-primary-rgb, 224 224 224) / var(--tw-text-opacity, 1))}.hover\\:text-ink-secondary:hover{--tw-text-opacity: 1;color:rgb(var(--color-ink-secondary-rgb, 181 181 181) / var(--tw-text-opacity, 1))}.hover\\:text-state-danger:hover{--tw-text-opacity: 1;color:rgb(var(--color-state-danger-rgb, 248 113 113) / var(--tw-text-opacity, 1))}.focus\\:border-accent-primary:focus{--tw-border-opacity: 1;border-color:rgb(var(--color-accent-primary-rgb, 230 16 16) / var(--tw-border-opacity, 1))}.focus\\:border-red-500:focus{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-accent-primary\\/20:focus{--tw-ring-color: rgb(var(--color-accent-primary-rgb, 230 16 16) / .2)}.focus\\:ring-red-500\\/20:focus{--tw-ring-color: rgb(239 68 68 / .2)}.focus\\:ring-stroke-subtle\\/50:focus{--tw-ring-color: rgb(var(--color-stroke-subtle-rgb, 64 64 64) / .5)}.active\\:translate-y-0:active{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\\:scale-\\[1\\.04\\]:active{--tw-scale-x: 1.04;--tw-scale-y: 1.04;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\\:border-stroke-subtle:active{--tw-border-opacity: 1;border-color:rgb(var(--color-stroke-subtle-rgb, 64 64 64) / var(--tw-border-opacity, 1))}.active\\:bg-surface-base:active{--tw-bg-opacity: 1;background-color:rgb(var(--color-surface-base-rgb, 42 42 42) / var(--tw-bg-opacity, 1))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-60:disabled{opacity:.6}.group:hover .group-hover\\:text-ink-emphasis{--tw-text-opacity: 1;color:rgb(var(--color-ink-emphasis-rgb, 242 242 242) / var(--tw-text-opacity, 1))}
/*$vite$:1*/`),
    document.head.appendChild(z));
  const M = "5";
  typeof window < "u" && ((Mo = window.__svelte ?? (window.__svelte = {})).v ?? (Mo.v = new Set())).add(M);
  let R = !1,
    Mt = !1;
  function Co() {
    R = !0;
  }
  Co();
  const Po = 1,
    Fo = 2,
    Io = 16,
    Do = 2,
    D = Symbol(),
    Ee = "http://www.w3.org/1999/xhtml",
    $t = !1;
  var Se = Array.isArray,
    Lo = Array.prototype.indexOf,
    Zr = Array.prototype.includes,
    Rt = Array.from,
    Uo = Object.defineProperty,
    dt = Object.getOwnPropertyDescriptor,
    ze = Object.getOwnPropertyDescriptors,
    jo = Object.prototype,
    Yo = Array.prototype,
    Ht = Object.getPrototypeOf,
    Te = Object.isExtensible;
  const qo = () => {};
  function Bo(r) {
    return r();
  }
  function Vt(r) {
    for (var t = 0; t < r.length; t++) r[t]();
  }
  function Ae() {
    var r,
      t,
      e = new Promise((o, a) => {
        ((r = o), (t = a));
      });
    return { promise: e, resolve: r, reject: t };
  }
  const L = 2,
    Ot = 4,
    pt = 8,
    Me = 1 << 24,
    wr = 16,
    ar = 32,
    Fr = 64,
    Xt = 128,
    Z = 512,
    P = 1024,
    U = 2048,
    ir = 4096,
    V = 8192,
    zr = 16384,
    Ir = 32768,
    Jr = 65536,
    Re = 1 << 17,
    Oe = 1 << 18,
    Qr = 1 << 19,
    Ne = 1 << 20,
    Tr = 1 << 25,
    Dr = 65536,
    Kt = 1 << 21,
    Wt = 1 << 22,
    Ar = 1 << 23,
    bt = Symbol("$state"),
    Lr = new (class extends Error {
      constructor() {
        super(...arguments);
        hr(this, "name", "StaleReactionError");
        hr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
      }
    })();
  function $o(r) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function Ho() {
    throw new Error("https://svelte.dev/e/async_derived_orphan");
  }
  function Vo(r, t, e) {
    throw new Error("https://svelte.dev/e/each_key_duplicate");
  }
  function Xo(r) {
    throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Ko() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function Wo(r) {
    throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Go() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Zo() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Jo() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Qo() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  function rn() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
  }
  function tn() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
  }
  function Ce(r) {
    return r === this.v;
  }
  function en(r, t) {
    return r != r ? t == t : r !== t || (r !== null && typeof r == "object") || typeof r == "function";
  }
  function Pe(r) {
    return !en(r, this.v);
  }
  let O = null;
  function rt(r) {
    O = r;
  }
  function Fe(r, t = !1, e) {
    O = { p: O, i: !1, c: null, e: null, s: r, x: null, l: R && !t ? { s: null, u: null, $: [] } : null };
  }
  function Ie(r) {
    var t = O,
      e = t.e;
    if (e !== null) {
      t.e = null;
      for (var o of e) no(o);
    }
    return ((t.i = !0), (O = t.p), {});
  }
  function gt() {
    return !R || (O !== null && O.l === null);
  }
  let tt = [];
  function on() {
    var r = tt;
    ((tt = []), Vt(r));
  }
  function Ur(r) {
    if (tt.length === 0) {
      var t = tt;
      queueMicrotask(() => {
        t === tt && on();
      });
    }
    tt.push(r);
  }
  function De(r) {
    var t = x;
    if (t === null) return ((w.f |= Ar), r);
    if ((t.f & Ir) === 0 && (t.f & Ot) === 0) throw r;
    Mr(r, t);
  }
  function Mr(r, t) {
    for (; t !== null; ) {
      if ((t.f & Xt) !== 0) {
        if ((t.f & Ir) === 0) throw r;
        try {
          t.b.error(r);
          return;
        } catch (e) {
          r = e;
        }
      }
      t = t.parent;
    }
    throw r;
  }
  const nn = -7169;
  function N(r, t) {
    r.f = (r.f & nn) | t;
  }
  function Gt(r) {
    (r.f & Z) !== 0 || r.deps === null ? N(r, P) : N(r, ir);
  }
  function Le(r) {
    if (r !== null) for (const t of r) (t.f & L) === 0 || (t.f & Dr) === 0 || ((t.f ^= Dr), Le(t.deps));
  }
  function Ue(r, t, e) {
    ((r.f & U) !== 0 ? t.add(r) : (r.f & ir) !== 0 && e.add(r), Le(r.deps), N(r, P));
  }
  const Nt = new Set();
  let y = null,
    j = null,
    J = [],
    Zt = null,
    Jt = !1;
  const be = class be {
    constructor() {
      m(this, K);
      hr(this, "current", new Map());
      hr(this, "previous", new Map());
      m(this, at, new Set());
      m(this, it, new Set());
      m(this, Vr, 0);
      m(this, st, 0);
      m(this, Et, null);
      m(this, St, new Set());
      m(this, Xr, new Set());
      m(this, yr, new Map());
      hr(this, "is_fork", !1);
      m(this, lt, !1);
    }
    skip_effect(t) {
      c(this, yr).has(t) || c(this, yr).set(t, { d: [], m: [] });
    }
    unskip_effect(t) {
      var e = c(this, yr).get(t);
      if (e) {
        c(this, yr).delete(t);
        for (var o of e.d) (N(o, U), lr(o));
        for (o of e.m) (N(o, ir), lr(o));
      }
    }
    process(t) {
      var a;
      ((J = []), this.apply());
      var e = [],
        o = [];
      for (const n of t) I(this, K, ye).call(this, n, e, o);
      if (I(this, K, me).call(this)) {
        (I(this, K, xe).call(this, o), I(this, K, xe).call(this, e));
        for (const [n, l] of c(this, yr)) Be(n, l);
      } else {
        for (const n of c(this, at)) n();
        (c(this, at).clear(),
          c(this, Vr) === 0 && I(this, K, No).call(this),
          (y = null),
          je(o),
          je(e),
          (a = c(this, Et)) == null || a.resolve());
      }
      j = null;
    }
    capture(t, e) {
      (e !== D && !this.previous.has(t) && this.previous.set(t, e),
        (t.f & Ar) === 0 && (this.current.set(t, t.v), j == null || j.set(t, t.v)));
    }
    activate() {
      ((y = this), this.apply());
    }
    deactivate() {
      y === this && ((y = null), (j = null));
    }
    flush() {
      if ((this.activate(), J.length > 0)) {
        if ((an(), y !== null && y !== this)) return;
      } else c(this, Vr) === 0 && this.process([]);
      this.deactivate();
    }
    discard() {
      for (const t of c(this, it)) t(this);
      c(this, it).clear();
    }
    increment(t) {
      (h(this, Vr, c(this, Vr) + 1), t && h(this, st, c(this, st) + 1));
    }
    decrement(t) {
      (h(this, Vr, c(this, Vr) - 1),
        t && h(this, st, c(this, st) - 1),
        !c(this, lt) &&
          (h(this, lt, !0),
          Ur(() => {
            (h(this, lt, !1), I(this, K, me).call(this) ? J.length > 0 && this.flush() : this.revive());
          })));
    }
    revive() {
      for (const t of c(this, St)) (c(this, Xr).delete(t), N(t, U), lr(t));
      for (const t of c(this, Xr)) (N(t, ir), lr(t));
      this.flush();
    }
    oncommit(t) {
      c(this, at).add(t);
    }
    ondiscard(t) {
      c(this, it).add(t);
    }
    settled() {
      return (c(this, Et) ?? h(this, Et, Ae())).promise;
    }
    static ensure() {
      if (y === null) {
        const t = (y = new be());
        (Nt.add(y),
          Ur(() => {
            y === t && t.flush();
          }));
      }
      return y;
    }
    apply() {}
  };
  ((at = new WeakMap()),
    (it = new WeakMap()),
    (Vr = new WeakMap()),
    (st = new WeakMap()),
    (Et = new WeakMap()),
    (St = new WeakMap()),
    (Xr = new WeakMap()),
    (yr = new WeakMap()),
    (lt = new WeakMap()),
    (K = new WeakSet()),
    (me = function () {
      return this.is_fork || c(this, st) > 0;
    }),
    (ye = function (t, e, o) {
      t.f ^= P;
      for (var a = t.first; a !== null; ) {
        var n = a.f,
          l = (n & (ar | Fr)) !== 0,
          s = l && (n & P) !== 0,
          i = s || (n & V) !== 0 || c(this, yr).has(a);
        if (!i && a.fn !== null) {
          l ? (a.f ^= P) : (n & Ot) !== 0 ? e.push(a) : wt(a) && ((n & wr) !== 0 && c(this, Xr).add(a), nt(a));
          var f = a.first;
          if (f !== null) {
            a = f;
            continue;
          }
        }
        for (; a !== null; ) {
          var d = a.next;
          if (d !== null) {
            a = d;
            break;
          }
          a = a.parent;
        }
      }
    }),
    (xe = function (t) {
      for (var e = 0; e < t.length; e += 1) Ue(t[e], c(this, St), c(this, Xr));
    }),
    (No = function () {
      var a;
      if (Nt.size > 1) {
        this.previous.clear();
        var t = j,
          e = !0;
        for (const n of Nt) {
          if (n === this) {
            e = !1;
            continue;
          }
          const l = [];
          for (const [i, f] of this.current) {
            if (n.current.has(i))
              if (e && f !== n.current.get(i)) n.current.set(i, f);
              else continue;
            l.push(i);
          }
          if (l.length === 0) continue;
          const s = [...n.current.keys()].filter((i) => !this.current.has(i));
          if (s.length > 0) {
            var o = J;
            J = [];
            const i = new Set(),
              f = new Map();
            for (const d of l) Ye(d, s, i, f);
            if (J.length > 0) {
              ((y = n), n.apply());
              for (const d of J) I((a = n), K, ye).call(a, d, [], []);
              n.deactivate();
            }
            J = o;
          }
        }
        ((y = null), (j = t));
      }
      Nt.delete(this);
    }));
  let Rr = be;
  function an() {
    Jt = !0;
    var r = null;
    try {
      for (var t = 0; J.length > 0; ) {
        var e = Rr.ensure();
        if (t++ > 1e3) {
          var o, a;
          sn();
        }
        (e.process(J), Or.clear());
      }
    } finally {
      ((J = []), (Jt = !1), (Zt = null));
    }
  }
  function sn() {
    try {
      Go();
    } catch (r) {
      Mr(r, Zt);
    }
  }
  let sr = null;
  function je(r) {
    var t = r.length;
    if (t !== 0) {
      for (var e = 0; e < t; ) {
        var o = r[e++];
        if (
          (o.f & (zr | V)) === 0 &&
          wt(o) &&
          ((sr = new Set()),
          nt(o),
          o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && io(o),
          (sr == null ? void 0 : sr.size) > 0)
        ) {
          Or.clear();
          for (const a of sr) {
            if ((a.f & (zr | V)) !== 0) continue;
            const n = [a];
            let l = a.parent;
            for (; l !== null; ) (sr.has(l) && (sr.delete(l), n.push(l)), (l = l.parent));
            for (let s = n.length - 1; s >= 0; s--) {
              const i = n[s];
              (i.f & (zr | V)) === 0 && nt(i);
            }
          }
          sr.clear();
        }
      }
      sr = null;
    }
  }
  function Ye(r, t, e, o) {
    if (!e.has(r) && (e.add(r), r.reactions !== null))
      for (const a of r.reactions) {
        const n = a.f;
        (n & L) !== 0 ? Ye(a, t, e, o) : (n & (Wt | wr)) !== 0 && (n & U) === 0 && qe(a, t, o) && (N(a, U), lr(a));
      }
  }
  function qe(r, t, e) {
    const o = e.get(r);
    if (o !== void 0) return o;
    if (r.deps !== null)
      for (const a of r.deps) {
        if (Zr.call(t, a)) return !0;
        if ((a.f & L) !== 0 && qe(a, t, e)) return (e.set(a, !0), !0);
      }
    return (e.set(r, !1), !1);
  }
  function lr(r) {
    var t = (Zt = r),
      e = t.b;
    if (e != null && e.is_pending && (r.f & (Ot | pt | Me)) !== 0 && (r.f & Ir) === 0) {
      e.defer_effect(r);
      return;
    }
    for (; t.parent !== null; ) {
      t = t.parent;
      var o = t.f;
      if (Jt && t === x && (o & wr) !== 0 && (o & Oe) === 0 && (o & Ir) !== 0) return;
      if ((o & (Fr | ar)) !== 0) {
        if ((o & P) === 0) return;
        t.f ^= P;
      }
    }
    J.push(t);
  }
  function Be(r, t) {
    if (!((r.f & ar) !== 0 && (r.f & P) !== 0)) {
      ((r.f & U) !== 0 ? t.d.push(r) : (r.f & ir) !== 0 && t.m.push(r), N(r, P));
      for (var e = r.first; e !== null; ) (Be(e, t), (e = e.next));
    }
  }
  function ln(r) {
    let t = 0,
      e = jr(0),
      o;
    return () => {
      oe() &&
        (E(e),
        Tn(
          () => (
            t === 0 && (o = ce(() => r(() => vt(e)))),
            (t += 1),
            () => {
              Ur(() => {
                ((t -= 1), t === 0 && (o == null || o(), (o = void 0), vt(e)));
              });
            }
          ),
        ));
    };
  }
  var cn = Jr | Qr;
  function fn(r, t, e, o) {
    new un(r, t, e, o);
  }
  class un {
    constructor(t, e, o, a) {
      m(this, C);
      hr(this, "parent");
      hr(this, "is_pending", !1);
      hr(this, "transform_error");
      m(this, nr);
      m(this, ge, null);
      m(this, br);
      m(this, Kr);
      m(this, H);
      m(this, gr, null);
      m(this, W, null);
      m(this, ur, null);
      m(this, xr, null);
      m(this, Wr, 0);
      m(this, Pr, 0);
      m(this, ct, !1);
      m(this, ft, new Set());
      m(this, ut, new Set());
      m(this, _r, null);
      m(
        this,
        jt,
        ln(
          () => (
            h(this, _r, jr(c(this, Wr))),
            () => {
              h(this, _r, null);
            }
          ),
        ),
      );
      var n;
      (h(this, nr, t),
        h(this, br, e),
        h(this, Kr, (l) => {
          var s = x;
          ((s.b = this), (s.f |= Xt), o(l));
        }),
        (this.parent = x.b),
        (this.transform_error = a ?? ((n = this.parent) == null ? void 0 : n.transform_error) ?? ((l) => l)),
        h(
          this,
          H,
          ie(() => {
            I(this, C, _e).call(this);
          }, cn),
        ));
    }
    defer_effect(t) {
      Ue(t, c(this, ft), c(this, ut));
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!c(this, br).pending;
    }
    update_pending_count(t) {
      (I(this, C, ke).call(this, t),
        h(this, Wr, c(this, Wr) + t),
        !(!c(this, _r) || c(this, ct)) &&
          (h(this, ct, !0),
          Ur(() => {
            (h(this, ct, !1), c(this, _r) && et(c(this, _r), c(this, Wr)));
          })));
    }
    get_effect_pending() {
      return (c(this, jt).call(this), E(c(this, _r)));
    }
    error(t) {
      var e = c(this, br).onerror;
      let o = c(this, br).failed;
      if (!e && !o) throw t;
      (c(this, gr) && (B(c(this, gr)), h(this, gr, null)),
        c(this, W) && (B(c(this, W)), h(this, W, null)),
        c(this, ur) && (B(c(this, ur)), h(this, ur, null)));
      var a = !1,
        n = !1;
      const l = () => {
          if (a) {
            tn();
            return;
          }
          ((a = !0),
            n && rn(),
            c(this, ur) !== null &&
              qr(c(this, ur), () => {
                h(this, ur, null);
              }),
            I(this, C, Bt).call(this, () => {
              (Rr.ensure(), I(this, C, _e).call(this));
            }));
        },
        s = (i) => {
          try {
            ((n = !0), e == null || e(i, l), (n = !1));
          } catch (f) {
            Mr(f, c(this, H) && c(this, H).parent);
          }
          o &&
            h(
              this,
              ur,
              I(this, C, Bt).call(this, () => {
                Rr.ensure();
                try {
                  return rr(() => {
                    var f = x;
                    ((f.b = this),
                      (f.f |= Xt),
                      o(
                        c(this, nr),
                        () => i,
                        () => l,
                      ));
                  });
                } catch (f) {
                  return (Mr(f, c(this, H).parent), null);
                }
              }),
            );
        };
      Ur(() => {
        var i;
        try {
          i = this.transform_error(t);
        } catch (f) {
          Mr(f, c(this, H) && c(this, H).parent);
          return;
        }
        i !== null && typeof i == "object" && typeof i.then == "function"
          ? i.then(s, (f) => Mr(f, c(this, H) && c(this, H).parent))
          : s(i);
      });
    }
  }
  ((nr = new WeakMap()),
    (ge = new WeakMap()),
    (br = new WeakMap()),
    (Kr = new WeakMap()),
    (H = new WeakMap()),
    (gr = new WeakMap()),
    (W = new WeakMap()),
    (ur = new WeakMap()),
    (xr = new WeakMap()),
    (Wr = new WeakMap()),
    (Pr = new WeakMap()),
    (ct = new WeakMap()),
    (ft = new WeakMap()),
    (ut = new WeakMap()),
    (_r = new WeakMap()),
    (jt = new WeakMap()),
    (C = new WeakSet()),
    (fa = function () {
      try {
        h(
          this,
          gr,
          rr(() => c(this, Kr).call(this, c(this, nr))),
        );
      } catch (t) {
        this.error(t);
      }
    }),
    (ua = function (t) {
      const e = c(this, br).failed;
      e &&
        h(
          this,
          ur,
          rr(() => {
            e(
              c(this, nr),
              () => t,
              () => () => {},
            );
          }),
        );
    }),
    (da = function () {
      const t = c(this, br).pending;
      t &&
        ((this.is_pending = !0),
        h(
          this,
          W,
          rr(() => t(c(this, nr))),
        ),
        Ur(() => {
          var e = h(this, xr, document.createDocumentFragment()),
            o = ot();
          (e.append(o),
            h(
              this,
              gr,
              I(this, C, Bt).call(this, () => (Rr.ensure(), rr(() => c(this, Kr).call(this, o)))),
            ),
            c(this, Pr) === 0 &&
              (c(this, nr).before(e),
              h(this, xr, null),
              qr(c(this, W), () => {
                h(this, W, null);
              }),
              I(this, C, qt).call(this)));
        }));
    }),
    (_e = function () {
      try {
        if (
          ((this.is_pending = this.has_pending_snippet()),
          h(this, Pr, 0),
          h(this, Wr, 0),
          h(
            this,
            gr,
            rr(() => {
              c(this, Kr).call(this, c(this, nr));
            }),
          ),
          c(this, Pr) > 0)
        ) {
          var t = h(this, xr, document.createDocumentFragment());
          co(c(this, gr), t);
          const e = c(this, br).pending;
          h(
            this,
            W,
            rr(() => e(c(this, nr))),
          );
        } else I(this, C, qt).call(this);
      } catch (e) {
        this.error(e);
      }
    }),
    (qt = function () {
      this.is_pending = !1;
      for (const t of c(this, ft)) (N(t, U), lr(t));
      for (const t of c(this, ut)) (N(t, ir), lr(t));
      (c(this, ft).clear(), c(this, ut).clear());
    }),
    (Bt = function (t) {
      var e = x,
        o = w,
        a = O;
      (pr(c(this, H)), tr(c(this, H)), rt(c(this, H).ctx));
      try {
        return t();
      } catch (n) {
        return (De(n), null);
      } finally {
        (pr(e), tr(o), rt(a));
      }
    }),
    (ke = function (t) {
      var e;
      if (!this.has_pending_snippet()) {
        this.parent && I((e = this.parent), C, ke).call(e, t);
        return;
      }
      (h(this, Pr, c(this, Pr) + t),
        c(this, Pr) === 0 &&
          (I(this, C, qt).call(this),
          c(this, W) &&
            qr(c(this, W), () => {
              h(this, W, null);
            }),
          c(this, xr) && (c(this, nr).before(c(this, xr)), h(this, xr, null))));
    }));
  function dn(r, t, e, o) {
    const a = gt() ? Ct : He;
    var n = r.filter((p) => !p.settled);
    if (e.length === 0 && n.length === 0) {
      o(t.map(a));
      return;
    }
    var l = x,
      s = pn(),
      i = n.length === 1 ? n[0].promise : n.length > 1 ? Promise.all(n.map((p) => p.promise)) : null;
    function f(p) {
      s();
      try {
        o(p);
      } catch (b) {
        (l.f & zr) === 0 && Mr(b, l);
      }
      Qt();
    }
    if (e.length === 0) {
      i.then(() => f(t.map(a)));
      return;
    }
    function d() {
      (s(),
        Promise.all(e.map((p) => gn(p)))
          .then((p) => f([...t.map(a), ...p]))
          .catch((p) => Mr(p, l)));
    }
    i ? i.then(d) : d();
  }
  function pn() {
    var r = x,
      t = w,
      e = O,
      o = y;
    return function (n = !0) {
      (pr(r), tr(t), rt(e), n && (o == null || o.activate()));
    };
  }
  function Qt(r = !0) {
    (pr(null), tr(null), rt(null), r && (y == null || y.deactivate()));
  }
  function bn() {
    var r = x.b,
      t = y,
      e = r.is_rendered();
    return (
      r.update_pending_count(1),
      t.increment(e),
      () => {
        (r.update_pending_count(-1), t.decrement(e));
      }
    );
  }
  function Ct(r) {
    var t = L | U,
      e = w !== null && (w.f & L) !== 0 ? w : null;
    return (
      x !== null && (x.f |= Qr),
      {
        ctx: O,
        deps: null,
        effects: null,
        equals: Ce,
        f: t,
        fn: r,
        reactions: null,
        rv: 0,
        v: D,
        wv: 0,
        parent: e ?? x,
        ac: null,
      }
    );
  }
  function gn(r, t, e) {
    x === null && Ho();
    var a = void 0,
      n = jr(D),
      l = !w,
      s = new Map();
    return (
      zn(() => {
        var b;
        var i = Ae();
        a = i.promise;
        try {
          Promise.resolve(r()).then(i.resolve, i.reject).finally(Qt);
        } catch (v) {
          (i.reject(v), Qt());
        }
        var f = y;
        if (l) {
          var d = bn();
          ((b = s.get(f)) == null || b.reject(Lr), s.delete(f), s.set(f, i));
        }
        const p = (v, u = void 0) => {
          if ((f.activate(), u)) u !== Lr && ((n.f |= Ar), et(n, u));
          else {
            ((n.f & Ar) !== 0 && (n.f ^= Ar), et(n, v));
            for (const [g, _] of s) {
              if ((s.delete(g), g === f)) break;
              _.reject(Lr);
            }
          }
          d && d();
        };
        i.promise.then(p, (v) => p(null, v || "unknown"));
      }),
      oo(() => {
        for (const i of s.values()) i.reject(Lr);
      }),
      new Promise((i) => {
        function f(d) {
          function p() {
            d === a ? i(n) : f(a);
          }
          d.then(p, p);
        }
        f(a);
      })
    );
  }
  function $e(r) {
    const t = Ct(r);
    return (uo(t), t);
  }
  function He(r) {
    const t = Ct(r);
    return ((t.equals = Pe), t);
  }
  function vn(r) {
    var t = r.effects;
    if (t !== null) {
      r.effects = null;
      for (var e = 0; e < t.length; e += 1) B(t[e]);
    }
  }
  function hn(r) {
    for (var t = r.parent; t !== null; ) {
      if ((t.f & L) === 0) return (t.f & zr) === 0 ? t : null;
      t = t.parent;
    }
    return null;
  }
  function re(r) {
    var t,
      e = x;
    pr(hn(r));
    try {
      ((r.f &= ~Dr), vn(r), (t = ho(r)));
    } finally {
      pr(e);
    }
    return t;
  }
  function Ve(r) {
    var t = re(r);
    if (
      !r.equals(t) &&
      ((r.wv = go()), (!(y != null && y.is_fork) || r.deps === null) && ((r.v = t), r.deps === null))
    ) {
      N(r, P);
      return;
    }
    Br || (j !== null ? (oe() || (y != null && y.is_fork)) && j.set(r, t) : Gt(r));
  }
  function wn(r) {
    var t, e;
    if (r.effects !== null)
      for (const o of r.effects)
        (o.teardown || o.ac) &&
          ((t = o.teardown) == null || t.call(o),
          (e = o.ac) == null || e.abort(Lr),
          (o.teardown = qo),
          (o.ac = null),
          mt(o, 0),
          se(o));
  }
  function Xe(r) {
    if (r.effects !== null) for (const t of r.effects) t.teardown && nt(t);
  }
  let te = new Set();
  const Or = new Map();
  let Ke = !1;
  function jr(r, t) {
    var e = { f: 0, v: r, reactions: null, equals: Ce, rv: 0, wv: 0 };
    return e;
  }
  function Nr(r, t) {
    const e = jr(r);
    return (uo(e), e);
  }
  function Pt(r, t = !1, e = !0) {
    var a;
    const o = jr(r);
    return (t || (o.equals = Pe), R && e && O !== null && O.l !== null && ((a = O.l).s ?? (a.s = [])).push(o), o);
  }
  function Q(r, t, e = !1) {
    w !== null &&
      (!fr || (w.f & Re) !== 0) &&
      gt() &&
      (w.f & (L | wr | Wt | Re)) !== 0 &&
      (er === null || !Zr.call(er, r)) &&
      Qo();
    let o = e ? ht(t) : t;
    return et(r, o);
  }
  function et(r, t) {
    if (!r.equals(t)) {
      var e = r.v;
      (Br ? Or.set(r, t) : Or.set(r, e), (r.v = t));
      var o = Rr.ensure();
      if ((o.capture(r, e), (r.f & L) !== 0)) {
        const a = r;
        ((r.f & U) !== 0 && re(a), Gt(a));
      }
      ((r.wv = go()),
        We(r, U),
        gt() && x !== null && (x.f & P) !== 0 && (x.f & (ar | Fr)) === 0 && (or === null ? Rn([r]) : or.push(r)),
        !o.is_fork && te.size > 0 && !Ke && mn());
    }
    return t;
  }
  function mn() {
    Ke = !1;
    for (const r of te) ((r.f & P) !== 0 && N(r, ir), wt(r) && nt(r));
    te.clear();
  }
  function vt(r) {
    Q(r, r.v + 1);
  }
  function We(r, t) {
    var e = r.reactions;
    if (e !== null)
      for (var o = gt(), a = e.length, n = 0; n < a; n++) {
        var l = e[n],
          s = l.f;
        if (!(!o && l === x)) {
          var i = (s & U) === 0;
          if ((i && N(l, t), (s & L) !== 0)) {
            var f = l;
            (j == null || j.delete(f), (s & Dr) === 0 && (s & Z && (l.f |= Dr), We(f, ir)));
          } else i && ((s & wr) !== 0 && sr !== null && sr.add(l), lr(l));
        }
      }
  }
  function ht(r) {
    if (typeof r != "object" || r === null || bt in r) return r;
    const t = Ht(r);
    if (t !== jo && t !== Yo) return r;
    var e = new Map(),
      o = Se(r),
      a = Nr(0),
      n = Hr,
      l = (s) => {
        if (Hr === n) return s();
        var i = w,
          f = Hr;
        (tr(null), bo(n));
        var d = s();
        return (tr(i), bo(f), d);
      };
    return (
      o && e.set("length", Nr(r.length)),
      new Proxy(r, {
        defineProperty(s, i, f) {
          (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Zo();
          var d = e.get(i);
          return (
            d === void 0
              ? l(() => {
                  var p = Nr(f.value);
                  return (e.set(i, p), p);
                })
              : Q(d, f.value, !0),
            !0
          );
        },
        deleteProperty(s, i) {
          var f = e.get(i);
          if (f === void 0) {
            if (i in s) {
              const d = l(() => Nr(D));
              (e.set(i, d), vt(a));
            }
          } else (Q(f, D), vt(a));
          return !0;
        },
        get(s, i, f) {
          var v;
          if (i === bt) return r;
          var d = e.get(i),
            p = i in s;
          if (
            (d === void 0 &&
              (!p || ((v = dt(s, i)) != null && v.writable)) &&
              ((d = l(() => {
                var u = ht(p ? s[i] : D),
                  g = Nr(u);
                return g;
              })),
              e.set(i, d)),
            d !== void 0)
          ) {
            var b = E(d);
            return b === D ? void 0 : b;
          }
          return Reflect.get(s, i, f);
        },
        getOwnPropertyDescriptor(s, i) {
          var f = Reflect.getOwnPropertyDescriptor(s, i);
          if (f && "value" in f) {
            var d = e.get(i);
            d && (f.value = E(d));
          } else if (f === void 0) {
            var p = e.get(i),
              b = p == null ? void 0 : p.v;
            if (p !== void 0 && b !== D) return { enumerable: !0, configurable: !0, value: b, writable: !0 };
          }
          return f;
        },
        has(s, i) {
          var b;
          if (i === bt) return !0;
          var f = e.get(i),
            d = (f !== void 0 && f.v !== D) || Reflect.has(s, i);
          if (f !== void 0 || (x !== null && (!d || ((b = dt(s, i)) != null && b.writable)))) {
            f === void 0 &&
              ((f = l(() => {
                var v = d ? ht(s[i]) : D,
                  u = Nr(v);
                return u;
              })),
              e.set(i, f));
            var p = E(f);
            if (p === D) return !1;
          }
          return d;
        },
        set(s, i, f, d) {
          var F;
          var p = e.get(i),
            b = i in s;
          if (o && i === "length")
            for (var v = f; v < p.v; v += 1) {
              var u = e.get(v + "");
              u !== void 0 ? Q(u, D) : v in s && ((u = l(() => Nr(D))), e.set(v + "", u));
            }
          if (p === void 0)
            (!b || ((F = dt(s, i)) != null && F.writable)) && ((p = l(() => Nr(void 0))), Q(p, ht(f)), e.set(i, p));
          else {
            b = p.v !== D;
            var g = l(() => ht(f));
            Q(p, g);
          }
          var _ = Reflect.getOwnPropertyDescriptor(s, i);
          if ((_ != null && _.set && _.set.call(d, f), !b)) {
            if (o && typeof i == "string") {
              var S = e.get("length"),
                T = Number(i);
              Number.isInteger(T) && T >= S.v && Q(S, T + 1);
            }
            vt(a);
          }
          return !0;
        },
        ownKeys(s) {
          E(a);
          var i = Reflect.ownKeys(s).filter((p) => {
            var b = e.get(p);
            return b === void 0 || b.v !== D;
          });
          for (var [f, d] of e) d.v !== D && !(f in s) && i.push(f);
          return i;
        },
        setPrototypeOf() {
          Jo();
        },
      })
    );
  }
  var Ge, Ze, Je, Qe;
  function yn() {
    if (Ge === void 0) {
      ((Ge = window), (Ze = /Firefox/.test(navigator.userAgent)));
      var r = Element.prototype,
        t = Node.prototype,
        e = Text.prototype;
      ((Je = dt(t, "firstChild").get),
        (Qe = dt(t, "nextSibling").get),
        Te(r) &&
          ((r.__click = void 0),
          (r.__className = void 0),
          (r.__attributes = null),
          (r.__style = void 0),
          (r.__e = void 0)),
        Te(e) && (e.__t = void 0));
    }
  }
  function ot(r = "") {
    return document.createTextNode(r);
  }
  function ro(r) {
    return Je.call(r);
  }
  function Ft(r) {
    return Qe.call(r);
  }
  function cr(r, t) {
    return ro(r);
  }
  function Yr(r, t = 1, e = !1) {
    let o = r;
    for (; t--; ) o = Ft(o);
    return o;
  }
  function xn(r) {
    r.textContent = "";
  }
  function to() {
    return !1;
  }
  function _n(r, t, e) {
    return document.createElementNS(Ee, r, void 0);
  }
  function ee(r) {
    var t = w,
      e = x;
    (tr(null), pr(null));
    try {
      return r();
    } finally {
      (tr(t), pr(e));
    }
  }
  function eo(r) {
    (x === null && (w === null && Wo(), Ko()), Br && Xo());
  }
  function kn(r, t) {
    var e = t.last;
    e === null ? (t.last = t.first = r) : ((e.next = r), (r.prev = e), (t.last = r));
  }
  function mr(r, t, e) {
    var o = x;
    o !== null && (o.f & V) !== 0 && (r |= V);
    var a = {
      ctx: O,
      deps: null,
      nodes: null,
      f: r | U | Z,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: o,
      b: o && o.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null,
    };
    if (e)
      try {
        nt(a);
      } catch (s) {
        throw (B(a), s);
      }
    else t !== null && lr(a);
    var n = a;
    if (
      (e &&
        n.deps === null &&
        n.teardown === null &&
        n.nodes === null &&
        n.first === n.last &&
        (n.f & Qr) === 0 &&
        ((n = n.first), (r & wr) !== 0 && (r & Jr) !== 0 && n !== null && (n.f |= Jr)),
      n !== null && ((n.parent = o), o !== null && kn(n, o), w !== null && (w.f & L) !== 0 && (r & Fr) === 0))
    ) {
      var l = w;
      (l.effects ?? (l.effects = [])).push(n);
    }
    return a;
  }
  function oe() {
    return w !== null && !fr;
  }
  function oo(r) {
    const t = mr(pt, null, !1);
    return (N(t, P), (t.teardown = r), t);
  }
  function ne(r) {
    eo();
    var t = x.f,
      e = !w && (t & ar) !== 0 && (t & Ir) === 0;
    if (e) {
      var o = O;
      (o.e ?? (o.e = [])).push(r);
    } else return no(r);
  }
  function no(r) {
    return mr(Ot | Ne, r, !1);
  }
  function En(r) {
    return (eo(), mr(pt | Ne, r, !0));
  }
  function Sn(r) {
    Rr.ensure();
    const t = mr(Fr | Qr, r, !0);
    return (e = {}) =>
      new Promise((o) => {
        e.outro
          ? qr(t, () => {
              (B(t), o(void 0));
            })
          : (B(t), o(void 0));
      });
  }
  function zn(r) {
    return mr(Wt | Qr, r, !0);
  }
  function Tn(r, t = 0) {
    return mr(pt | t, r, !0);
  }
  function ae(r, t = [], e = [], o = []) {
    dn(o, t, e, (a) => {
      mr(pt, () => r(...a.map(E)), !0);
    });
  }
  function ie(r, t = 0) {
    var e = mr(wr | t, r, !0);
    return e;
  }
  function rr(r) {
    return mr(ar | Qr, r, !0);
  }
  function ao(r) {
    var t = r.teardown;
    if (t !== null) {
      const e = Br,
        o = w;
      (fo(!0), tr(null));
      try {
        t.call(null);
      } finally {
        (fo(e), tr(o));
      }
    }
  }
  function se(r, t = !1) {
    var e = r.first;
    for (r.first = r.last = null; e !== null; ) {
      const a = e.ac;
      a !== null &&
        ee(() => {
          a.abort(Lr);
        });
      var o = e.next;
      ((e.f & Fr) !== 0 ? (e.parent = null) : B(e, t), (e = o));
    }
  }
  function An(r) {
    for (var t = r.first; t !== null; ) {
      var e = t.next;
      ((t.f & ar) === 0 && B(t), (t = e));
    }
  }
  function B(r, t = !0) {
    var e = !1;
    ((t || (r.f & Oe) !== 0) && r.nodes !== null && r.nodes.end !== null && (Mn(r.nodes.start, r.nodes.end), (e = !0)),
      se(r, t && !e),
      mt(r, 0),
      N(r, zr));
    var o = r.nodes && r.nodes.t;
    if (o !== null) for (const n of o) n.stop();
    ao(r);
    var a = r.parent;
    (a !== null && a.first !== null && io(r),
      (r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes = r.ac = null));
  }
  function Mn(r, t) {
    for (; r !== null; ) {
      var e = r === t ? null : Ft(r);
      (r.remove(), (r = e));
    }
  }
  function io(r) {
    var t = r.parent,
      e = r.prev,
      o = r.next;
    (e !== null && (e.next = o),
      o !== null && (o.prev = e),
      t !== null && (t.first === r && (t.first = o), t.last === r && (t.last = e)));
  }
  function qr(r, t, e = !0) {
    var o = [];
    so(r, o, !0);
    var a = () => {
        (e && B(r), t && t());
      },
      n = o.length;
    if (n > 0) {
      var l = () => --n || a();
      for (var s of o) s.out(l);
    } else a();
  }
  function so(r, t, e) {
    if ((r.f & V) === 0) {
      r.f ^= V;
      var o = r.nodes && r.nodes.t;
      if (o !== null) for (const s of o) (s.is_global || e) && t.push(s);
      for (var a = r.first; a !== null; ) {
        var n = a.next,
          l = (a.f & Jr) !== 0 || ((a.f & ar) !== 0 && (r.f & wr) !== 0);
        (so(a, t, l ? e : !1), (a = n));
      }
    }
  }
  function le(r) {
    lo(r, !0);
  }
  function lo(r, t) {
    if ((r.f & V) !== 0) {
      ((r.f ^= V), (r.f & P) === 0 && (N(r, U), lr(r)));
      for (var e = r.first; e !== null; ) {
        var o = e.next,
          a = (e.f & Jr) !== 0 || (e.f & ar) !== 0;
        (lo(e, a ? t : !1), (e = o));
      }
      var n = r.nodes && r.nodes.t;
      if (n !== null) for (const l of n) (l.is_global || t) && l.in();
    }
  }
  function co(r, t) {
    if (r.nodes)
      for (var e = r.nodes.start, o = r.nodes.end; e !== null; ) {
        var a = e === o ? null : Ft(e);
        (t.append(e), (e = a));
      }
  }
  let It = !1,
    Br = !1;
  function fo(r) {
    Br = r;
  }
  let w = null,
    fr = !1;
  function tr(r) {
    w = r;
  }
  let x = null;
  function pr(r) {
    x = r;
  }
  let er = null;
  function uo(r) {
    w !== null && (er === null ? (er = [r]) : er.push(r));
  }
  let $ = null,
    X = 0,
    or = null;
  function Rn(r) {
    or = r;
  }
  let po = 1,
    $r = 0,
    Hr = $r;
  function bo(r) {
    Hr = r;
  }
  function go() {
    return ++po;
  }
  function wt(r) {
    var t = r.f;
    if ((t & U) !== 0) return !0;
    if ((t & L && (r.f &= ~Dr), (t & ir) !== 0)) {
      for (var e = r.deps, o = e.length, a = 0; a < o; a++) {
        var n = e[a];
        if ((wt(n) && Ve(n), n.wv > r.wv)) return !0;
      }
      (t & Z) !== 0 && j === null && N(r, P);
    }
    return !1;
  }
  function vo(r, t, e = !0) {
    var o = r.reactions;
    if (o !== null && !(er !== null && Zr.call(er, r)))
      for (var a = 0; a < o.length; a++) {
        var n = o[a];
        (n.f & L) !== 0 ? vo(n, t, !1) : t === n && (e ? N(n, U) : (n.f & P) !== 0 && N(n, ir), lr(n));
      }
  }
  function ho(r) {
    var g;
    var t = $,
      e = X,
      o = or,
      a = w,
      n = er,
      l = O,
      s = fr,
      i = Hr,
      f = r.f;
    (($ = null),
      (X = 0),
      (or = null),
      (w = (f & (ar | Fr)) === 0 ? r : null),
      (er = null),
      rt(r.ctx),
      (fr = !1),
      (Hr = ++$r),
      r.ac !== null &&
        (ee(() => {
          r.ac.abort(Lr);
        }),
        (r.ac = null)));
    try {
      r.f |= Kt;
      var d = r.fn,
        p = d();
      r.f |= Ir;
      var b = r.deps,
        v = y == null ? void 0 : y.is_fork;
      if ($ !== null) {
        var u;
        if ((v || mt(r, X), b !== null && X > 0))
          for (b.length = X + $.length, u = 0; u < $.length; u++) b[X + u] = $[u];
        else r.deps = b = $;
        if (oe() && (r.f & Z) !== 0)
          for (u = X; u < b.length; u++) ((g = b[u]).reactions ?? (g.reactions = [])).push(r);
      } else !v && b !== null && X < b.length && (mt(r, X), (b.length = X));
      if (gt() && or !== null && !fr && b !== null && (r.f & (L | ir | U)) === 0)
        for (u = 0; u < or.length; u++) vo(or[u], r);
      if (a !== null && a !== r) {
        if (($r++, a.deps !== null)) for (let _ = 0; _ < e; _ += 1) a.deps[_].rv = $r;
        if (t !== null) for (const _ of t) _.rv = $r;
        or !== null && (o === null ? (o = or) : o.push(...or));
      }
      return ((r.f & Ar) !== 0 && (r.f ^= Ar), p);
    } catch (_) {
      return De(_);
    } finally {
      ((r.f ^= Kt), ($ = t), (X = e), (or = o), (w = a), (er = n), rt(l), (fr = s), (Hr = i));
    }
  }
  function On(r, t) {
    let e = t.reactions;
    if (e !== null) {
      var o = Lo.call(e, r);
      if (o !== -1) {
        var a = e.length - 1;
        a === 0 ? (e = t.reactions = null) : ((e[o] = e[a]), e.pop());
      }
    }
    if (e === null && (t.f & L) !== 0 && ($ === null || !Zr.call($, t))) {
      var n = t;
      ((n.f & Z) !== 0 && ((n.f ^= Z), (n.f &= ~Dr)), Gt(n), wn(n), mt(n, 0));
    }
  }
  function mt(r, t) {
    var e = r.deps;
    if (e !== null) for (var o = t; o < e.length; o++) On(r, e[o]);
  }
  function nt(r) {
    var t = r.f;
    if ((t & zr) === 0) {
      N(r, P);
      var e = x,
        o = It;
      ((x = r), (It = !0));
      try {
        ((t & (wr | Me)) !== 0 ? An(r) : se(r), ao(r));
        var a = ho(r);
        ((r.teardown = typeof a == "function" ? a : null), (r.wv = po));
        var n;
        $t && Mt && (r.f & U) !== 0 && r.deps;
      } finally {
        ((It = o), (x = e));
      }
    }
  }
  function E(r) {
    var t = r.f,
      e = (t & L) !== 0;
    if (w !== null && !fr) {
      var o = x !== null && (x.f & zr) !== 0;
      if (!o && (er === null || !Zr.call(er, r))) {
        var a = w.deps;
        if ((w.f & Kt) !== 0)
          r.rv < $r && ((r.rv = $r), $ === null && a !== null && a[X] === r ? X++ : $ === null ? ($ = [r]) : $.push(r));
        else {
          (w.deps ?? (w.deps = [])).push(r);
          var n = r.reactions;
          n === null ? (r.reactions = [w]) : Zr.call(n, w) || n.push(w);
        }
      }
    }
    if (Br && Or.has(r)) return Or.get(r);
    if (e) {
      var l = r;
      if (Br) {
        var s = l.v;
        return ((((l.f & P) === 0 && l.reactions !== null) || mo(l)) && (s = re(l)), Or.set(l, s), s);
      }
      var i = (l.f & Z) === 0 && !fr && w !== null && (It || (w.f & Z) !== 0),
        f = (l.f & Ir) === 0;
      (wt(l) && (i && (l.f |= Z), Ve(l)), i && !f && (Xe(l), wo(l)));
    }
    if (j != null && j.has(r)) return j.get(r);
    if ((r.f & Ar) !== 0) throw r.v;
    return r.v;
  }
  function wo(r) {
    if (((r.f |= Z), r.deps !== null))
      for (const t of r.deps)
        ((t.reactions ?? (t.reactions = [])).push(r), (t.f & L) !== 0 && (t.f & Z) === 0 && (Xe(t), wo(t)));
  }
  function mo(r) {
    if (r.v === D) return !0;
    if (r.deps === null) return !1;
    for (const t of r.deps) if (Or.has(t) || ((t.f & L) !== 0 && mo(t))) return !0;
    return !1;
  }
  function ce(r) {
    var t = fr;
    try {
      return ((fr = !0), r());
    } finally {
      fr = t;
    }
  }
  function Nn(r) {
    if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
      if (bt in r) fe(r);
      else if (!Array.isArray(r))
        for (let t in r) {
          const e = r[t];
          typeof e == "object" && e && bt in e && fe(e);
        }
    }
  }
  function fe(r, t = new Set()) {
    if (typeof r == "object" && r !== null && !(r instanceof EventTarget) && !t.has(r)) {
      (t.add(r), r instanceof Date && r.getTime());
      for (let o in r)
        try {
          fe(r[o], t);
        } catch {}
      const e = Ht(r);
      if (
        e !== Object.prototype &&
        e !== Array.prototype &&
        e !== Map.prototype &&
        e !== Set.prototype &&
        e !== Date.prototype
      ) {
        const o = ze(e);
        for (let a in o) {
          const n = o[a].get;
          if (n)
            try {
              n.call(r);
            } catch {}
        }
      }
    }
  }
  const Dt = Symbol("events"),
    Cn = new Set(),
    yo = new Set();
  function Pn(r, t, e, o = {}) {
    function a(n) {
      if ((o.capture || ue.call(t, n), !n.cancelBubble)) return ee(() => (e == null ? void 0 : e.call(this, n)));
    }
    return (
      r.startsWith("pointer") || r.startsWith("touch") || r === "wheel"
        ? Ur(() => {
            t.addEventListener(r, a, o);
          })
        : t.addEventListener(r, a, o),
      a
    );
  }
  function xo(r, t, e, o, a) {
    var n = { capture: o, passive: a },
      l = Pn(r, t, e, n);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
      oo(() => {
        t.removeEventListener(r, l, n);
      });
  }
  let _o = null;
  function ue(r) {
    var _, S;
    var t = this,
      e = t.ownerDocument,
      o = r.type,
      a = ((_ = r.composedPath) == null ? void 0 : _.call(r)) || [],
      n = a[0] || r.target;
    _o = r;
    var l = 0,
      s = _o === r && r[Dt];
    if (s) {
      var i = a.indexOf(s);
      if (i !== -1 && (t === document || t === window)) {
        r[Dt] = t;
        return;
      }
      var f = a.indexOf(t);
      if (f === -1) return;
      i <= f && (l = i);
    }
    if (((n = a[l] || r.target), n !== t)) {
      Uo(r, "currentTarget", {
        configurable: !0,
        get() {
          return n || e;
        },
      });
      var d = w,
        p = x;
      (tr(null), pr(null));
      try {
        for (var b, v = []; n !== null; ) {
          var u = n.assignedSlot || n.parentNode || n.host || null;
          try {
            var g = (S = n[Dt]) == null ? void 0 : S[o];
            g != null && (!n.disabled || r.target === n) && g.call(n, r);
          } catch (T) {
            b ? v.push(T) : (b = T);
          }
          if (r.cancelBubble || u === t || u === null) break;
          n = u;
        }
        if (b) {
          for (let T of v)
            queueMicrotask(() => {
              throw T;
            });
          throw b;
        }
      } finally {
        ((r[Dt] = t), delete r.currentTarget, tr(d), pr(p));
      }
    }
  }
  const de =
    ((Ro = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ro.trustedTypes) &&
    globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (r) => r });
  function Fn(r) {
    return (de == null ? void 0 : de.createHTML(r)) ?? r;
  }
  function In(r) {
    var t = _n("template");
    return ((t.innerHTML = Fn(r.replaceAll("<!>", "<!---->"))), t.content);
  }
  function Dn(r, t) {
    var e = x;
    e.nodes === null && (e.nodes = { start: r, end: t, a: null, t: null });
  }
  function yt(r, t) {
    var e = (t & Do) !== 0,
      o,
      a = !r.startsWith("<!>");
    return () => {
      o === void 0 && ((o = In(a ? r : "<!>" + r)), (o = ro(o)));
      var n = e || Ze ? document.importNode(o, !0) : o.cloneNode(!0);
      return (Dn(n, n), n);
    };
  }
  function xt(r, t) {
    r !== null && r.before(t);
  }
  const Ln = ["touchstart", "touchmove"];
  function Un(r) {
    return Ln.includes(r);
  }
  function ko(r, t) {
    var e = t == null ? "" : typeof t == "object" ? t + "" : t;
    e !== (r.__t ?? (r.__t = r.nodeValue)) && ((r.__t = e), (r.nodeValue = e + ""));
  }
  function jn(r, t) {
    return Yn(r, t);
  }
  const Lt = new Map();
  function Yn(r, { target: t, anchor: e, props: o = {}, events: a, context: n, intro: l = !0, transformError: s }) {
    yn();
    var i = void 0,
      f = Sn(() => {
        var d = e ?? t.appendChild(ot());
        fn(
          d,
          { pending: () => {} },
          (v) => {
            Fe({});
            var u = O;
            (n && (u.c = n), a && (o.$$events = a), (i = r(v, o) || {}), Ie());
          },
          s,
        );
        var p = new Set(),
          b = (v) => {
            for (var u = 0; u < v.length; u++) {
              var g = v[u];
              if (!p.has(g)) {
                p.add(g);
                var _ = Un(g);
                for (const F of [t, document]) {
                  var S = Lt.get(F);
                  S === void 0 && ((S = new Map()), Lt.set(F, S));
                  var T = S.get(g);
                  T === void 0 ? (F.addEventListener(g, ue, { passive: _ }), S.set(g, 1)) : S.set(g, T + 1);
                }
              }
            }
          };
        return (
          b(Rt(Cn)),
          yo.add(b),
          () => {
            var _;
            for (var v of p)
              for (const S of [t, document]) {
                var u = Lt.get(S),
                  g = u.get(v);
                --g == 0 ? (S.removeEventListener(v, ue), u.delete(v), u.size === 0 && Lt.delete(S)) : u.set(v, g);
              }
            (yo.delete(b), d !== e && ((_ = d.parentNode) == null || _.removeChild(d)));
          }
        );
      });
    return (qn.set(i, f), i);
  }
  let qn = new WeakMap();
  class Bn {
    constructor(t, e = !0) {
      hr(this, "anchor");
      m(this, dr, new Map());
      m(this, vr, new Map());
      m(this, G, new Map());
      m(this, Gr, new Set());
      m(this, zt, !0);
      m(this, Tt, () => {
        var t = y;
        if (c(this, dr).has(t)) {
          var e = c(this, dr).get(t),
            o = c(this, vr).get(e);
          if (o) (le(o), c(this, Gr).delete(e));
          else {
            var a = c(this, G).get(e);
            a &&
              (c(this, vr).set(e, a.effect),
              c(this, G).delete(e),
              a.fragment.lastChild.remove(),
              this.anchor.before(a.fragment),
              (o = a.effect));
          }
          for (const [n, l] of c(this, dr)) {
            if ((c(this, dr).delete(n), n === t)) break;
            const s = c(this, G).get(l);
            s && (B(s.effect), c(this, G).delete(l));
          }
          for (const [n, l] of c(this, vr)) {
            if (n === e || c(this, Gr).has(n)) continue;
            const s = () => {
              if (Array.from(c(this, dr).values()).includes(n)) {
                var f = document.createDocumentFragment();
                (co(l, f), f.append(ot()), c(this, G).set(n, { effect: l, fragment: f }));
              } else B(l);
              (c(this, Gr).delete(n), c(this, vr).delete(n));
            };
            c(this, zt) || !o ? (c(this, Gr).add(n), qr(l, s, !1)) : s();
          }
        }
      });
      m(this, Yt, (t) => {
        c(this, dr).delete(t);
        const e = Array.from(c(this, dr).values());
        for (const [o, a] of c(this, G)) e.includes(o) || (B(a.effect), c(this, G).delete(o));
      });
      ((this.anchor = t), h(this, zt, e));
    }
    ensure(t, e) {
      var o = y,
        a = to();
      if (e && !c(this, vr).has(t) && !c(this, G).has(t))
        if (a) {
          var n = document.createDocumentFragment(),
            l = ot();
          (n.append(l), c(this, G).set(t, { effect: rr(() => e(l)), fragment: n }));
        } else
          c(this, vr).set(
            t,
            rr(() => e(this.anchor)),
          );
      if ((c(this, dr).set(o, t), a)) {
        for (const [s, i] of c(this, vr)) s === t ? o.unskip_effect(i) : o.skip_effect(i);
        for (const [s, i] of c(this, G)) s === t ? o.unskip_effect(i.effect) : o.skip_effect(i.effect);
        (o.oncommit(c(this, Tt)), o.ondiscard(c(this, Yt)));
      } else c(this, Tt).call(this);
    }
  }
  ((dr = new WeakMap()),
    (vr = new WeakMap()),
    (G = new WeakMap()),
    (Gr = new WeakMap()),
    (zt = new WeakMap()),
    (Tt = new WeakMap()),
    (Yt = new WeakMap()));
  function $n(r) {
    (O === null && $o(),
      R && O.l !== null
        ? Hn(O).m.push(r)
        : ne(() => {
            const t = ce(r);
            if (typeof t == "function") return t;
          }));
  }
  function Hn(r) {
    var t = r.l;
    return t.u ?? (t.u = { a: [], b: [], m: [] });
  }
  function Eo(r, t, e = !1) {
    var o = new Bn(r),
      a = e ? Jr : 0;
    function n(l, s) {
      o.ensure(l, s);
    }
    ie(() => {
      var l = !1;
      (t((s, i = 0) => {
        ((l = !0), n(i, s));
      }),
        l || n(!1, null));
    }, a);
  }
  function Vn(r, t, e) {
    for (var o = [], a = t.length, n, l = t.length, s = 0; s < a; s++) {
      let p = t[s];
      qr(
        p,
        () => {
          if (n) {
            if ((n.pending.delete(p), n.done.add(p), n.pending.size === 0)) {
              var b = r.outrogroups;
              (pe(Rt(n.done)), b.delete(n), b.size === 0 && (r.outrogroups = null));
            }
          } else l -= 1;
        },
        !1,
      );
    }
    if (l === 0) {
      var i = o.length === 0 && e !== null;
      if (i) {
        var f = e,
          d = f.parentNode;
        (xn(d), d.append(f), r.items.clear());
      }
      pe(t, !i);
    } else ((n = { pending: new Set(t), done: new Set() }), (r.outrogroups ?? (r.outrogroups = new Set())).add(n));
  }
  function pe(r, t = !0) {
    for (var e = 0; e < r.length; e++) B(r[e], t);
  }
  var So;
  function zo(r, t, e, o, a, n = null) {
    var l = r,
      s = new Map(),
      i = null,
      f = He(() => {
        var g = e();
        return Se(g) ? g : g == null ? [] : Rt(g);
      }),
      d,
      p = !0;
    function b() {
      ((u.fallback = i),
        Xn(u, d, l, t, o),
        i !== null &&
          (d.length === 0
            ? (i.f & Tr) === 0
              ? le(i)
              : ((i.f ^= Tr), kt(i, null, l))
            : qr(i, () => {
                i = null;
              })));
    }
    var v = ie(() => {
        d = E(f);
        for (var g = d.length, _ = new Set(), S = y, T = to(), F = 0; F < g; F += 1) {
          var kr = d[F],
            k = o(kr, F),
            A = p ? null : s.get(k);
          (A
            ? (A.v && et(A.v, kr), A.i && et(A.i, F), T && S.unskip_effect(A.e))
            : ((A = Kn(s, p ? l : (So ?? (So = ot())), kr, k, F, a, t, e)), p || (A.e.f |= Tr), s.set(k, A)),
            _.add(k));
        }
        if (
          (g === 0 && n && !i && (p ? (i = rr(() => n(l))) : ((i = rr(() => n(So ?? (So = ot())))), (i.f |= Tr))),
          g > _.size && Vo(),
          !p)
        )
          if (T) {
            for (const [Er, Y] of s) _.has(Er) || S.skip_effect(Y.e);
            (S.oncommit(b), S.ondiscard(() => {}));
          } else b();
        E(f);
      }),
      u = { effect: v, items: s, outrogroups: null, fallback: i };
    p = !1;
  }
  function _t(r) {
    for (; r !== null && (r.f & ar) === 0; ) r = r.next;
    return r;
  }
  function Xn(r, t, e, o, a) {
    var Y;
    var n = t.length,
      l = r.items,
      s = _t(r.effect.first),
      i,
      f = null,
      d = [],
      p = [],
      b,
      v,
      u,
      g;
    for (g = 0; g < n; g += 1) {
      if (((b = t[g]), (v = a(b, g)), (u = l.get(v).e), r.outrogroups !== null))
        for (const q of r.outrogroups) (q.pending.delete(u), q.done.delete(u));
      if ((u.f & Tr) !== 0)
        if (((u.f ^= Tr), u === s)) kt(u, null, e);
        else {
          var _ = f ? f.next : s;
          (u === r.effect.last && (r.effect.last = u.prev),
            u.prev && (u.prev.next = u.next),
            u.next && (u.next.prev = u.prev),
            Cr(r, f, u),
            Cr(r, u, _),
            kt(u, _, e),
            (f = u),
            (d = []),
            (p = []),
            (s = _t(f.next)));
          continue;
        }
      if (((u.f & V) !== 0 && le(u), u !== s)) {
        if (i !== void 0 && i.has(u)) {
          if (d.length < p.length) {
            var S = p[0],
              T;
            f = S.prev;
            var F = d[0],
              kr = d[d.length - 1];
            for (T = 0; T < d.length; T += 1) kt(d[T], S, e);
            for (T = 0; T < p.length; T += 1) i.delete(p[T]);
            (Cr(r, F.prev, kr.next), Cr(r, f, F), Cr(r, kr, S), (s = S), (f = kr), (g -= 1), (d = []), (p = []));
          } else
            (i.delete(u),
              kt(u, s, e),
              Cr(r, u.prev, u.next),
              Cr(r, u, f === null ? r.effect.first : f.next),
              Cr(r, f, u),
              (f = u));
          continue;
        }
        for (d = [], p = []; s !== null && s !== u; ) ((i ?? (i = new Set())).add(s), p.push(s), (s = _t(s.next)));
        if (s === null) continue;
      }
      ((u.f & Tr) === 0 && d.push(u), (f = u), (s = _t(u.next)));
    }
    if (r.outrogroups !== null) {
      for (const q of r.outrogroups)
        q.pending.size === 0 && (pe(Rt(q.done)), (Y = r.outrogroups) == null || Y.delete(q));
      r.outrogroups.size === 0 && (r.outrogroups = null);
    }
    if (s !== null || i !== void 0) {
      var k = [];
      if (i !== void 0) for (u of i) (u.f & V) === 0 && k.push(u);
      for (; s !== null; ) ((s.f & V) === 0 && s !== r.fallback && k.push(s), (s = _t(s.next)));
      var A = k.length;
      if (A > 0) {
        var Er = null;
        Vn(r, k, Er);
      }
    }
  }
  function Kn(r, t, e, o, a, n, l, s) {
    var i = (l & Po) !== 0 ? ((l & Io) === 0 ? Pt(e, !1, !1) : jr(e)) : null,
      f = (l & Fo) !== 0 ? jr(a) : null;
    return {
      v: i,
      i: f,
      e: rr(
        () => (
          n(t, i ?? e, f ?? a, s),
          () => {
            r.delete(o);
          }
        ),
      ),
    };
  }
  function kt(r, t, e) {
    if (r.nodes)
      for (var o = r.nodes.start, a = r.nodes.end, n = t && (t.f & Tr) === 0 ? t.nodes.start : e; o !== null; ) {
        var l = Ft(o);
        if ((n.before(o), o === a)) return;
        o = l;
      }
  }
  function Cr(r, t, e) {
    (t === null ? (r.effect.first = e) : (t.next = e), e === null ? (r.effect.last = t) : (e.prev = t));
  }
  function Wn(r, t, e) {
    var o = r == null ? "" : "" + r;
    return o === "" ? null : o;
  }
  function Ut(r, t, e, o, a, n) {
    var l = r.__className;
    if (l !== e || l === void 0) {
      var s = Wn(e);
      (s == null ? r.removeAttribute("class") : (r.className = s), (r.__className = e));
    }
    return n;
  }
  const Gn = Symbol("is custom element"),
    Zn = Symbol("is html");
  function Jn(r, t, e, o) {
    var a = Qn(r);
    a[t] !== (a[t] = e) &&
      (e == null
        ? r.removeAttribute(t)
        : typeof e != "string" && ra(r).includes(t)
          ? (r[t] = e)
          : r.setAttribute(t, e));
  }
  function Qn(r) {
    return r.__attributes ?? (r.__attributes = { [Gn]: r.nodeName.includes("-"), [Zn]: r.namespaceURI === Ee });
  }
  var To = new Map();
  function ra(r) {
    var t = r.getAttribute("is") || r.nodeName,
      e = To.get(t);
    if (e) return e;
    To.set(t, (e = []));
    for (var o, a = r, n = Element.prototype; n !== a; ) {
      o = ze(a);
      for (var l in o) o[l].set && e.push(l);
      a = Ht(a);
    }
    return e;
  }
  function ta(r = !1) {
    const t = O,
      e = t.l.u;
    if (!e) return;
    let o = () => Nn(t.s);
    if (r) {
      let a = 0,
        n = {};
      const l = Ct(() => {
        let s = !1;
        const i = t.s;
        for (const f in i) i[f] !== n[f] && ((n[f] = i[f]), (s = !0));
        return (s && a++, a);
      });
      o = () => E(l);
    }
    (e.b.length &&
      En(() => {
        (Ao(t, o), Vt(e.b));
      }),
      ne(() => {
        const a = ce(() => e.m.map(Bo));
        return () => {
          for (const n of a) typeof n == "function" && n();
        };
      }),
      e.a.length &&
        ne(() => {
          (Ao(t, o), Vt(e.a));
        }));
  }
  function Ao(r, t) {
    if (r.l.s) for (const e of r.l.s) E(e);
    t();
  }
  var ea = yt('<button><span></span> <span class="truncate"> </span></button>'),
    oa = yt(
      '<div class="flex gap-1"><div class="text-[10px] text-ink-soft uppercase tracking-wider self-center px-2">Dev</div> <!></div>',
    ),
    na = yt('<button><span></span> <span class="truncate"> </span></button>'),
    aa = yt(
      '<div class="flex gap-1"><div class="text-[10px] text-ink-soft uppercase tracking-wider self-center px-2">Prod</div> <!></div>',
    ),
    ia = yt(
      '<div class="h-screen bg-surface-deep text-ink-secondary flex flex-col overflow-hidden font-mono"><header class="bg-surface-sunken border-b border-stroke-subtle"><div class="flex items-center gap-4 px-4 py-2"><div class="text-xs font-medium text-ink-muted whitespace-nowrap">CEP DevTools</div> <div class="flex gap-4 flex-1 overflow-x-auto items-center"><!> <!></div></div></header> <main class="flex-1 overflow-hidden"><iframe class="w-full h-full border-none bg-surface-deep" sandbox="allow-scripts allow-same-origin allow-forms" title="DevTools"></iframe></main></div>',
    );
  function sa(r, t) {
    Fe(t, !1);
    let e = Pt([]),
      o = Pt(null),
      a = Pt("");
    const n = Number(new URLSearchParams(location.search).get("api")) || 7826;
    async function l(k) {
      const A = await fetch(`http://127.0.0.1:${n}${k}`);
      if (!A.ok) throw new Error(`HTTP ${A.status}`);
      return A.json();
    }
    async function s() {
      try {
        const { status: k } = await l("/api/status");
        Q(e, k);
      } catch {}
    }
    async function i(k) {
      Q(o, k);
      try {
        const { targets: A, online: Er } = await l(`/api/targets?port=${k}`);
        if (!Er || !A.length) {
          Q(a, "about:blank");
          return;
        }
        Q(a, A[0].debugUrl);
      } catch {
        Q(a, "about:blank");
      }
    }
    ($n(() => {
      s();
      const k = setInterval(s, 3e3);
      return () => clearInterval(k);
    }),
      ta());
    var f = ia(),
      d = cr(f),
      p = cr(d),
      b = Yr(cr(p), 2),
      v = cr(b);
    {
      var u = (k) => {
          var A = oa(),
            Er = Yr(cr(A), 2);
          (zo(
            Er,
            1,
            () => E(e).filter((Y) => Y.env === "Dev"),
            (Y) => Y.port,
            (Y, q) => {
              var Sr = ea(),
                At = cr(Sr),
                ve = Yr(At, 2),
                he = cr(ve);
              (ae(() => {
                (Ut(
                  Sr,
                  1,
                  `flex items-center justify-center gap-1.5 w-24 px-2 py-1 rounded text-xs transition-colors border
                  ${E(o) === E(q).port ? "bg-btn-primary-bg text-btn-primary-text border-btn-primary-bg" : "bg-surface-subtle text-ink-muted border-stroke-subtle hover:bg-surface-overlay hover:text-ink-secondary"}`,
                ),
                  Ut(
                    At,
                    1,
                    `w-1 h-1 rounded-full
                    ${E(q).online ? "bg-state-positive" : "bg-state-danger"}`,
                  ),
                  ko(he, E(q).type));
              }),
                xo("click", Sr, () => i(E(q).port)),
                xt(Y, Sr));
            },
          ),
            xt(k, A));
        },
        g = $e(() => E(e).filter((k) => k.env === "Dev").length > 0);
      Eo(v, (k) => {
        E(g) && k(u);
      });
    }
    var _ = Yr(v, 2);
    {
      var S = (k) => {
          var A = aa(),
            Er = Yr(cr(A), 2);
          (zo(
            Er,
            1,
            () => E(e).filter((Y) => Y.env === "Prod"),
            (Y) => Y.port,
            (Y, q) => {
              var Sr = na(),
                At = cr(Sr),
                ve = Yr(At, 2),
                he = cr(ve);
              (ae(() => {
                (Ut(
                  Sr,
                  1,
                  `flex items-center justify-center gap-1.5 w-24 px-2 py-1 rounded text-xs transition-colors border
                  ${E(o) === E(q).port ? "bg-btn-primary-bg text-btn-primary-text border-btn-primary-bg" : "bg-surface-subtle text-ink-muted border-stroke-subtle hover:bg-surface-overlay hover:text-ink-secondary"}`,
                ),
                  Ut(
                    At,
                    1,
                    `w-1 h-1 rounded-full
                    ${E(q).online ? "bg-state-positive" : "bg-state-danger"}`,
                  ),
                  ko(he, E(q).type));
              }),
                xo("click", Sr, () => i(E(q).port)),
                xt(Y, Sr));
            },
          ),
            xt(k, A));
        },
        T = $e(() => E(e).filter((k) => k.env === "Prod").length > 0);
      Eo(_, (k) => {
        E(T) && k(S);
      });
    }
    var F = Yr(d, 2),
      kr = cr(F);
    (ae(() => Jn(kr, "src", E(a))), xt(r, f), Ie());
  }
  jn(sa, { target: document.body });
})();
