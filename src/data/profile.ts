import type { L } from "../i18n";

/* ════════════════════════════════════════════════════════════════════
 *  DATOS PERSONALES — edita este archivo para cambiar tus enlaces.
 * ════════════════════════════════════════════════════════════════════ */

export const profile = {
  name: "Samuel Salazar Zaldivar",
  /** Nombre corto para el logotipo de la cabecera. */
  shortName: "Samuel Salazar",
  initials: "SS",

  email: "samuelstinson02@gmail.com",
  githubUser: "StinsonSamuel02",
  github: "https://github.com/StinsonSamuel02",

  /** Imagen en /public — sustituye public/profile.jpg por otra foto. */
  photo: "/profile.jpg",

  // TODO: confirma tu ubicación o borra esta línea si prefieres no mostrarla.
  location: { es: "Holguín, Cuba", en: "Holguín, Cuba" },

  /** Cambia a false cuando dejes de buscar proyectos. */
  openToWork: true,
} as const;

/* ════════════════════════════════════════════════════════════════════
 *  ENLACES — descomenta y rellena cuando tengas el resto de perfiles.
 * ════════════════════════════════════════════════════════════════════ */

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  /** Etiqueta accesible bilingüe. */
  hint: L;
};

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    hint: { es: "Perfil de GitHub", en: "GitHub profile" },
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    hint: { es: "Enviar un correo", en: "Send an email" },
  },
  // {
  //   id: "linkedin",
  //   label: "LinkedIn",
  //   href: "https://www.linkedin.com/in/tu-usuario/",
  //   hint: { es: "Perfil de LinkedIn", en: "LinkedIn profile" },
  // },
  // {
  //   id: "x",
  //   label: "X",
  //   href: "https://x.com/tu-usuario",
  //   hint: { es: "Perfil de X", en: "X profile" },
  // },
];

/** Ruta del CV dentro de /public (p. ej. "/cv-samuel-salazar.pdf"). */
export const cvHref: string | null = null;
