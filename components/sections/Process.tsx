"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              From idea to{" "}
              <span className="text-gradient-crimson">installed</span>
            </>
          }
          description="A clear, proven process that keeps you in control and your project on track."
          align="center"
        />

        <div ref={ref} className="relative mx-auto mt-20 max-w-4xl">
          {/* spine */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-charcoal-900/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-crimson"
            />
          </div>

          <div className="space-y-12">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-charcoal-900 text-sm font-black text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.index}
                </div>

                {/* card */}
                <div
                  className={`flex-1 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="rounded-2xl border border-charcoal-900/10 bg-warmgrey/30 p-6 transition-all duration-300 hover:border-crimson/30 hover:shadow-lg">
                    <h3 className="text-2xl font-extrabold tracking-tight text-charcoal-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-charcoal-900/60">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
