import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "The Advantage", href: "#advantage" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="shell flex h-18 items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid size-8 place-items-center">
            <span className="absolute inset-0 rounded-full border border-cyan/70" />
            <span className="absolute inset-1.5 rounded-full border border-violet/70 transition-transform duration-700 group-hover:rotate-180" />
            <span className="size-1 rounded-full bg-cyan" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-sm font-extrabold tracking-tight">
              NEXORA<span className="accent-text">360</span>
            </span>
            <span className="eyebrow block text-[9px]">Global Solutions</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden md:inline-flex">
            Start a Conversation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass lg:hidden">
          <ul className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-2xl font-extrabold tracking-tight"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Start a Conversation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
