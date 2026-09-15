import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Globe2, Layers, Sparkles } from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { useReveal } from "@/hooks/use-reveal";
import { NexoraLogo } from "./NexoraLogo";

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const current = capabilities[active] ?? capabilities[0]!;
  const { ref, visible } = useReveal<HTMLDivElement>();
  const R = 184;

  return (
    <section id="ecosystem" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #F97316 0%, #B91C1C 60%, transparent 100%)",
        }}
      />

      <div ref={ref} data-visible={visible} className="reveal shell relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#F97316]">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-[#B91C1C] to-[#FACC15]" />
              03 — The 360° Ecosystem
            </p>
            <h2 className="display mt-4 max-w-4xl text-[clamp(2.2rem,5.4vw,4.2rem)] font-extrabold text-white">
              ONE ECOSYSTEM.
              <br />
              EVERY CAPABILITY <span className="accent-text">CONNECTED.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Hover or tap any node to inspect how each discipline integrates seamlessly into our
            unified governance framework, eliminating vendor silos and friction.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Interactive Wheel — Desktop & Tablet */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[34rem] md:block">
            <svg viewBox="0 0 460 460" className="absolute inset-0 size-full">
              <defs>
                <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#FACC15" />
                </linearGradient>
              </defs>

              {/* Concentric orbital rings */}
              {[110, 150, 195, 222].map((r, idx) => (
                <circle
                  key={r}
                  cx="230"
                  cy="230"
                  r={r}
                  fill="none"
                  stroke={idx === 2 ? "rgba(8, 117, 201, 0.4)" : "rgba(255, 255, 255, 0.08)"}
                  strokeWidth={idx === 2 ? "1" : "0.6"}
                  strokeDasharray={idx === 1 ? "4 8" : undefined}
                />
              ))}

              {/* Connecting laser lines from center to nodes */}
              {capabilities.map((c, i) => {
                const a = (i / capabilities.length) * Math.PI * 2 - Math.PI / 2;
                const on = i === active;
                return (
                  <line
                    key={c.id}
                    x1="230"
                    y1="230"
                    x2={230 + Math.cos(a) * R}
                    y2={230 + Math.sin(a) * R}
                    stroke={on ? "url(#activeLineGrad)" : "rgba(255, 255, 255, 0.12)"}
                    strokeWidth={on ? 2 : 0.8}
                    strokeDasharray={on ? undefined : "3 6"}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Central Capsule */}
            <div className="absolute left-1/2 top-1/2 z-10 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/20 bg-[#071A3D]/95 p-3 text-center shadow-2xl backdrop-blur-xl">
              <div>
                <NexoraLogo size="sm" emblemOnly={true} />
                <span className="block mt-1 font-display text-[12px] font-extrabold text-white">
                  NEXORA<span className="accent-text">360</span>
                </span>
                <span className="font-mono block text-[8px] uppercase tracking-[0.16em] text-[#0875C9] font-bold">
                  ECOSYSTEM CORE
                </span>
              </div>
            </div>

            {/* Orbiting Capability Buttons */}
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
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 ${
                    on
                      ? "border-2 border-[#FACC15] bg-gradient-to-r from-[#B91C1C] via-[#F97316] to-[#FACC15] text-white shadow-xl shadow-[#F97316]/40 scale-110"
                      : "border border-white/15 bg-[#0B224E]/80 text-slate-300 hover:border-[#F97316] hover:text-white"
                  }`}
                  style={{
                    left: `${50 + (Math.cos(a) * R * 100) / 460}%`,
                    top: `${50 + (Math.sin(a) * R * 100) / 460}%`,
                  }}
                >
                  {c.short}
                </button>
              );
            })}
          </div>

          {/* Mobile swipeable chips */}
          <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-4 md:hidden">
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`snap-start shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider font-semibold transition-all ${
                  i === active
                    ? "border-[#FACC15] bg-gradient-to-r from-[#B91C1C] via-[#F97316] to-[#FACC15] text-white shadow-md"
                    : "border-white/15 bg-[#0B224E]/80 text-slate-300"
                }`}
              >
                {c.short}
              </button>
            ))}
          </div>

          {/* Right Detailed Capability Card */}
          <div className="rounded-3xl border border-white/15 bg-[#0B224E]/60 p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Corner accent glow */}
            <div className="absolute top-0 right-0 size-32 bg-gradient-to-bl from-[#F97316]/20 via-[#FACC15]/10 to-transparent pointer-events-none rounded-bl-full" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-mono text-sm font-bold text-[#FACC15] flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#EF4444]" />
                CAPABILITY {current.num} OF {String(capabilities.length).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-[#0875C9]/50 bg-[#0875C9]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#38BDF8]">
                ENTERPRISE READY
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {current.name}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-slate-200">
              {current.line}
            </p>

            <div className="mt-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-semibold mb-4 flex items-center gap-2">
                <Layers className="size-4" /> Core Service Modules
              </h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {current.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#071A3D]/70 px-4 py-3 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="size-4 text-[#FACC15] shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <a href="#contact" className="btn-primary text-xs">
                <span>Deploy This Capability</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <span>View all in directory</span>
                <ArrowUpRight className="size-3.5 text-[#F97316]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
