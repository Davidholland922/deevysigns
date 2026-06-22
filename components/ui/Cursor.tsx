"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Custom cursor: a small dot that tracks instantly + a soft ring that lags
 * behind with spring physics. Grows over interactive elements and can show a
 * contextual label via `data-cursor="label text"`. Desktop pointers only.
 */
export function Cursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!fine || !wide) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.(
        'a, button, [data-cursor], input, textarea, select'
      ) as HTMLElement | null;
      if (el) {
        setHovering(true);
        setLabel(el.getAttribute("data-cursor"));
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] block">
      {/* Lagging ring / label bubble */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: label ? 84 : hovering ? 56 : 38,
            height: label ? 84 : hovering ? 56 : 38,
            backgroundColor: label
              ? "rgba(194,24,43,1)"
              : hovering
                ? "rgba(194,24,43,0.12)"
                : "rgba(194,24,43,0)",
            borderColor: label ? "rgba(194,24,43,0)" : "rgba(194,24,43,0.7)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex items-center justify-center rounded-full border"
        >
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="text-[11px] font-bold uppercase tracking-widest text-white"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Instant dot */}
      <motion.div
        style={{ x, y }}
        animate={{ scale: hovering ? 0 : 1 }}
        className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson"
      />
    </div>
  );
}
