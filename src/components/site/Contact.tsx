import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { useReveal } from "@/hooks/use-reveal";

type Errors = Partial<Record<"name" | "company" | "email" | "capability" | "brief", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (get("company").length < 2) next.company = "Please enter your company name.";
    if (!emailRe.test(get("email"))) next.email = "Please enter a valid work email.";
    if (!get("capability")) next.capability = "Please select a capability.";
    if (get("brief").length < 10) next.brief = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  const field =
    "w-full border border-input bg-surface/40 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan focus:ring-1 focus:ring-ring";

  return (
    <section id="contact" className="relative border-t border-line py-24 md:py-36">
      <div ref={ref} data-visible={visible} className="reveal shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-cyan" />
            Contact
          </p>
          <h2 className="display mt-6 text-[clamp(2rem,5vw,3.6rem)]">
            START A
            <br />
            <span className="accent-text">CONVERSATION.</span>
          </h2>

          <address className="mt-12 space-y-7 not-italic">
            <p className="font-display text-lg font-bold tracking-tight">
              Nexora360 Global Solutions Pvt. Ltd.
            </p>
            <a
              href="mailto:info@nexora360global.com"
              className="link-underline flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="size-4 text-cyan" /> info@nexora360global.com
            </a>
            <a
              href="tel:+919655680234"
              className="link-underline flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="size-4 text-cyan" /> +91 96556 80234
            </a>
            <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" />
              ED-305, Bollineni Hillside Phase 2,
              <br />
              Perumbakkam, Chennai 600126
            </p>
          </address>
        </div>

        <form onSubmit={onSubmit} noValidate className="border border-line bg-surface/25 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow mb-2 block">
                Full Name
              </label>
              <input id="name" name="name" className={field} placeholder="Your name" aria-invalid={!!errors.name} />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="company" className="eyebrow mb-2 block">
                Company
              </label>
              <input id="company" name="company" className={field} placeholder="Company name" aria-invalid={!!errors.company} />
              {errors.company && <p className="mt-2 text-xs text-destructive">{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-2 block">
                Work Email
              </label>
              <input id="email" name="email" type="email" className={field} placeholder="you@company.com" aria-invalid={!!errors.email} />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="capability" className="eyebrow mb-2 block">
                Capability You Need
              </label>
              <select id="capability" name="capability" defaultValue="" className={field} aria-invalid={!!errors.capability}>
                <option value="" disabled>
                  Select a capability
                </option>
                {capabilities.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.capability && <p className="mt-2 text-xs text-destructive">{errors.capability}</p>}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="brief" className="eyebrow mb-2 block">
                What Are You Looking To Outsource?
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={5}
                className={field}
                placeholder="One process, one department, or a complete operation…"
                aria-invalid={!!errors.brief}
              />
              {errors.brief && <p className="mt-2 text-xs text-destructive">{errors.brief}</p>}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button type="submit" className="btn-primary">
              Send Message <ArrowUpRight className="size-4" />
            </button>
            {sent && (
              <p role="status" className="flex items-center gap-2 text-sm text-cyan">
                <Check className="size-4" /> Thank you — we&apos;ll be in touch shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Values", href: "#values" },
  { label: "The Advantage", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="shell grid gap-12 md:grid-cols-3">
        <div>
          <span className="font-display text-lg font-extrabold tracking-tight">
            NEXORA<span className="accent-text">360</span>
          </span>
          <p className="eyebrow mt-3">Global Solutions</p>
          <p className="mt-6 font-display text-xl font-bold tracking-tight">
            One partner. Every business need.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-3">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-3 text-sm not-italic text-muted-foreground">
          <a href="mailto:info@nexora360global.com" className="link-underline block hover:text-foreground">
            info@nexora360global.com
          </a>
          <a href="tel:+919655680234" className="link-underline block hover:text-foreground">
            +91 96556 80234
          </a>
          <p className="leading-relaxed">
            ED-305, Bollineni Hillside Phase 2,
            <br />
            Perumbakkam, Chennai 600126
          </p>
        </address>
      </div>

      <div className="shell mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© Nexora360 Global Solutions Private Limited</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em]">360° Business Ecosystem</p>
      </div>
    </footer>
  );
}
