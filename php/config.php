<?php
/** FARMASTUDY - Configuración sin credenciales. */

$raizPublica = realpath(dirname(__DIR__));
$directorioPrivado = dirname(__DIR__, 2) . '/FarmatStudy-private';
$rutaPrivada = getenv('FARMASTUDY_CONFIG_FILE') ?: $directorioPrivado . '/config.php';
$claveEntorno = getenv('GROQ_API_KEY');
$clave = $claveEntorno !== false ? trim($claveEntorno) : '';
$iaHabilitada = getenv('FARMASTUDY_AI_ENABLED') !== '0';

if ($iaHabilitada && $claveEntorno === false && is_file($rutaPrivada)) {
    $rutaReal = realpath($rutaPrivada);
    $raizNormalizada = strtolower(str_replace('\\', '/', $raizPublica)) . '/';
    $rutaNormalizada = strtolower(str_replace('\\', '/', $rutaReal));
    if (!str_starts_with($rutaNormalizada, $raizNormalizada) && is_readable($rutaReal)) {
        require_once $rutaReal;
        $clave = defined('GROQ_API_KEY') ? trim((string) GROQ_API_KEY) : '';
    }
}

return [
    'groq_api_key' => $iaHabilitada ? $clave : '',
    'groq_model' => 'llama-3.3-70b-versatile',
    'ca_file' => getenv('FARMASTUDY_CA_FILE') ?: '',
    'ia_disponible' => $iaHabilitada && $clave !== '' && extension_loaded('curl'),
    'rate_dir' => getenv('FARMASTUDY_RATE_DIR') ?: $directorioPrivado . '/limites',
];
