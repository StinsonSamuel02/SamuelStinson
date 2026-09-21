import { useEffect, useState } from "react";
import { contact, hero, ui } from "../data/portfolio";
import { cvHref, profile, socials } from "../data/profile";
import { useLanguage } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section
      id="contacto"
      index="06"
      eyebrow={t(contact.eyebrow)}
      title={t(contact.title)}
      description={t(contact.description)}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="group block border-b border-white/12 pb-4 transition-colors duration-500 hover:border-ember-500"
            >
              <span className="eyebrow text-mist-600">Email</span>
              <span className="mt-3 flex items-center justify-between gap-4">
                <span className="font-display text-[clamp(1.15rem,3.4vw,2rem)] leading-tight font-medium tracking-tight break-all text-mist-50 transition-colors duration-500 group-hover:text-ember-300">
                  {profile.email}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 text-ember-400 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                >
                  ↗
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-ember-400 hover:shadow-ember"
              >
                {t(contact.cta)}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-mist-100 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-300"
              >
                {copied ? t(contact.copied) : t(contact.copyEmail)}
              </button>

              {cvHref ? (
                <a
                  href={cvHref}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-mist-100 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-300"
                >
                  {t(contact.downloadCv)}
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-wide text-mist-500">
              <span className="relative grid size-1.5 place-items-center">
                <span className="absolute size-1.5 animate-ping rounded-full bg-verdigris-400/70" />
                <span className="size-1.5 rounded-full bg-verdigris-400" />
              </span>
              {t(hero.availability)} · {t(profile.location)}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="rounded-card border border-white/10 bg-ink-900/60 p-8">
              <h3 className="eyebrow text-mist-500">{t(contact.elseWhere)}</h3>

              <ul className="mt-7 divide-y divide-white/8">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 py-4 transition-colors duration-300"
                    >
                      <span>
                        <span className="block font-display text-lg text-mist-100 transition-colors duration-300 group-hover:text-ember-300">
                          {social.label}
                        </span>
                        <span className="mt-0.5 block font-mono text-[0.6875rem] tracking-wide text-mist-600">
                          {t(social.hint)}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="text-mist-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ember-400"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-white/8 pt-6 text-sm leading-relaxed text-mist-500">
                {t(ui.builtWith)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
