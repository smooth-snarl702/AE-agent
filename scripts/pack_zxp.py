
"""
打包 Atom 3.0.3 -> .zxp
方案 A: 纯 ZIP 打包（需 PlayerDebugMode=1）
"""
import zipfile, os, shutil
from pathlib import Path

SRC_DIR = Path(r'f:\aeZAILIX\Atom_3.0.3\extracted')
OUT_ZXP = Path(r'f:\aeZAILIX\Atom_3.0.3\Atom_3.0.3_patched.zxp')

# Files/dirs to exclude from packaging
EXCLUDE = {
    'main-Bumuo9MN.original.js',   # our backup
    '__pycache__',
    '.DS_Store',
    'Thumbs.db',
}

total_files = 0
total_bytes = 0

with zipfile.ZipFile(OUT_ZXP, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
    for path in sorted(SRC_DIR.rglob('*')):
        # Skip excluded
        if any(ex in path.parts or path.name == ex for ex in EXCLUDE):
            continue
        if not path.is_file():
            continue

        rel = path.relative_to(SRC_DIR)
        arcname = str(rel).replace('\\', '/')  # always forward slashes in zip

        zf.write(path, arcname)
        total_files += 1
        total_bytes += path.stat().st_size
        print(f'  + {arcname}  ({path.stat().st_size:,})')

print()
print(f'Packed {total_files} files, {total_bytes/1024/1024:.2f} MB uncompressed')
print(f'Output: {OUT_ZXP}')
print(f'ZXP size: {OUT_ZXP.stat().st_size/1024/1024:.2f} MB')
print()
print('Install instructions:')
print('  1. Set PlayerDebugMode=1 in registry')
print('  2. Extract ZXP to CEP extensions folder')
print('     OR use Adobe Extension Manager / AEFT Direct Install')
