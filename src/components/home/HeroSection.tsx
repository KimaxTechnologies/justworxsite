"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { getWhatsAppUrl } from "@/lib/config/site";
import { homeCopy } from "@/lib/content/copy";
import { fadeUp } from "@/lib/motion/variants";

const collagePanels = [
  {
    className:
      "right-[6%] top-[12%] h-36 w-28 md:right-[10%] md:top-[14%] md:h-48 md:w-36",
    surface: "surface-linen",
    rotate: "1.5deg",
  },
  {
    className:
      "right-[18%] top-[22%] h-24 w-24 md:right-[22%] md:top-[24%] md:h-32 md:w-32",
    surface: "surface-stone",
    rotate: "-1deg",
  },
  {
    className:
      "left-[52%] top-[28%] h-28 w-20 md:left-[55%] md:top-[26%] md:h-36 md:w-24",
    surface: "surface-paper",
    rotate: "2deg",
  },
  {
    className:
      "bottom-[20%] right-[8%] h-20 w-32 md:bottom-[22%] md:right-[12%] md:h-24 md:w-40",
    surface: "surface-ceramic",
    rotate: "-1.5deg",
  },
  {
    className:
      "bottom-[30%] left-[4%] h-16 w-36 md:bottom-[32%] md:left-[8%] md:h-20 md:w-44",
    surface: "surface-sand",
    rotate: "-0.5deg",
  },
  {
    className:
      "left-[3%] top-[16%] h-20 w-16 md:left-[6%] md:top-[18%] md:h-28 md:w-20",
    surface: "surface-wood",
    rotate: "-2deg",
  },
] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-canvas pb-28 pt-32 md:items-center md:pb-0 md:pt-0">
      {/* Soft ambient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 80% 20%, color-mix(in srgb, var(--sand) 14%, transparent), transparent 65%),
            radial-gradient(ellipse 50% 40% at 10% 75%, color-mix(in srgb, var(--linen) 12%, transparent), transparent 60%)
          `,
        }}
        aria-hidden
      />

      {/* Gentle moodboard collage — static, light panels */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {collagePanels.map((panel) => (
          <div
            key={panel.className}
            className={`surface-panel absolute panel-shadow moodboard-frame opacity-75 ${panel.surface} ${panel.className}`}
            style={{ transform: `rotate(${panel.rotate})` }}
          >
            <div className="surface-grain absolute inset-0" />
          </div>
        ))}
      </div>

      <div className="editorial-container relative z-10 w-full">
        <div className="max-w-3xl md:max-w-4xl">
          <motion.p
            className="label-caps mb-7"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 0.1 }}
          >
            {homeCopy.hero.eyebrow}
          </motion.p>

          <motion.h1
            className="font-heading text-[2.35rem] leading-[1.08] text-balance text-espresso md:text-6xl lg:text-[4.25rem]"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 0.2 }}
          >
            {homeCopy.hero.headline}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg font-sans text-base font-light leading-[1.75] text-taupe md:mt-9 md:text-lg"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 0.35 }}
          >
            {homeCopy.hero.subheadline}
          </motion.p>

          <motion.div
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 0.5 }}
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center bg-wood px-8 font-sans text-xs font-medium uppercase tracking-[0.15em] text-canvas shadow-panel transition-opacity hover:opacity-90 sm:h-11"
            >
              {homeCopy.hero.cta}
            </a>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center border border-stone/25 bg-canvas/90 px-8 font-sans text-xs font-medium uppercase tracking-[0.15em] text-espresso transition-colors hover:bg-linen/60 sm:h-11"
            >
              {homeCopy.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="label-caps text-[0.55rem]">Scroll</span>
          <motion.div
            className="h-10 w-px bg-taupe/20"
            animate={prefersReducedMotion ? undefined : { scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
