"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { getWhatsAppUrl, siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export function FloatingInquiryBar() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 md:bottom-7 md:w-auto"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "glass-warm flex h-12 w-full items-center justify-center gap-2.5 rounded-full",
              "border border-stone/45 bg-canvas/85 shadow-[0_8px_32px_color-mix(in_srgb,var(--espresso)_8%,transparent)]",
              "font-sans text-xs font-medium uppercase tracking-[0.14em] text-espresso",
              "transition-all duration-400 hover:border-wood/30 hover:bg-linen/90 md:h-11 md:px-8",
            )}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-wood text-canvas">
              <MessageCircle className="size-4" />
            </span>
            <span>
              Message us · {siteConfig.whatsapp.display}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
