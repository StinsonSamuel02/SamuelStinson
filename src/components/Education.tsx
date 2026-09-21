import { motion } from "motion/react";
import { education } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SpotlightCard } from "./ui/SpotlightCard";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section
      id="formacion"
      index="05"
      eyebrow={t(education.eyebrow)}
      title={t(education.title)}
      description={t(education.description)}
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {education.entries.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.06}>
              <SpotlightCard className="h-full rounded-card border border-white/10 bg-ink-900/60 p-8">
                <span className="eyebrow text-ember-500">{t(entry.period)}</span>

                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-mist-50 md:text-3xl">
                  {t(entry.degree)}
                </h3>

                <p className="mt-3 font-mono text-xs leading-relaxed tracking-wide text-verdigris-400">
                  {entry.school}
                </p>

                <p className="mt-6 max-w-xl leading-relaxed text-mist-400">{t(entry.detail)}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="h-full rounded-card border border-white/10 bg-ink-900/60 p-8">
              <h3 className="eyebrow text-mist-500">{t(education.languagesTitle)}</h3>

              <ul className="mt-7 space-y-7">
                {education.languages.map((language) => (
                  <li key={t(language.name)}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-lg text-mist-50">
                        {t(language.name)}
                      </span>
                      <span className="font-mono text-[0.6875rem] tracking-wide text-mist-500">
                        {t(language.level)}
                      </span>
                    </div>

                    <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/8">
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: language.value / 100 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="block h-full origin-left rounded-full bg-gradient-to-r from-ember-600 to-ember-300"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="h-full rounded-card border border-white/10 bg-ink-900/60 p-8">
              <h3 className="eyebrow text-mist-500">{t(education.certificationsTitle)}</h3>

              <ul className="mt-7 space-y-5">
                {education.certifications.map((certification) => (
                  <li key={certification.id} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-verdigris-400"
                    />
                    <div>
                      <p className="leading-snug text-mist-100">{t(certification.name)}</p>
                      <p className="mt-1 font-mono text-[0.6875rem] tracking-wide text-mist-600">
                        {t(certification.issuer)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
