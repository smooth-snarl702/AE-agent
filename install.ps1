# ─── Atom 3.0.3 Patched - One-Click Installer ───
# Run as Administrator: right-click -> Run with PowerShell

Write-Host "`n=== Atom 3.0.3 Patched Installer ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Enable PlayerDebugMode (bypass CEP signature check)
Write-Host "[1/3] Setting PlayerDebugMode..." -ForegroundColor Yellow
$csxsVersions = @("11", "10", "9")
foreach ($ver in $csxsVersions) {
    $regPath = "HKCU:\Software\Adobe\CSXS.$ver"
    if (-not (Test-Path $regPath)) {
        New-Item -Path $regPath -Force | Out-Null
    }
    Set-ItemProperty -Path $regPath -Name "PlayerDebugMode" -Value "1" -Type String
    Write-Host "  Set CSXS.$ver PlayerDebugMode=1" -ForegroundColor Green
}

# Step 2: Copy files to CEP extensions folder
Write-Host ""
Write-Host "[2/3] Installing extension files..." -ForegroundColor Yellow

$targetDir = "$env:APPDATA\Adobe\CEP\extensions\Atom"
$sourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$extractedDir = Join-Path $sourceDir "extracted"

if (-not (Test-Path $extractedDir)) {
    Write-Host "  ERROR: 'extracted' folder not found at $extractedDir" -ForegroundColor Red
    exit 1
}

# Backup existing installation if present
if (Test-Path $targetDir) {
    $backupDir = "${targetDir}_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    Write-Host "  Backing up existing install to $backupDir" -ForegroundColor DarkYellow
    Move-Item -Path $targetDir -Destination $backupDir -Force
}

# Create target directory
New-Item -Path $targetDir -ItemType Directory -Force | Out-Null

# Copy all files (excluding backup files)
Get-ChildItem -Path $extractedDir -Recurse | Where-Object {
    $_.Name -ne "main-Bumuo9MN.original.js"
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($extractedDir.Length)
    $destPath = Join-Path $targetDir $relativePath
    
    if ($_.PSIsContainer) {
        New-Item -Path $destPath -ItemType Directory -Force | Out-Null
    } else {
        $destDir = Split-Path -Parent $destPath
        if (-not (Test-Path $destDir)) {
            New-Item -Path $destDir -ItemType Directory -Force | Out-Null
        }
        Copy-Item -Path $_.FullName -Destination $destPath -Force
    }
}

$fileCount = (Get-ChildItem -Path $targetDir -Recurse -File).Count
Write-Host "  Installed $fileCount files to $targetDir" -ForegroundColor Green

# Step 3: Verify
Write-Host ""
Write-Host "[3/3] Verifying installation..." -ForegroundColor Yellow

$checks = @(
    @{ Path = "$targetDir\index.html"; Desc = "index.html" },
    @{ Path = "$targetDir\assets\main-Bumuo9MN.js"; Desc = "main JS (patched)" },
    @{ Path = "$targetDir\CSXS\manifest.xml"; Desc = "manifest.xml" },
    @{ Path = "$targetDir\CSInterface.js"; Desc = "CSInterface.js" },
    @{ Path = "$targetDir\jsx\Main.jsx"; Desc = "Main.jsx" }
)

$allOk = $true
foreach ($check in $checks) {
    if (Test-Path $check.Path) {
        Write-Host "  [OK]   $($check.Desc)" -ForegroundColor Green
    } else {
        Write-Host "  [FAIL] $($check.Desc)" -ForegroundColor Red
        $allOk = $false
    }
}

# Check patched content
$mainJs = Get-Content "$targetDir\assets\main-Bumuo9MN.js" -Raw -Encoding UTF8
if ($mainJs -match "PATCH_GN_ORIG") {
    Write-Host "  [OK]   Authorization patches present" -ForegroundColor Green
} else {
    Write-Host "  [WARN] Authorization patches missing" -ForegroundColor Yellow
}
if ($mainJs -match "ATOM_CUSTOM_BASE_URL") {
    Write-Host "  [OK]   Custom API support present" -ForegroundColor Green
} else {
    Write-Host "  [WARN] Custom API support missing" -ForegroundColor Yellow
}
if ($mainJs -match "__atom_api_btn__") {
    Write-Host "  [OK]   API config UI panel present" -ForegroundColor Green
} else {
    Write-Host "  [WARN] API config UI panel missing" -ForegroundColor Yellow
}

Write-Host ""
if ($allOk) {
    Write-Host "=== Installation Complete ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Restart After Effects"
    Write-Host "  2. Window -> Extensions -> Atom"
    Write-Host "  3. Click the red button (bottom-right) to set your API Key"
    Write-Host ""
    Write-Host "Installed to: $targetDir" -ForegroundColor DarkGray
} else {
    Write-Host "=== Installation had issues, check above ===" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to exit"
