import { useState, type FormEvent } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Building,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { useReveal } from "@/hooks/use-reveal";
import { NexoraLogo } from "./NexoraLogo";

type Errors = Partial<Record<"name" | "company" | "email" | "capability" | "brief", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const scaleOptions = [
  "Single Process Pod",
  "Dedicated Pod (5-20)",
  "Department Scale (20-50)",
  "Full Enterprise GCC (50+)",
];

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [selectedScale, setSelectedScale] = useState(scaleOptions[1]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};

    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (get("company").length < 2) next.company = "Please enter your organization name.";
    if (!emailRe.test(get("email"))) next.email = "Please provide a valid corporate email.";
    if (!get("capability")) next.capability = "Please select a capability focus.";
    if (get("brief").length < 10) next.brief = "Please describe your operational requirements (10+ characters).";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSent(true);
      }, 600);
    }
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-[#071A3D]/90 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316]";

  return (
    <section id="contact" className="relative border-t border-white/10 bg-[#071A3D] py-24 md:py-36 overflow-hidden">
      {/* Dynamic ambient backdrop */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-[40rem] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #EF4444 0%, #F97316 50%, transparent 100%)",
        }}
      />

      <div ref={ref} data-visible={visible} className="reveal shell relative">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] items-start">
          {/* Left Column: Direct Inquiries & Headquarters Info */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow flex items-center gap-3 text-[#F97316]">
                <span className="inline-block h-px w-8 bg-gradient-to-r from-[#B91C1C] to-[#FACC15]" />
                Initiate Engagement
              </p>
              <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white leading-tight">
                START A
                <br />
                <span className="accent-text">CONVERSATION.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Connect directly with our corporate solutions team to architect your dedicated
                capability pod, GCC setup, or process transformation blueprint.
              </p>
            </div>

            {/* Response Guarantee Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0B224E]/60 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-[#FACC15]" />
                <div>
                  <span className="block font-display text-sm font-bold text-white">
                    Guaranteed 4-Hour Response
                  </span>
                  <span className="block text-xs text-slate-400">
                    A dedicated Solutions Director reviews every enterprise inquiry.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Coordinates */}
            <address className="space-y-5 not-italic">
              <div className="rounded-2xl border border-white/10 bg-[#0A2049]/50 p-6 space-y-4">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-300">
                  Global Headquarters
                </h4>
                <p className="font-display text-base font-bold text-white">
                  Nexora360 Global Solutions Private Limited
                </p>

                <a
                  href="mailto:info@nexora360global.com"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#FACC15] transition-colors"
                >
                  <Mail className="size-4 text-[#F97316] shrink-0" />
                  <span>info@nexora360global.com</span>
                </a>

                <a
                  href="tel:+919655680234"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#FACC15] transition-colors"
                >
                  <Phone className="size-4 text-[#F97316] shrink-0" />
                  <span>+91 96556 80234</span>
                </a>

                <div className="flex gap-3 text-sm leading-relaxed text-slate-300 pt-1">
                  <MapPin className="size-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>
                    ED-305, Bollineni Hillside Phase 2,
                    <br />
                    Perumbakkam, Chennai 600126, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </address>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#FACC15]" /> ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="size-4 text-[#0875C9]" /> Worldwide Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="rounded-3xl border border-white/15 bg-[#0B224E]/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl relative">
            {sent ? (
              <div className="py-12 text-center space-y-6">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-r from-[#B91C1C] via-[#F97316] to-[#FACC15] text-white shadow-2xl shadow-[#F97316]/40">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="font-display text-3xl font-extrabold text-white">
                  Consultation Request Received
                </h3>
                <p className="max-w-md mx-auto text-base text-slate-200">
                  Thank you for reaching out to <strong className="text-white">Nexora360 Global</strong>.
                  Your brief has been routed to our Senior Practice Director. We will contact you
                  within 4 business hours.
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 max-w-sm mx-auto font-mono text-xs text-slate-300">
                  Reference: NX360-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost text-xs mt-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    Request an Operational Consultation
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Fill in your details below and our solution architects will prepare a customized scope.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow mb-2 block text-slate-300">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={field}
                      placeholder="e.g. Sarah Jenkins"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-[#EF4444] font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="eyebrow mb-2 block text-slate-300">
                      Company / Organization *
                    </label>
                    <input
                      id="company"
                      name="company"
                      className={field}
                      placeholder="e.g. Acme Corp"
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="mt-1.5 text-xs text-[#EF4444] font-medium">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="eyebrow mb-2 block text-slate-300">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={field}
                      placeholder="sarah@company.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-[#EF4444] font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="capability" className="eyebrow mb-2 block text-slate-300">
                      Primary Capability Focus *
                    </label>
                    <select
                      id="capability"
                      name="capability"
                      defaultValue=""
                      className={`${field} cursor-pointer`}
                      aria-invalid={!!errors.capability}
                    >
                      <option value="" disabled className="bg-[#071A3D] text-slate-400">
                        Select a capability focus…
                      </option>
                      {capabilities.map((c) => (
                        <option key={c.id} value={c.name} className="bg-[#071A3D] text-white">
                          {c.name}
                        </option>
                      ))}
                    </select>
                    {errors.capability && (
                      <p className="mt-1.5 text-xs text-[#EF4444] font-medium">{errors.capability}</p>
                    )}
                  </div>
                </div>

                {/* Engagement Scale Selector */}
                <div>
                  <label className="eyebrow mb-3 block text-slate-300">
                    Anticipated Team Scale / Model
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {scaleOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedScale(opt)}
                        className={`rounded-xl border p-2.5 text-center font-mono text-[10px] uppercase tracking-wider font-semibold transition-all ${
                          selectedScale === opt
                            ? "border-[#FACC15] bg-gradient-to-r from-[#B91C1C]/40 to-[#F97316]/40 text-white shadow-md"
                            : "border-white/10 bg-[#071A3D] text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="brief" className="eyebrow mb-2 block text-slate-300">
                    Project & Operational Brief *
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={4}
                    className={field}
                    placeholder="Describe your current bottlenecks, target team size, tech stack, and timeline requirements…"
                    aria-invalid={!!errors.brief}
                  />
                  {errors.brief && <p className="mt-1.5 text-xs text-[#EF4444] font-medium">{errors.brief}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    <span>{isSubmitting ? "Processing..." : "Submit Consultation Request"}</span>
                    <Send className="size-4" />
                  </button>

                  <span className="font-mono text-[11px] text-slate-400">
                    🔒 Strict NDA & Data Confidentiality
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CORPORATE FOOTER ---------------- */

const footerLinks = [
  { label: "About Nexora360", href: "#about" },
  { label: "360° Ecosystem", href: "#ecosystem" },
  { label: "Capabilities Directory", href: "#capabilities" },
  { label: "Technology & AI", href: "#technology" },
  { label: "Why Choose Us", href: "#advantage" },
  { label: "Global Delivery Hubs", href: "#global" },
  { label: "Impact & Statistics", href: "#statistics" },
  { label: "Client Endorsements", href: "#values" },
  { label: "Start Conversation", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04112B] py-16 text-slate-300">
      <div className="shell grid gap-12 md:grid-cols-[1.3fr_0.9fr_1fr]">
        {/* Brand Column */}
        <div className="space-y-6">
          <NexoraLogo size="md" showTagline={true} />
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            One partner. Every business need. A premier 360° global corporate capability firm
            empowering international enterprises to scale with speed, intelligence, and excellence.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              ISO 9001:2015
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              ISO 27001:2022
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              SOC 2 Type II Ready
            </span>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#F97316] font-bold mb-4">
            Navigation Index
          </h4>
          <ul className="grid grid-cols-2 gap-2.5">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Address & Contact */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#FACC15] font-bold">
            Corporate Headquarters
          </h4>
          <address className="text-xs not-italic leading-relaxed text-slate-400 space-y-2">
            <p className="font-semibold text-white">
              Nexora360 Global Solutions Private Limited
            </p>
            <p>
              ED-305, Bollineni Hillside Phase 2,
              <br />
              Perumbakkam, Chennai 600126, India
            </p>
            <p className="pt-1">
              Email:{" "}
              <a href="mailto:info@nexora360global.com" className="text-slate-200 hover:text-[#FACC15]">
                info@nexora360global.com
              </a>
            </p>
            <p>
              Direct:{" "}
              <a href="tel:+919655680234" className="text-slate-200 hover:text-[#FACC15]">
                +91 96556 80234
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="shell mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-4">
          <span>© {new Date().getFullYear()} Nexora360 Global Solutions Private Limited. All rights reserved.</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>Chennai • Worldwide Delivery</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="size-3.5 text-[#FACC15]" />
        </button>
      </div>
    </footer>
  );
}
