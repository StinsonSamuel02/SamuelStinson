import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { HTML_LANG, LANGS, type L, type LList, type Lang } from "./types";

const STORAGE_KEY = "portfolio.lang";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Resolve a localized string. */
  t: (value: L) => string;
  /** Resolve a localized list. */
  tl: (value: LList) => string[];
};

const LanguageContext = createContext<LanguageValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "es";

  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && LANGS.includes(fromUrl as Lang)) return fromUrl as Lang;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.includes(stored as Lang)) return stored as Lang;
  } catch {
    /* localStorage may be unavailable (private mode) — fall through. */
  }

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    document.title =
      lang === "es"
        ? "Samuel Salazar Zaldivar · Desarrollador de Software"
        : "Samuel Salazar Zaldivar · Software Developer";

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* Ignore quota / privacy-mode errors. */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const toggle = useCallback(
    () => setLangState((current) => (current === "es" ? "en" : "es")),
    [],
  );

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (localized) => localized[lang],
      tl: (localized) => localized[lang],
    }),
    [lang, setLang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>.");
  }
  return context;
}
