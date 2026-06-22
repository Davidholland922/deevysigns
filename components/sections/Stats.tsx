"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, StaggerGroup } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-charcoal-950 py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-crimson/20 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-white/60"
          >
            <span className="h-px w-8 bg-crimson" />
            Why Deevy Signs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.25rem,5.5vw,4.5rem)]"
          >
            Two decades of making
            <br />
            <span className="text-gradient-crimson">brands stand out</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            We design, manufacture and install — all in-house. That means total
            control over quality, from the first sketch to the final fix.
          </motion.p>
        </div>

        <StaggerGroup className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative bg-charcoal-950 p-8 text-center transition-colors duration-500 hover:bg-crimson/5 md:p-10"
            >
              <p className="display text-[clamp(2.5rem,6vw,4.5rem)] text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/55">
                {stat.label}
              </p>
              <span className="mx-auto mt-4 block h-0.5 w-8 origin-center scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xl font-black uppercase tracking-tight md:text-3xl">
          <span className="text-white">Design</span>
          <span className="text-crimson">•</span>
          <span className="text-white">Manufacture</span>
          <span className="text-crimson">•</span>
          <span className="text-white">Install</span>
        </div>
      </div>
    </section>
  );
}
