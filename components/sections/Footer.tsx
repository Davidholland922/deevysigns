import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { NAV_LINKS, SERVICES, CONTACT } from "@/lib/data";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden bg-charcoal-900 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />

      <div className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <LogoMark className="h-10" withWordmark invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Premium signage, vehicle graphics and branding — designed,
              manufactured and installed across Ireland.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Design", "Manufacture", "Install"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-crimson"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/65 transition-colors hover:text-crimson"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-crimson"
                >
                  <Phone className="h-4 w-4 text-crimson" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#25D366]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-2 transition-colors hover:text-crimson"
                >
                  <Mail className="h-4 w-4 text-crimson" /> {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                {CONTACT.location}
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-crimson hover:text-white"
            >
              Get a quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>© {year} Brendan Deevy Signs. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
            <span>Signs Portlaoise</span> · <span>Vehicle Graphics Laois</span> ·{" "}
            <span>Commercial Signage Ireland</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
