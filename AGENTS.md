# FarmaStudy — guía de mantenimiento

Proyecto personal de aprendizaje. La versión de esta carpeta es PHP + JavaScript clásico, no la versión anterior con Vite. Mantén el alcance de demostración y no presentes datos ni IA como clínicamente validados.

## Arranque y pruebas

- Local: `php -S 127.0.0.1:8000 -t . router.php`.
- Node.js solo para pruebas: `node --test tests/*.test.cjs`.
- PHP: `php tests/seguridad.php`.
- Windows: `pwsh -NoProfile -File tests/comprobar.ps1`.
- Interfaz opcional con Chrome/Chromium: `node tests/interfaz.cjs`; `--capturas` actualiza imágenes de documentación.
- No hay npm, Composer, base de datos ni proceso de compilación.

## Convenciones

- Nombres, comentarios y documentación en español; camelCase en JavaScript, kebab-case en clases CSS.
- Servicios compartidos en `window`, encapsulados con funciones autoejecutables.
- Las vistas exponen `titulo`, `iniciar()` y `destruir()` cuando necesitan limpiar eventos, suscripciones o peticiones.
- El orden de scripts en `index.php` importa. Registra las fuentes antes de cargar las vistas.
- Escapa todo texto de usuario/IA, también dentro de atributos. No reinyectes HTML desde almacenamiento persistente.
- Los cambios de catálogo deben pasar las comprobaciones estructurales; eso no verifica su exactitud sanitaria.

## Seguridad

- Nunca leas, muestres, registres ni copies una clave real para hacer pruebas. Utiliza respuestas simuladas y credenciales ficticias.
- `php/config.php` es un cargador público sin secretos. La clave procede de entorno o de un archivo privado exterior.
- No publiques la carpeta hermana `FarmatStudy-private`, ni la incluyas en capturas o commits.
- La IA requiere activación voluntaria en la interfaz y límites en el servidor; no omitas estos controles para simplificar una demo.
- No apruebes productos automáticamente cuando falle la comparación de IA, ni añadas alternativas sin comprobar.
- No escribas conversaciones en `localStorage` ni registros del servidor.
- Mantén el modo local independiente de Groq y no consumas la API en las pruebas automatizadas.

Consulta `README.md` y `docs/` antes de modificar instalación, modelo de datos o configuración de despliegue.
