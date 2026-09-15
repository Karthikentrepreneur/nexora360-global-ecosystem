import { useEffect, useState } from "react";
import { ArrowUpRight, Globe, Menu, Phone, X } from "lucide-react";
import { NexoraLogo } from "./NexoraLogo";

const links = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Technology", href: "#technology" },
  { label: "Why Nexora", href: "#advantage" },
  { label: "Global Presence", href: "#global" },
  { label: "Impact & Stats", href: "#statistics" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#071A3D]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <nav aria-label="Primary Navigation" className="shell flex h-20 items-center justify-between">
        {/* Brand Logo with exact Blue Globe + Red-Orange-Yellow Orbit */}
        <a href="#top" className="group flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <NexoraLogo size="sm" showTagline={true} />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[13px] font-medium tracking-wide text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA Area */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919655680234"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 bg-white/5 transition-colors"
          >
            <Phone className="size-3 text-[#F97316]" />
            <span>+91 96556 80234</span>
          </a>

          <a href="#contact" className="btn-primary hidden md:inline-flex text-xs">
            <span>Start a Conversation</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-[#F97316] lg:hidden"
          >
            {open ? <X className="size-5 text-[#FACC15]" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-white/10 bg-[#071A3D]/98 backdrop-blur-2xl lg:hidden">
          <div className="shell flex flex-col gap-2 py-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-[#F97316] uppercase tracking-widest flex items-center gap-1.5">
                <Globe className="size-3.5" /> Global Navigation
              </span>
              <span className="text-[11px] font-mono text-slate-400">Chennai • Worldwide</span>
            </div>

            <ul className="flex flex-col py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 py-3.5 font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-[#FACC15]"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="size-4 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-center"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="tel:+919655680234"
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300"
              >
                <Phone className="size-3.5 text-[#F97316]" />
                <span>Direct Hotline: +91 96556 80234</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
