<?php
/** FARMASTUDY - Router seguro para el servidor de desarrollo de PHP. */

$ruta = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');
$archivo = realpath(__DIR__ . ($ruta === '/' ? '/index.php' : $ruta));
$raiz = str_replace('\\', '/', __DIR__) . '/';
$normalizado = $archivo ? str_replace('\\', '/', $archivo) : '';
$relativo = $archivo && str_starts_with(strtolower($normalizado), strtolower($raiz))
    ? substr($normalizado, strlen($raiz)) : '';
$phpPermitido = in_array($relativo, ['index.php', 'php/api-groq.php'], true);
$estatico = preg_match('~^(estilo|js|datos|iconos|recursos|docs/capturas)/[\w/.-]+\.(css|js|svg|png|jpg|jpeg|webp|ico|woff2?)$~i', $relativo);
if (!$archivo || !is_file($archivo) || (!$phpPermitido && !$estatico) || preg_match('~(^|/)\.~', $relativo)) {
    http_response_code(404);
    echo 'No encontrado';
    return true;
}
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-Frame-Options: DENY');
if ($phpPermitido) {
    require $archivo;
    return true;
}
return false;
