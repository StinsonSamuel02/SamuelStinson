/**
 * Fixed atmospheric backdrop: engineering grid, two warm glows and film
 * grain. Purely decorative, so it stays out of the accessibility tree.
 */
export function Background() {
  return (
    <div aria-hidden className="bg-grain pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70" />

      <div className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full bg-ember-600/12 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-verdigris-600/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-ember-700/8 blur-[120px]" />

      {/* Top highlight that fades the grid away from the header. */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ink-950 via-ink-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
