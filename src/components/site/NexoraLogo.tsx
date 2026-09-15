import type { SVGProps } from "react";

interface NexoraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  emblemOnly?: boolean;
  variant?: "dark" | "light";
}

/**
 * Nexora360 Global Official Brand Logo
 * Integrates the signature Logo Blue (#0875C9) globe with the
 * dynamic 360° red -> orange -> yellow energy orbit and modern typography.
 */
export function NexoraLogo({
  className = "",
  size = "md",
  showTagline = true,
  emblemOnly = false,
  variant = "dark",
}: NexoraLogoProps) {
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", sub: "text-[9px]" },
    md: { icon: 42, text: "text-xl", sub: "text-[10px]" },
    lg: { icon: 54, text: "text-2xl", sub: "text-xs" },
    xl: { icon: 72, text: "text-3xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Globe + 360° Orbital Emblem */}
      <div className="relative shrink-0" style={{ width: currentSize.icon, height: currentSize.icon }}>
        <NexoraEmblem className="size-full transition-transform duration-500 hover:scale-105" />
      </div>

      {!emblemOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline tracking-tight">
            <span
              className={`font-display font-extrabold tracking-tight ${currentSize.text} ${
                variant === "light" ? "text-slate-900" : "text-white"
              }`}
            >
              NEXORA
            </span>
            <span
              className={`font-display font-black ml-0.5 ${currentSize.text}`}
              style={{
                background: "linear-gradient(115deg, #EF4444 0%, #F97316 50%, #FACC15 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              360
            </span>
          </div>
          {showTagline && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`font-mono font-semibold uppercase tracking-[0.24em] ${currentSize.sub}`}
                style={{ color: "#0875C9" }}
              >
                GLOBAL
              </span>
              <span className="size-1 rounded-full bg-[#F97316]" />
              <span
                className={`font-mono uppercase tracking-[0.18em] ${currentSize.sub} ${
                  variant === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                SOLUTIONS
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function NexoraEmblem(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nexora360 Global Logo"
      {...props}
    >
      <defs>
        {/* Globe Base Radial Gradient */}
        <radialGradient
          id="globeBase"
          cx="42%"
          cy="38%"
          r="62%"
          fx="35%"
          fy="30%"
        >
          <stop offset="0%" stopColor="#259BF5" />
          <stop offset="45%" stopColor="#0875C9" />
          <stop offset="85%" stopColor="#064E8A" />
          <stop offset="100%" stopColor="#042C52" />
        </radialGradient>

        {/* 360° Red-Orange-Yellow Dynamic Orbit Gradient */}
        <linearGradient
          id="royOrbit"
          x1="0%"
          y1="20%"
          x2="100%"
          y2="85%"
        >
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="30%" stopColor="#EF4444" />
          <stop offset="65%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>

        {/* Counter Orbit Subtle Glow */}
        <linearGradient
          id="blueCyanSweep"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0875C9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#071A3D" stopOpacity="0.1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer ambient glow */}
      <circle cx="50" cy="50" r="38" fill="#0875C9" opacity="0.12" />

      {/* Back orbital arc */}
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="18"
        transform="rotate(-28 50 50)"
        stroke="url(#royOrbit)"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        strokeDasharray="4 6"
      />

      {/* Main 3D Globe Sphere */}
      <circle
        cx="50"
        cy="50"
        r="28"
        fill="url(#globeBase)"
        filter="drop-shadow(0 4px 12px rgba(8, 117, 201, 0.45))"
      />

      {/* Globe Longitude & Latitude Grids (Technical Global Lines) */}
      <g opacity="0.65" stroke="#FFFFFF" strokeWidth="0.8">
        {/* Equator */}
        <ellipse cx="50" cy="50" rx="27.5" ry="9" strokeDasharray="1 0" />
        {/* Northern Parallel */}
        <ellipse cx="50" cy="41" rx="23" ry="6.5" opacity="0.75" />
        {/* Southern Parallel */}
        <ellipse cx="50" cy="59" rx="23" ry="6.5" opacity="0.75" />
        {/* Prime Meridian */}
        <ellipse cx="50" cy="50" rx="12" ry="27.5" />
        {/* Outer Rim highlight */}
        <circle cx="50" cy="50" r="27.5" fill="none" stroke="#60A5FA" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Global Network Nodes & Data Links */}
      <g>
        {/* Node 1: Chennai / India Hub */}
        <circle cx="58" cy="48" r="2.2" fill="#FACC15" filter="url(#glowEffect)" />
        <circle cx="58" cy="48" r="4.5" fill="none" stroke="#FACC15" strokeWidth="0.6" opacity="0.7" />

        {/* Node 2: Americas */}
        <circle cx="36" cy="44" r="1.8" fill="#FFFFFF" />
        <circle cx="36" cy="44" r="3.5" fill="none" stroke="#38BDF8" strokeWidth="0.5" opacity="0.6" />

        {/* Node 3: EMEA / Europe */}
        <circle cx="48" cy="38" r="1.6" fill="#F97316" />

        {/* Node 4: APAC / East Asia */}
        <circle cx="64" cy="42" r="1.6" fill="#EF4444" />

        {/* Connecting Digital Coordinate Lines */}
        <path
          d="M36 44 L48 38 L58 48 L64 42"
          stroke="#FACC15"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.85"
        />
      </g>

      {/* Dynamic 360° Foreground Orbital Ribbon (Red -> Orange -> Yellow Gradient) */}
      <path
        d="M 12 62 C 22 76, 74 76, 88 44 C 92 34, 84 22, 68 20"
        stroke="url(#royOrbit)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        filter="url(#glowEffect)"
      />

      {/* Pulsing Energy Satellite Beacon on the 360° Ring */}
      <circle cx="86" cy="45" r="3.4" fill="#FACC15" filter="url(#glowEffect)" />
      <circle cx="86" cy="45" r="5.5" fill="none" stroke="#F97316" strokeWidth="1" opacity="0.8" />
      <circle cx="86" cy="45" r="1.5" fill="#FFFFFF" />

      {/* Secondary Fast Blue/Cyan Trajectory Sweep */}
      <path
        d="M 28 26 C 42 16, 68 18, 78 28"
        stroke="url(#blueCyanSweep)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
