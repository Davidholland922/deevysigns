"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Star } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const MONTAGE = [
  { src: "/wraps/wrap-1.jpg", alt: "DPD courier van wrap by Deevy Signs, Portlaoise" },
  { src: "/signs/sign-2.jpg", alt: "Tadhg Óg's pub shop front signage in Portlaoise by Deevy Signs" },
  { src: "/signs/sign-1.jpg", alt: "Fort Financial built-up shop front lettering by Deevy Signs, Co. Laois" },
  { src: "/wraps/wrap-13.jpg", alt: "Plan B vehicle graphics and van wrap by Deevy Signs, Ireland" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal-950 text-white"
    >
      {/* Faceted dark base + dotted grid */}
      <div className="absolute inset-0 bg-facet-dark" />
      <div className="absolute inset-0 bg-grid-dark opacity-60" />

      {/* Animated crimson glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-crimson/30 blur-[120px] animate-glow-pulse"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-[40rem] w-[40rem] rounded-full bg-crimson-700/30 blur-[140px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Angular accent line */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -skew-x-12 bg-gradient-to-b from-transparent via-crimson/40 to-transparent lg:block" />

      <div className="container-px relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 pt-28 lg:grid-cols-12 lg:pt-20">
        {/* Copy */}
        <motion.div style={{ y: yText, opacity }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
            </span>
            Signage & Branding · Portlaoise, Ireland
          </motion.div>

          <h1 className="display text-[clamp(3rem,8.5vw,7.5rem)]">
            {["Making", "Businesses"].map((word, i) => (
              <motion.span
                key={word}
                className="block overflow-hidden"
              >
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.4 + i * 0.12 }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="block text-gradient-crimson"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.64 }}
              >
                Impossible to Ignore
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Custom signage, vehicle graphics and branding solutions — designed,
            manufactured and installed across Ireland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" variant="primary">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost" className="border-white/20 bg-white/5 text-white hover:border-crimson">
              View Projects
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 flex items-center gap-4 text-sm text-white/60"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-crimson text-crimson" />
              ))}
            </div>
            <span>
              <span className="font-bold text-white">20+ years</span> branding
              businesses across Ireland
            </span>
          </motion.div>
        </motion.div>

        {/* Montage */}
        <motion.div
          style={{ y: yImg }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            {MONTAGE.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.6 + i * 0.12 }}
                className={[
                  "relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl",
                  i % 2 === 0 ? "translate-y-6 clip-facet" : "clip-diagonal",
                  i === 0 ? "aspect-[3/4]" : i === 3 ? "aspect-[3/4]" : "aspect-square",
                ].join(" ")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 1.4 }}
            className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-5 py-4"
          >
            <p className="text-3xl font-black text-white">1000+</p>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Projects Delivered
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
