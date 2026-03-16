import os

with open(r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js','r',encoding='utf-8',errors='ignore') as f:
    c = f.read()

checks = [
    ('vN -> authorized:!0 by default',
        'status: "paid", paid: !0, trialActive: !1, authorized: !0' in c),
    ('gN() early return present',
        'PATCH_GN_ORIG' in c),
    ('TN() -> always stage=ready',
        'return { stage: "ready", reason: null }; }' in c),
    ('OpenAI ATOM_CUSTOM_BASE_URL',
        'ATOM_CUSTOM_BASE_URL' in c),
    ('xN() ATOM_API_KEY fallback',
        'ATOM_API_KEY' in c),
    ('Original backup exists',
        os.path.exists(r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.original.js')),
]

print('=== PATCH VERIFICATION ===')
all_ok = True
for name, ok in checks:
    mark = '[OK]  ' if ok else '[FAIL]'
    print(f'  {mark} {name}')
    if not ok:
        all_ok = False

print()
print('Result:', 'ALL PATCHES CONFIRMED' if all_ok else 'SOME PATCHES MISSING')
