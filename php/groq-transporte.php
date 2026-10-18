<?php
/** FARMASTUDY - Transporte HTTPS y errores públicos sin datos sensibles. */

function opcionesTlsGroq(string $archivoCA = '', string $plataforma = PHP_OS_FAMILY): array
{
    $opciones = [CURLOPT_SSL_VERIFYPEER => true, CURLOPT_SSL_VERIFYHOST => 2];
    if ($archivoCA !== '') {
        if (!is_file($archivoCA) || !is_readable($archivoCA)) {
            throw new RuntimeException('El archivo de certificados no está disponible.');
        }
        $opciones[CURLOPT_CAINFO] = $archivoCA;
    } elseif ($plataforma === 'Windows' && defined('CURLSSLOPT_NATIVE_CA')) {
        $opciones[CURLOPT_SSL_OPTIONS] = CURLSSLOPT_NATIVE_CA;
    }
    return $opciones;
}

function evaluarRespuestaGroq(string|false $respuesta, int $http, int $errorCurl): array
{
    if ($errorCurl !== 0 || $respuesta === false) {
        if (in_array($errorCurl, [51, 58, 60, 77, 82, 83, 90, 91], true)) {
            return ['estado' => 502, 'codigo' => 'certificado_tls', 'error' => 'PHP no puede verificar el certificado HTTPS de Groq. Revisa los certificados de confianza del servidor.'];
        }
        if ($errorCurl === 28) {
            return ['estado' => 504, 'codigo' => 'tiempo_agotado', 'error' => 'Groq tardó demasiado en responder. Inténtalo de nuevo.'];
        }
        return ['estado' => 502, 'codigo' => 'conexion_groq', 'error' => 'El servidor no pudo conectarse con Groq. Revisa la conexión de red.'];
    }
    if ($http === 401) {
        return ['estado' => 502, 'codigo' => 'autenticacion_groq', 'error' => 'Groq rechazó la clave configurada. Revisa si está activa y corresponde al proyecto.'];
    }
    if ($http === 403) {
        return ['estado' => 502, 'codigo' => 'permisos_groq', 'error' => 'Groq denegó el acceso. Revisa los permisos del proyecto y del modelo.'];
    }
    if ($http === 429) {
        return ['estado' => 429, 'codigo' => 'cuota_groq', 'error' => 'Groq alcanzó un límite de uso o cuota. Espera y revisa los límites de tu cuenta.'];
    }
    if ($http === 404) {
        return ['estado' => 502, 'codigo' => 'modelo_groq', 'error' => 'El modelo configurado no está disponible en Groq. Revisa la configuración del servidor.'];
    }
    if ($http >= 400 && $http < 500) {
        return ['estado' => 502, 'codigo' => 'solicitud_groq', 'error' => 'Groq rechazó el formato o el tamaño de la solicitud. Borra la conversación y vuelve a intentarlo.'];
    }
    if ($http < 200 || $http >= 300) {
        return ['estado' => 502, 'codigo' => 'servicio_groq', 'error' => 'El servicio de Groq no está disponible temporalmente. Inténtalo más tarde.'];
    }
    $resultado = json_decode($respuesta, true);
    $contenido = $resultado['choices'][0]['message']['content'] ?? null;
    if (!is_string($contenido) || trim($contenido) === '' || strlen($contenido) > 20000) {
        return ['estado' => 502, 'codigo' => 'respuesta_groq', 'error' => 'Groq devolvió una respuesta que no se pudo interpretar.'];
    }
    return ['estado' => 200, 'contenido' => $contenido];
}
