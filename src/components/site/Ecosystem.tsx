import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { useReveal } from "@/hooks/use-reveal";

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const current = capabilities[active] ?? capabilities[0]!;
  const { ref, visible } = useReveal<HTMLDivElement>();
  const R = 178;

  return (
    <section id="ecosystem" className="relative border-t border-line py-24 md:py-36">
      <div ref={ref} data-visible={visible} className="reveal shell">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-cyan" />
          03 — The Ecosystem
        </p>
        <h2 className="display mt-6 max-w-4xl text-[clamp(2rem,5.6vw,4.4rem)]">
          ONE ECOSYSTEM.
          <br />
          EVERY CAPABILITY <span className="accent-text">CONNECTED.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Wheel — desktop / tablet */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[32rem] md:block">
            <svg viewBox="0 0 440 440" className="absolute inset-0 size-full">
              {[100, 145, 190, 214].map((r) => (
                <circle
                  key={r}
                  cx="220"
                  cy="220"
                  r={r}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="0.6"
                />
              ))}
              {capabilities.map((c, i) => {
                const a = (i / capabilities.length) * Math.PI * 2 - Math.PI / 2;
                const on = i === active;
                return (
                  <line
                    key={c.id}
                    x1="220"
                    y1="220"
                    x2={220 + Math.cos(a) * R}
                    y2={220 + Math.sin(a) * R}
                    stroke={on ? "var(--cyan)" : "var(--border)"}
                    strokeWidth={on ? 1.4 : 0.7}
                    strokeDasharray={on ? "0" : "3 6"}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-center">
              <div>
                <span className="font-display text-sm font-extrabold">
                  NEXORA<span className="accent-text">360</span>
                </span>
                <span className="eyebrow mt-1 block text-[8px]">One partner</span>
              </div>
            </div>

            {capabilities.map((c, i) => {
              const a = (i / capabilities.length) * Math.PI * 2 - Math.PI / 2;
              const on = i === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-500 ${
                    on
                      ? "border-cyan bg-cyan/15 text-foreground"
                      : "border-line bg-surface/70 text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    left: `${50 + (Math.cos(a) * R * 100) / 440}%`,
                    top: `${50 + (Math.sin(a) * R * 100) / 440}%`,
                  }}
                >
                  {c.short}
                </button>
              );
            })}
          </div>

          {/* Mobile: swipeable chips */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 md:hidden">
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`snap-start whitespace-nowrap border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] ${
                  i === active
                    ? "border-cyan bg-cyan/15 text-foreground"
                    : "border-line text-muted-foreground"
                }`}
              >
                {c.short}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="border-l border-cyan/60 pl-6 md:pl-8">
            <span className="font-mono text-xs text-cyan">{current.num}</span>
            <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {current.name}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {current.line}
            </p>
            <ul className="mt-8 grid gap-px border border-line sm:grid-cols-2">
              {current.services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 bg-surface/60 px-4 py-3 text-[13px] text-muted-foreground"
                >
                  <span className="size-1 rounded-full bg-violet" />
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="link-underline mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-cyan"
            >
              Discuss this capability <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
