<?php
/** FARMASTUDY - Pruebas de validación y límites, sin llamar a Groq. */

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
require_once __DIR__ . '/../php/seguridad.php';
require_once __DIR__ . '/../php/groq-transporte.php';

function comprobar(bool $condicion, string $mensaje): void
{
    if (!$condicion) {
        throw new RuntimeException($mensaje);
    }
}

function rechazar(array $entrada): void
{
    try {
        validarEntradaGroq($entrada, 'modelo-prueba');
    } catch (InvalidArgumentException $error) {
        return;
    }
    throw new RuntimeException('Se aceptó una entrada inválida.');
}

$valida = ['mensajes' => [['role' => 'system', 'content' => 'Ejemplo educativo'], ['role' => 'user', 'content' => 'Caso ficticio']]];
$datos = validarEntradaGroq($valida + ['temperature' => 0, 'max_tokens' => 600], 'modelo-prueba');
comprobar($datos['temperature'] === 0, 'La temperatura cero debe conservarse.');
comprobar($datos['model'] === 'modelo-prueba', 'El modelo debe fijarse en el servidor.');
rechazar([]);
rechazar(['mensajes' => 'texto']);
rechazar(['mensajes' => [['role' => 'user', 'content' => 'sin system']]]);
rechazar($valida + ['modelo' => 'otro']);
rechazar($valida + ['max_tokens' => 601]);
rechazar($valida + ['max_tokens' => '250']);
rechazar($valida + ['temperature' => -1]);
rechazar($valida + ['temperature' => '0.5']);
rechazar($valida + ['url' => 'https://ejemplo.invalid']);
rechazar(['mensajes' => [['role' => 'system', 'content' => 's'], ['role' => 'tool', 'content' => 'x']]]);
rechazar(['mensajes' => [['role' => 'system', 'content' => 's'], ['role' => 'user', 'content' => str_repeat('x', 16001)]]]);
rechazar(['mensajes' => array_merge($valida['mensajes'], [['role' => 'system', 'content' => 'inyectado']])]);
comprobar(origenGroqPermitido(['HTTP_HOST' => 'localhost:8000', 'HTTP_ORIGIN' => 'http://localhost:8000']), 'Origen local válido.');
comprobar(!origenGroqPermitido(['HTTP_HOST' => 'localhost:8000', 'HTTP_ORIGIN' => 'https://otro.invalid']), 'Rechazar otro origen.');
comprobar(!origenGroqPermitido(['HTTP_SEC_FETCH_SITE' => 'cross-site']), 'Rechazar cross-site.');

$baseTemporal = PHP_OS_FAMILY === 'Windows' ? (getenv('LOCALAPPDATA') . '/Temp/opencode') : sys_get_temp_dir();
$directorio = $baseTemporal . '/farmastudy-test-' . bin2hex(random_bytes(8));
try {
    $ahora = 1800000000;
    for ($i = 0; $i < 10; $i++) comprobar(consumirLimiteGroq($directorio, '127.0.0.1', $ahora) === 0, 'Cuota inicial.');
    comprobar(consumirLimiteGroq($directorio, '127.0.0.1', $ahora) === 60, 'Límite por minuto.');
    for ($i = 0; $i < 10; $i++) comprobar(consumirLimiteGroq($directorio, '127.0.0.2', $ahora) === 0, 'Otra IP.');
    comprobar(consumirLimiteGroq($directorio, '127.0.0.3', $ahora) === 60, 'Límite global por minuto.');
    comprobar(consumirLimiteGroq($directorio, '127.0.0.1', $ahora + 60) === 0, 'Reinicio de ventana.');
    for ($ventana = 0; $ventana < 6; $ventana++) {
        for ($i = 0; $i < 10; $i++) {
            comprobar(consumirLimiteGroq($directorio, '127.0.0.5', $ahora + 3600 + $ventana * 60) === 0, 'Cuota por hora.');
        }
    }
    comprobar(consumirLimiteGroq($directorio, '127.0.0.5', $ahora + 3960) > 0, 'Límite por hora.');
    $estado = json_decode(file_get_contents($directorio . '/groq.json'), true, 32, JSON_THROW_ON_ERROR);
    comprobar(!str_contains(file_get_contents($directorio . '/groq.json'), '127.0.0.1'), 'No guardar IP en claro.');
    $estado['global_dia']['total'] = 200;
    file_put_contents($directorio . '/groq.json', json_encode($estado, JSON_THROW_ON_ERROR));
    comprobar(consumirLimiteGroq($directorio, '127.0.0.4', $ahora + 4020) > 0, 'Límite diario global.');
    file_put_contents($directorio . '/groq.json', '{datos rotos');
    $rechazado = false;
    try {
        consumirLimiteGroq($directorio, '127.0.0.1', $ahora);
    } catch (Throwable $error) {
        $rechazado = true;
    }
    comprobar($rechazado, 'Un contador corrupto debe fallar cerrado.');
} finally {
    if (is_file($directorio . '/groq.json')) unlink($directorio . '/groq.json');
    if (is_dir($directorio)) rmdir($directorio);
}

$tls = opcionesTlsGroq('', 'Linux');
comprobar($tls[CURLOPT_SSL_VERIFYPEER] === true, 'Mantener verificación de certificados.');
comprobar($tls[CURLOPT_SSL_VERIFYHOST] === 2, 'Mantener verificación del hostname.');
comprobar(!isset($tls[CURLOPT_SSL_OPTIONS]), 'No alterar la confianza del sistema en Linux.');
if (defined('CURLSSLOPT_NATIVE_CA')) {
    $tlsWindows = opcionesTlsGroq('', 'Windows');
    comprobar($tlsWindows[CURLOPT_SSL_OPTIONS] === CURLSSLOPT_NATIVE_CA, 'Usar confianza nativa de Windows.');
    comprobar($tlsWindows[CURLOPT_SSL_VERIFYPEER] === true, 'No desactivar TLS en Windows.');
}
$casos = [
    [false, 0, 60, 'certificado_tls', 502],
    [false, 0, 28, 'tiempo_agotado', 504],
    [false, 0, 6, 'conexion_groq', 502],
    ['detalle interno', 401, 0, 'autenticacion_groq', 502],
    ['detalle interno', 403, 0, 'permisos_groq', 502],
    ['detalle interno', 429, 0, 'cuota_groq', 429],
    ['detalle interno', 404, 0, 'modelo_groq', 502],
    ['detalle interno', 400, 0, 'solicitud_groq', 502],
    ['detalle interno', 503, 0, 'servicio_groq', 502],
    ['{invalido', 200, 0, 'respuesta_groq', 502],
];
foreach ($casos as [$cuerpo, $http, $errno, $codigo, $estado]) {
    $resultado = evaluarRespuestaGroq($cuerpo, $http, $errno);
    comprobar($resultado['codigo'] === $codigo && $resultado['estado'] === $estado, 'Clasificar error de transporte.');
    comprobar(!str_contains($resultado['error'], 'detalle interno'), 'No exponer detalles del proveedor.');
}
$correcta = evaluarRespuestaGroq('{"choices":[{"message":{"content":"Respuesta simulada"}}]}', 200, 0);
comprobar($correcta['estado'] === 200 && $correcta['contenido'] === 'Respuesta simulada', 'Conservar una respuesta válida.');

echo "OK: validación, origen, límites y transporte HTTPS del proxy (sin acceso a Groq).\n";
