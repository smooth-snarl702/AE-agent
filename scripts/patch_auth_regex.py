"""
两个操作：
1. 修改 rD 正则，让 Atom 不误判 auth 错误（只检测真正的登录重定向）
2. 同时检查 agentrouter.org 实际返回的是什么错误
"""
import re

SRC_ORIG = r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.original.js'
SRC_PATCH = r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js'

with open(SRC_ORIG, 'r', encoding='utf-8', errors='ignore') as f:
    orig = f.read()

# OLD: triggers on "auth", "401", "unauthorized" etc - too aggressive
OLD_RD = r'rD = /api.?key|auth|unauthorized|401|invalid.*key|not logged in|\/login/i'
# NEW: only trigger on explicit "not logged in" or "/login" redirect - not on normal "auth" or "401"
NEW_RD = r'rD = /not logged in|\/login|please log in|you must log in/i'

if OLD_RD in orig:
    print("[OK] Original rD pattern found in original file")
else:
    print("[WARN] Not found in original, checking patched file...")

with open(SRC_PATCH, 'r', encoding='utf-8', errors='ignore') as f:
    patched = f.read()

if OLD_RD in patched:
    new_content = patched.replace(OLD_RD, NEW_RD, 1)
    with open(SRC_PATCH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("[OK] PATCH applied - rD regex narrowed")
    print(f"OLD: {OLD_RD}")
    print(f"NEW: {NEW_RD}")
else:
    # Try flexible search
    m = re.search(r'rD\s*=\s*/[^;]+/', patched)
    if m:
        print(f"Found rD at {m.start()}: {m.group()}")
    else:
        print("[FAIL] rD not found in patched file")
