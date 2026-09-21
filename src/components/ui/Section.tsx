import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Widens the inner container for full-bleed sections. */
  wide?: boolean;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  wide = false,
}: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 px-6 py-24 md:py-32">
      <div className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-ember-500">{index}</span>
            <span aria-hidden className="h-px w-8 bg-white/15" />
            <span className="eyebrow text-mist-500">{eyebrow}</span>
          </div>

          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.02em] text-mist-50">
            {title}
          </h2>

          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 md:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
