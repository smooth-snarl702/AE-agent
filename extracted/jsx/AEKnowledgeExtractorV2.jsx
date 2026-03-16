/*
  AE Knowledge Extractor
  - Outputs manifest.json and knowledge.jsonl using standard JSON (JSON2)
  - Exposed as CEP_Extractor global
*/
var CEP_Extractor = (function () {
    function nowIso() {
        function pad(n) { return (n < 10 ? '0' : '') + n; }
        var d = new Date();
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' +
               pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + 'Z';
    }
    function ensureFolder(fsName) {
        var f = new Folder(fsName);
        if (!f.exists) f.create();
        return f;
    }
    function normalizeString(v) {
        if (v === null || v === undefined) return '';
        var s = '' + v;
        return s.replace(/^[\s\u0000-\u001F\u007F]+|[\s\u0000-\u001F\u007F]+$/g, '');
    }
    function safe(v) { try { return v; } catch (e) { return null; } }
    function isGroupProp(p) {
        try {
            var t = p.propertyType;
            return (t === PropertyType.PROPERTY_GROUP || t === PropertyType.NAMED_GROUP || t === PropertyType.INDEXED_GROUP);
        } catch (e) { return false; }
    }
    function isLeafProp(p) {
        try { return p.propertyType === PropertyType.PROPERTY; } catch (e) { return false; }
    }
    function valType(v) {
        var t = typeof v;
        if (v === null || v === undefined) return 'null';
        if (t === 'number' || t === 'boolean' || t === 'string') return t;
        if (v instanceof Array) return 'array';
        return 'object';
    }

    function createSampleMask(layer) {
        try {
            if (!layer || typeof layer.property !== 'function') return;
            var maskParade = layer.property('ADBE Mask Parade');
            if (!maskParade || maskParade.numProperties > 0) return;
            var mask = maskParade.addProperty('ADBE Mask Atom');
            if (!mask) return;
            try { mask.name = 'Mask 1'; } catch (_) {}
            try { mask.maskMode = MaskMode.NONE; } catch (_) {}
            var shape = new Shape();
            shape.vertices = [[-800, -400], [800, -400], [800, 400], [-800, 400]];
            shape.inTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];
            shape.outTangents = [[0, 0], [0, 0], [0, 0], [0, 0]];
            shape.closed = true;
            try {
                var pathProp = mask.property('ADBE Mask Shape');
                if (pathProp) pathProp.setValue(shape);
            } catch (_) {}
        } catch (_) {}
    }

    function ensureTextEnhancements(layer) {
        if (!layer) return;
        try {
            createSampleMask(layer);
        } catch (_) {}

        try {
            var textProps = layer.property('ADBE Text Properties');
            if (!textProps) return;

            // Path options
            var pathOptions = textProps.property('ADBE Text Path Options');
            if (!pathOptions) {
                pathOptions = textProps.addProperty('ADBE Text Path Options');
            }
            if (pathOptions) {
                try {
                    var bindProp = pathOptions.property('ADBE Text Path');
                    if (bindProp) bindProp.setValue(1);
                } catch (_) {}
                try {
                    var forceAlign = pathOptions.property('ADBE Text Force Align Path');
                    if (forceAlign) forceAlign.setValue(false);
                } catch (_) {}
            }

            // Text animators - create one animator per selector type to capture all structures
            var animators = textProps.property('ADBE Text Animators');
            if (!animators) return;

            for (var si = 0; si < TEXT_SELECTOR_TYPES.length; si++) {
                var selectorType = TEXT_SELECTOR_TYPES[si];
                try {
                    // Create animator
                    var animator = animators.addProperty('ADBE Text Animator');
                    if (!animator) continue;
                    animator.name = 'Extraction Animator ' + (si + 1);

                    // Add selector of this type
                    var selectors = animator.property('ADBE Text Selectors');
                    if (selectors) {
                        try {
                            selectors.addProperty(selectorType);
                        } catch (_) {}
                    }

                    // Add all animator properties (only on first animator to avoid bloat)
                    if (si === 0) {
                        var animProps = animator.property('ADBE Text Animator Properties');
                        if (animProps) {
                            for (var pi = 0; pi < TEXT_ANIMATOR_PROPERTIES.length; pi++) {
                                try {
                                    animProps.addProperty(TEXT_ANIMATOR_PROPERTIES[pi]);
                                } catch (_) {}
                            }
                        }
                    }
                } catch (_) {}
            }
        } catch (_) {}
    }

    // All known shape operator matchNames for comprehensive extraction
    var SHAPE_OPERATORS = [
        'ADBE Vector Shape - Rect',
        'ADBE Vector Shape - Ellipse',
        'ADBE Vector Shape - Star',
        'ADBE Vector Shape - Group',
        'ADBE Vector Graphic - Fill',
        'ADBE Vector Graphic - Stroke',
        'ADBE Vector Graphic - G-Fill',
        'ADBE Vector Graphic - G-Stroke',
        'ADBE Vector Filter - Merge',
        'ADBE Vector Filter - Offset',
        'ADBE Vector Filter - PB',
        'ADBE Vector Filter - Repeater',
        'ADBE Vector Filter - RC',
        'ADBE Vector Filter - Trim',
        'ADBE Vector Filter - Twist',
        'ADBE Vector Filter - Roughen',
        'ADBE Vector Filter - Wiggler',
        'ADBE Vector Filter - Zigzag'
    ];

    // Text animator properties that can be added via addProperty
    var TEXT_ANIMATOR_PROPERTIES = [
        'ADBE Text Anchor Point 3D',
        'ADBE Text Position 3D',
        'ADBE Text Scale 3D',
        'ADBE Text Skew',
        'ADBE Text Skew Axis',
        'ADBE Text Rotation X',
        'ADBE Text Rotation Y',
        'ADBE Text Rotation',
        'ADBE Text Opacity',
        'ADBE Text Fill Color',
        'ADBE Text Fill Opacity',
        'ADBE Text Fill Hue',
        'ADBE Text Fill Saturation',
        'ADBE Text Fill Brightness',
        'ADBE Text Stroke Color',
        'ADBE Text Stroke Opacity',
        'ADBE Text Stroke Hue',
        'ADBE Text Stroke Saturation',
        'ADBE Text Stroke Brightness',
        'ADBE Text Stroke Width',
        'ADBE Text Line Anchor',
        'ADBE Text Track Type',
        'ADBE Text Tracking Amount',
        'ADBE Text Character Replace',
        'ADBE Text Character Offset',
        'ADBE Text Line Spacing',
        'ADBE Text Blur'
    ];

    // Text selector types
    var TEXT_SELECTOR_TYPES = [
        'ADBE Text Selector',
        'ADBE Text Wiggly Selector',
        'ADBE Text Expressible Selector'
    ];

    function ensureShapeEnhancements(layer) {
        if (!layer) return;
        try {
            var contents = layer.property('ADBE Root Vectors Group');
            if (!contents) return;

            // Create a group to hold shape operators
            var group = contents.addProperty('ADBE Vector Group');
            if (group) group.name = 'Extraction Group';

            var groupContents = group ? group.property('ADBE Vectors Group') : null;
            if (!groupContents) return;

            // Add all known shape operators to capture their properties
            for (var i = 0; i < SHAPE_OPERATORS.length; i++) {
                var matchName = SHAPE_OPERATORS[i];
                try {
                    var existing = groupContents.property(matchName);
                    if (!existing) {
                        groupContents.addProperty(matchName);
                    }
                } catch (_) {}
            }
        } catch (_) {}
    }

    function enhanceLayerForDiscovery(info) {
        if (!info || !info.layer) return;
        // Add shared mask to capture mask parade structure
        if (info.type === 'solid' || info.type === 'adjustment' || info.type === 'text' || info.type === 'shape' || info.type === 'null') {
            createSampleMask(info.layer);
        }
        if (info.type === 'text') {
            ensureTextEnhancements(info.layer);
        } else if (info.type === 'shape') {
            ensureShapeEnhancements(info.layer);
        }
    }

    function run(outDirFsName, optionsJSON) {
        if (typeof CEP_JSON !== 'object' || !CEP_JSON || !CEP_JSON.writeJSON) {
            throw new Error("CEP_JSON not initialized (JSON2 missing)");
        }
        var opts = {};
        try { opts = optionsJSON ? JSON.parse(optionsJSON) : {}; } catch (e) { opts = {}; }

        var outFolder = ensureFolder(outDirFsName);
        var knowledgePath = outFolder.fsName + "/knowledge.json";
        var manifestPath = outFolder.fsName + "/manifest.json";

        // Reset files
        try { var kf = new File(knowledgePath); if (kf.exists) kf.remove(); } catch (e) {}
        try { var mf = new File(manifestPath); if (mf.exists) mf.remove(); } catch (e) {}

        var counts = { layerTypes: 0, effects: 0, properties: 0 };
        var startedAt = nowIso();
        
        // Data structure for hierarchical output
        var knowledgeData = {
            layerTypes: [],
            effects: []
        };


        var config = (typeof __CEP_CONFIG__ !== 'undefined') ? __CEP_CONFIG__ : { productName: 'CEP' };
        app.beginUndoGroup(config.productName + ' AE Knowledge Extraction');

        try {
            // Create temp comp in current project for AE capability discovery
            var tempComp = app.project.items.addComp('CEP_TEMP_EXTRACTION_' + Date.now(), 1920, 1080, 1, 10, 30);


            // Create all possible layer types to discover AE capabilities
            var layerTypes = [];
            
            // Solid layer
            try {
                var solid = tempComp.layers.addSolid([1, 0, 0], 'EXTRACT_Solid', 1920, 1080, 1, 10);
                layerTypes.push({ layer: solid, type: 'solid', matchName: safe(solid.matchName) });
            } catch (e) {}

            // Text layer  
            try {
                var text = tempComp.layers.addText('EXTRACT');
                layerTypes.push({ layer: text, type: 'text', matchName: safe(text.matchName) });
            } catch (e) {}

            // Shape layer
            try {
                var shape = tempComp.layers.addShape();
                layerTypes.push({ layer: shape, type: 'shape', matchName: safe(shape.matchName) });
            } catch (e) {}

            // Null layer
            try {
                var nullLayer = tempComp.layers.addNull();
                layerTypes.push({ layer: nullLayer, type: 'null', matchName: safe(nullLayer.matchName) });
            } catch (e) {}

            // Camera layer
            try {
                var camera = tempComp.layers.addCamera('EXTRACT_Camera', [960, 540]);
                layerTypes.push({ layer: camera, type: 'camera', matchName: safe(camera.matchName) });
            } catch (e) {}

            // Light layer
            try {
                var light = tempComp.layers.addLight('EXTRACT_Light', LightType.POINT);
                layerTypes.push({ layer: light, type: 'light', matchName: safe(light.matchName) });
            } catch (e) {}

            // Adjustment layer
            try {
                var adj = tempComp.layers.addSolid([1, 1, 1], 'EXTRACT_Adj', 1920, 1080, 1, 10);
                adj.adjustmentLayer = true;
                layerTypes.push({ layer: adj, type: 'adjustment', matchName: safe(adj.matchName) });
            } catch (e) {}


            // Extract layer type info and properties
            var MAX_DEPTH = 8;
            var MAX_CHILD = 300;

            function dumpProp(p, depth, parentPath, properties) {
                if (!p || depth > MAX_DEPTH) return;
                
                var nm = safe(p.name) || '';
                var mm = safe(p.matchName) || '';
                var isGroup = isGroupProp(p);
                var isLeaf = isLeafProp(p);
                var currentPath = parentPath ? (parentPath + '/' + nm) : nm;

                if (isLeaf) {
                    var v = null;
                    var vt = null;
                    var canVaryOverTime = false;
                    var canSetExpr = false;
                    var propValueType = null;
                    var dimension = 0;
                    var defaultValue = null;
                    var minValue = null;
                    var maxValue = null;
                    
                    try { v = p.value; vt = valType(v); } catch (e) {}
                    try { canVaryOverTime = p.canVaryOverTime; } catch (e) {}
                    try { canSetExpr = p.canSetExpression; } catch (e) {}
                    try { propValueType = p.propertyValueType; } catch (e) {}
                    // Only attempt min/max on numeric properties; avoid TextDocument ("Source Text") which can hard-error
                    var shouldCheckRange = (mm !== 'ADBE Text Document') && (vt === 'number' || vt === 'array');
                    if (shouldCheckRange) {
                        try { minValue = p.minValue; } catch (e) { minValue = null; }
                        try { maxValue = p.maxValue; } catch (e) { maxValue = null; }
                    }
                    
                    // Determine dimension from actual value
                    if (v instanceof Array) {
                        dimension = v.length;
                    } else if (vt === 'number' || vt === 'boolean' || vt === 'string') {
                        dimension = 1;
                    } else {
                        dimension = 0; // null, undefined, or complex objects
                    }

                    // Only serialize primitives/arrays as defaultValue.
                    // Host objects (e.g. TextDocument for 'ADBE Text Document') can throw during stringify.
                    if (vt === 'number' || vt === 'boolean' || vt === 'string' || vt === 'array') {
                        defaultValue = v;
                    } else {
                        defaultValue = null;
                    }

                    var propRec = {
                        path: currentPath,
                        name: nm,
                        matchName: mm,
                        valueType: vt,
                        dimension: dimension,
                        canVaryOverTime: canVaryOverTime,
                        canSetExpression: canSetExpr,
                        minValue: minValue,
                        maxValue: maxValue,
                        defaultValue: defaultValue
                    };
                    properties.push(propRec);
                    counts.properties++;

                } else if (isGroup) {
                    // Record the group itself (for addProperty targets like masks, animators, etc.)
                    var groupType = null;
                    try { groupType = p.propertyType; } catch (e) {}
                    var groupRec = {
                        path: currentPath,
                        name: nm,
                        matchName: mm,
                        isGroup: true,
                        propertyType: groupType
                    };
                    properties.push(groupRec);
                    counts.properties++;

                    // Then recurse into children
                    var total = 0;
                    try { total = p.numProperties || 0; } catch (e) {}
                    var cap = Math.min(total, MAX_CHILD);

                    for (var i = 1; i <= cap; i++) {
                        var ch = null;
                        try { ch = p.property(i); } catch (e) {}
                        if (ch) dumpProp(ch, depth + 1, currentPath, properties);
                    }
                }
            }

            // Process each layer type
            for (var lt = 0; lt < layerTypes.length; lt++) {
                var layerInfo = layerTypes[lt];
                enhanceLayerForDiscovery(layerInfo);
                var L = layerInfo.layer;
                var layerProperties = [];

                // Walk all properties of this layer type
                var propTotal = 0;
                try { propTotal = L.numProperties || 0; } catch (e) {}
                var capTop = Math.min(propTotal, MAX_CHILD);
                for (var pi = 1; pi <= capTop; pi++) {
                    var P = null;
                    try { P = L.property(pi); } catch (e) {}
                    if (P) dumpProp(P, 0, '', layerProperties);
                }

                var layerRec = {
                    name: layerInfo.type,
                    matchName: layerInfo.matchName,
                    properties: layerProperties
                };
                knowledgeData.layerTypes.push(layerRec);
                counts.layerTypes++;

            }


            // Get ALL available effects programmatically from AE installation
            var allEffects = app.effects;
            var effectsToTest = [];
            var seenEffectMatchNames = {};
            var promptProneMatchTokens = [
                'ADBE Apply Color LUT',
                'ADBE Apply Color LUT2',
                'ADBE Basic Text',
                'ADBE Text',
                'ADBE Text2',
                'ADBE Numbers',
                'ADBE Numbers2',
                'ADBE Text Path'
            ];
            var promptProneDisplayTokens = [
                'Apply Color LUT',
                'Basic Text',
                'Numbers',
                'Path Text'
            ];
            
            // Build complete list of all effects AE knows about
            for (var ai = 0; ai < allEffects.length; ai++) {
                var appEffect = allEffects[ai];
                var matchName = normalizeString(safe(appEffect.matchName));
                var displayName = normalizeString(safe(appEffect.displayName));
                var effectInfo = {
                    matchName: matchName,
                    displayName: displayName
                };
                // Skip pseudo effects: instantiating them mutates AE's global effect registry,
                // causing persistent accumulation (observed +2 per run).
                if (effectInfo.matchName && effectInfo.matchName.indexOf('Pseudo/') === 0) {
                    continue;
                }
                // Skip effects that trigger unavoidable OS dialogs (e.g. LUT picker, legacy text generators)
                var matchNameLower = effectInfo.matchName.toLowerCase();
                var displayNameLower = effectInfo.displayName.toLowerCase();
                var shouldSkip = false;
                for (var pti = 0; pti < promptProneMatchTokens.length && !shouldSkip; pti++) {
                    var token = promptProneMatchTokens[pti];
                    if (token && matchNameLower.indexOf(token.toLowerCase()) !== -1) {
                        shouldSkip = true;
                    }
                }
                if (!shouldSkip) {
                    for (var pdi = 0; pdi < promptProneDisplayTokens.length && !shouldSkip; pdi++) {
                        var dToken = promptProneDisplayTokens[pdi];
                        if (dToken && displayNameLower.indexOf(dToken.toLowerCase()) !== -1) {
                            shouldSkip = true;
                        }
                    }
                }
                if (shouldSkip) {
                    continue;
                }
                // Deduplicate by matchName to avoid accumulation across runs
                if (effectInfo.matchName && !seenEffectMatchNames[effectInfo.matchName]) {
                    effectsToTest.push(effectInfo);
                    seenEffectMatchNames[effectInfo.matchName] = true;
                }
            }


            // Test each discovered effect on actual layers
            var testLayer = tempComp.layers.addSolid([0, 1, 0], 'EXTRACT_EffectTest', 1920, 1080, 1, 10);
            
            for (var ei = 0; ei < effectsToTest.length; ei++) {
                var effectInfo = effectsToTest[ei];
                var effect = null;
                
                try {
                    var effectsGroup = testLayer.property('ADBE Effect Parade');
                    if (effectsGroup) {
                        effect = effectsGroup.addProperty(effectInfo.matchName);
                    }
                } catch (e) {}

                if (effect) {
                    var effectProperties = [];
                    dumpProp(effect, 0, '', effectProperties);

                    var effectRec = {
                        matchName: effectInfo.matchName,
                        displayName: effectInfo.displayName,
                        properties: effectProperties
                    };
                    knowledgeData.effects.push(effectRec);
                    counts.effects++;
                    // Ensure the layer doesn't accumulate effects within or across runs
                    try { effect.remove(); } catch (_) {}
                }

            }


            // Cleanup - remove temp comp
            tempComp.remove();

        } catch (e) {
            // Ensure cleanup on error
            try {
                if (tempComp) tempComp.remove();
            } catch (_) {}
            throw e;
        }

        app.endUndoGroup();

        var manifest = {
            version: 2,
            createdAt: startedAt,
            completedAt: nowIso(),
            panelVersion: (function(){ try { return $.global.CEP_PanelVersion || "UNKNOWN"; } catch(e){ return "UNKNOWN"; } })(),
            aeVersion: (function(){ try { return app.version; } catch(e){ return "UNKNOWN"; } })(),
            platform: (function(){ try { return $.os; } catch(e){ return "UNKNOWN"; } })(),
            outDir: outFolder.fsName,
            files: {
                knowledge: "knowledge.json",
                manifest: "manifest.json"
            },
            counts: counts,
            options: opts
        };
        
        // Write hierarchical knowledge data
        CEP_JSON.writeJSON(knowledgePath, knowledgeData);
        CEP_JSON.writeJSON(manifestPath, manifest);

        return { ok: true, manifestPath: manifestPath, knowledgePath: knowledgePath, counts: counts };
    }

    return { run: run };
})();
