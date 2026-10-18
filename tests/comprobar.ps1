$ErrorActionPreference = 'Stop'
$raiz = Split-Path $PSScriptRoot -Parent
Push-Location $raiz
try {
    Get-ChildItem -Path . -Recurse -File -Filter *.php | ForEach-Object {
        php -l $_.FullName
        if ($LASTEXITCODE -ne 0) { throw "Sintaxis PHP inválida: $($_.Name)" }
    }
    Get-ChildItem -Path js,datos -Recurse -File -Filter *.js | ForEach-Object {
        node --check $_.FullName
        if ($LASTEXITCODE -ne 0) { throw "Sintaxis JavaScript inválida: $($_.Name)" }
    }
    node --test tests/*.test.cjs
    if ($LASTEXITCODE -ne 0) { throw 'Fallaron las pruebas JavaScript/HTTP.' }
    php tests/seguridad.php
    if ($LASTEXITCODE -ne 0) { throw 'Fallaron las pruebas PHP.' }
} finally {
    Pop-Location
}
