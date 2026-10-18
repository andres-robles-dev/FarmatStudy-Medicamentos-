<?php
/** FARMASTUDY - Validación y límites del proxy educativo. */

function validarEntradaGroq(array $entrada, string $modelo): array
{
    $permitidos = ['mensajes', 'modelo', 'max_tokens', 'temperature', 'temperatura'];
    if (array_diff(array_keys($entrada), $permitidos)) {
        throw new InvalidArgumentException('Parámetros no permitidos.');
    }
    if (isset($entrada['modelo']) && $entrada['modelo'] !== $modelo) {
        throw new InvalidArgumentException('Modelo no permitido.');
    }
    $mensajes = $entrada['mensajes'] ?? null;
    if (!is_array($mensajes) || !array_is_list($mensajes) || count($mensajes) < 2 || count($mensajes) > 12) {
        throw new InvalidArgumentException('Se requieren entre 2 y 12 mensajes.');
    }
    $total = 0;
    $limpios = [];
    foreach ($mensajes as $indice => $mensaje) {
        if (!is_array($mensaje) || array_diff(array_keys($mensaje), ['role', 'content']) ||
            !isset($mensaje['role'], $mensaje['content']) || !is_string($mensaje['content']) ||
            !in_array($mensaje['role'], ['system', 'user', 'assistant'], true) ||
            ($mensaje['role'] === 'system' && $indice !== 0)) {
            throw new InvalidArgumentException('Formato de mensaje inválido.');
        }
        $longitud = strlen($mensaje['content']);
        $total += $longitud;
        if (trim($mensaje['content']) === '' || $longitud > 16000 || $total > 36000) {
            throw new InvalidArgumentException('La conversación supera el tamaño permitido.');
        }
        $limpios[] = ['role' => $mensaje['role'], 'content' => $mensaje['content']];
    }
    if ($limpios[0]['role'] !== 'system' || end($limpios)['role'] !== 'user') {
        throw new InvalidArgumentException('La conversación debe comenzar con system y terminar con user.');
    }
    $tokens = $entrada['max_tokens'] ?? 250;
    $temperatura = $entrada['temperature'] ?? $entrada['temperatura'] ?? 0.7;
    if (!is_int($tokens) || $tokens < 1 || $tokens > 600) {
        throw new InvalidArgumentException('max_tokens debe ser un entero entre 1 y 600.');
    }
    if ((!is_int($temperatura) && !is_float($temperatura)) || !is_finite((float) $temperatura) ||
        $temperatura < 0 || $temperatura > 1) {
        throw new InvalidArgumentException('La temperatura debe estar entre 0 y 1.');
    }
    return ['model' => $modelo, 'messages' => $limpios, 'max_tokens' => $tokens, 'temperature' => $temperatura];
}

function origenGroqPermitido(array $servidor): bool
{
    if (isset($servidor['HTTP_SEC_FETCH_SITE']) &&
        !in_array($servidor['HTTP_SEC_FETCH_SITE'], ['same-origin', 'none'], true)) {
        return false;
    }
    if (!isset($servidor['HTTP_ORIGIN'])) {
        return true;
    }
    $esHttps = !empty($servidor['HTTPS']) && $servidor['HTTPS'] !== 'off';
    $esperado = ($esHttps ? 'https://' : 'http://') . ($servidor['HTTP_HOST'] ?? '');
    return strtolower($servidor['HTTP_ORIGIN']) === strtolower($esperado);
}

function consumirLimiteGroq(string $directorio, string $ip, ?int $ahora = null): int
{
    $ahora = $ahora ?? time();
    if (!is_dir($directorio) && !@mkdir($directorio, 0700, true) && !is_dir($directorio)) {
        throw new RuntimeException('No se puede preparar el control de uso.');
    }
    $ruta = realpath($directorio);
    $raiz = strtolower(str_replace('\\', '/', realpath(dirname(__DIR__)))) . '/';
    $normalizada = strtolower(str_replace('\\', '/', $ruta)) . '/';
    if (str_starts_with($normalizada, $raiz)) {
        throw new RuntimeException('Los contadores deben estar fuera de la raíz pública.');
    }
    $archivo = @fopen($ruta . '/groq.json', 'c+');
    if (!$archivo) {
        throw new RuntimeException('No se puede abrir el control de uso.');
    }
    @chmod($ruta . '/groq.json', 0600);
    try {
        if (!flock($archivo, LOCK_EX)) {
            throw new RuntimeException('No se puede bloquear el control de uso.');
        }
        $texto = stream_get_contents($archivo);
        $estado = $texto === '' ? [] : json_decode($texto, true, 32, JSON_THROW_ON_ERROR);
        if (!is_array($estado)) {
            throw new RuntimeException('Control de uso inválido.');
        }
        $estado['ips'] = array_filter($estado['ips'] ?? [], function ($registro) use ($ahora) {
            return ($registro['ultimo'] ?? 0) > $ahora - 3600;
        });
        $id = hash('sha256', $ip);
        if (!isset($estado['ips'][$id]) && count($estado['ips']) >= 4096) {
            return 3600;
        }
        $reglas = [
            ['clave' => 'ip_minuto', 'segundos' => 60, 'maximo' => 10, 'ip' => true],
            ['clave' => 'ip_hora', 'segundos' => 3600, 'maximo' => 60, 'ip' => true],
            ['clave' => 'global_minuto', 'segundos' => 60, 'maximo' => 20, 'ip' => false],
            ['clave' => 'global_dia', 'segundos' => 86400, 'maximo' => 200, 'ip' => false],
        ];
        $espera = 0;
        foreach ($reglas as $regla) {
            if ($regla['ip']) {
                $contenedor =& $estado['ips'][$id];
            } else {
                $contenedor =& $estado;
            }
            $ventana = intdiv($ahora, $regla['segundos']);
            $contador = $contenedor[$regla['clave']] ?? [];
            if (($contador['ventana'] ?? -1) !== $ventana) {
                $contador = ['ventana' => $ventana, 'total' => 0];
            }
            if ($contador['total'] >= $regla['maximo']) {
                $espera = max($espera, ($ventana + 1) * $regla['segundos'] - $ahora);
            }
            $contenedor[$regla['clave']] = $contador;
            unset($contenedor);
        }
        if ($espera > 0) {
            return $espera;
        }
        foreach ($reglas as $regla) {
            if ($regla['ip']) {
                $estado['ips'][$id][$regla['clave']]['total']++;
            } else {
                $estado[$regla['clave']]['total']++;
            }
        }
        $estado['ips'][$id]['ultimo'] = $ahora;
        $json = json_encode($estado, JSON_THROW_ON_ERROR);
        rewind($archivo);
        if (!ftruncate($archivo, 0) || fwrite($archivo, $json) !== strlen($json) || !fflush($archivo)) {
            throw new RuntimeException('No se puede guardar el control de uso.');
        }
        return 0;
    } finally {
        flock($archivo, LOCK_UN);
        fclose($archivo);
    }
}
