# Catálogo educativo y sus límites

## Contenido incluido

| Archivo | Contenido |
|---|---|
| `datos/medicamentos.js` | 202 fichas educativas de medicamentos |
| `datos/parafarmacia.js` | 120 productos de parafarmacia |
| `datos/laboratorios.js` | 55 fichas de laboratorios y marcas |
| `datos/clasificacion-atc.js` | 14 grupos ATC y una categoría propia `PF` con subcategorías |

Los registros se cargan como JavaScript local en el navegador. No existe base de datos ni actualización automática. Las cifras corresponden al catálogo actual; las pruebas comprueban estructura y coherencia, no una cantidad fija obligatoria.

## Referencias, no certificaciones

- [CIMA / AEMPS](https://cima.aemps.es/cima/publico/home.html): referencia oficial para información de medicamentos autorizados en España.
- [WHO Collaborating Centre for Drug Statistics Methodology](https://atcddd.fhi.no/): referencia para la clasificación ATC/DDD.
- Webs de fabricantes y laboratorios: posibles referencias para productos y marcas.

Estos enlaces sirven para contrastar información. **No se ha documentado una verificación ficha por ficha ni una fecha de revisión por registro.** Por tanto, no se afirma que el catálogo esté validado por AEMPS, OMS u otra entidad. Las menciones comerciales no implican afiliación.

Las indicaciones, dosis, condiciones de receta, financiación y composiciones pueden ser incompletas, estar desactualizadas o contener errores. No deben utilizarse como referencia sanitaria. La categoría `PF` es propia del proyecto: no forma parte de la clasificación ATC oficial. La parafarmacia conserva algunos códigos de ejemplo que no deben interpretarse como clasificación oficial de esos productos.

## Modelo de datos

Cada producto contiene `id`, `nombre`, `principioActivo`, `laboratorio`, `atc`, `grupoAtc`, `subgrupoAtc`, `indicacion`, `dosis`, `presentacion`, `tipo`, `contraindicaciones`, `efectosAdversos`, `receta` y `financiado`.

En parafarmacia, `principioActivo` puede representar composición o materiales, no un principio farmacológico. Por eso el test de medicamentos no mezcla esas fichas con preguntas sobre principios activos. Las flashcards permiten explorar todo el catálogo como demostración.

`FarmaData` normaliza los alias `Expanscience` y `Théa` a los nombres de sus fichas de laboratorio, sin alterar los archivos fuente. Se mantienen etiquetas colectivas como `Diversos`, `Diversos laboratorios` y `GSK/Sanofi/MSD`: no se inventa una ficha empresarial ni un titular concreto para ellas.

## Añadir o modificar registros

1. Usa un identificador único; no cambies los existentes sin revisar referencias.
2. Comprueba que el grupo y subgrupo existen y pertenecen al mismo árbol.
3. Utiliza el nombre de laboratorio existente o documenta explícitamente un caso colectivo.
4. No copies datos personales ni información de pacientes.
5. Ejecuta las pruebas antes de guardar la revisión.

Como mejora futura, añade campos `fuenteUrl`, `fechaRevision` y una referencia oficial por producto, documenta la transformación/importación y revisa las condiciones de reutilización. Eso requiere una revisión de datos independiente; pasar las pruebas de programación no certifica precisión farmacológica.
