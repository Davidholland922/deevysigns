"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, StaggerGroup } from "@/components/ui/Reveal";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-charcoal-900/10 bg-white p-8 transition-colors duration-500 hover:border-crimson/30"
    >
      {/* hover crimson wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-crimson-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* faceted corner accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 bg-crimson/5 transition-all duration-500 group-hover:bg-white/10" />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/10 text-crimson transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
            <Icon className="h-7 w-7" strokeWidth={1.6} />
          </div>
          <span className="text-5xl font-black text-charcoal-900/10 transition-colors duration-500 group-hover:text-white/20">
            {service.index}
          </span>
        </div>

        <h3 className="text-2xl font-extrabold tracking-tight text-charcoal-900 transition-colors duration-500 group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-charcoal-900/60 transition-colors duration-500 group-hover:text-white/85">
          {service.description}
        </p>

        {/* animated red accent line */}
        <div className="mt-6 h-px w-full origin-left scale-x-100 bg-charcoal-900/10 transition-colors duration-500 group-hover:bg-white/20" />

        <ul className="mt-6 flex flex-wrap gap-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="rounded-full border border-charcoal-900/10 px-3 py-1 text-xs font-semibold text-charcoal-900/70 transition-colors duration-500 group-hover:border-white/25 group-hover:text-white"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-crimson transition-colors duration-500 group-hover:text-white">
          <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Explore service
          </span>
          <ArrowUpRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative bg-warmgrey/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                A full-service{" "}
                <span className="text-gradient-crimson">signage studio</span>
              </>
            }
            description="From a single van to a nationwide rebrand — designed, manufactured and installed under one roof."
          />
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
