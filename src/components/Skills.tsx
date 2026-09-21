import type { ReactNode } from "react";
import { skills, type SkillGroup } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SpotlightCard } from "./ui/SpotlightCard";

function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-mist-300 transition-colors duration-300 hover:border-ember-500/50 hover:text-ember-300 sm:px-3">
      {children}
    </li>
  );
}

function GroupCard({ group }: { group: SkillGroup }) {
  const { t } = useLanguage();
  const featured = group.featured === true;

  return (
    <SpotlightCard
      className={`lift h-full rounded-card border p-5 hover:border-ember-500/35 sm:p-7 ${
        featured
          ? "border-ember-500/20 bg-gradient-to-br from-ember-500/[0.07] via-ink-900/70 to-ink-900/60 md:p-9"
          : "border-white/10 bg-ink-900/60"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="eyebrow text-mist-600">{group.index}</span>
        <span
          aria-hidden
          className={`size-1.5 rounded-full transition-colors duration-500 ${
            featured ? "bg-ember-400/80" : "bg-ember-500/60 group-hover:bg-ember-400"
          }`}
        />
      </div>

      <h3
        className={`mt-5 font-display font-medium tracking-tight text-mist-50 sm:mt-6 ${
          featured ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
        }`}
      >
        {t(group.title)}
      </h3>

      <p
        className={`mt-2.5 leading-relaxed text-mist-400 sm:mt-3 ${
          featured ? "max-w-2xl text-[0.9375rem] sm:text-base" : "text-sm"
        }`}
      >
        {t(group.blurb)}
      </p>

      {group.subgroups ? (
        <div className="mt-6 grid gap-x-10 gap-y-6 sm:mt-8 sm:gap-y-8 md:grid-cols-2">
          {group.subgroups.map((subgroup) => (
            <div key={subgroup.label.en}>
              <h4 className="eyebrow text-ember-500">{t(subgroup.label)}</h4>
              <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {subgroup.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
          {(group.items ?? []).map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </ul>
      )}
    </SpotlightCard>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const featuredGroups = skills.groups.filter((group) => group.featured);
  const otherGroups = skills.groups.filter((group) => !group.featured);

  return (
    <Section
      id="habilidades"
      index="02"
      eyebrow={t(skills.eyebrow)}
      title={t(skills.title)}
      description={t(skills.description)}
    >
      <div className="space-y-4 sm:space-y-5">
        {featuredGroups.map((group) => (
          <Reveal key={group.id}>
            <GroupCard group={group} />
          </Reveal>
        ))}

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <GroupCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
