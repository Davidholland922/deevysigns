"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { CONTACT, PROJECT_TYPES } from "@/lib/data";
import { fadeUp, StaggerGroup } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name", required: true },
  { name: "business", label: "Business", type: "text", placeholder: "Company name", required: false },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+353 ...", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.ie", required: true },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end demo submit — wire to an email service / API route in production.
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal-950 py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[34rem] w-[34rem] rounded-full bg-crimson/25 blur-[130px] animate-glow-pulse" />

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — CTA */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-white/60"
          >
            <span className="h-px w-8 bg-crimson" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.5rem,6vw,5rem)]"
          >
            Let&apos;s make your brand
            <br />
            <span className="text-gradient-crimson">impossible to ignore</span>
          </motion.h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
            Tell us about your project and we&apos;ll come back with ideas and a
            no-obligation quote, usually within one working day.
          </p>

          {/* WhatsApp quick action */}
          <motion.a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group mt-10 flex items-center justify-between gap-4 rounded-2xl bg-[#25D366] p-4 text-white transition-transform hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/80">
                  Prefer to message?
                </span>
                <span className="block text-base font-extrabold">
                  Chat on WhatsApp
                </span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Phone, label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
              { icon: Mail, label: "Email us", value: CONTACT.email, href: CONTACT.emailHref },
              { icon: MapPin, label: "Visit us", value: CONTACT.location },
              { icon: Clock, label: "Hours", value: CONTACT.hours },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-crimson/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson/15 text-crimson">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/45">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-dark rounded-3xl p-7 md:p-9">
            {sent ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold">Thank you!</h3>
                <p className="mt-2 max-w-xs text-white/65">
                  Your enquiry is in. We&apos;ll be in touch shortly to talk
                  through your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label
                        htmlFor={f.name}
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60"
                      >
                        {f.label}
                        {f.required && <span className="text-crimson"> *</span>}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-crimson focus:bg-white/10"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-crimson focus:bg-white/10"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-charcoal-900">
                      Select a service…
                    </option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p} value={p} className="bg-charcoal-900">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-crimson focus:bg-white/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-crimson-600"
                >
                  Request My Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-white/40">
                  No obligation. We typically reply within one working day.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
