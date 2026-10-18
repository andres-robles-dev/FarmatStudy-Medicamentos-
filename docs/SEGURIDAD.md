# Configuración de Groq y seguridad

## Dónde va la clave

`php/config.php` es un cargador **sin secretos** y puede versionarse. La prioridad de configuración es:

1. Variable de entorno `GROQ_API_KEY` del proceso PHP.
2. Archivo señalado por `FARMASTUDY_CONFIG_FILE`, si no se definió la variable anterior.
3. Por defecto, `../FarmatStudy-private/config.php`, relativo a la raíz del proyecto.

El archivo privado debe estar fuera de la raíz pública; el cargador rechaza rutas dentro del proyecto, incluso cuando se proporciona una ruta personalizada. Una variable `GROQ_API_KEY` vacía impide recurrir al archivo. `FARMASTUDY_AI_ENABLED=0` desactiva completamente la IA y evita leer el archivo privado.

La configuración privada local anterior se trasladó a la carpeta hermana, conservando su credencial. **No subas esa carpeta ni la copies a `public_html`.** Si mueves el proyecto, debes configurar también la ruta privada o una variable de entorno.

### Opción A: entorno del servidor

Configura `GROQ_API_KEY` en el panel del alojamiento para el proceso PHP. No la escribas en `.htaccess`, argumentos de comandos, capturas, incidencias o registros. Si el alojamiento no ofrece variables privadas de entorno, usa la opción B.

Para una sesión local de PowerShell, puedes introducirla sin escribirla como literal en el historial:

```powershell
$secreto = Read-Host "Clave de Groq" -AsSecureString
$env:GROQ_API_KEY = [System.Net.NetworkCredential]::new('', $secreto).Password
Remove-Variable secreto
php -S 127.0.0.1:8000 -t . router.php
```

Al terminar el servidor, elimina la variable de esa sesión:

```powershell
Remove-Item Env:GROQ_API_KEY -ErrorAction SilentlyContinue
```

La variable sigue siendo un secreto en memoria del proceso: esto evita dejar el literal en el historial, no protege frente a un equipo comprometido.

### Opción B: archivo privado

Si todavía no existe tu archivo privado, desde la raíz del proyecto:

```powershell
New-Item -ItemType Directory -Path "..\FarmatStudy-private" -Force
if (Test-Path "..\FarmatStudy-private\config.php") {
    Write-Host "Ya existe una configuración privada; no se ha modificado."
} else {
    Copy-Item "php\config.example.php" "..\FarmatStudy-private\config.php"
}
```

**No sobrescribas un archivo privado existente.** Edita la copia privada para sustituir `TU_CLAVE_DE_GROQ`; la plantilla del repositorio debe conservar ese marcador. El archivo privado define la constante `GROQ_API_KEY`, nunca la imprime.

En Linux, utiliza permisos restrictivos (por ejemplo, directorio `700` y archivo `600`, con propietario adecuado para PHP). En Windows, revisa los permisos NTFS para que solo tu usuario y las cuentas necesarias puedan leerlo. No se han cambiado permisos generales de tu equipo ni del alojamiento.

Si el alojamiento publica `public_html`, una ubicación posible es:

```text
cuenta/
├── public_html/               # Archivos del proyecto
└── FarmatStudy-private/
    ├── config.php
    └── limites/
```

Si necesitas otra ubicación, define `FARMASTUDY_CONFIG_FILE` con la ruta absoluta. `FARMASTUDY_RATE_DIR` permite cambiar la carpeta de contadores; también debe quedar fuera de la raíz pública.

## Qué protege el proxy

- La credencial nunca se incluye en HTML, JavaScript ni respuestas JSON.
- Solo acepta `POST` con JSON; no concede CORS a otros sitios y rechaza orígenes cruzados declarados.
- Modelo fijado en el servidor: `llama-3.3-70b-versatile`.
- Cuerpo máximo de 64 KiB; entre 2 y 12 mensajes con roles y contenido restringidos.
- Máximo de 16.000 bytes por mensaje y 36.000 bytes de contenido total.
- Entre 1 y 600 tokens de salida; temperatura entre 0 y 1.
- Tiempo máximo de conexión de 5 segundos y de petición de 20 segundos; verificación TLS habilitada.
- En Windows, cURL utiliza los certificados de confianza del sistema cuando admite `CURLSSLOPT_NATIVE_CA`; no se desactiva la verificación HTTPS.
- No devuelve errores internos del proveedor, cabeceras de autorización ni detalles de cURL.
- Falla con una respuesta controlada si no hay configuración, cURL o contadores disponibles.

### Si el chat devuelve un error de certificados o `502`

Una instalación de PHP en Windows puede tener cURL activo pero no tener configurado un archivo de autoridades de certificación. El resultado es cURL 60: `unable to get local issuer certificate`. La petición falla antes de autenticarse en Groq; no significa que la API key sea inválida.

`php/groq-transporte.php` habilita la confianza nativa de Windows cuando está disponible, manteniendo `CURLOPT_SSL_VERIFYPEER=true` y `CURLOPT_SSL_VERIFYHOST=2`. En otros sistemas utiliza la confianza predeterminada de PHP/cURL. Si necesitas un paquete de certificados específico, configura **`FARMASTUDY_CA_FILE`** con la ruta absoluta de un archivo PEM de autoridades fiable; también puedes configurar `curl.cainfo` en el `php.ini` utilizado por el servidor. Reinicia PHP después de cambiar su entorno o su INI. No descargues certificados de sitios desconocidos ni desactives la verificación TLS.

El chat diferencia errores de certificados, conexión, tiempo agotado, clave rechazada, permisos, modelo, cuota de Groq y límite local. Solo muestra mensajes controlados: no reproduce respuestas internas del proveedor. Una respuesta `401` a una petición **sin credenciales** es normal y permite comprobar que se completó HTTPS, pero no acredita la validez de la clave.

## Límites de uso

Los contadores se guardan con bloqueo de archivo fuera de la raíz pública:

| Ámbito | Límite de peticiones al proxy |
|---|---:|
| Dirección IP / minuto | 10 |
| Dirección IP / hora | 60 |
| Toda la instalación / minuto | 20 |
| Toda la instalación / día | 200 |

Son ventanas fijas alineadas al reloj del servidor, no ventanas deslizantes. Una consulta puede necesitar **dos peticiones**: respuesta y comparación. Los intentos admitidos cuentan aunque falle el proveedor. Un `429` incluye `Retry-After`. No borres los contadores para saltarte los límites.

Se utiliza `REMOTE_ADDR`; no se confía automáticamente en `X-Forwarded-For`. Tras un proxy inverso, varios visitantes pueden compartir cuota hasta configurar correctamente su dirección real en el servidor web. Se conserva un hash de IP (no anonimización garantizada), marcas temporales y cantidades; no conversaciones. Las entradas inactivas se descartan durante solicitudes posteriores.

**Estos límites no son autenticación ni un presupuesto monetario garantizado.** Los encabezados de origen pueden falsificarse fuera del navegador; un bot puede llamar directamente al endpoint. Antes de abrir una demo pública, configura cuotas/gasto en Groq y protección de acceso, autenticación o límites adicionales en el alojamiento. No sirve como proxy público general. Los límites son por instalación y no se comparten entre varios servidores.

## Privacidad y navegador

La casilla de IA está desmarcada al cargar. Al marcarla, aceptas enviar ejemplos ficticios y parte de la conversación a Groq. No se escriben conversaciones nuevas en almacenamiento persistente. No se leen ni se reinyectan historiales HTML antiguos de `localStorage`; el usuario puede eliminarlos con **Borrar conversación**, desde el mismo navegador y origen donde se guardaron.

Una comparación fallida no aprueba automáticamente resultados. Las alternativas generadas no se añaden automáticamente al catálogo mostrado. Incluso una comparación exitosa sigue siendo experimental y no acredita seguridad clínica.

## Antes de subir cambios a GitHub

1. Revisa archivos preparados y diferencias; no publiques la carpeta privada ni exportaciones del navegador.
2. Recuerda que `.gitignore` no elimina secretos ya versionados ni limpia el historial.
3. Si una credencial apareció en un commit o se compartió, revócala primero y revisa el uso en Groq.
4. No publiques trazas o capturas que contengan tokens, consultas reales o información personal.
5. Revisa `.htaccess` con tu alojamiento. En Nginx, reproduce las restricciones en su configuración: `.htaccess` no se aplica.

La revisión y las pruebas automatizadas no han consumido la clave de Groq. Para comprobar una respuesta real, hazlo tú con un ejemplo ficticio después de configurar tus límites.
