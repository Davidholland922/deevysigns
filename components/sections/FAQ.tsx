"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal-900/10">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <h3 className="text-lg font-extrabold tracking-tight text-charcoal-900 md:text-xl">
          {q}
        </h3>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            open
              ? "border-crimson bg-crimson text-white"
              : "border-charcoal-900/15 text-charcoal-900"
          }`}
        >
          <Plus
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-charcoal-900/65">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQs"
              title={
                <>
                  Questions,
                  <br />
                  <span className="text-gradient-crimson">answered</span>
                </>
              }
              description="Everything you need to know about working with Deevy Signs. Still unsure? Give us a call — we're happy to help."
            />
          </div>

          <div className="lg:col-span-7">
            {FAQS.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
