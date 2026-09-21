import { skills } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SpotlightCard } from "./ui/SpotlightCard";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section
      id="habilidades"
      index="02"
      eyebrow={t(skills.eyebrow)}
      title={t(skills.title)}
      description={t(skills.description)}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={i * 0.06}
            className={group.id === "herramientas" ? "lg:col-span-1" : ""}
          >
            <SpotlightCard className="lift h-full rounded-card border border-white/10 bg-ink-900/60 p-7 hover:border-ember-500/35">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-mist-600">{group.index}</span>
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-ember-500/60 transition-colors duration-500 group-hover:bg-ember-400"
                />
              </div>

              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-mist-50">
                {t(group.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">{t(group.blurb)}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[0.6875rem] tracking-wide text-mist-300 transition-colors duration-300 hover:border-ember-500/50 hover:text-ember-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
