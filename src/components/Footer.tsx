import { navItems, ui } from "../data/portfolio";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 px-5 py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-ember-500/40 bg-ember-500/10 font-mono text-xs font-semibold text-ember-400 transition-colors duration-300 group-hover:bg-ember-500 group-hover:text-ink-950">
              {profile.initials}
            </span>
            <span className="font-display text-sm font-medium tracking-tight text-mist-100">
              {profile.name}
            </span>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist-500">{t(ui.builtWith)}</p>
        </div>

        <nav aria-label={t(ui.sections)} className="md:col-span-4">
          <h2 className="eyebrow text-mist-600">{t(ui.sections)}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 sm:mt-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-underline inline-block py-1.5 text-sm text-mist-400 transition-colors hover:text-mist-50"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 py-1 font-mono text-xs tracking-wider text-mist-400 transition-colors hover:text-ember-300"
          >
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
            {t(ui.backToTop)}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-6 sm:mt-12 sm:gap-4 sm:pt-8">
        <p className="font-mono text-[0.6875rem] tracking-wider text-mist-600">
          © {year} {profile.name}. {t(ui.rights)}.
        </p>
        <p className="font-mono text-[0.6875rem] tracking-wider text-mist-600">
          React · TypeScript · Tailwind CSS · Vite
        </p>
      </div>
    </footer>
  );
}
