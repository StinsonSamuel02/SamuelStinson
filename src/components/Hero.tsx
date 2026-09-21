import { motion, useReducedMotion, type Variants } from "motion/react";
import { hero, ui } from "../data/portfolio";
import { profile, socials } from "../data/profile";
import { useLanguage } from "../i18n";

const NAME_LINES = profile.name.split(" ");

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="inicio" className="relative px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          {profile.openToWork ? (
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="relative grid size-2 place-items-center">
                <span className="absolute size-2 animate-ping rounded-full bg-verdigris-400/70" />
                <span className="size-2 rounded-full bg-verdigris-400" />
              </span>
              <span className="eyebrow text-verdigris-400">{t(hero.availability)}</span>
            </motion.div>
          ) : null}

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.4rem,9.5vw,5.6rem)] leading-[0.94] font-semibold tracking-[-0.035em] text-mist-50 sm:mt-7"
          >
            {NAME_LINES.map((line, i) => (
              <span
                key={line}
                className={`block ${i === NAME_LINES.length - 1 ? "outline-text" : ""}`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-8"
          >
            <span className="eyebrow text-ember-400">{t(hero.role)}</span>
            <span aria-hidden className="h-px w-6 bg-white/20" />
            <span className="eyebrow text-mist-500">{t(hero.roleAlt)}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl font-display text-lg leading-snug text-mist-100 sm:mt-8 sm:text-xl md:text-2xl"
          >
            {t(hero.headline)}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-mist-300 sm:mt-5 sm:text-base"
          >
            {t(hero.tagline)}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-ember-400 hover:shadow-ember"
            >
              {t(hero.ctaPrimary)}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="#proyectos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-mist-100 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-300 sm:w-auto sm:py-3"
            >
              {t(hero.ctaSecondary)}
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-1 sm:mt-12 sm:gap-x-6"
          >
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={t(social.hint)}
                  className="link-underline inline-flex py-1.5 font-mono text-xs tracking-wider text-mist-400 transition-colors hover:text-mist-50"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li className="inline-flex py-1.5 font-mono text-xs tracking-wider text-mist-600">
              {t(profile.location)}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[15rem] sm:max-w-[20rem] lg:col-span-5 lg:max-w-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] border border-ember-500/25 sm:translate-x-5 sm:translate-y-5 sm:rounded-[2rem]"
            />

            <figure className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-ink-850 sm:rounded-[2rem]">
              <img
                src={profile.photo}
                alt={profile.name}
                width={1920}
                height={2560}
                className="duotone aspect-[3/4] w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              <div aria-hidden className="duotone-wash absolute inset-0" />
              <div aria-hidden className="duotone-shade absolute inset-0" />

              <span
                aria-hidden
                className="absolute top-4 left-4 size-5 border-t border-l border-ember-400/70 sm:top-5 sm:left-5 sm:size-6"
              />
              <span
                aria-hidden
                className="absolute top-4 right-4 size-5 border-t border-r border-ember-400/70 sm:top-5 sm:right-5 sm:size-6"
              />
              <span
                aria-hidden
                className="absolute right-4 bottom-4 size-5 border-r border-b border-ember-400/70 sm:right-5 sm:bottom-5 sm:size-6"
              />

              <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5 sm:gap-4">
                <span className="font-mono text-[0.6875rem] leading-relaxed tracking-[0.18em] text-mist-200/90 uppercase sm:tracking-[0.2em]">
                  {profile.initials} · {t(hero.roleAlt)}
                </span>
                <span className="eyebrow text-ember-300">Cuba</span>
              </figcaption>
            </figure>

            <div className="animate-[drift_9s_ease-in-out_infinite] absolute -bottom-6 -left-3 hidden rounded-2xl border border-white/10 bg-ink-900/85 px-4 py-3.5 backdrop-blur-md sm:block sm:-left-4 sm:px-5 sm:py-4">
              <p className="eyebrow text-mist-500">Stack</p>
              <p className="mt-2 font-display text-xs text-mist-100 sm:text-sm">
                TypeScript · Python · Kotlin
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 hidden w-full max-w-7xl items-center gap-4 md:flex lg:mt-20">
        <span className="eyebrow text-mist-600">{t(hero.scroll)}</span>
        <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        <span className="eyebrow text-mist-600">{t(ui.sections)} ↓</span>
      </div>
    </section>
  );
}
