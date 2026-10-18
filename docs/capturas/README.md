# Capturas del proyecto

Capturas de la versión PHP local, con datos de demostración y sin llamadas a Groq.

- `explorador.png`: exploración del catálogo por grupos y subgrupos.
- `flashcards.png`: tarjetas interactivas de repaso.
- `consulta-movil.png`: consulta en móvil con IA desactivada.

Para regenerarlas, desde la raíz y con Chrome/Chromium instalado: `node tests/interfaz.cjs --capturas`. La prueba inicia su propio servidor con IA desactivada y un perfil temporal independiente.

No contienen credenciales ni casos de pacientes. Los datos mostrados no están validados para uso clínico.
