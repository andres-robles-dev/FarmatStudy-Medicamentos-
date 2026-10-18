# Arquitectura de FarmaStudy

## Visión general

Aplicación de una sola página con JavaScript clásico encapsulado en funciones autoejecutables. Los módulos comparten servicios en `window`; **no se usa Vite ni módulos ES en esta versión PHP**. No existe un paso de compilación.

`index.php` genera el layout, comprueba únicamente la disponibilidad de IA y versiona las URLs de recursos con su fecha de modificación. El navegador recibe un booleano público, nunca la clave.

## Flujo de arranque

1. Se cargan estado, utilidades, enrutador, privacidad, orquestador y generador de preguntas.
2. `FarmaData` registra los catálogos de medicamentos y parafarmacia.
3. Se cargan los controladores de las vistas.
4. `js/principal.js` registra los módulos y abre Consulta rápida.

El orden de scripts importa. Si se cambia, los módulos pueden capturar referencias todavía no disponibles.

## Responsabilidades

- `estado.js`: lectura, escritura y suscripciones por clave.
- `enrutador.js`: registro, navegación y menú adaptable. No sincroniza la URL con History API; no hay enlaces profundos por vista.
- `farmadata.js`: catálogo unificado, alias de laboratorio y búsquedas normalizadas.
- `privacidad.js`: disponibilidad y activación voluntaria de IA, solo en memoria.
- `ia-orquestador.js`: consultas asíncronas y comparación experimental del catálogo.
- `cuestionario.js`: generación de preguntas con distractores únicos de medicamentos.
- `modulo-explorador.js`: árbol navegable por teclado y restauración de grupos/subgrupos, incluida la categoría propia `PF`.
- `modulo-consulta.js`: búsqueda local, conversación en memoria y cancelación al salir o borrar.
- `php/config.php`: lectura de entorno/archivo privado, sin credenciales en el código público.
- `php/seguridad.php`: validación pura de solicitudes y contadores con bloqueo de archivo.
- `php/groq-transporte.php`: verificación TLS con confianza nativa en Windows y clasificación de errores sin detalles sensibles.
- `php/api-groq.php`: comprobaciones HTTP, petición a un proveedor fijo y respuesta filtrada.

`js/nucleo/api-groq.js` queda como adaptador de compatibilidad al orquestador, sin duplicar prompts. No se carga en `index.php`.

## Ciclo de vida de vistas

Cada controlador expone `titulo`, `iniciar()` y, cuando lo necesita, `destruir()`. El enrutador destruye la vista anterior antes de inicializar la siguiente. Los eventos globales, suscripciones y peticiones pendientes deben limpiarse al salir.

Las vistas generan HTML; todo texto de usuario o IA debe pasar por `escapeHtml`, incluido el utilizado dentro de atributos. No restaures HTML desde almacenamiento persistente ni insertes respuestas de IA sin escapar.

## Consulta sin dependencia obligatoria de IA

```text
Consulta → modo local por defecto → búsqueda en catálogo → resultados educativos
         ↘ activación voluntaria → proxy PHP → Groq
                                  ↘ fallo/límite → búsqueda local
```

Si la IA propone principios y encuentra productos, se solicita una segunda comparación experimental. Un fallo de esa comparación deja `approved` vacío y marca `sinValidar`; no se convierten productos sin comprobar en sugerencias. Las alternativas no se incorporan automáticamente.

Los fallos del proxy se devuelven con un código estable y un mensaje público controlado. El navegador distingue conexión/certificados, autenticación, cuota y límites, sin confundirlos en un mensaje genérico. La búsqueda local trata «dolor de cabeza» como un concepto compuesto para no confundir «cabeza» con «cabezal» mediante stemming.

## Mantenimiento

Mantén el código y los nombres de dominio en español. Prefiere cambios pequeños y pruebas sin dependencias innecesarias. No conviertas este ejercicio de portafolio en una reescritura de framework sin una razón funcional. Las mejoras pendientes se documentan por separado en `MEJORAS.md`.
