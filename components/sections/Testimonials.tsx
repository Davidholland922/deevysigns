"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const count = TESTIMONIALS.length;

  const paginate = useCallback(
    (d: number) => setState(([i]) => [(i + d + count) % count, d]),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => paginate(1), 7000);
    return () => clearInterval(t);
  }, [paginate]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-warmgrey/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container-px relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Client Voices"
          title={
            <>
              Trusted by businesses
              <br />
              <span className="text-gradient-crimson">across Ireland</span>
            </>
          }
          align="center"
        />

        <div className="relative mt-16 min-h-[22rem] md:min-h-[18rem]">
          <Quote
            className="mx-auto mb-6 h-12 w-12 text-crimson/30"
            strokeWidth={1.5}
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
              transition={{ duration: 0.5, ease }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-crimson text-crimson" />
                ))}
              </div>
              <p className="text-2xl font-bold leading-snug tracking-tight text-charcoal-900 md:text-4xl md:leading-[1.18]">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <p className="text-lg font-extrabold text-charcoal-900">
                  {t.name}
                </p>
                <p className="text-sm text-charcoal-900/55">
                  {t.role}, {t.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => paginate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal-900/15 bg-white text-charcoal-900 transition-colors hover:border-crimson hover:bg-crimson hover:text-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-crimson" : "w-2 bg-charcoal-900/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal-900/15 bg-white text-charcoal-900 transition-colors hover:border-crimson hover:bg-crimson hover:text-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
