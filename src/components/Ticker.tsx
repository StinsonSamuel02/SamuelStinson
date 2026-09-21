import { tickerItems } from "../data/portfolio";

/** Infinite marquee of technologies. Duplicated once for a seamless loop. */
export function Ticker() {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="marquee-host relative border-y border-white/8 bg-ink-900/40 py-4 sm:py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent sm:w-24"
      />

      <div className="marquee-track flex w-max items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap sm:gap-10"
          >
            <span className="eyebrow text-mist-500">{item}</span>
            <span aria-hidden className="text-ember-500/60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
