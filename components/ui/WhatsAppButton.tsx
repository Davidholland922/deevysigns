"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";

/** Official WhatsApp glyph. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.04 4c-6.62 0-12 5.38-12 12 0 2.11.55 4.17 1.6 5.99L4 28l6.18-1.62a11.93 11.93 0 0 0 5.86 1.5h.01c6.62 0 12-5.38 12-12s-5.39-11.88-12.01-11.88zm0 21.82h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.96.98-3.58-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.91-9.91 9.91zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

/** Floating WhatsApp call-to-action, fixed to the bottom-right. */
export function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Deevy Signs on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-[95] flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
      data-cursor="Chat"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[140px] sm:inline-block">
        Message us
      </span>
    </motion.a>
  );
}
