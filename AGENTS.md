# AGENTS.md — FarmaStudy

## Stack
- **Framework:** Vite 6 + vanilla JS (ES modules)
- **CSS:** puro con variables CSS, sin framework
- **Iconos:** Google Material Symbols Outlined (CDN)
- **Despliegue:** Hostinger básico, `dist/` → `public_html/`
- **Dev:** `npm run dev` (puerto 5173, HMR)
- **Build:** `npm run build` (hashes automáticos en `dist/`)

## Arquitectura
SPA modular sin frameworks. Enrutador casero + estado global con pub/sub. Cada módulo se auto-registra. Sin dependencias externas (solo Vite).

## Estructura
```
Medicamentos/
├── index.html              # Layout SPA: cabecera, menú, área trabajo, barra estado
├── package.json
├── vite.config.js
├── AGENTS.md
├── estilo/
│   ├── principal.css       # Reset, variables, layout, scrollbar
│   ├── componentes.css     # Menú, botones, badges, buscador, migas, tablas
│   ├── explorador.css      # Árbol ATC, fichas detalle, tarjetas medicamento
│   └── estudio.css         # Flashcards, test, laboratorios, acerca, vacío
├── js/
│   ├── principal.js        # Bootstrap: registra módulos, reloj, contador, búsq. rápida
│   ├── nucleo/
│   │   ├── estado.js       # Estado global pub/sub (suscribir, dessuscribir, notificar)
│   │   ├── utilidades.js   # escapeHtml, mezclarArray, búsqueda difusa, notificaciones
│   │   └── enrutador.js    # registrarModulo, navegarA, obtenerModulo, initEnrutador
│   └── modulos/
│       ├── modulo-explorador.js    # Árbol ATC + lista de medicamentos por grupo
│       ├── modulo-ficha.js         # Ficha detalle del medicamento seleccionado
│       ├── modulo-buscador.js      # Búsqueda global con debounce
│       ├── modulo-flashcards.js    # Flashcards con giro 3D, 3 modos
│       ├── modulo-test.js          # Test de 10 preguntas con 4 opciones
│       ├── modulo-laboratorios.js  # Grid de laboratorios + detalle
│       └── modulo-acerca.js        # Página informativa
├── datos/
│   ├── medicamentos.js     # 152 medicamentos reales + funciones de búsqueda
│   ├── laboratorios.js     # 34 laboratorios farmacéuticos
│   └── clasificacion-atc.js # 14 grupos ATC + subgrupos
└── public/
    └── iconos/
        └── favicon.svg
```

## Reglas de diseño
1. **Variables CSS:** `--verde`, `--verde-oscuro`, `--verde-claro`, `--verde-fondo`, colores semáforo, grises, fuentes, sombras. Definidas en `:root` en `principal.css`.
2. **Layout:** Flex vertical (`#app` → cabecera + cuerpo + barra). Cuerpo en flex horizontal (menú + área-trabajo).
3. **Menú:** Fondo `--verde-oscuro`, ancho fijo 200px. Elementos con gutter de 3px a la izquierda, activo con borde blanco.
4. **Tarjetas:** Blanco con borde `--gris-borde`, border-radius 8px, sombra sutil. Hover eleva sombra.
5. **Badges:** Pequeños, border-radius 12px. Colores semánticos (verde=OTC, rojo=receta, azul=info, gris=neutro).
6. **Animaciones:** `anim-aparecer` (fade-in + slide-up, 0.2s). Solo para transiciones de módulo y contenido dinámico.
7. **Estados vacíos:** Clase `.vacio` centrada con icono grande (48px, opacidad 0.4) y texto gris.
8. **Iconos:** Material Symbols Outlined, var font `'FILL' 0, 'wght' 300, 'GRAD' 0`. Se usan como `<span class="material-symbols-outlined">icon_name</span>`.
9. **Código en español:** Variables, funciones, comentarios, nombres de archivo en español.
10. **Sin comentarios en código:** El código fuente NO debe tener comentarios (salvo cabeceras de archivo y secciones CSS).

## Convenciones de código
- **Nombrado:** camelCase para variables/funciones, kebab-case para clases CSS e IDs.
- **Módulos:** Cada módulo exporta `{ titulo: string, iniciar(): void, destruir?(): void }`.
- **Estado:** `obtenerEstado()` para lectura, `establecerEstado(clave, valor)` para escritura. Las suscripciones se limpian en `destruir()`.
- **Routing:** `navegarA(nombreModulo)` cambia el módulo activo. `obtenerModulo(nombre)` obtiene la referencia para re-ejecutar `iniciar()`.
- **HTML en JS:** Template literals con `innerHTML`. Todo input de usuario pasado por `escapeHtml()`.
- **IDs de medicamentos:** `MED001` a `MED152`. Al añadir nuevos, continuar la secuencia.

## Modelo de datos: medicamento
```js
{
  id: "MED153",
  nombre: "Nombre comercial",
  principioActivo: "Principio activo",
  laboratorio: "Laboratorio (debe existir en laboratorios.js)",
  atc: "Código ATC completo",
  grupoAtc: "Letra del grupo ATC (A-V)",
  subgrupoAtc: "Código subgrupo ATC",
  indicacion: "Indicación principal",
  dosis: "Posología",
  presentacion: "Forma farmacéutica",
  tipo: "Medicamento | Parafarmacia",
  receta: true | false,
  financiado: true | false
}
```

## Fuentes de datos
- **Medicamentos:** AEMPS/CIMA (cima.aemps.es) — datos oficiales de medicamentos autorizados en España.
- **Laboratorios:** Titulares de comercialización en España.
- **Clasificación ATC:** Organización Mundial de la Salud, niveles 1 y 2.

## Flujo de navegación
1. Al cargar → `initEnrutador()` → navega a `explorador`
2. Click en medicamento → `establecerEstado('medicamentoSeleccionado', id)` + `navegarA('ficha')`
3. Búsqueda rápida (Enter en cabecera) → `establecerEstado('busquedaRapida', texto)` + `navegarA('buscador')`
4. Volver desde detalle de laboratorio → `obtenerModulo('laboratorios').iniciar()` (no `navegarA`)
