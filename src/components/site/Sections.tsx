import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Layers,
  Lock,
  Network,
  Quote,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
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
    <p className="eyebrow flex items-center gap-3 text-[#F97316]">
      <span className="inline-block h-px w-8 bg-gradient-to-r from-[#B91C1C] to-[#FACC15]" />
      {children}
    </p>
  );
}

/* ---------------- 01 — THE PROBLEM ---------------- */

export function Problem() {
  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div className="shell relative">
        <Reveal>
          <Eyebrow>01 — The Fragmentation Dilemma</Eyebrow>
          <h2 className="display mt-6 max-w-5xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            BUSINESSES SHOULDN&apos;T NEED TEN SEPARATE VENDORS FOR{" "}
            <span className="accent-text">TEN CONNECTED FUNCTIONS.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Traditional outsourcing fractures your company into disconnected silos—separate teams,
            misaligned incentives, and zero shared intelligence. Nexora360 re-engineers this model
            into a singular corporate capability ecosystem.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-stretch">
          {/* Fragmented Vendor Chaos */}
          <div className="rounded-3xl border border-[#EF4444]/30 bg-gradient-to-b from-[#B91C1C]/10 via-[#071A3D] to-[#071A3D] p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EF4444] flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#EF4444] animate-ping" />
                The Fragmented Vendor Model
              </span>
              <span className="rounded-full bg-[#EF4444]/15 px-3 py-1 font-mono text-[10px] text-[#EF4444] font-semibold uppercase">
                High Risk & Overhead
              </span>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                { title: "Multiple Vendors & Incompatible Tools", sub: "Each vendor pushes their own software stack, locking your data away." },
                { title: "Fractured SLAs & Finger-Pointing", sub: "When an issue occurs between sales and support, neither takes ownership." },
                { title: "High Management Overhead", sub: "Your executive team wastes hundreds of hours managing disparate vendor contracts." },
                { title: "Zero Cross-Functional Knowledge", sub: "Insights from customer support never reach marketing or product teams." },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-[#EF4444]/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-6 place-items-center rounded-full bg-[#EF4444]/20 font-mono text-xs font-bold text-[#EF4444]">
                      ✕
                    </span>
                    <span className="font-display text-base font-bold text-slate-200">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 pl-9 text-xs leading-relaxed text-slate-400">
                    {item.sub}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Transformation Bridge Arrow */}
          <div className="hidden lg:grid place-items-center px-2">
            <div className="grid size-14 place-items-center rounded-full border border-white/20 bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#FACC15] text-white shadow-2xl shadow-[#F97316]/50">
              <ArrowRight className="size-6" />
            </div>
          </div>

          {/* Nexora360 Unified Ecosystem */}
          <div className="rounded-3xl border border-[#FACC15]/40 bg-gradient-to-b from-[#F97316]/15 via-[#0B224E] to-[#071A3D] p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-[#FACC15]/20 blur-3xl" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FACC15] flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#FACC15]" />
                The Nexora360 360° Ecosystem
              </span>
              <span className="rounded-full bg-[#FACC15]/15 px-3 py-1 font-mono text-[10px] text-[#FACC15] font-semibold uppercase">
                Seamless & Scalable
              </span>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                { title: "One Unified Operating Platform", sub: "All 12 business capabilities share identical infrastructure, security, and tooling." },
                { title: "Single Point of Global Accountability", sub: "One executive governance board, one consolidated monthly invoice, and guaranteed SLAs." },
                { title: "Cross-Functional Synergy & Data Flow", sub: "Customer support data feeds lead generation; finance analytics optimizes GCC headcount." },
                { title: "Continuous AI & Automation Lift", sub: "Every process is continuously audited for autonomous AI and workflow efficiency." },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#FACC15]/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-6 place-items-center rounded-full bg-[#FACC15]/20 font-mono text-xs font-bold text-[#FACC15]">
                      ✓
                    </span>
                    <span className="font-display text-base font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 pl-9 text-xs leading-relaxed text-slate-300">
                    {item.sub}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 02 — ABOUT US ---------------- */

const pillars = [
  {
    num: "01",
    title: "TECHNOLOGY & AI",
    tag: "Next-Gen Automation",
    body: "We architect intelligent digital workflows, proprietary client dashboards, and cognitive AI agents that automate repetitive micro-tasks while elevating human expertise.",
    metrics: "Over 500k+ automated transactions per month with 99.8% precision.",
    icon: Cpu,
  },
  {
    num: "02",
    title: "GLOBAL TALENT & PEOPLE",
    tag: "Domain Specialists",
    body: "Rooted in Chennai's premier engineering and business ecosystem, our professionals are handpicked, rigorously trained, and continuously upskilled in enterprise standards.",
    metrics: "Top 3% talent selection rate with extensive domain-certified training.",
    icon: Users2,
  },
  {
    num: "03",
    title: "DISCIPLINED PROCESS",
    tag: "ISO & SOC2 Governed",
    body: "Structured, repeatable, and transparent ways of working. We build custom standard operating procedures (SOPs) tailored to your exact corporate DNA rather than generic templates.",
    metrics: "Zero single point of failure with 24/7 follow-the-sun business continuity.",
    icon: ShieldCheck,
  },
];

export function About() {
  const [open, setOpen] = useState(0);

  return (
    <section id="about" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      {/* Soft warm gradient backdrop */}
      <div
        className="pointer-events-none absolute -bottom-20 right-0 size-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #FACC15 0%, #F97316 60%, transparent 100%)",
        }}
      />

      <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <Reveal>
          <Eyebrow>02 — About Nexora360</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold text-white">
            BUILT AROUND YOUR STRATEGY.
            <br />
            <span className="accent-text">NEVER A GENERIC TEMPLATE.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-slate-300">
            <strong className="text-white">Nexora360 Global Solutions Private Limited</strong> is a
            premier corporate capability firm headquartered in Chennai, India. We empower businesses
            worldwide to scale with surgical efficiency by taking complete ownership of mission-critical
            operational, technical, and analytical functions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Whether you are a hyper-growth tech scaleup requiring an agile customer success pod or a
            multinational enterprise establishing a multi-hundred-seat Global Capability Centre (GCC),
            we assemble the right people, process, and technology infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Building2 className="size-5 text-[#FACC15]" />
              <div>
                <span className="block font-display text-sm font-bold text-white">Chennai HQ</span>
                <span className="block font-mono text-[10px] text-slate-400">Hub of Global Delivery</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Globe2 className="size-5 text-[#0875C9]" />
              <div>
                <span className="block font-display text-sm font-bold text-white">24/7 Coverage</span>
                <span className="block font-mono text-[10px] text-slate-400">Americas • EMEA • APAC</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 Strategic Pillars Accordion */}
        <Reveal>
          <div className="space-y-4">
            {pillars.map((p, i) => {
              const on = i === open;
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  onClick={() => setOpen(i)}
                  className={`cursor-pointer rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                    on
                      ? "border-[#F97316] bg-gradient-to-r from-[#0B224E] to-[#0A2049] shadow-2xl shadow-[#B91C1C]/20"
                      : "border-white/10 bg-[#0A2049]/50 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`grid size-12 place-items-center rounded-xl border transition-colors ${
                          on
                            ? "border-[#FACC15] bg-[#FACC15]/15 text-[#FACC15]"
                            : "border-white/10 bg-white/5 text-slate-400"
                        }`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F97316]">
                          Pillar {p.num} • {p.tag}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`size-5 transition-transform duration-300 ${
                        on ? "rotate-45 text-[#FACC15]" : "text-slate-500"
                      }`}
                    />
                  </div>

                  {on && (
                    <div className="mt-6 pt-6 border-t border-white/10 text-sm leading-relaxed text-slate-200">
                      <p>{p.body}</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#F97316]/10 px-3 py-1.5 font-mono text-xs text-[#FACC15]">
                        <Sparkles className="size-3.5" />
                        <span>{p.metrics}</span>
                      </div>
                    </div>
                  )}
                </div>
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
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "enterprise", label: "Enterprise & GCC" },
    { id: "growth", label: "Digital & Growth" },
    { id: "operations", label: "Core Operations" },
    { id: "intelligence", label: "Data & AI" },
  ];

  const filteredCapabilities = capabilities.filter((c) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "enterprise") return ["gcc", "bpo", "custom"].includes(c.id);
    if (selectedFilter === "growth") return ["marketing", "sales", "cx"].includes(c.id);
    if (selectedFilter === "operations") return ["finance", "hr", "admin", "support-ops"].includes(c.id);
    if (selectedFilter === "intelligence") return ["ai", "data", "kpo"].includes(c.id);
    return true;
  });

  return (
    <section id="capabilities" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Eyebrow>04 — Full Capability Directory</Eyebrow>
              <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold text-white">
                THIRTEEN SPECIALIZED DOMAINS.
                <br />
                <span className="accent-text">ONE UNIFIED GOVERNANCE.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Every capability is delivered by dedicated pods of domain-certified experts equipped
              with state-of-the-art tooling and enterprise security controls.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedFilter === cat.id
                    ? "bg-gradient-to-r from-[#B91C1C] via-[#F97316] to-[#FACC15] text-white shadow-lg shadow-[#F97316]/30"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCapabilities.map((c) => (
              <li key={c.id}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#0A2049]/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F97316] hover:bg-[#0B224E] hover:shadow-2xl hover:shadow-[#F97316]/20">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#FACC15]">
                        #{c.num}
                      </span>
                      <span className="rounded-full border border-[#0875C9]/40 bg-[#0875C9]/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#38BDF8]">
                        {c.short}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-white transition-colors group-hover:text-[#FACC15]">
                      {c.name}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      {c.line}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {c.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[9px] text-slate-300 uppercase tracking-wider"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#F97316] group-hover:text-[#FACC15] transition-colors"
                    >
                      <span>Deploy Function</span>
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <span className="size-1.5 rounded-full bg-[#0875C9]" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 05 — TECHNOLOGY (NEW) ---------------- */

const techPillars = [
  {
    icon: Brain,
    title: "Cognitive AI & Workflow Engine",
    desc: "Proprietary algorithmic routing, LLM-augmented research copilots, and robotic process automation (RPA) that automate high-volume tasks with zero human defect.",
    tags: ["RPA", "GenAI Agents", "Automated QA", "Smart Triage"],
  },
  {
    icon: Server,
    title: "Unified Client Operations Portal",
    desc: "Single-pane-of-glass real-time dashboard delivering live SLA metrics, headcount attendance, incident tracking, and financial reconciliation transparently.",
    tags: ["Live SLA Telemetry", "Granular Audit Trail", "Financial Sync", "API Webhooks"],
  },
  {
    icon: Lock,
    title: "Enterprise Zero-Trust Security",
    desc: "SOC 2 Type II certified, ISO 27001 audited, and GDPR-compliant data segregation. Biometric physical access controls, DLP protocols, and encrypted transit.",
    tags: ["SOC 2 Type II", "ISO 27001", "GDPR/HIPAA Ready", "Encrypted Vaults"],
  },
  {
    icon: Network,
    title: "Cloud-Native Integration Fabric",
    desc: "Plug-and-play bi-directional connectors into your existing CRM, ERP, and communication stacks including Salesforce, SAP, HubSpot, ServiceNow, Jira, and Slack.",
    tags: ["200+ Connectors", "Zero Data Locking", "REST & GraphQL", "Bi-directional"],
  },
];

export function Technology() {
  return (
    <section id="technology" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 size-[44rem] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #EF4444 0%, #F97316 45%, #0875C9 80%, transparent 100%)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <Eyebrow>05 — Technology & Infrastructure</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            PROPRIETARY DIGITAL BACKBONE.
            <br />
            <span className="accent-text">AI-ENHANCED HUMAN EXECUTION.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Technology at Nexora360 is not an afterthought—it is the central nervous system powering
            every capability. We combine autonomous automation with specialized human oversight to
            deliver unmatched velocity, accuracy, and reliability.
          </p>
        </Reveal>

        {/* Tech Grid */}
        <Reveal className="mt-16 grid gap-6 md:grid-cols-2">
          {techPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-[#0B224E]/70 p-8 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#FACC15] hover:bg-[#0B224E]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#B91C1C]/20 via-[#F97316]/20 to-[#FACC15]/20 text-[#FACC15] shadow-lg">
                    <Icon className="size-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-white transition-colors group-hover:text-[#FACC15]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {item.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-[#071A3D] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* Interactive Architecture Flow Strip */}
        <Reveal className="mt-12 rounded-3xl border border-white/15 bg-[#071A3D]/90 p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-semibold">
                SYSTEM PIPELINE VISUALIZATION
              </span>
              <h4 className="font-display text-xl font-bold text-white">
                How Data & Workflows Flow Through Nexora360
              </h4>
            </div>
            <a href="#contact" className="btn-ghost text-xs">
              <span>Request Tech Whitepaper</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01. INGESTION", label: "Client CRM / ERP / API Data", highlight: "#0875C9" },
              { step: "02. AI TRIAGE", label: "Cognitive Parsing & Auto-Classification", highlight: "#EF4444" },
              { step: "03. HUMAN POD", label: "Expert Execution & Quality Review", highlight: "#F97316" },
              { step: "04. OUTCOME", label: "Completed Deliverable + Live Dashboard", highlight: "#FACC15" },
            ].map((st, i) => (
              <div
                key={st.step}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <span
                  className="block font-mono text-[10px] font-bold tracking-widest uppercase mb-1"
                  style={{ color: st.highlight }}
                >
                  {st.step}
                </span>
                <span className="block font-display text-sm font-semibold text-white">
                  {st.label}
                </span>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 size-5 rounded-full border border-white/20 bg-[#071A3D] text-center font-mono text-[9px] text-[#FACC15] leading-5">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 06 — WHY CHOOSE US (THE NEXORA ADVANTAGE) ---------------- */

const advantages = [
  { title: "Reduced Vendor Complexity", desc: "Consolidate multiple contracts into one strategic partnership with shared accountability." },
  { title: "Connected 360° Operations", desc: "No more disconnected data silos; every function coordinates seamlessly under one roof." },
  { title: "Unified Executive Reporting", desc: "Single real-time dashboard delivering high-level executive KPIs and deep operational logs." },
  { title: "Rapid Elastic Scaling", desc: "Scale from a 5-person pilot team to a 200-seat enterprise GCC in weeks rather than quarters." },
  { title: "40%+ Cost Efficiency", desc: "Leverage Chennai's global tech talent pool and automated workflows for major ROI." },
  { title: "Zero Knowledge Loss", desc: "Comprehensive documentation, SOP repositories, and cross-trained pods ensure 100% resilience." },
  { title: "Enterprise-Grade Security", desc: "SOC 2 Type II, ISO 27001, HIPAA & GDPR compliance built into every workstation." },
  { title: "Long-Term Strategic Alignment", desc: "We act as your dedicated global capability arm, actively investing in your long-term success." },
];

export function Advantage() {
  return (
    <section id="advantage" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>06 — Why Choose Nexora360</Eyebrow>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            THE NEXORA ADVANTAGE:
            <br />
            <span className="accent-text">ENTERPRISE SCALE WITHOUT THE FRICTION.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Compare the friction of legacy multi-vendor outsourcing against the cohesive velocity of
            our unified 360° corporate capability model.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, idx) => (
            <div
              key={a.title}
              className="group rounded-3xl border border-white/10 bg-[#0A2049]/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:bg-[#0B224E]"
            >
              <span className="font-mono text-xs font-bold text-[#F97316]">
                0{idx + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white transition-colors group-hover:text-[#FACC15]">
                {a.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {a.desc}
              </p>
              <div className="mt-6 h-0.5 w-8 bg-gradient-to-r from-[#B91C1C] to-[#FACC15] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 07 — GLOBAL PRESENCE (NEW) ---------------- */

const deliveryHubs = [
  {
    city: "Chennai, India",
    role: "Global Headquarters & Primary Tech Delivery Centre",
    specs: "Tier-4 facility, 24/7 command centre, GCC incubation pods, 500+ seat capacity.",
    coords: "13.0827° N, 80.2707° E",
    highlight: true,
  },
  {
    city: "North America",
    role: "Client Advisory & Executive Market Liaison",
    specs: "East & West Coast strategic accounts, onboarding coordination, real-time SLA review.",
    coords: "New York & San Francisco",
    highlight: false,
  },
  {
    city: "EMEA Region",
    role: "Multilingual Business Operations & Regional Desk",
    specs: "London & Frankfurt liaison, GDPR compliance monitoring, European timezone support.",
    coords: "London, United Kingdom",
    highlight: false,
  },
  {
    city: "APAC & Middle East",
    role: "Regional Digital Sales & Support Coordination",
    specs: "Singapore & Dubai operational coverage, high-velocity inbound sales servicing.",
    coords: "Singapore Hub",
    highlight: false,
  },
];

export function GlobalPresence() {
  return (
    <section id="global" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div
        className="pointer-events-none absolute top-1/2 right-10 size-[36rem] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #0875C9 0%, #B91C1C 70%, transparent 100%)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Eyebrow>07 — Global Presence & Delivery</Eyebrow>
              <h2 className="display mt-4 max-w-4xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
                GLOBAL FOOTPRINT.
                <br />
                <span className="accent-text">24/7 FOLLOW-THE-SUN CONTINUITY.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Headquartered in Chennai, India, with client relationship desks spanning North
              America, Europe, and APAC, we provide true round-the-clock enterprise continuity.
            </p>
          </div>
        </Reveal>

        {/* Global Hubs Grid */}
        <Reveal className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deliveryHubs.map((hub) => (
            <div
              key={hub.city}
              className={`rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                hub.highlight
                  ? "border-[#FACC15] bg-gradient-to-b from-[#B91C1C]/20 via-[#0B224E] to-[#071A3D] shadow-2xl shadow-[#B91C1C]/30"
                  : "border-white/10 bg-[#0A2049]/60 hover:border-white/20 hover:bg-[#0B224E]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-bold ${
                    hub.highlight
                      ? "bg-[#FACC15] text-[#071A3D]"
                      : "border border-white/15 bg-white/5 text-slate-300"
                  }`}
                >
                  {hub.highlight ? "GLOBAL HQ" : "REGIONAL DESK"}
                </span>
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#F97316] opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#FACC15]" />
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {hub.city}
              </h3>

              <p className="mt-2 text-xs font-mono text-[#F97316]">
                {hub.role}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-slate-300">
                {hub.specs}
              </p>

              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-slate-400">
                📍 {hub.coords}
              </div>
            </div>
          ))}
        </Reveal>

        {/* 24/7 Follow the sun banner */}
        <Reveal className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-r from-[#0B224E] via-[#071A3D] to-[#0B224E] p-8 md:p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FACC15] font-bold flex items-center gap-2">
                <Radio className="size-4 animate-pulse text-[#EF4444]" /> ALWAYS ON. NEVER DORMANT.
              </span>
              <h4 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                Seamless Timezone Handoffs Ensure Zero Business Lag
              </h4>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                When your local business day ends in California or London, our Chennai delivery pods
                seamlessly take over overnight data processing, ticket triage, code testing, and
                customer escalations. Wake up to completed deliverables every single morning.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block font-display text-2xl font-black text-white">24/7/365</span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-1">Live Ops</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block font-display text-2xl font-black text-[#FACC15]">&lt; 15m</span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-1">SLA Response</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block font-display text-2xl font-black text-[#F97316]">99.98%</span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-1">Uptime</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 08 — STATISTICS & IMPACT (NEW) ---------------- */

const statsData = [
  { value: "99.8%", label: "SLA Delivery Precision", desc: "Contractual compliance across all client service pods." },
  { value: "13+", label: "Integrated Capabilities", desc: "Covering GCC, BPO, KPO, AI, CX, HR, and corporate ops." },
  { value: "45%", label: "Average Cost Reduction", desc: "Direct savings compared to internal domestic headcount buildout." },
  { value: "500K+", label: "Monthly Workflows", desc: "Automated business transactions executed with zero error." },
  { value: "24/7", label: "Follow-The-Sun Ops", desc: "Round-the-clock continuous multi-shift coverage." },
  { value: "100%", label: "Security Compliance", desc: "SOC 2 Type II, ISO 27001, and GDPR data safeguards." },
];

export function Statistics() {
  return (
    <section id="statistics" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[50rem] rounded-full opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #F97316 0%, #EF4444 50%, transparent 100%)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>08 — Measured Enterprise Impact</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold text-white">
              RESULTS THAT SPEAK IN{" "}
              <span className="accent-text">METRICS AND ROI.</span>
            </h2>
            <p className="mt-4 text-base text-slate-300">
              We gauge our performance solely by the bottom-line outcomes, speed enhancements, and
              operational peace-of-mind delivered to our enterprise clients.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {statsData.map((s, idx) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/10 bg-[#0B224E]/50 p-8 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#FACC15] hover:bg-[#0B224E] hover:-translate-y-1 shadow-xl"
            >
              <span
                className="block font-display text-4xl sm:text-5xl font-black tracking-tight"
                style={{
                  background:
                    idx % 3 === 0
                      ? "linear-gradient(115deg, #EF4444 0%, #F97316 100%)"
                      : idx % 3 === 1
                      ? "linear-gradient(115deg, #F97316 0%, #FACC15 100%)"
                      : "linear-gradient(115deg, #38BDF8 0%, #0875C9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </span>

              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {s.label}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {s.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-slate-400">
                <CheckCircle2 className="size-3.5 text-[#FACC15]" />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 09 — TESTIMONIALS (NEW) ---------------- */

const testimonials = [
  {
    quote:
      "Nexora360 built out our 45-person specialized KPO and risk analytics department in Chennai in under six weeks. Their unified operating model eliminated vendor friction and lowered our operational expenses by 44% in Year 1.",
    author: "Arjun Mehta",
    role: "Senior Vice President of Operations",
    company: "FinTech Global Payments",
    metric: "44% Cost Reduction & 99.9% Accuracy",
    industry: "FinTech",
  },
  {
    quote:
      "Consolidating our customer support, back-office data processing, and digital lead gen under Nexora360 was the single best operational decision we've made. We have one point of accountability and live portal visibility.",
    author: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "CloudScale Enterprise SaaS",
    metric: "4 Disparate Vendors Consolidated to 1",
    industry: "Enterprise SaaS",
  },
  {
    quote:
      "Their automated AI triage coupled with 24/7 follow-the-sun support raised our customer CSAT from 79% to 95%. Overnight turnaround for our US headquarters team feels like pure magic.",
    author: "Marcus Vance",
    role: "Head of Customer Experience",
    company: "OmniHealth Digital Platform",
    metric: "+16pt CSAT Lift in 90 Days",
    industry: "HealthTech",
  },
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Eyebrow>09 — Client Endorsements</Eyebrow>
              <h2 className="display mt-4 max-w-4xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
                TRUSTED BY LEADERS.
                <br />
                <span className="accent-text">VALIDATED BY RESULTS.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Hear directly from corporate executives who scaled their global capabilities with
              Nexora360.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.author}
              className={`rounded-3xl border p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                activeTestimonial === idx
                  ? "border-[#F97316] bg-[#0B224E] shadow-2xl shadow-[#B91C1C]/20"
                  : "border-white/10 bg-[#0A2049]/60 hover:border-white/20"
              }`}
              onClick={() => setActiveTestimonial(idx)}
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote className="size-8 text-[#FACC15] opacity-80" />
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-slate-300">
                    {t.industry}
                  </span>
                </div>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-200 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="rounded-xl border border-[#FACC15]/30 bg-[#FACC15]/10 px-3 py-1.5 font-mono text-[10px] text-[#FACC15] font-semibold mb-4 inline-block">
                  ⚡ {t.metric}
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  {t.author}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.role} • <strong className="text-slate-200">{t.company}</strong>
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 10 — INDUSTRIES ---------------- */

const industries = [
  "Technology & Software",
  "Healthcare & Life Sciences",
  "Banking & Financial Services",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Education & EdTech",
  "Real Estate & PropTech",
  "Professional Services",
  "Manufacturing & Industrial",
  "Venture Startups & Scaleups",
];

export function Industries() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>10 — Industry Domain Expertise</Eyebrow>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display max-w-2xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
              DEEP DOMAIN RIGOR ACROSS{" "}
              <span className="accent-text">KEY VERTICALS.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-slate-300">
              Our specialists possess deep regulatory, operational, and customer context specific to
              your market sector.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind) => (
              <li
                key={ind}
                onMouseEnter={() => setHover(ind)}
                onMouseLeave={() => setHover(null)}
                className={`rounded-2xl border p-5 text-center transition-all duration-300 ${
                  hover === ind
                    ? "border-[#FACC15] bg-gradient-to-b from-[#B91C1C]/20 to-[#0B224E] text-white shadow-xl scale-105"
                    : "border-white/10 bg-[#0A2049]/50 text-slate-300 hover:border-white/20"
                }`}
              >
                <span className="block font-display text-sm font-bold">{ind}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 11 — VALUES ---------------- */

const values = [
  { k: "N", word: "Next-Gen Innovation", desc: "Continuously applying cutting-edge AI, automation, and modern methodologies to client operations." },
  { k: "E", word: "Execution Rigor", desc: "Disciplined execution with contractual 99.8%+ SLA guarantees and zero operational drift." },
  { k: "X", word: "eXemplary Governance", desc: "Full transparency, SOC 2 compliance, and unified audit trails across all functions." },
  { k: "O", word: "Ownership Mindset", desc: "We act as genuine co-owners of your business targets rather than passive outsourced ticket-takers." },
  { k: "R", word: "Reliability & Uptime", desc: "24/7 follow-the-sun continuous operations with dual-redundant global delivery pods." },
  { k: "A", word: "Agility & Speed", desc: "Rapid pod assembly, 30-day go-lives, and seamless headcount scaling on demand." },
  { k: "360°", word: "Holistic Optimization", desc: "Connecting people, process, and technology across every single corporate touchpoint." },
];

export function Values() {
  const [active, setActive] = useState(0);

  return (
    <section id="values" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      <div className="shell">
        <Reveal>
          <Eyebrow>11 — Corporate Values</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            THE NEXORA PRINCIPLES:{" "}
            <span className="accent-text">WHAT WE STAND FOR.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-300 text-sm leading-relaxed">
            The values embedded into every employee, pod, and standard operating procedure at
            Nexora360 Global.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            {values.map((v, i) => {
              const on = i === active;
              return (
                <button
                  key={v.k}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 flex items-center justify-between ${
                    on
                      ? "border-[#FACC15] bg-gradient-to-r from-[#B91C1C]/30 via-[#F97316]/20 to-[#0B224E] shadow-xl"
                      : "border-white/10 bg-[#0A2049]/50 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl font-black w-12 ${
                        on ? "accent-text" : "text-slate-500"
                      }`}
                    >
                      {v.k}
                    </span>
                    <span className="font-display text-base font-bold text-white">
                      {v.word}
                    </span>
                  </div>
                  <ArrowRight
                    className={`size-4 transition-transform ${
                      on ? "translate-x-1 text-[#FACC15]" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Value Spotlight Card */}
          <div className="rounded-3xl border border-[#F97316]/40 bg-gradient-to-b from-[#0B224E] to-[#071A3D] p-8 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -right-10 size-48 rounded-full bg-[#FACC15]/20 blur-3xl" />

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FACC15] font-semibold">
                PRINCIPLE SPOTLIGHT
              </span>
              <span className="block mt-4 font-display text-6xl font-black accent-text">
                {values[active]?.k}
              </span>
              <h3 className="mt-2 font-display text-3xl font-extrabold text-white">
                {values[active]?.word}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-slate-200">
                {values[active]?.desc}
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="font-display text-lg font-bold text-white italic">
                &ldquo;Think Next. Execute Better. Optimize Everything. Deliver Excellence.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 12 — COMMITMENTS ---------------- */

const commitments = [
  { num: "01", name: "Absolute Reliability", desc: "Contractually committed SLA guarantees with zero excuses." },
  { num: "02", name: "Uncompromising Excellence", desc: "Rigorous quality audits and continuous talent benchmarking." },
  { num: "03", name: "Continuous Innovation", desc: "Proactively infusing AI automation into your operations." },
  { num: "04", name: "Radical Transparency", desc: "Real-time client dashboard access with full audit logs." },
  { num: "05", name: "Rapid Agility", desc: "Elastic capacity scaling that adjusts as your business fluctuates." },
  { num: "06", name: "Client-First Success", desc: "Your gross margins and growth velocity are our primary North Star." },
];

export function Commitments() {
  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>12 — Long-Term Commitments</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            PARTNERSHIPS BUILT ON{" "}
            <span className="accent-text">SIX IMMUTABLE PLEDGES.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <div
              key={c.name}
              className="rounded-3xl border border-white/10 bg-[#0A2049]/60 p-8 transition-all duration-300 hover:border-[#FACC15] hover:bg-[#0B224E]"
            >
              <span className="font-mono text-xs font-bold text-[#F97316]">
                {c.num}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {c.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {c.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 13 — OPERATING MODEL ---------------- */

const stages = [
  {
    n: "01",
    t: "DISCOVER",
    sub: "Deep-Dive Audit",
    d: "We conduct a comprehensive review of your business workflows, SLA targets, software tooling, and staffing gaps.",
  },
  {
    n: "02",
    t: "DESIGN",
    sub: "Custom Blueprint",
    d: "We engineer the bespoke People + Process + Technology architecture, creating custom SOPs, security perimeters, and KPIs.",
  },
  {
    n: "03",
    t: "EXECUTE",
    sub: "Sprint Mobilization",
    d: "Our handpicked Chennai pod goes live with disciplined sprint governance, real-time QA monitoring, and 24/7 delivery.",
  },
  {
    n: "04",
    t: "OPTIMIZE",
    sub: "Continuous Evolution",
    d: "We relentlessly apply AI automation and productivity enhancements to continually decrease unit costs and lift speed.",
  },
];

export function OperatingModel() {
  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow>13 — Operating Model</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            HOW WE WORK WITH YOU:{" "}
            <span className="accent-text">FOUR DISCIPLINED STAGES.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-white/10 bg-[#0A2049]/70 p-8 relative overflow-hidden transition-all duration-300 hover:border-[#F97316] hover:bg-[#0B224E]"
            >
              <span className="font-mono text-xs font-bold text-[#FACC15]">
                STAGE {s.n}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {s.t}
              </h3>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-[#F97316] mt-1 font-semibold">
                {s.sub}
              </span>
              <p className="mt-4 text-xs leading-relaxed text-slate-300">
                {s.d}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 14 — FLEXIBLE ENGAGEMENT ---------------- */

const ladder = [
  { tier: "Single Process Pod", desc: "Outsource a dedicated bottleneck (e.g. data cleansing or invoice audits)." },
  { tier: "Dedicated Functional Team", desc: "A full team of 5–25 specialists operating as your remote department." },
  { tier: "Multi-Functional Pods", desc: "Combined customer experience, digital marketing, and tech operations." },
  { tier: "Complete Business Support", desc: "Turnkey back-office, HR, finance, CX, and IT infrastructure management." },
  { tier: "Global Capability Centre (GCC)", desc: "Enterprise build-operate-transfer or fully managed dedicated GCC in Chennai." },
];

export function Engagement() {
  return (
    <section className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] items-center">
        <Reveal>
          <Eyebrow>14 — Flexible Engagement Models</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold text-white">
            START ANYWHERE.
            <br />
            <span className="accent-text">SCALE EVERYWHERE.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            Whether you are a startup testing your first remote customer support pod or a global
            enterprise establishing an offshore engineering and analytics GCC, Nexora360 adapts
            elastically to your growth trajectory.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              <span>Discuss Engagement Options</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <ol className="space-y-4">
            {ladder.map((item, i) => (
              <li
                key={item.tier}
                className="rounded-2xl border border-white/10 bg-[#0A2049]/50 p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-[#FACC15] hover:bg-[#0B224E]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-9 place-items-center rounded-xl bg-white/5 font-mono text-xs font-bold text-[#FACC15]">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      {item.tier}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-slate-500 shrink-0" />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 15 — VISION & MISSION ---------------- */

export function VisionMission() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#071A3D] py-24 md:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="shell relative grid gap-12 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B224E] to-[#071A3D] p-10 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-bold">
            OUR CORPORATE VISION
          </span>
          <p className="display mt-6 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-white leading-tight">
            To be the world&apos;s most trusted{" "}
            <span className="accent-text">360° corporate capability partner</span>, enabling
            visionary organizations to operate smarter, scale faster, and win globally.
          </p>
        </Reveal>

        <Reveal className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A2049] to-[#071A3D] p-10 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0875C9] font-bold">
            OUR MISSION
          </span>
          <p className="display mt-6 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-slate-200 leading-tight">
            To deliver integrated, technology-enabled, and people-driven solutions across GCC setup,
            AI automation, omnichannel CX, and corporate operations with zero friction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 16 — CLOSING CTA ---------------- */

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#071A3D] py-28 md:py-40 text-center">
      {/* Dynamic ambient halo in brand red-orange-yellow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[44rem] rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #B91C1C 0%, #EF4444 30%, #F97316 65%, transparent 100%)",
        }}
      />

      <div className="shell relative max-w-4xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FACC15] mb-6">
            <Sparkles className="size-3.5 text-[#F97316]" /> Ready For A Brighter Tomorrow
          </div>

          <h2 className="display text-[clamp(2.4rem,6.5vw,5.5rem)] font-black text-white leading-[1.02]">
            TELL US WHAT YOU&apos;D RATHER{" "}
            <span className="accent-text">NOT MANAGE YOURSELF.</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300">
            From a single dedicated process pod to your complete enterprise Global Capability Centre,
            Nexora360 delivers the team, technology, and governance to accelerate your growth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
            <a href="#contact" className="btn-primary text-sm px-8 py-4">
              <span>Start a Conversation</span>
              <ArrowUpRight className="size-4" />
            </a>

            <a href="#capabilities" className="btn-ghost text-sm px-8 py-4">
              <span>Explore Capabilities</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
