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
        es: "Desarrollo software a medida, sólido y mantenible, listo para producción.",
        en: "I build custom software — solid, maintainable, and ready for production.",
    } satisfies L,
    tagline: {
        es: "Trabajo con clientes y equipos para acotar bien el alcance antes de escribir código, y cuido la claridad y el mantenimiento tanto como el resultado. Comunicación directa, entregas por etapas y cada decisión técnica explicada.",
        en: "I work with clients and teams to scope things properly before writing code, and I care about clarity and maintainability as much as about the outcome. Direct communication, staged delivery, and every technical decision explained.",
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
        es: "Convierto ideas en software que funciona.",
        en: "I turn ideas into software that works.",
    } satisfies L,
    paragraphs: {
        es: [
            "Soy Samuel Salazar, Desarrollador de Software graduado de Ingeniería Informática en la Universidad de Holguín «Oscar Lucero Moya». Como desarrollador full-stack abarco el ciclo completo de un proyecto: entender el problema, modelar los datos, construir la solución y dejarla desplegada y funcionando, sea cual sea su tipo.",
            "Tengo experiencia con una amplia variedad de tecnologías y me desenvuelvo con la misma soltura en cualquier parte del stack: elijo la herramienta que mejor encaja en cada caso y la sostengo de principio a fin.",
            "Mi trabajo es materializar lo que imaginas: convertir tu idea en un producto real, funcional y listo para crecer. Cuéntame tu proyecto —o tu sueño— y lo llevo del papel a la pantalla.",
        ],
        en: [
            "I'm Samuel Salazar, a Software Developer with a degree in Computer Engineering from Universidad de Holguín «Oscar Lucero Moya». As a full-stack developer I cover a project's whole lifecycle: understanding the problem, modelling the data, building the solution, and shipping it running — whatever kind of project it is.",
            "I have experience with a wide range of technologies and I'm equally comfortable anywhere in the stack: I pick the tool that fits each case best and I own it from start to finish.",
            "My job is to materialise what you imagine: turning your idea into a real, working product that is ready to grow. Tell me about your project — or your dream — and I'll take it from paper to screen.",
        ],
    } satisfies LList,
    quote: {
        es: "La mejor manera de predecir el futuro es inventarlo.",
        en: "The best way to predict the future is to invent it.",
    } satisfies L,
    quoteAuthor: {
        name: "Alan Kay",
        role: {
            es: "Científico de la computación · 1971",
            en: "Computer scientist · 1971",
        } satisfies L,
    },
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
            id: "proj-obey",
            index: "01",
            name: "Obey",
            tagline: {
                es: "CLI de IA que traduce lenguaje natural a comandos del shell que estás usando.",
                en: "AI CLI that turns natural language into commands for the shell you're using.",
            },
            description: {
                es: "Asistente de terminal escrito en TypeScript y sin dependencias en tiempo de ejecución. Detecta el shell desde el que se invoca —bash, zsh, fish, nushell, PowerShell o cmd.exe— y le pide al modelo un plan en JSON con los comandos, una explicación y un nivel de riesgo. Muestra el plan, pide confirmación, ejecuta el script y, si falla, le devuelve el error al modelo para que se corrija solo. Publicado en npm como obey-cli.",
                en: "Terminal assistant written in TypeScript with no runtime dependencies. It detects the shell it was invoked from —bash, zsh, fish, nushell, PowerShell or cmd.exe— and asks the model for a JSON plan with the commands, an explanation and a risk level. It shows the plan, asks for confirmation, runs the script and, on failure, feeds the error back to the model so it can correct itself. Published on npm as obey-cli.",
            },
            stack: ["TypeScript", "Node.js", "LLM", "CLI"],
            year: "2026",
            repo: "https://github.com/StinsonSamuel02/Obey",
            demo: null,
        },
        {
            id: "proj-portfolio",
            index: "02",
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
            repo: "https://github.com/StinsonSamuel02",
            demo: null,
        },
        {
            id: "proj-1",
            index: "03",
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
            index: "04",
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
