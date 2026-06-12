"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { getWhatsAppUrl } from "@/lib/config/site";
import { homeCopy } from "@/lib/content/copy";
import { fadeUp } from "@/lib/motion/variants";

const heroCollage = "/moodboard/hero-collage.png";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-canvas pb-28 pt-32 md:items-center md:pb-0 md:pt-0">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={heroCollage}
          alt=""
          fill
          priority
          className="object-cover object-[72%_center] md:object-[68%_center]"
          sizes="100vw"
        />

        {/* Keep copy legible while letting textures breathe on the right */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                95deg,
                color-mix(in srgb, var(--canvas) 96%, transparent) 0%,
                color-mix(in srgb, var(--canvas) 88%, transparent) 38%,
                color-mix(in srgb, var(--canvas) 42%, transparent) 62%,
                transparent 100%
              ),
              linear-gradient(
                to top,
                color-mix(in srgb, var(--canvas) 92%, transparent) 0%,
                transparent 28%
              ),
              linear-gradient(
                to bottom,
                color-mix(in srgb, var(--canvas) 70%, transparent) 0%,
                transparent 18%
              )
            `,
          }}
        />
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
              className="inline-flex h-12 items-center justify-center border border-stone/25 bg-canvas/90 px-8 font-sans text-xs font-medium uppercase tracking-[0.15em] text-espresso backdrop-blur-sm transition-colors hover:bg-linen/60 sm:h-11"
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
