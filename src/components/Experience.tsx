import { experience } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Experience() {
  const { t, tl } = useLanguage();

  return (
    <Section
      id="experiencia"
      index="03"
      eyebrow={t(experience.eyebrow)}
      title={t(experience.title)}
      description={t(experience.description)}
    >
      <ol className="relative">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-ember-500/60 via-white/10 to-transparent md:left-[9px]"
        />

        {experience.entries.map((entry, i) => (
          <li key={entry.id} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
            <Reveal delay={i * 0.05}>
              <span
                aria-hidden
                className="absolute top-2.5 left-0 grid size-4 place-items-center rounded-full border border-ember-500/50 bg-ink-950 md:size-5"
              >
                <span className="size-1.5 rounded-full bg-ember-500" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium tracking-tight text-mist-50 md:text-2xl">
                  {t(entry.role)}
                </h3>
                <span aria-hidden className="h-px w-5 bg-white/15" />
                <span className="font-mono text-xs tracking-wide text-ember-400">
                  {entry.company}
                </span>
              </div>

              <p className="mt-2 eyebrow text-mist-600">{t(entry.period)}</p>

              <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">{t(entry.summary)}</p>

              <ul className="mt-5 space-y-2.5">
                {tl(entry.highlights).map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-mist-400">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-ember-500/70" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1 font-mono text-[0.6875rem] text-mist-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
