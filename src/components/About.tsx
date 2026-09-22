import { about } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function About() {
  const { t, tl } = useLanguage();
  const paragraphs = tl(about.paragraphs);

  return (
    <Section
      id="sobre-mi"
      index="01"
      eyebrow={t(about.eyebrow)}
      title={t(about.title)}
    >
      <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="space-y-5 sm:space-y-6">
            {paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                <p className="text-[0.9375rem] leading-[1.8] text-mist-300 sm:text-base sm:leading-[1.85] md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <blockquote className="mt-10 border-l-2 border-ember-500 pl-5 sm:mt-12 sm:pl-6">
              <p className="font-display text-lg leading-snug text-mist-100 sm:text-xl md:text-2xl">
                «{t(about.quote)}»
              </p>
              <footer className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm text-mist-400">
                <cite className="font-medium not-italic text-mist-100">
                  {about.quoteAuthor.name}
                </cite>
                <span aria-hidden="true" className="text-ember-400">
                  ·
                </span>
                <span>{t(about.quoteAuthor.role)}</span>
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/8">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.08}>
                <div className="group h-full bg-ink-900/80 p-5 transition-colors duration-500 hover:bg-ink-850 sm:p-6 lg:p-7">
                  <p className="font-display text-xl font-medium tracking-tight text-ember-400 transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400 sm:mt-3">
                    {t(stat.label)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
