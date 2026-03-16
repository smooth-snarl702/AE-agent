"""
PATCH: 在 Claude spawn 的 env 里注入 ANTHROPIC 认证变量
直接硬编码从 settings.json 读取到的值
"""
import re

# Read settings
settings_path = r'C:\Users\Administrator\.claude\settings.json'
with open(settings_path, 'r', encoding='utf-8-sig') as f:  # utf-8-sig handles BOM
    content = f.read().strip()
    print(f"Settings file size: {len(content)} chars")
    print(f"First 100 chars: {repr(content[:100])}")

import json
settings = json.loads(content)
api_key  = settings['env'].get('ANTHROPIC_AUTH_TOKEN', '')
base_url = settings['env'].get('ANTHROPIC_BASE_URL', 'https://api.anthropic.com')

print(f"\nAPI key prefix: {api_key[:10]}...")
print(f"Base URL: {base_url}")

# Now patch the main JS
SRC = r'f:\aeZAILIX\Atom_3.0.3\extracted\assets\main-Bumuo9MN.js'
with open(SRC, 'r', encoding='utf-8', errors='ignore') as f:
    src = f.read()

# Find the CLAUDE_CODE_DISABLE line in the env object
TARGET = 'CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",\n                ENABLE_TOOL_SEARCH: "auto:30",'
REPLACEMENT = ('CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",\n'
               '                ENABLE_TOOL_SEARCH: "auto:30",\n'
               '                /* PATCH: auth inject */\n'
               f'                ANTHROPIC_API_KEY: "{api_key}",\n'
               f'                ANTHROPIC_BASE_URL: "{base_url}",')

if TARGET in src:
    patched = src.replace(TARGET, REPLACEMENT, 1)
    with open(SRC, 'w', encoding='utf-8') as f:
        f.write(patched)
    print("\n[OK] PATCH applied successfully!")
    # Verify
    if 'ANTHROPIC_API_KEY' in patched:
        print("[OK] ANTHROPIC_API_KEY found in patched file")
    if 'ANTHROPIC_BASE_URL' in patched and 'agentrouter' in patched:
        print("[OK] ANTHROPIC_BASE_URL found in patched file")
else:
    print("\n[FAIL] Target not found. Searching...")
    m = re.search(r'CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC', src)
    if m:
        print(f"Found at pos {m.start()}:")
        print(repr(src[m.start()-100:m.start()+300]))
