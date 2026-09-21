import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { navItems, ui } from "../data/portfolio";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n";
import { LanguageToggle } from "./ui/LanguageToggle";

const SECTION_IDS = navItems.map((item) => item.id);

/** Highlights the nav item for the section currently in the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function Nav() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-ink-950/78 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label={t(ui.sections)}
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-6 md:h-20"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={profile.name}
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-lg border border-ember-500/40 bg-ember-500/10 font-mono text-xs font-semibold text-ember-400 transition-colors duration-300 group-hover:border-ember-500 group-hover:bg-ember-500 group-hover:text-ink-950">
              {profile.initials}
            </span>
            <span className="hidden font-display text-sm font-medium tracking-tight text-mist-100 sm:block">
              {profile.shortName}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? "text-ember-400" : "text-mist-300 hover:text-mist-50"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        className="absolute inset-0 -z-10 rounded-full border border-ember-500/25 bg-ember-500/8"
                      />
                    ) : null}
                    {t(item.label)}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <LanguageToggle />

            <a
              href="#contacto"
              className="hidden rounded-full bg-mist-50 px-5 py-2 text-sm font-medium text-ink-950 transition-colors duration-300 hover:bg-ember-400 md:inline-flex"
            >
              {t(ui.contactHeading)}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t(ui.close) : t(ui.open)}
              className="grid size-9 place-items-center rounded-lg border border-white/10 text-mist-200 transition-colors hover:border-white/25 hover:text-mist-50 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-ember-600 via-ember-400 to-verdigris-400"
        />
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-ink-950/96 px-6 pt-28 pb-10 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/8 py-4 font-display text-2xl text-mist-100 transition-colors hover:text-ember-400"
                  >
                    <span className="eyebrow text-mist-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t(item.label)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
