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
    <section id="inicio" className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
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
            className="mt-7 font-display text-[clamp(2.9rem,8.2vw,5.6rem)] leading-[0.94] font-semibold tracking-[-0.035em] text-mist-50"
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

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="eyebrow text-ember-400">{t(hero.role)}</span>
            <span aria-hidden className="h-px w-6 bg-white/20" />
            <span className="eyebrow text-mist-500">{t(hero.roleAlt)}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl font-display text-xl leading-snug text-mist-100 md:text-2xl"
          >
            {t(hero.headline)}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl leading-relaxed text-mist-300">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-mist-100 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-300"
            >
              {t(hero.ctaSecondary)}
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={t(social.hint)}
                  className="link-underline font-mono text-xs tracking-wider text-mist-400 transition-colors hover:text-mist-50"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li className="font-mono text-xs tracking-wider text-mist-600">
              {t(profile.location)}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-ember-500/25"
            />

            <figure className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-ink-850">
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
                className="absolute top-5 left-5 size-6 border-t border-l border-ember-400/70"
              />
              <span
                aria-hidden
                className="absolute top-5 right-5 size-6 border-t border-r border-ember-400/70"
              />
              <span
                aria-hidden
                className="absolute bottom-5 right-5 size-6 border-r border-b border-ember-400/70"
              />

              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <span className="font-mono text-[0.625rem] leading-relaxed tracking-[0.2em] text-mist-200/90 uppercase">
                  {profile.initials} · {t(hero.roleAlt)}
                </span>
                <span className="eyebrow text-ember-300">Cuba</span>
              </figcaption>
            </figure>

            <div className="animate-[drift_9s_ease-in-out_infinite] absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-ink-900/85 px-5 py-4 backdrop-blur-md sm:block">
              <p className="eyebrow text-mist-500">Stack</p>
              <p className="mt-2 font-display text-sm text-mist-100">
                TypeScript · Python · Kotlin
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 hidden w-full max-w-7xl items-center gap-4 md:flex">
        <span className="eyebrow text-mist-600">{t(hero.scroll)}</span>
        <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        <span className="eyebrow text-mist-600">{t(ui.sections)} ↓</span>
      </div>
    </section>
  );
}
