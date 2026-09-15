import { ArrowDown, ArrowUpRight } from "lucide-react";

const nodes = [
  "GCC",
  "BPO",
  "Digital Marketing",
  "Digital Sales",
  "Customer Experience",
  "KPO",
  "HR & Recruitment",
  "Finance",
  "Administration",
  "Data Management",
  "AI & Automation",
];

function Orbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[34rem] select-none lg:max-w-[40rem]"
    >
      {/* static rings + connection lines */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.45" />
            <stop offset="60%" stopColor="var(--violet)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#core)" />
        {[80, 120, 160, 190].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="var(--border)"
            strokeWidth="0.6"
          />
        ))}
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={200 + Math.cos(a) * 160}
              y2={200 + Math.sin(a) * 160}
              stroke="var(--cyan)"
              strokeOpacity="0.16"
              strokeWidth="0.8"
              strokeDasharray="3 7"
              style={{ animation: `dash-flow ${9 + i}s linear infinite` }}
            />
          );
        })}
      </svg>

      {/* pulsing core */}
      <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
        <span className="absolute size-28 rounded-full border border-cyan/50 [animation:pulse-ring_3.6s_ease-out_infinite]" />
        <span className="absolute size-28 rounded-full border border-violet/40 [animation:pulse-ring_3.6s_ease-out_infinite_1.8s]" />
        <div className="relative grid size-28 place-items-center rounded-full border border-border bg-background/70 text-center backdrop-blur-sm sm:size-32">
          <span className="font-display text-[13px] font-extrabold tracking-tight sm:text-sm">
            NEXORA
            <span className="accent-text">360</span>
          </span>
        </div>
      </div>

      {/* orbiting capability nodes */}
      <div className="orbit-spin absolute inset-0">
        {nodes.map((n, i) => {
          const a = (i / nodes.length) * 360;
          return (
            <div
              key={n}
              className="absolute size-0"
              style={{
                left: `${50 + Math.cos((a - 90) * (Math.PI / 180)) * 40}%`,
                top: `${50 + Math.sin((a - 90) * (Math.PI / 180)) * 40}%`,
              }}
            >
              <div className="orbit-spin-reverse">
                <span className="flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap border border-line bg-surface/70 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm sm:text-[10px]">
                  <span className="size-1 rounded-full bg-cyan" />
                  {n}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:min-h-screen lg:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_72%)]" />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-10">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-cyan" />
            360° Business Ecosystem
          </p>
          <h1 className="display mt-7 text-[clamp(2.6rem,8.4vw,6.4rem)]">
            ONE PARTNER.
            <br />
            EVERY BUSINESS
            <br />
            <span className="accent-text">NEED.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A next-generation global business services and capability partner — bringing GCC, BPO,
            KPO, digital, customer experience, IT, HR, finance and AI &amp; automation together
            under one integrated ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#ecosystem" className="btn-primary">
              Explore Capabilities <ArrowUpRight className="size-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Start a Conversation
            </a>
          </div>
        </div>

        <Orbit />
      </div>

      <div className="shell relative mt-14 flex items-center gap-4 lg:absolute lg:bottom-8 lg:left-0 lg:right-0 lg:mt-0">
        <ArrowDown className="scroll-hint size-4 text-cyan" />
        <span className="eyebrow">Scroll</span>
        <span className="hairline flex-1" />
        <span className="eyebrow hidden md:block">One partner. Every business need.</span>
      </div>
    </section>
  );
}
