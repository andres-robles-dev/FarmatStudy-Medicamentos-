# Próximas mejoras y presentación

## Aplicado en esta revisión local

- README de proyecto de aprendizaje, instalación y arquitectura de la versión PHP.
- Configuración privada fuera de la raíz pública y plantilla sin secretos.
- IA opcional con aviso de envío a Groq; conversaciones nuevas solo en memoria.
- Proxy con validación, modelo fijo, errores controlados y límites locales/globales.
- Fallo seguro de la comparación de IA; sin aprobación automática ni incorporación de alternativas sin comprobar.
- Tests con opciones distintas y solo medicamentos; búsquedas normalizadas y alias de laboratorio.
- Zoom habilitado y mejoras de etiquetas/teclado en consulta y flashcards.
- Pruebas locales sin consumo de la API.
- Capturas y comprobaciones automatizadas de interfaz en escritorio y móvil.
- Corrección de confianza HTTPS de PHP/cURL en Windows, errores de IA diferenciados y regresión del caso «dolor de cabeza» frente a «cabezal».

## Antes de compartir el portafolio

1. **Mantener la versión PHP:** el historial conserva la versión anterior con Vite; no mezcles sus comandos de instalación con la versión PHP. Revisa siempre las diferencias antes de publicar y nunca incluyas la carpeta privada hermana.
2. **Preparar acceso:** el repositorio revisado era privado. Decide si compartir acceso o hacerlo público después de comprobar credenciales e historial.
3. **Demo:** se incluyen capturas de explorador, flashcards y consulta móvil. Muestra también el resultado de un test con ejemplos ficticios. No muestres tokens ni consultas reales. Para una demo pública con IA, protege el acceso y configura cuotas en Groq/alojamiento; también puedes desactivar IA y mostrar solo el modo local.
4. **Elegir licencia:** revisa por separado código, recursos visuales, marcas y condiciones de los datos.

## Mejoras funcionales pequeñas

- Filtros por grupo para tarjetas y tests, y explicación de las respuestas.
- Guardar progreso educativo como opción explícita, sin persistir conversaciones sensibles.
- Ajustar distractores por contexto para que las preguntas sean más útiles.
- Navegación con URL, historial del navegador y enlaces profundos.
- Ampliar las pruebas de interfaz a más dispositivos y casos límite; auditoría completa de accesibilidad.
- Reducir dependencias de Google Fonts e implementar un modo sin conexión real solo si aporta valor.

## Mejoras de datos independientes del código

- Corregir y contrastar cada ficha con fuentes oficiales, empezando por nombres, principios activos y dosis.
- Añadir fuente, fecha y procedimiento de revisión por registro.
- Separar categorías de parafarmacia de códigos ATC sin sugerir equivalencia oficial.
- Revisar etiquetas colectivas de laboratorio en lugar de asignar titulares inventados.

## Cómo presentarlo en tu perfil

> **FarmaStudy — proyecto personal de aprendizaje.** Aplicación con JavaScript, CSS y PHP para explorar un catálogo educativo, repasar con flashcards y practicar con cuestionarios. Desarrollada para consolidar DOM, modularización, estado compartido y consumo de APIs mediante un proxy de servidor. Incluye una integración experimental y opcional con Groq. No apta para uso clínico.

En una entrevista, explica una decisión concreta (por qué usar JavaScript sin framework), una dificultad real (estado entre vistas o cancelación de peticiones) y una mejora pendiente. No hace falta presentarlo como tu proyecto principal ni exagerar el alcance: el valor está en demostrar lo aprendido con un proyecto que se puede ejecutar y revisar.
