import type {L, LList} from "../i18n";

/* ════════════════════════════════════════════════════════════════════
 *  CONTENIDO DEL PORTFOLIO — todo el texto del sitio vive aquí.
 *  Cada campo bilingüe tiene la forma { es: "...", en: "..." }.
 *
 *  Busca los comentarios "TODO" para encontrar lo que queda por rellenar.
 * ════════════════════════════════════════════════════════════════════ */

export type NavItem = { id: string; label: L };

export type SkillSubgroup = {
    label: L;
    /** Los nombres de tecnologías no se traducen. */
    items: string[];
};

export type SkillGroup = {
    id: string;
    index: string;
    title: L;
    blurb: L;
    /** Lista plana de tecnologías. Se ignora cuando el grupo define `subgroups`. */
    items?: string[];
    /** Desglose etiquetado; se dibuja en lugar de `items`. */
    subgroups?: SkillSubgroup[];
    /** Se renderiza como banda de ancho completo sobre el resto de la cuadrícula. */
    featured?: boolean;
};

export type ExperienceEntry = {
    id: string;
    role: L;
    company: string;
    period: L;
    summary: L;
    highlights: LList;
    stack: string[];
};

export type ProjectEntry = {
    id: string;
    index: string;
    name: string;
    tagline: L;
    description: L;
    stack: string[];
    year: string;
    /** Deja `null` mientras no tengas el enlace. */
    repo: string | null;
    demo: string | null;
};

export type EducationEntry = {
    id: string;
    degree: L;
    school: string;
    period: L;
    detail: L;
};

/* ------------------------------------------------------------------ *
 *  Navegación
 * ------------------------------------------------------------------ */
export const navItems: NavItem[] = [
    {id: "sobre-mi", label: {es: "Sobre mí", en: "About"}},
    {id: "habilidades", label: {es: "Habilidades", en: "Skills"}},
    {id: "experiencia", label: {es: "Experiencia", en: "Experience"}},
    {id: "proyectos", label: {es: "Proyectos", en: "Projects"}},
    {id: "formacion", label: {es: "Formación", en: "Education"}},
    {id: "contacto", label: {es: "Contacto", en: "Contact"}},
];

/* ------------------------------------------------------------------ *
 *  Hero
 * ------------------------------------------------------------------ */
export const hero = {
    role: {es: "Desarrollador de Software", en: "Software Developer"} satisfies L,
    roleAlt: {es: "Desarrollador Full-Stack", en: "Full-Stack Developer"} satisfies L,
    headline: {
        es: "Diseño y construyo productos web y móviles, del modelo de datos a la última pantalla.",
        en: "I design and build web and mobile products — from the data model to the last pixel.",
    } satisfies L,
    tagline: {
        es: "Frontend con JavaScript y TypeScript. Backend con Python y Django. Bases de datos PostgreSQL y MySQL. Aplicaciones Android con Kotlin. Elijo la herramienta según el problema, no al revés.",
        en: "Frontend with JavaScript and TypeScript. Backend with Python and Django. PostgreSQL and MySQL databases. Android apps with Kotlin. I pick the tool that fits the problem, not the other way around.",
    } satisfies L,
    availability: {
        es: "Abierto a propuestas",
        en: "Open to opportunities",
    } satisfies L,
    ctaPrimary: {es: "Hablemos", en: "Let's talk"} satisfies L,
    ctaSecondary: {es: "Ver proyectos", en: "See projects"} satisfies L,
    scroll: {es: "Desliza", en: "Scroll"} satisfies L,
};

/* ------------------------------------------------------------------ *
 *  Cinta de tecnologías (marquee)
 * ------------------------------------------------------------------ */
export const tickerItems: string[] = [
    "TypeScript",
    "React",
    "Python",
    "Django",
    "Java",
    "Spring Boot",
    "Kotlin",
    "Android",
    "NestJS",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "REST APIs",
    "Git",
];

/* ------------------------------------------------------------------ *
 *  Sobre mí
 * ------------------------------------------------------------------ */
export const about = {
    eyebrow: {es: "Sobre mí", en: "About me"} satisfies L,
    title: {
        es: "Software con criterio, código con intención.",
        en: "Software with judgement, code with intention.",
    } satisfies L,
    // TODO: reescribe esta biografía con tu propia voz (2-4 párrafos cortos).
    paragraphs: {
        es: [
            "Soy Samuel Salazar Zaldivar, Desarrollador de Software graduado de Ingeniería Informática en la Universidad de Holguín «Oscar Lucero Moya». Trabajo en todo el ciclo de vida del software: entender el problema, modelar los datos, construir la interfaz y dejar todo desplegado y funcionando.",
            "Mi día a día se reparte entre el frontend —JavaScript, TypeScript y React— y el backend con Python y Django, apoyado en PostgreSQL y MySQL. Cuando el proyecto lo pide, salto a Android con Kotlin para llevar la misma experiencia al bolsillo.",
            "Me importa el detalle: nombres claros, interfaces accesibles y decisiones técnicas que se puedan defender. Prefiero una solución simple y bien medida antes que un conjunto de capas que nadie entiende seis meses después.",
        ],
        en: [
            "I'm Samuel Salazar Zaldivar, a Software Developer with a degree in Computer Engineering from Universidad de Holguín «Oscar Lucero Moya». I work across the whole software lifecycle: understanding the problem, modelling the data, building the interface, and shipping it so it actually runs.",
            "My day-to-day is split between the frontend — JavaScript, TypeScript and React — and the backend with Python and Django, backed by PostgreSQL and MySQL. When a project calls for it, I move into Android with Kotlin to bring the same experience to your pocket.",
            "I care about the details: clear names, accessible interfaces, and technical decisions you can defend. I'd rather have a simple, well-measured solution than a pile of layers nobody understands six months later.",
        ],
    } satisfies LList,
    quote: {
        es: "El mejor código es el que el siguiente desarrollador entiende sin preguntarte.",
        en: "The best code is the code the next developer understands without asking you.",
    } satisfies L,
    stats: [
        {
            value: "Full-Stack",
            label: {es: "Web · Backend · Móvil", en: "Web · Backend · Mobile"} satisfies L,
        },
        {
            value: "B1",
            label: {
                es: "Inglés certificado por la universidad",
                en: "English certified by the university",
            } satisfies L,
        },
        {
            value: "Ing.",
            label: {
                es: "Ingeniería Informática, UHo «Oscar Lucero Moya»",
                en: "Computer Engineering, UHo «Oscar Lucero Moya»",
            } satisfies L,
        },
    ],
};

/* ------------------------------------------------------------------ *
 *  Habilidades
 *  TODO: borra las tecnologías que no uses y añade las que falten.
 * ------------------------------------------------------------------ */
export const skills = {
    eyebrow: {es: "Habilidades", en: "Skills"} satisfies L,
    title: {es: "Con qué trabajo", en: "What I work with"} satisfies L,
    description: {
        es: "Un stack centrado en producto: interfaces que se sienten rápidas, APIs que aguantan y datos bien modelados.",
        en: "A product-focused stack: interfaces that feel fast, APIs that hold up, and data that's properly modelled.",
    } satisfies L,
    groups: [
        {
            id: "lenguajes",
            index: "01",
            title: {es: "Lenguajes y frameworks", en: "Languages & frameworks"},
            blurb: {
                es: "El inventario base: los lenguajes que manejo y el framework con el que ataco cada uno.",
                en: "The base inventory: the languages I work in and the framework I reach for with each one.",
            },
            featured: true,
            subgroups: [
                {
                    label: {es: "Lenguajes", en: "Languages"},
                    items: ["Java", "Python", "Kotlin", "TypeScript", "JavaScript", "SQL"],
                },
                {
                    label: {es: "Frameworks y librerías", en: "Frameworks & libraries"},
                    items: [
                        "Spring Boot",
                        "Django",
                        "Django REST Framework",
                        "NestJS",
                        "Express",
                        "React",
                        "Jetpack Compose",
                    ],
                },
            ],
        },
        {
            id: "frontend",
            index: "02",
            title: {es: "Frontend", en: "Frontend"},
            blurb: {
                es: "Interfaces reactivas, accesibles y con animación medida.",
                en: "Reactive, accessible interfaces with measured motion.",
            },
            items: [
                "React",
                "Tailwind CSS",
                "MUI",
                "HTML5",
                "CSS3",
                "Vite",
                "Diseño responsive",
                "Accesibilidad web",
            ],
        },
        {
            id: "backend",
            index: "03",
            title: {es: "Backend", en: "Backend"},
            blurb: {
                es: "APIs REST, autenticación y lógica de negocio en el servidor.",
                en: "REST APIs, authentication and server-side business logic.",
            },
            items: [
                "APIs REST",
                "Autenticación y JWT",
                "Django",
                "NestJS",
                "Express",
                "ORMs",
                "Arquitectura en capas",
            ],
        },
        {
            id: "datos",
            index: "04",
            title: {es: "Bases de datos", en: "Databases"},
            blurb: {
                es: "Modelado relacional, consultas eficientes y migraciones limpias.",
                en: "Relational modelling, efficient queries and clean migrations.",
            },
            items: [
                "PostgreSQL",
                "MySQL",
                "SQLite",
                "Modelado relacional",
                "Optimización de consultas",
                "Migraciones",
            ],
        },
        {
            id: "movil",
            index: "05",
            title: {es: "Móvil", en: "Mobile"},
            blurb: {
                es: "Aplicaciones Android nativas con Kotlin.",
                en: "Native Android applications with Kotlin.",
            },
            items: [
                "Android SDK",
                "Jetpack Compose",
                "MVVM",
                "Retrofit",
                "Room",
                "Material Design",
            ],
        },
        {
            id: "herramientas",
            index: "06",
            title: {es: "Herramientas", en: "Tooling"},
            blurb: {
                es: "Lo que uso para versionar, probar y desplegar.",
                en: "What I use to version, test and ship.",
            },
            items: ["Git", "GitHub", "Linux", "Docker", "Bun", "Postman", "Vercel"],
        },
    ] satisfies SkillGroup[],
};

/* ------------------------------------------------------------------ *
 *  Experiencia
 *  TODO: sustituye estas entradas por tu experiencia real.
 *        Estructura: role | company | period | summary | highlights | stack
 * ------------------------------------------------------------------ */
export const experience = {
    eyebrow: {es: "Experiencia", en: "Experience"} satisfies L,
    title: {es: "Dónde he construido", en: "Where I've built"} satisfies L,
    description: {
        es: "Trayectoria profesional y proyectos en los que he participado.",
        en: "Professional track record and the projects I've taken part in.",
    } satisfies L,
    entries: [
        {
            id: "exp-1",
            role: {es: "Desarrollador Full-Stack", en: "Full-Stack Developer"},
            company: "Empresa pendiente de confirmar",
            period: {es: "20XX — Actualidad", en: "20XX — Present"},
            summary: {
                es: "Desarrollo de aplicaciones web de extremo a extremo, desde el modelado de datos hasta la interfaz final.",
                en: "End-to-end web application development, from data modelling through to the final interface.",
            },
            highlights: {
                es: [
                    "Diseñé y mantuve APIs REST con Django y PostgreSQL.",
                    "Construí interfaces en React y TypeScript optimizadas para móvil.",
                    "Reduje los tiempos de carga mediante consultas y renderizado más eficientes.",
                ],
                en: [
                    "Designed and maintained REST APIs with Django and PostgreSQL.",
                    "Built React and TypeScript interfaces optimised for mobile.",
                    "Reduced load times through more efficient queries and rendering.",
                ],
            },
            stack: ["Python", "Django", "React", "TypeScript", "PostgreSQL"],
        },
        {
            id: "exp-2",
            role: {es: "Desarrollador Android", en: "Android Developer"},
            company: "Proyecto por confirmar",
            period: {es: "20XX — 20XX", en: "20XX — 20XX"},
            summary: {
                es: "Aplicación Android nativa consumiendo servicios REST, con arquitectura MVVM.",
                en: "Native Android application consuming REST services, with an MVVM architecture.",
            },
            highlights: {
                es: [
                    "Implementé la interfaz y la capa de red de la aplicación.",
                    "Integré la app con un backend Django existente.",
                    "Trabajé en la publicación de la aplicación en Play Store.",
                ],
                en: [
                    "Implemented the app's interface and network layer.",
                    "Integrated the app with an existing Django backend.",
                    "Worked on publishing the application to the Play Store.",
                ],
            },
            stack: ["Kotlin", "Android", "MVVM", "REST"],
        },
        {
            id: "exp-3",
            role: {es: "Desarrollador Web", en: "Web Developer"},
            company: "Proyecto por confirmar",
            period: {es: "20XX — 20XX", en: "20XX — 20XX"},
            summary: {
                es: "Sitios y sistemas web a medida para clientes, con soporte y mantenimiento continuo.",
                en: "Bespoke websites and web systems for clients, with ongoing support and maintenance.",
            },
            highlights: {
                es: [
                    "Levanté el frontend y la lógica de negocio desde cero.",
                    "Gestioné la base de datos y los despliegues.",
                    "Acompañé al cliente desde el requerimiento hasta la puesta en marcha.",
                ],
                en: [
                    "Stood up the frontend and business logic from scratch.",
                    "Managed the database and deployments.",
                    "Supported the client from requirement gathering to go-live.",
                ],
            },
            stack: ["JavaScript", "MySQL", "HTML5", "CSS3"],
        },
    ] satisfies ExperienceEntry[],
};

/* ------------------------------------------------------------------ *
 *  Proyectos
 *  TODO: sustituye por tus proyectos reales y añade los enlaces.
 * ------------------------------------------------------------------ */
export const projects = {
    eyebrow: {es: "Proyectos", en: "Projects"} satisfies L,
    title: {es: "Cosas que he construido", en: "Things I've built"} satisfies L,
    description: {
        es: "Una selección de trabajos personales y profesionales.",
        en: "A selection of personal and professional work.",
    } satisfies L,
    viewRepo: {es: "Ver código", en: "View code"} satisfies L,
    viewDemo: {es: "Ver demo", en: "View demo"} satisfies L,
    repoPending: {es: "Repositorio próximamente", en: "Repository coming soon"} satisfies L,
    entries: [
        {
            id: "proj-portfolio",
            index: "01",
            name: "Portfolio personal",
            tagline: {
                es: "Este mismo sitio: React, TypeScript y Tailwind, desplegado en Vercel.",
                en: "This very site: React, TypeScript and Tailwind, deployed on Vercel.",
            },
            description: {
                es: "Sitio bilingüe con cambio de idioma en tiempo real, animaciones basadas en scroll y un sistema de diseño propio construido con tokens de Tailwind CSS v4. El contenido está separado del código para poder editarlo sin tocar componentes.",
                en: "Bilingual site with real-time language switching, scroll-driven animations and a bespoke design system built on Tailwind CSS v4 tokens. Content is kept separate from code so it can be edited without touching components.",
            },
            stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
            year: "2025",
            repo: "https://github.com/SamuelStinson02",
            demo: null,
        },
        {
            id: "proj-1",
            index: "02",
            name: "Proyecto por confirmar",
            tagline: {
                es: "Aplicación web con Django y PostgreSQL.",
                en: "Web application with Django and PostgreSQL.",
            },
            description: {
                es: "Plataforma con autenticación de usuarios, panel de administración y API REST consumida por un frontend en React. Incluye roles y permisos, exportación de datos y despliegue automatizado.",
                en: "Platform with user authentication, an admin panel and a REST API consumed by a React frontend. Includes roles and permissions, data export and automated deployment.",
            },
            stack: ["Django", "Python", "PostgreSQL", "React"],
            year: "2024",
            repo: null,
            demo: null,
        },
        {
            id: "proj-2",
            index: "03",
            name: "Proyecto por confirmar",
            tagline: {
                es: "Aplicación Android nativa en Kotlin.",
                en: "Native Android application in Kotlin.",
            },
            description: {
                es: "App móvil conectada a un backend propio, con caché local, modo offline y sincronización en segundo plano. Arquitectura MVVM y navegación por componentes.",
                en: "Mobile app connected to its own backend, with local cache, offline mode and background sync. MVVM architecture and component-based navigation.",
            },
            stack: ["Kotlin", "Android", "MySQL", "REST"],
            year: "2024",
            repo: null,
            demo: null,
        },
    ] satisfies ProjectEntry[],
};

/* ------------------------------------------------------------------ *
 *  Formación, idiomas y certificaciones
 * ------------------------------------------------------------------ */
export const education = {
    eyebrow: {es: "Formación", en: "Education"} satisfies L,
    title: {es: "Estudios y credenciales", en: "Studies and credentials"} satisfies L,
    description: {
        es: "Formación académica, idiomas y certificaciones.",
        en: "Academic background, languages and certifications.",
    } satisfies L,
    entries: [
        {
            id: "degree",
            degree: {es: "Ingeniería Informática", en: "Computer Engineering"},
            school: "Universidad de Holguín «Oscar Lucero Moya»",
            // TODO: añade tus años reales, p. ej. "2019 — 2024".
            period: {es: "20XX — 20XX", en: "20XX — 20XX"},
            detail: {
                es: "Formación en algoritmia, estructuras de datos, ingeniería de software, bases de datos, redes e inteligencia artificial. Holguín, Cuba.",
                en: "Training in algorithms, data structures, software engineering, databases, networking and artificial intelligence. Holguín, Cuba.",
            },
        },
    ] satisfies EducationEntry[],
    languagesTitle: {es: "Idiomas", en: "Languages"} satisfies L,
    languages: [
        {
            name: {es: "Español", en: "Spanish"} satisfies L,
            level: {es: "Nativo", en: "Native"} satisfies L,
            value: 100,
        },
        {
            name: {es: "Inglés", en: "English"} satisfies L,
            level: {
                es: "B1 · Certificado por la universidad",
                en: "B1 · Certified by the university",
            } satisfies L,
            value: 60,
        },
    ],
    // TODO: añade tus certificaciones cuando las tengas.
    certificationsTitle: {es: "Certificaciones", en: "Certifications"} satisfies L,
    certifications: [
        {
            id: "cert-english",
            name: {
                es: "Inglés B1 — Certificación universitaria",
                en: "English B1 — University certification",
            } satisfies L,
            issuer: {
                es: "Universidad de Holguín «Oscar Lucero Moya»",
                en: "Universidad de Holguín «Oscar Lucero Moya»",
            } satisfies L,
        },
    ],
};

/* ------------------------------------------------------------------ *
 *  Contacto
 * ------------------------------------------------------------------ */
export const contact = {
    eyebrow: {es: "Contacto", en: "Contact"} satisfies L,
    title: {es: "¿Trabajamos juntos?", en: "Shall we work together?"} satisfies L,
    description: {
        es: "Estoy abierto a propuestas laborales, proyectos freelance y colaboraciones. Escríbeme y te respondo lo antes posible.",
        en: "I'm open to job offers, freelance projects and collaborations. Drop me a line and I'll get back to you as soon as I can.",
    } satisfies L,
    copyEmail: {es: "Copiar correo", en: "Copy email"} satisfies L,
    copied: {es: "¡Copiado!", en: "Copied!"} satisfies L,
    cta: {es: "Enviar un correo", en: "Send an email"} satisfies L,
    downloadCv: {es: "Descargar CV", en: "Download CV"} satisfies L,
    elseWhere: {es: "También por aquí", en: "Also around here"} satisfies L,
};

/* ------------------------------------------------------------------ *
 *  Interfaz
 * ------------------------------------------------------------------ */
export const ui = {
    skipToContent: {es: "Saltar al contenido", en: "Skip to content"},
    menu: {es: "Menú", en: "Menu"},
    close: {es: "Cerrar menú", en: "Close menu"},
    open: {es: "Abrir menú", en: "Open menu"},
    language: {es: "Idioma", en: "Language"},
    switchTo: {es: "Cambiar a inglés", en: "Switch to Spanish"},
    theme: {es: "Tema", en: "Theme"},
    backToTop: {es: "Volver arriba", en: "Back to top"},
    builtWith: {
        es: "Construido con React, TypeScript y Tailwind CSS",
        en: "Built with React, TypeScript and Tailwind CSS",
    },
    rights: {es: "Todos los derechos reservados", en: "All rights reserved"},
    sections: {es: "Secciones", en: "Sections"},
    contactHeading: {es: "Escríbeme", en: "Get in touch"},
} satisfies Record<string, L>;
