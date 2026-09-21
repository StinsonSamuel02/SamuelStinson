import { projects } from "../data/portfolio";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="proyectos"
      index="04"
      eyebrow={t(projects.eyebrow)}
      title={t(projects.title)}
      description={t(projects.description)}
    >
      <div className="border-t border-white/10">
        {projects.entries.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <article className="group relative border-b border-white/10">
              {/* Ember wash that grows in from the left on hover. */}
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-ember-500/8 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              <div className="relative grid gap-6 px-1 py-9 transition-[padding] duration-500 group-hover:px-5 lg:grid-cols-12 lg:gap-8">
                <div className="flex items-baseline gap-5 lg:col-span-4">
                  <span className="font-mono text-xs text-mist-600">{project.index}</span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-medium tracking-tight text-mist-50 transition-colors duration-500 group-hover:text-ember-300 md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-mono text-[0.6875rem] tracking-wider text-mist-600">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-display text-base leading-snug text-mist-100 md:text-lg">
                    {t(project.tagline)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">
                    {t(project.description)}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5 lg:col-span-3 lg:items-end">
                  <ul className="flex flex-wrap gap-2 lg:justify-end">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[0.625rem] tracking-wide text-mist-500"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline font-mono text-[0.6875rem] tracking-wider text-mist-300 transition-colors hover:text-ember-300"
                      >
                        {t(projects.viewRepo)} ↗
                      </a>
                    ) : (
                      <span className="font-mono text-[0.6875rem] tracking-wider text-mist-600">
                        {t(projects.repoPending)}
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline font-mono text-[0.6875rem] tracking-wider text-mist-300 transition-colors hover:text-ember-300"
                      >
                        {t(projects.viewDemo)} ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
