import { useState } from "react";
import { ArrowDown, ArrowUpRight, CheckCircle2, Globe2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { NexoraLogo } from "./NexoraLogo";

const capabilitiesList = [
  { name: "GCC Solutions", tag: "Enterprise" },
  { name: "AI & Automation", tag: "Next-Gen" },
  { name: "Customer Experience", tag: "24/7 Support" },
  { name: "KPO & Analytics", tag: "Intelligence" },
  { name: "BPO Operations", tag: "Scale" },
  { name: "Digital Marketing", tag: "Growth" },
  { name: "Finance & Accounts", tag: "Rigor" },
  { name: "HR & Recruitment", tag: "Talent" },
  { name: "Data Management", tag: "Precision" },
  { name: "Digital Sales", tag: "Revenue" },
  { name: "Back-Office Admin", tag: "Efficiency" },
  { name: "Support Operations", tag: "Coverage" },
];

function FuturisticGlobalVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <div
      aria-hidden="false"
      className="relative mx-auto aspect-square w-full max-w-[32rem] select-none sm:max-w-[36rem] lg:max-w-[42rem]"
    >
      {/* Radiant Background Glow - Flowing Red, Orange, Yellow and Logo Blue */}
      <div className="pointer-events-none absolute -inset-6 rounded-full opacity-60 blur-3xl">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B91C1C]/35 via-[#F97316]/30 to-[#FACC15]/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 size-2/3 rounded-full bg-[#0875C9]/25 blur-2xl" />
      </div>

      {/* SVG Global Vector Coordinates & Flowing Digital Lines */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 size-full pointer-events-none">
        <defs>
          <radialGradient id="globeAtmosphere" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0875C9" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#071A3D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#071A3D" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="orbitStream1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B91C1C" />
            <stop offset="35%" stopColor="#EF4444" />
            <stop offset="70%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>

          <linearGradient id="blueGlowStream" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0875C9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ambient globe sphere */}
        <circle cx="250" cy="250" r="190" fill="url(#globeAtmosphere)" />

        {/* Concentric latitude rings and coordinate markers */}
        {[100, 140, 180, 210].map((r, idx) => (
          <circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke={idx % 2 === 0 ? "rgba(8, 117, 201, 0.35)" : "rgba(255, 255, 255, 0.1)"}
            strokeWidth={idx === 1 ? "1.2" : "0.75"}
            strokeDasharray={idx === 2 ? "4 8" : undefined}
          />
        ))}

        {/* Tilted elliptical orbits */}
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="90"
          transform="rotate(-25 250 250)"
          fill="none"
          stroke="url(#orbitStream1)"
          strokeWidth="1.8"
          strokeOpacity="0.7"
          filter="url(#nodeGlow)"
        />

        <ellipse
          cx="250"
          cy="250"
          rx="210"
          ry="80"
          transform="rotate(35 250 250)"
          fill="none"
          stroke="url(#blueGlowStream)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeOpacity="0.6"
        />

        {/* Global Connection Network Rays connecting center to capability nodes */}
        {capabilitiesList.map((_, i) => {
          const angle = (i / capabilitiesList.length) * Math.PI * 2 - Math.PI / 2;
          const x2 = 250 + Math.cos(angle) * 190;
          const y2 = 250 + Math.sin(angle) * 190;
          const isHovered = activeNode === i;

          return (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={x2}
              y2={y2}
              stroke={isHovered ? "#FACC15" : "rgba(249, 115, 22, 0.25)"}
              strokeWidth={isHovered ? 2 : 0.8}
              strokeDasharray="3 6"
              style={{
                animation: `dash-flow ${10 + (i % 5)}s linear infinite`,
              }}
            />
          );
        })}
      </svg>

      {/* Central Core Globe Emblem & Branding */}
      <div className="absolute left-1/2 top-1/2 z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
        {/* Pulsing Energy Ripples */}
        <span className="absolute size-36 rounded-full border-2 border-[#EF4444]/60 [animation:pulse-ring_3.5s_ease-out_infinite]" />
        <span className="absolute size-36 rounded-full border-2 border-[#F97316]/50 [animation:pulse-ring_3.5s_ease-out_infinite_1.4s]" />
        <span className="absolute size-36 rounded-full border-2 border-[#FACC15]/40 [animation:pulse-ring_3.5s_ease-out_infinite_2.8s]" />

        {/* Core Capsule with Brand Identity */}
        <div className="relative flex flex-col items-center justify-center size-36 sm:size-40 rounded-full border-2 border-white/20 bg-[#071A3D]/90 p-3 text-center backdrop-blur-md shadow-2xl shadow-[#B91C1C]/30 transition-transform duration-500 hover:scale-105">
          <NexoraLogo size="sm" emblemOnly={true} />
          <div className="mt-1.5 leading-none">
            <span className="block font-display text-[13px] font-extrabold tracking-tight text-white">
              NEXORA<span className="accent-text">360</span>
            </span>
            <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-[#0875C9] font-semibold mt-0.5">
              GLOBAL CORE
            </span>
          </div>
        </div>
      </div>

      {/* Orbiting Capability Satellite Badges */}
      <div className="orbit-spin absolute inset-0">
        {capabilitiesList.map((cap, i) => {
          const angle = (i / capabilitiesList.length) * 360;
          return (
            <div
              key={cap.name}
              className="absolute size-0"
              style={{
                left: `${50 + Math.cos(((angle - 90) * Math.PI) / 180) * 39}%`,
                top: `${50 + Math.sin(((angle - 90) * Math.PI) / 180) * 39}%`,
              }}
            >
              <div className="orbit-spin-reverse pointer-events-auto">
                <button
                  type="button"
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => {
                    const el = document.getElementById("capabilities");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border px-2.5 py-1.5 backdrop-blur-md transition-all duration-300 ${
                    activeNode === i
                      ? "border-[#FACC15] bg-[#B91C1C]/90 text-white shadow-lg shadow-[#EF4444]/50 scale-110"
                      : "border-white/15 bg-[#071A3D]/80 text-slate-300 hover:border-[#F97316] hover:text-white"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full transition-colors ${
                      i % 3 === 0
                        ? "bg-[#EF4444]"
                        : i % 3 === 1
                        ? "bg-[#F97316]"
                        : "bg-[#FACC15]"
                    }`}
                  />
                  <span className="whitespace-nowrap font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                    {cap.name}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating High-Impact Trust Metric Badges */}
      {/* Top Right: 99.8% SLA Precision */}
      <div className="absolute top-2 -right-4 sm:-right-8 z-20 float-card hidden xs:flex items-center gap-2.5 rounded-xl border border-[#FACC15]/40 bg-[#071A3D]/95 px-3 py-2 text-left shadow-xl shadow-black/60 backdrop-blur-xl">
        <div className="grid size-8 place-items-center rounded-lg bg-[#FACC15]/15 text-[#FACC15]">
          <CheckCircle2 className="size-4" />
        </div>
        <div>
          <span className="block font-display text-sm font-black text-white">99.8%</span>
          <span className="block font-mono text-[9px] text-slate-300 uppercase tracking-wider">
            SLA Precision
          </span>
        </div>
      </div>

      {/* Bottom Left: 40%+ Cost Efficiency */}
      <div
        className="absolute bottom-4 -left-4 sm:-left-8 z-20 float-card hidden xs:flex items-center gap-2.5 rounded-xl border border-[#F97316]/40 bg-[#071A3D]/95 px-3 py-2 text-left shadow-xl shadow-black/60 backdrop-blur-xl"
        style={{ animationDelay: "2s" }}
      >
        <div className="grid size-8 place-items-center rounded-lg bg-[#F97316]/15 text-[#F97316]">
          <Zap className="size-4" />
        </div>
        <div>
          <span className="block font-display text-sm font-black text-white">40%+</span>
          <span className="block font-mono text-[9px] text-slate-300 uppercase tracking-wider">
            Operating Efficiency
          </span>
        </div>
      </div>

      {/* Bottom Right: Chennai Global Delivery Hub */}
      <div
        className="absolute -bottom-2 right-6 z-20 float-card hidden sm:flex items-center gap-2 rounded-full border border-[#0875C9]/50 bg-[#071A3D]/95 px-3 py-1.5 text-left shadow-lg backdrop-blur-md"
        style={{ animationDelay: "1s" }}
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#0875C9] opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-[#0875C9]" />
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300">
          Global HQ: <strong className="text-white font-semibold">Chennai, India</strong>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background grid + futuristic ambient radial lighting */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[48rem] rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.45) 0%, rgba(249, 115, 22, 0.3) 40%, rgba(8, 117, 201, 0.2) 75%, transparent 100%)",
        }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left Column: Typography, Brand Badge, Headline & CTAs */}
          <div className="space-y-7 text-left">
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F97316]/40 bg-gradient-to-r from-[#B91C1C]/20 via-[#F97316]/15 to-transparent px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#FACC15] opacity-80" />
                <span className="relative inline-flex size-2 rounded-full bg-[#F97316]" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FACC15]">
                Global 360° Corporate Capability Partner
              </span>
            </div>

            {/* Official Brand Identity Presentation */}
            <div className="pt-1">
              <NexoraLogo size="lg" showTagline={true} />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-extrabold tracking-tight leading-[1.04] text-white">
              ONE PARTNER.
              <br />
              EVERY BUSINESS NEED.
              <br />
              <span className="accent-text">LIMITLESS SCALE.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Nexora360 Global empowers enterprise leaders and high-growth innovators with unified{" "}
              <strong className="text-white font-semibold">Global Capability Centres (GCC)</strong>,{" "}
              intelligent AI automation, customer experience, and end-to-end operational execution
              under one disciplined operating standard.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="size-4 text-[#FACC15] shrink-0" />
                <span>Single Point of Global Accountability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="size-4 text-[#F97316] shrink-0" />
                <span>12 Interconnected Capabilities</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="size-4 text-[#EF4444] shrink-0" />
                <span>40%+ Cost Efficiency & Speed-to-Scale</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="size-4 text-[#0875C9] shrink-0" />
                <span>24/7 Follow-the-Sun Delivery</span>
              </div>
            </div>

            {/* Two Primary Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                <span>Start a Conversation</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a href="#capabilities" className="btn-ghost">
                <Globe2 className="size-4 text-[#0875C9]" />
                <span>Explore Capabilities</span>
              </a>
            </div>

            {/* Micro-trust indicators */}
            <div className="flex items-center gap-6 pt-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-[#FACC15]" /> ISO & SOC2 Governed
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[#F97316]" /> AI-Assisted Operations
              </span>
            </div>
          </div>

          {/* Right Column: Abstract Futuristic Global-Technology Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <FuturisticGlobalVisual />
          </div>
        </div>

        {/* Bottom Enterprise Capabilities Marquee Ticker */}
        <div className="mt-16 sm:mt-20 border-y border-white/10 bg-[#071A3D]/70 py-4 backdrop-blur-md">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap">
              {[
                "GLOBAL CAPABILITY CENTRE (GCC) SETUP",
                "ENTERPRISE BPO & KPO OPERATIONS",
                "COGNITIVE AI & WORKFLOW AUTOMATION",
                "OMNICHANNEL CUSTOMER EXPERIENCE (CX)",
                "FINANCE & ACCOUNTING EXCELLENCE",
                "DIGITAL MARKETING & PERFORMANCE SALES",
                "DATA INTELLIGENCE & CLEANSING",
                "HR, TALENT & RECRUITMENT PODS",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 font-mono text-xs text-slate-300 font-semibold tracking-wider">
                  <span className="size-1.5 rounded-full bg-[#F97316]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap" aria-hidden="true">
              {[
                "GLOBAL CAPABILITY CENTRE (GCC) SETUP",
                "ENTERPRISE BPO & KPO OPERATIONS",
                "COGNITIVE AI & WORKFLOW AUTOMATION",
                "OMNICHANNEL CUSTOMER EXPERIENCE (CX)",
                "FINANCE & ACCOUNTING EXCELLENCE",
                "DIGITAL MARKETING & PERFORMANCE SALES",
                "DATA INTELLIGENCE & CLEANSING",
                "HR, TALENT & RECRUITMENT PODS",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 font-mono text-xs text-slate-300 font-semibold tracking-wider">
                  <span className="size-1.5 rounded-full bg-[#F97316]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Explore</span>
            <div className="scroll-hint grid size-8 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:border-[#F97316]">
              <ArrowDown className="size-3.5 text-[#FACC15]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
