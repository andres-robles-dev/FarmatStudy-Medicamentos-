<?php
/** FARMASTUDY - Proxy de IA opcional, sin exposición de credenciales. */

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function errorGroq(int $estado, string $mensaje, string $codigo = 'solicitud_invalida'): never
{
    http_response_code($estado);
    echo json_encode(['error' => $mensaje, 'codigo' => $codigo], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    errorGroq(405, 'Método no permitido.');
}

require_once __DIR__ . '/seguridad.php';
require_once __DIR__ . '/groq-transporte.php';
if (!origenGroqPermitido($_SERVER)) {
    errorGroq(403, 'Origen no permitido.');
}
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    errorGroq(415, 'Se requiere Content-Type application/json.');
}
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) {
    errorGroq(413, 'Solicitud demasiado grande.');
}
$cuerpo = file_get_contents('php://input', false, null, 0, 65537);
if ($cuerpo === false || strlen($cuerpo) > 65536) {
    errorGroq(413, 'Solicitud demasiado grande.');
}
try {
    $entrada = json_decode($cuerpo, true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($entrada) || array_is_list($entrada)) {
        errorGroq(400, 'Se requiere un objeto JSON.');
    }
    $config = require __DIR__ . '/config.php';
    $datos = validarEntradaGroq($entrada, $config['groq_model']);
} catch (JsonException | InvalidArgumentException $error) {
    errorGroq(400, 'Solicitud inválida o fuera de los límites permitidos.');
} catch (Throwable $error) {
    errorGroq(503, 'La IA no está disponible. Puedes usar el catálogo local.', 'configuracion_ia');
}
if (!$config['ia_disponible']) {
    errorGroq(503, 'La IA no está configurada. Puedes usar el catálogo local.', 'ia_no_configurada');
}
try {
    $espera = consumirLimiteGroq($config['rate_dir'], $_SERVER['REMOTE_ADDR'] ?? 'desconocida');
    if ($espera > 0) {
        header('Retry-After: ' . $espera);
        errorGroq(429, 'Límite de uso local alcanzado. Continúa con el catálogo local.', 'limite_local');
    }
} catch (Throwable $error) {
    errorGroq(503, 'El servidor no pudo preparar el control de uso de IA. Puedes usar el catálogo local.', 'control_uso');
}

try {
    $opcionesTls = opcionesTlsGroq($config['ca_file']);
} catch (Throwable $error) {
    errorGroq(503, 'El archivo de certificados configurado no está disponible. Revisa FARMASTUDY_CA_FILE.', 'configuracion_tls');
}

$ch = curl_init('https://api.groq.com/openai/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $config['groq_api_key'], 'Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($datos, JSON_THROW_ON_ERROR),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 20,
    CURLOPT_FOLLOWLOCATION => false,
] + $opcionesTls);
$respuesta = curl_exec($ch);
$codigo = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$errorCurl = curl_errno($ch);
curl_close($ch);
$resultado = evaluarRespuestaGroq($respuesta, $codigo, $errorCurl);
if ($resultado['estado'] !== 200) {
    if ($resultado['estado'] === 429) {
        header('Retry-After: 60');
    }
    errorGroq($resultado['estado'], $resultado['error'], $resultado['codigo']);
}
echo json_encode(['choices' => [['message' => ['content' => $resultado['contenido']]]]], JSON_UNESCAPED_UNICODE);
