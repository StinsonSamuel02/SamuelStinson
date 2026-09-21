import { motion } from "motion/react";
import { LANGS, LANG_LABEL, LANG_NAME, useLanguage } from "../../i18n";
import { ui } from "../../data/portfolio";

/** Segmented ES / EN switch with an animated pill. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t(ui.language)}
      className={`relative flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur ${className}`}
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            title={`${LANG_NAME[code]}${active ? "" : ` — ${t(ui.switchTo)}`}`}
            className={`relative z-10 rounded-full px-3.5 py-2 font-mono text-[0.6875rem] font-semibold tracking-widest transition-colors duration-300 sm:py-1.5 ${
              active ? "text-ink-950" : "text-mist-500 hover:text-mist-100"
            }`}
          >
            {active ? (
              <motion.span
                layoutId="language-pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 -z-10 rounded-full bg-ember-500"
              />
            ) : null}
            {LANG_LABEL[code]}
          </button>
        );
      })}
    </div>
  );
}
