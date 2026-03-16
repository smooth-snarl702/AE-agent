
import re

SRC    = r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js'
BACKUP = r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.original.js'

with open(BACKUP, 'r', encoding='utf-8', errors='ignore') as f:
    src = f.read()

patched = src
patch_log = []

# ── PATCH 1: vN default state ─────────────────────────────────────
OLD1 = ('const vN = { status: "unknown", paid: !1, '
        'trialActive: !1, authorized: !1 }')
NEW1 = ('const vN = { status: "paid", paid: !0, '
        'trialActive: !1, authorized: !0 }')
if OLD1 in patched:
    patched = patched.replace(OLD1, NEW1, 1)
    patch_log.append('PATCH 1 OK : vN -> authorized:true by default')
else:
    patch_log.append('PATCH 1 FAIL: vN not found')

# ── PATCH 2: gN() early-return paid ──────────────────────────────
OLD2 = 'function gN({ entitlement: a, hasSession: e, localTrialActive: t }) {'
NEW2 = ('function gN({ entitlement: a, hasSession: e, localTrialActive: t }) {'
        ' return { status: "paid", paid: !0, trialActive: !1, authorized: !0 };'
        ' /* PATCH_GN_ORIG: */')
if OLD2 in patched:
    patched = patched.replace(OLD2, NEW2, 1)
    patch_log.append('PATCH 2 OK : gN() -> always paid+authorized')
else:
    patch_log.append('PATCH 2 FAIL: gN head not found')

# ── PATCH 3: TN() always return ready ────────────────────────────
m3 = re.search(r'function TN\(\{[^}]+\}\)\s*\{[^}]*\}', patched)
if m3:
    old_tn   = m3.group(0)
    func_sig = re.match(r'(function TN\([^)]+\)\s*)', old_tn).group(1)
    new_tn   = func_sig + '{ return { stage: "ready", reason: null }; }'
    patched  = patched.replace(old_tn, new_tn, 1)
    patch_log.append('PATCH 3 OK : TN() -> always stage=ready')
else:
    patch_log.append('PATCH 3 FAIL: TN() not found')

# ── PATCH 4: OpenAI baseURL from localStorage ─────────────────────
OLD4 = 'baseURL: e || "https://api.openai.com/v1"'
NEW4 = ('baseURL: (typeof localStorage!=="undefined" &&'
        ' localStorage.getItem("ATOM_CUSTOM_BASE_URL"))||'
        ' e || "https://api.openai.com/v1"')
count4 = patched.count(OLD4)
if count4:
    patched = patched.replace(OLD4, NEW4, 1)
    patch_log.append(f'PATCH 4 OK : OpenAI baseURL -> localStorage ATOM_CUSTOM_BASE_URL (found {count4}x)')
else:
    patch_log.append('PATCH 4 FAIL: OpenAI baseURL pattern not found')

# ── PATCH 5: xN() api key from localStorage ──────────────────────
LS_INJECT = (
    '\n    if(typeof localStorage!=="undefined"){'
    'var _lk=localStorage.getItem("ATOM_API_KEY");'
    'if(_lk&&_lk.trim())return _lk.trim();}\n    '
)
OLD5_HEAD = ('function xN() {\n'
             '    var n;\n'
             '    const a = (n = ua.getCurrentSettings)')
NEW5_HEAD = 'function xN() {\n    var n;' + LS_INJECT + 'const a = (n = ua.getCurrentSettings)'
if OLD5_HEAD in patched:
    patched = patched.replace(OLD5_HEAD, NEW5_HEAD, 1)
    patch_log.append('PATCH 5 OK : xN() -> ATOM_API_KEY from localStorage')
else:
    patch_log.append('PATCH 5 SKIP: xN head mismatch (non-critical)')

# ── Write ────────────────────────────────────────────────────────
with open(SRC, 'w', encoding='utf-8') as f:
    f.write(patched)

print('=== PATCH RESULTS ===')
for log in patch_log:
    mark = 'OK' if 'OK' in log else ('SKIP' if 'SKIP' in log else 'FAIL')
    print(f'  [{mark}] {log}')
print()
print(f'Written: {SRC}')
print(f'Size: original={len(src):,}  patched={len(patched):,}  delta={len(patched)-len(src):+d}')
