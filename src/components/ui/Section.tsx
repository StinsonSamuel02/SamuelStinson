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
    <section id={id} className="relative scroll-mt-20 px-5 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20 md:py-28 lg:py-32">
      <div className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="eyebrow text-ember-500">{index}</span>
            <span aria-hidden className="h-px w-6 bg-white/15 sm:w-8" />
            <span className="eyebrow text-mist-500">{eyebrow}</span>
          </div>

          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.06] font-medium tracking-[-0.02em] text-mist-50 sm:mt-7 sm:leading-[1.05]">
            {title}
          </h2>

          {description ? (
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-mist-300 sm:mt-5 sm:text-base md:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-10 sm:mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
