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
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                <p className="text-base leading-[1.85] text-mist-300 md:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <blockquote className="relative mt-12 border-l-2 border-ember-500 pl-6">
              <p className="font-display text-xl leading-snug text-mist-100 md:text-2xl">
                «{t(about.quote)}»
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/8 sm:grid-cols-1">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.08}>
                <div className="group h-full bg-ink-900/80 p-7 transition-colors duration-500 hover:bg-ink-850">
                  <p className="font-display text-2xl font-medium tracking-tight text-ember-400 transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">{t(stat.label)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
