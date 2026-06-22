"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  strength?: number;
};

/**
 * Magnetic button — the element drifts toward the cursor and springs back.
 * Premium micro-interaction used for primary CTAs.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 will-change-transform";

  const variants = {
    primary: "bg-crimson text-white hover:bg-crimson-600",
    dark: "bg-charcoal-900 text-white hover:bg-charcoal-800",
    ghost:
      "border border-charcoal-900/15 bg-white/40 text-charcoal-900 backdrop-blur hover:border-crimson/50",
  };

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-charcoal-900 transition-transform duration-500 ease-out group-hover:translate-y-0" />
      )}
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={cn(base, variants[variant], className)}>
          {inner}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(base, variants[variant], className)}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
