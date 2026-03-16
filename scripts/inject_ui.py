
"""
Atom 前端 UI 补丁 - 注入自定义 API 配置面板
在 boot-loader:remove 事件后挂载一个悬浮 API 设置按钮
"""

INJECT_TRIGGER = 'window.addEventListener("boot-loader:remove", e, { once: !0 });'

# The UI code to inject - runs after app boots
UI_CODE = r"""
/* ─── ATOM CUSTOM API PANEL INJECTION ─── */
(function injectAtomApiPanel() {
  function mount() {
    if (document.getElementById('__atom_api_panel__')) return;

    // ── Styles ──────────────────────────────────────────────────
    var style = document.createElement('style');
    style.textContent = [
      '#__atom_api_btn__{',
        'position:fixed;bottom:12px;right:12px;z-index:99999;',
        'width:32px;height:32px;border-radius:50%;',
        'background:var(--color-accent-primary,#e61010);',
        'border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;',
        'box-shadow:0 2px 8px rgba(0,0,0,.45);',
        'transition:transform .15s,box-shadow .15s;',
        'color:#fff;font-size:14px;font-weight:700;',
        'opacity:.75;',
      '}',
      '#__atom_api_btn__:hover{opacity:1;transform:scale(1.1);box-shadow:0 4px 14px rgba(0,0,0,.55);}',
      '#__atom_api_panel__{',
        'position:fixed;bottom:52px;right:12px;z-index:99999;',
        'width:320px;background:var(--color-surface-raised,#3a3a3a);',
        'border:1px solid var(--color-stroke-subtle,#404040);',
        'border-radius:10px;padding:16px;',
        'box-shadow:0 8px 28px rgba(0,0,0,.5);',
        'font-family:var(--font-suse,-apple-system,BlinkMacSystemFont,sans-serif);',
        'font-size:13px;color:var(--color-ink-primary,#e0e0e0);',
        'display:none;',
      '}',
      '#__atom_api_panel__ h4{margin:0 0 12px;font-size:14px;font-weight:600;',
        'color:var(--color-ink-emphasis,#f2f2f2);display:flex;justify-content:space-between;align-items:center;}',
      '#__atom_api_panel__ label{display:block;font-size:11px;',
        'color:var(--color-ink-muted,#888);margin-bottom:4px;margin-top:10px;text-transform:uppercase;letter-spacing:.06em;}',
      '#__atom_api_panel__ input{',
        'width:100%;box-sizing:border-box;',
        'background:var(--color-surface-sunken,#1e1e1e);',
        'border:1px solid var(--color-stroke-subtle,#404040);',
        'border-radius:6px;padding:7px 10px;font-size:12px;',
        'color:var(--color-ink-primary,#e0e0e0);outline:none;',
        'font-family:var(--font-suse-mono,monospace);',
      '}',
      '#__atom_api_panel__ input:focus{border-color:var(--color-accent-primary,#e61010);}',
      '#__atom_api_panel__ .ap-row{display:flex;gap:8px;margin-top:14px;}',
      '#__atom_api_panel__ button.ap-save{',
        'flex:1;padding:7px;border-radius:6px;border:none;cursor:pointer;',
        'background:var(--color-accent-primary,#e61010);color:#fff;font-size:12px;font-weight:600;',
        'transition:background .15s;',
      '}',
      '#__atom_api_panel__ button.ap-save:hover{background:var(--color-accent-hover,#ff1f1f);}',
      '#__atom_api_panel__ button.ap-clear{',
        'padding:7px 12px;border-radius:6px;border:1px solid var(--color-stroke-subtle,#404040);',
        'background:transparent;color:var(--color-ink-muted,#888);font-size:12px;cursor:pointer;',
        'transition:border-color .15s,color .15s;',
      '}',
      '#__atom_api_panel__ button.ap-clear:hover{border-color:var(--color-state-danger,#f87171);color:var(--color-state-danger,#f87171);}',
      '#__atom_api_panel__ .ap-status{margin-top:10px;font-size:11px;',
        'color:var(--color-state-positive,#4ade80);min-height:16px;text-align:center;}',
      '#__atom_api_panel__ .ap-hint{font-size:11px;color:var(--color-ink-soft,#6b6b6b);',
        'margin-top:6px;line-height:1.5;}',
    ].join('');
    document.head.appendChild(style);

    // ── Toggle button ────────────────────────────────────────────
    var btn = document.createElement('button');
    btn.id = '__atom_api_btn__';
    btn.title = 'Custom API Settings';
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>';
    document.body.appendChild(btn);

    // ── Panel ────────────────────────────────────────────────────
    var panel = document.createElement('div');
    panel.id = '__atom_api_panel__';
    panel.innerHTML = [
      '<h4>',
        '<span>🔑 Custom API Config</span>',
        '<span id="__ap_close__" style="cursor:pointer;font-size:18px;line-height:1;color:var(--color-ink-muted,#888)">×</span>',
      '</h4>',
      '<label>API Key</label>',
      '<input id="__ap_key__" type="password" placeholder="sk-... or openrouter key" autocomplete="off"/>',
      '<label>Base URL</label>',
      '<input id="__ap_url__" type="text" placeholder="https://openrouter.ai/api/v1" autocomplete="off"/>',
      '<p class="ap-hint">Leave Base URL empty to use OpenAI official endpoint.</p>',
      '<div class="ap-row">',
        '<button class="ap-save" id="__ap_save__">Save & Reload</button>',
        '<button class="ap-clear" id="__ap_clear__">Clear</button>',
      '</div>',
      '<div class="ap-status" id="__ap_status__"></div>',
    ].join('');
    document.body.appendChild(panel);

    // ── Load current values ──────────────────────────────────────
    var keyInput = document.getElementById('__ap_key__');
    var urlInput = document.getElementById('__ap_url__');
    var status   = document.getElementById('__ap_status__');

    try {
      var savedKey = localStorage.getItem('ATOM_API_KEY') || '';
      var savedUrl = localStorage.getItem('ATOM_CUSTOM_BASE_URL') || '';
      keyInput.value = savedKey;
      urlInput.value = savedUrl;
      if (savedKey || savedUrl) status.textContent = 'Custom config active';
    } catch(e) {}

    // ── Events ───────────────────────────────────────────────────
    btn.addEventListener('click', function() {
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('__ap_close__').addEventListener('click', function() {
      panel.style.display = 'none';
    });

    document.getElementById('__ap_save__').addEventListener('click', function() {
      try {
        var k = keyInput.value.trim();
        var u = urlInput.value.trim();
        if (k) localStorage.setItem('ATOM_API_KEY', k);
        else   localStorage.removeItem('ATOM_API_KEY');
        if (u) localStorage.setItem('ATOM_CUSTOM_BASE_URL', u);
        else   localStorage.removeItem('ATOM_CUSTOM_BASE_URL');
        status.style.color = 'var(--color-state-positive,#4ade80)';
        status.textContent = 'Saved! Reloading...';
        setTimeout(function() { location.reload(); }, 800);
      } catch(e) {
        status.style.color = 'var(--color-state-danger,#f87171)';
        status.textContent = 'Error: ' + e.message;
      }
    });

    document.getElementById('__ap_clear__').addEventListener('click', function() {
      try {
        localStorage.removeItem('ATOM_API_KEY');
        localStorage.removeItem('ATOM_CUSTOM_BASE_URL');
        keyInput.value = '';
        urlInput.value = '';
        status.style.color = 'var(--color-state-warning,#fbbf24)';
        status.textContent = 'Cleared. Reloading...';
        setTimeout(function() { location.reload(); }, 800);
      } catch(e) {}
    });

    // Close on outside click
    document.addEventListener('click', function(ev) {
      if (!panel.contains(ev.target) && ev.target !== btn) {
        panel.style.display = 'none';
      }
    }, true);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(mount, 600);
  } else {
    window.addEventListener('DOMContentLoaded', function() { setTimeout(mount, 600); });
  }
  window.addEventListener('boot-loader:remove', function() { setTimeout(mount, 300); }, { once: true });
})();
/* ─── END ATOM CUSTOM API PANEL ─── */
"""

with open(r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js','r',encoding='utf-8',errors='ignore') as f:
    src = f.read()

INJECT_AFTER = 'window.addEventListener("boot-loader:remove", e, { once: !0 });'

if INJECT_AFTER in src:
    patched = src.replace(INJECT_AFTER, INJECT_AFTER + UI_CODE, 1)
    print(f'[OK] UI code injected after boot-loader:remove listener')
    print(f'     Injection size: +{len(UI_CODE)} chars')
else:
    # fallback: append at end of file before last semicolon
    patched = src + '\n' + UI_CODE
    print('[FALLBACK] UI code appended at end of file')

with open(r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js','w',encoding='utf-8') as f:
    f.write(patched)

# verify
if 'ATOM_API_PANEL_INJECTION' in patched or '__atom_api_btn__' in patched:
    print('[OK] Panel code confirmed in output file')
    print(f'     Final size: {len(patched):,} chars')
else:
    print('[FAIL] Panel code not found in output')
