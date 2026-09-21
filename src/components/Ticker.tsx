import { tickerItems } from "../data/portfolio";

/** Infinite marquee of technologies. Duplicated once for a seamless loop. */
export function Ticker() {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="marquee-host relative border-y border-white/8 bg-ink-900/40 py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent"
      />

      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
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
