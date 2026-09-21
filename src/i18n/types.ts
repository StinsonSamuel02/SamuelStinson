export type Lang = "es" | "en";

/** A string that exists in every supported language. */
export type L = Record<Lang, string>;

/** A list of strings that exists in every supported language. */
export type LList = Record<Lang, string[]>;

export const LANGS: Lang[] = ["es", "en"];

export const LANG_LABEL: Record<Lang, string> = {
  es: "ES",
  en: "EN",
};

export const LANG_NAME: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

export const HTML_LANG: Record<Lang, string> = {
  es: "es",
  en: "en",
};
