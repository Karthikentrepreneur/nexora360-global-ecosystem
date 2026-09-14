import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { useReveal } from "@/hooks/use-reveal";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-10 bg-cyan" />
      {children}
    </p>
  );
}

/* ---------------- 01 — THE PROBLEM ---------------- */

export function Problem() {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>01 — The Problem</Eyebrow>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2rem,5.6vw,4.4rem)]">
            BUSINESSES SHOULDN&apos;T NEED MULTIPLE PARTNERS FOR{" "}
            <span className="text-muted-foreground">MULTIPLE FUNCTIONS.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-px border border-line md:grid-cols-[1fr_auto_1fr]">
          <div className="bg-surface/40 p-8 md:p-12">
            <span className="eyebrow text-destructive">Fragmented model</span>
            <ul className="mt-8 space-y-5">
              {[
                "Multiple vendors",
                "Multiple teams",
                "Multiple reporting lines",
                "Multiple points of accountability",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-baseline gap-4 border-b border-line pb-5 font-display text-xl font-bold tracking-tight text-muted-foreground md:text-2xl"
                >
                  <span className="font-mono text-[10px] text-destructive">×</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Most organisations run operations, digital, customer experience, HR, finance and
              technology through separate vendors — each with its own process, cadence and
              accountability.
            </p>
          </div>

          <div className="grid place-items-center bg-background px-8 py-6">
            <ArrowRight className="size-6 rotate-90 text-cyan md:rotate-0" />
          </div>

          <div className="relative overflow-hidden bg-surface/40 p-8 md:p-12">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
            <span className="eyebrow relative text-cyan">Nexora360</span>
            <ul className="relative mt-8 space-y-5">
              {["One partner", "One operating model", "One point of accountability"].map((t) => (
                <li
                  key={t}
                  className="flex items-baseline gap-4 border-b border-line pb-5 font-display text-xl font-bold tracking-tight md:text-2xl"
                >
                  <span className="font-mono text-[10px] text-cyan">+</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="relative mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              One integrated ecosystem where every capability shares the same operating model,
              governance and reporting line.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 02 — ABOUT ---------------- */

const pillars = [
  {
    num: "01",
    title: "TECHNOLOGY",
    body: "Digital technologies, automation and AI-enabled solutions that deliver measurable business outcomes.",
  },
  {
    num: "02",
    title: "PEOPLE",
    body: "Experienced professionals who continuously look for opportunities to improve process, productivity and customer experience.",
  },
  {
    num: "03",
    title: "PROCESS",
    body: "Structured, repeatable ways of working — built around your requirements rather than a standard outsourcing template.",
  },
];

export function About() {
  const [open, setOpen] = useState(0);
  return (
    <section id="about" className="relative border-t border-line py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>02 — About Nexora360</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,5.2vw,4rem)]">
            BUILT AROUND
            <br />
            YOUR BUSINESS.
            <br />
            <span className="text-muted-foreground">NOT A STANDARD TEMPLATE.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            From supporting a single business function to managing complete outsourced operations,
            we design solutions around the unique requirements of every client.
          </p>
        </Reveal>

        <Reveal>
          <div className="border-t border-line">
            {pillars.map((p, i) => {
              const on = i === open;
              return (
                <button
                  key={p.num}
                  type="button"
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  aria-expanded={on}
                  className={`group block w-full border-b border-line px-1 py-8 text-left transition-colors duration-500 ${
                    on ? "bg-surface/50" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-6 px-5">
                    <span
                      className={`font-mono text-xs transition-colors ${on ? "text-cyan" : "text-muted-foreground"}`}
                    >
                      {p.num}
                    </span>
                    <h3 className="display flex-1 text-[clamp(1.8rem,4vw,3rem)]">{p.title}</h3>
                    <ArrowUpRight
                      className={`size-5 transition-all duration-500 ${
                        on ? "rotate-0 text-cyan opacity-100" : "-rotate-45 opacity-30"
                      }`}
                    />
                  </div>
                  <div
                    className={`grid px-5 transition-all duration-600 ${
                      on ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden pl-12 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 04 — CAPABILITY DIRECTORY ---------------- */

export function Directory() {
  return (
    <section id="capabilities" className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>04 — Capability Directory</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,5.2vw,4rem)]">
            THIRTEEN CAPABILITIES.
            <br />
            <span className="accent-text">ONE OPERATING MODEL.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16">
          <ul className="grid gap-px border border-line bg-border md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((c) => (
              <li key={c.id}>
                <a
                  href="#contact"
                  className="group flex h-full flex-col justify-between gap-10 bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-cyan">
                      {c.num}
                    </span>
                    <span className="relative grid size-7 place-items-center">
                      <span className="absolute inset-0 rounded-full border border-line transition-colors duration-500 group-hover:border-cyan" />
                      <span className="size-1 rounded-full bg-muted-foreground transition-colors duration-500 group-hover:bg-cyan" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{c.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.line}</p>
                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:mt-5 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-2">
                          {c.services.map((s) => (
                            <span
                              key={s}
                              className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-cyan">
                      Enquire
                      <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 05 — THE ADVANTAGE ---------------- */

const vendorRows = [
  ["Vendor 01", "Marketing"],
  ["Vendor 02", "Customer Support"],
  ["Vendor 03", "HR"],
  ["Vendor 04", "Finance"],
  ["Vendor 05", "Data"],
  ["Vendor 06", "Operations"],
];

const advantages = [
  "Reduced vendor complexity",
  "Connected operations",
  "Unified reporting",
  "Flexible scaling",
  "Faster execution",
  "Better visibility",
  "Integrated technology",
  "Long-term partnership",
];

export function Advantage() {
  return (
    <section id="advantage" className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>05 — The Nexora360 Advantage</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2rem,5.2vw,4rem)]">
            ONE PARTNER.
            <br />
            MULTIPLE CAPABILITIES.
            <br />
            <span className="accent-text">ONE INTEGRATED ECOSYSTEM.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-px border border-line bg-border lg:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <span className="eyebrow">Traditional model</span>
            <ul className="mt-8 space-y-px">
              {vendorRows.map(([v, f]) => (
                <li
                  key={v}
                  className="flex items-center justify-between gap-4 bg-surface/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  <span className="font-mono text-[11px]">{v}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden bg-background p-8 md:p-12">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
            <span className="eyebrow relative text-cyan">Nexora360 model</span>
            <ol className="relative mt-8 space-y-1">
              {[
                "One partner",
                "One operating model",
                "Multiple connected capabilities",
                "One point of accountability",
              ].map((t, i) => (
                <li key={t} className="relative pl-8">
                  <span className="absolute left-2 top-2 size-1.5 rounded-full bg-cyan" />
                  {i < 3 && (
                    <span className="absolute left-[0.64rem] top-5 h-full w-px bg-gradient-to-b from-cyan/60 to-transparent" />
                  )}
                  <span className="block pb-6 font-display text-xl font-bold tracking-tight md:text-2xl">
                    {t}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="mt-px grid gap-px border border-t-0 border-line bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a}
              className="bg-background px-6 py-7 text-sm text-muted-foreground transition-colors duration-500 hover:bg-surface hover:text-foreground"
            >
              {a}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 06 — INDUSTRIES ---------------- */

const industries = [
  "Technology",
  "Healthcare",
  "Financial Services",
  "Retail & E-commerce",
  "Education",
  "Real Estate",
  "Professional Services",
  "Manufacturing",
  "Travel & Hospitality",
  "Startups & SMEs",
];

export function Industries() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>06 — Industries</Eyebrow>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display max-w-2xl text-[clamp(2rem,5.2vw,4rem)]">
              INDUSTRY-AGNOSTIC.
              <br />
              <span className="text-muted-foreground">GLOBALLY FOCUSED.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Solutions are customised according to each organisation&apos;s operating model — not
              retrofitted to an industry playbook.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 overflow-hidden border-y border-line py-2">
        <div className="marquee-track flex w-max gap-0" style={hover ? { animationPlayState: "paused" } : undefined}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex" aria-hidden={dup === 1}>
              {industries.map((ind) => (
                <button
                  key={ind + dup}
                  type="button"
                  onMouseEnter={() => setHover(ind)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(ind)}
                  onBlur={() => setHover(null)}
                  className="flex items-center gap-6 px-8 py-6"
                >
                  <span className="font-mono text-[10px] text-cyan">360°</span>
                  <span
                    className={`display whitespace-nowrap text-[clamp(1.6rem,3.4vw,3rem)] transition-colors duration-500 ${
                      hover === ind ? "text-foreground" : "text-muted-foreground/45"
                    }`}
                  >
                    {ind}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 07 — VALUES ---------------- */

const values = [
  { k: "N", t: "Next-Generation Thinking" },
  { k: "E", t: "Excellence" },
  { k: "X", t: "eXecution" },
  { k: "O", t: "Ownership" },
  { k: "R", t: "Reliability" },
  { k: "A", t: "Agility" },
  { k: "360°", t: "Optimization & Value" },
];

export function Values() {
  const [active, setActive] = useState(0);
  return (
    <section id="values" className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>07 — Values</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,5.2vw,4rem)]">WHAT NEXORA360 STANDS FOR.</h2>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid gap-px border border-line bg-border">
            {values.map((v, i) => {
              const on = i === active;
              return (
                <button
                  key={v.k}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex flex-wrap items-baseline gap-x-8 gap-y-2 bg-background px-5 py-6 text-left transition-colors duration-500 md:px-8 ${
                    on ? "bg-surface" : ""
                  }`}
                >
                  <span
                    className={`display w-24 text-[clamp(2rem,5vw,3.4rem)] transition-colors duration-500 ${
                      on ? "accent-text" : "text-muted-foreground/40"
                    }`}
                  >
                    {v.k}
                  </span>
                  <span
                    className={`font-display text-lg font-bold tracking-tight transition-all duration-500 md:text-2xl ${
                      on ? "translate-x-0 text-foreground" : "-translate-x-2 text-muted-foreground"
                    }`}
                  >
                    {v.t}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="display mt-14 text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.15]">
            Think Next.
            <br />
            Execute Better.
            <br />
            Optimize Everything.
            <br />
            <span className="accent-text">Deliver Excellence.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 08 — COMMITMENTS ---------------- */

const commitments = [
  "Reliability",
  "Excellence",
  "Innovation",
  "Agility",
  "Transparency",
  "Customer Success",
];

export function Commitments() {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>08 — Commitments</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,5.2vw,4rem)]">
            LONG-TERM PARTNERSHIPS.
            <br />
            <span className="text-muted-foreground">BUILT ON SIX COMMITMENTS.</span>
          </h2>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-line bg-border">
          {commitments.map((c, i) => (
            <article
              key={c}
              className="group min-w-[16rem] flex-1 snap-start bg-background px-7 py-12 transition-colors duration-500 hover:bg-surface md:px-9 md:py-16"
            >
              <span className="font-mono text-[11px] text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-10 text-[clamp(1.5rem,2.4vw,2.1rem)]">{c}</h3>
              <span className="mt-6 block h-px w-10 bg-border transition-all duration-500 group-hover:w-full group-hover:bg-cyan" />
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- 09 — OPERATING MODEL ---------------- */

const stages = [
  { n: "01", t: "DISCOVER", d: "Understand the business and requirements." },
  { n: "02", t: "DESIGN", d: "Build the right people + process + technology model." },
  { n: "03", t: "EXECUTE", d: "Operate the function with disciplined delivery." },
  { n: "04", t: "OPTIMIZE", d: "Continuously improve productivity, experience and outcomes." },
];

export function OperatingModel() {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>09 — Operating Model</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,5.2vw,4rem)]">
            HOW WE <span className="accent-text">WORK</span> WITH YOU.
          </h2>
        </Reveal>

        <Reveal className="mt-16">
          <div className="relative grid gap-px border border-line bg-border md:grid-cols-4">
            {stages.map((s) => (
              <div
                key={s.n}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10"
              >
                <span className="font-mono text-[11px] text-cyan">{s.n}</span>
                <h3 className="display mt-12 text-[clamp(1.4rem,2.2vw,2rem)]">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <span className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-cyan/50 md:block" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 10 — FLEXIBLE ENGAGEMENT ---------------- */

const ladder = [
  "Single Process",
  "Dedicated Team",
  "Department",
  "Multiple Functions",
  "Complete Business-Support Operation",
  "Global Capability Centre",
];

export function Engagement() {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Eyebrow>10 — Flexible Engagement</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,5.2vw,4rem)]">
            START ANYWHERE.
            <br />
            <span className="accent-text">SCALE EVERYWHERE.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re a startup building your first support team, an SME scaling
            efficiently, or a global enterprise establishing a GCC, Nexora360 provides the
            flexibility and capability to support your journey.
          </p>
        </Reveal>

        <Reveal>
          <ol className="relative">
            {ladder.map((l, i) => (
              <li key={l} className="group relative flex items-center gap-6 border-b border-line py-6">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="display text-[clamp(1.3rem,2.8vw,2.3rem)] transition-colors duration-500 group-hover:text-foreground"
                  style={{ color: `color-mix(in oklab, var(--foreground) ${45 + i * 11}%, transparent)` }}
                >
                  {l}
                </span>
                <span
                  className="ml-auto h-px bg-cyan/60 transition-all duration-700"
                  style={{ width: `${8 + i * 7}%` }}
                />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 11 — VISION + MISSION ---------------- */

export function VisionMission() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]" />
      <div className="shell relative grid gap-20 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Vision</span>
          <p className="display mt-8 text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1.1]">
            To be the world&apos;s trusted{" "}
            <span className="accent-text">360° business capability partner</span>, enabling
            organizations to operate smarter, scale faster and grow stronger.
          </p>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Mission</span>
          <p className="display mt-8 text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1.1] text-muted-foreground">
            To deliver integrated, technology-enabled and people-driven business solutions across
            operations, digital, customer experience, technology, knowledge, HR and corporate
            support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 12 — CTA ---------------- */

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 md:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--violet) 22%, transparent), transparent 62%)",
        }}
      />
      <div className="shell relative">
        <Reveal>
          <h2 className="display max-w-5xl text-[clamp(2.4rem,7.4vw,6rem)]">
            TELL US WHAT
            <br />
            YOU&apos;D RATHER
            <br />
            <span className="accent-text">NOT MANAGE YOURSELF.</span>
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether it&apos;s one process, one department, or your complete business-support
            operation — we&apos;ll build the team and workflow around it.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a Conversation <ArrowUpRight className="size-4" />
            </a>
            <a href="#capabilities" className="btn-ghost">
              Explore Capabilities
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
