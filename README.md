# Portfolio · Samuel Salazar Zaldivar

Portfolio personal de **Samuel Salazar Zaldivar**, Desarrollador de Software.
Sitio bilingüe (ES/EN) construido con **Bun + Vite + React + TypeScript + Tailwind CSS v4**, listo para desplegar en **Vercel**.

---

## Puesta en marcha

```bash
bun install     # instala dependencias
bun run dev     # servidor de desarrollo en http://localhost:5173
bun run build   # comprueba tipos y genera dist/
bun run preview # previsualiza el build de producción
```

---

## Dónde editar tu información

Todo el contenido está separado de los componentes. **No hace falta tocar ningún componente** para actualizar el sitio.

| Archivo | Qué contiene |
| --- | --- |
| `src/data/profile.ts` | Nombre, correo, GitHub, foto, ubicación, redes y CV |
| `src/data/portfolio.ts` | Textos bilingües: hero, sobre mí, habilidades, experiencia, proyectos y formación |
| `public/profile.jpg` | Tu foto (sustitúyela manteniendo el nombre, o cambia la ruta en `profile.ts`) |

### Busca los `TODO`

Dentro de `src/data/portfolio.ts` hay comentarios `TODO` marcando lo que falta por rellenar:

- **Biografía** (`about.paragraphs`) — texto provisional, reescríbelo con tu voz.
- **Habilidades** (`skills.groups`) — el grupo `lenguajes` es el inventario de lenguajes y frameworks; usa `subgroups` (dos filas etiquetadas) y `featured: true` para ocupar todo el ancho. El resto de grupos son tarjetas sueltas con una lista plana en `items`.
- **Experiencia** (`experience.entries`) — sustituye las entradas de ejemplo por tu experiencia real.
- **Proyectos** (`projects.entries`) — reemplaza los proyectos de ejemplo y añade enlaces `repo` / `demo`.
- **Formación** (`education.entries[0].period`) — añade tus años reales.
- **Certificaciones** (`education.certifications`) — añade las que tengas.

### Enlaces

En `src/data/profile.ts` la lista `socials` incluye GitHub y correo. Hay un bloque comentado para **LinkedIn** y **X**: descomenta y rellena tus URLs.

Para el CV: coloca el PDF en `public/` y pon la ruta en `cvHref`, por ejemplo `export const cvHref = "/cv-samuel-salazar.pdf";`. Mientras sea `null`, el botón no se muestra.

### Textos provisionales a revisar

Estos valores son marcadores de posición y aparecen literales en el sitio hasta que los cambies:

- Periodos `20XX — 20XX` en experiencia y formación.
- Nombres de empresa/proyecto `"por confirmar"`.
- Tecnologías en `skills.groups` y en `tickerItems` — borra las que no uses.

---

## Estructura

```
├── public/
│   ├── profile.jpg      # tu foto
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/          # Reveal, Section, SpotlightCard, LanguageToggle
│   │   ├── Background.tsx  # rejilla, halos y grano
│   │   ├── Nav.tsx         # cabecera fija, barra de progreso y menú móvil
│   │   ├── Hero.tsx        # portada
│   │   ├── Ticker.tsx      # cinta infinita de tecnologías
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/            # ← contenido editable
│   ├── i18n/            # contexto de idioma ES/EN
│   ├── App.tsx
│   ├── index.css        # sistema de diseño (tokens de Tailwind v4)
│   └── main.tsx
├── index.html
└── vercel.json
```

---

## Idioma (ES/EN)

El idioma se guarda en `localStorage` y se puede forzar con `?lang=en` en la URL.
Para añadir un idioma nuevo hay que extender `Lang` en `src/i18n/types.ts` y `LANGS` — TypeScript marcará todos los textos que falten.

---

## Sistema de diseño

Definido en `src/index.css` con el bloque `@theme` de Tailwind CSS v4:

- **Tipografías**: `Bricolage Grotesque` (títulos), `Instrument Sans` (texto), `Martian Mono` (etiquetas y datos).
- **Colores**: escala `ink` (fondos), `mist` (texto), `ember` (acento cobre), `verdigris` (acento secundario).
- **Utilidades propias**: `eyebrow`, `bg-grid`, `bg-grain`, `duotone`, `spotlight`, `lift`, `link-underline`, `outline-text`.
- Todas las animaciones respetan `prefers-reduced-motion`.

---

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel: **Add New → Project → Import Git Repository**.
3. Vercel detecta Vite automáticamente. Si no, usa:
   - **Framework preset**: `Vite`
   - **Install command**: `bun install`
   - **Build command**: `bun run build`
   - **Output directory**: `dist`
4. Deploy. Listo.

`vercel.json` ya fija esas opciones y añade cabeceras de caché para los assets.

> Recuerda actualizar la URL del `<link rel="canonical">` y de `og:url` en `index.html` cuando tengas el dominio final.

---

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `bun run dev` | Servidor de desarrollo con HMR |
| `bun run build` | Comprueba tipos y genera `dist/` |
| `bun run preview` | Sirve el build de producción |
| `bun run typecheck` | Sólo comprobación de tipos |
