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
    <section className="relative overflow-hidden bg-canvas pb-28 pt-32 md:min-h-[100svh] md:pb-0 md:pt-0">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 88% 18%, color-mix(in srgb, var(--stone) 18%, transparent), transparent 70%),
            radial-gradient(ellipse 40% 35% at 12% 88%, color-mix(in srgb, var(--linen) 14%, transparent), transparent 65%)
          `,
        }}
        aria-hidden
      />

      <div className="editorial-container relative z-10 flex min-h-[calc(100svh-8rem)] flex-col gap-12 md:min-h-[100svh] md:flex-row md:items-center md:justify-between md:gap-16 lg:gap-20">
        <div className="max-w-3xl md:max-w-xl lg:max-w-2xl">
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

        <motion.div
          className="w-full md:w-[min(44vw,34rem)] md:shrink-0 lg:w-[min(40vw,36rem)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="panel-raised moodboard-frame relative mx-auto aspect-[655/578] w-full max-w-[34rem] overflow-hidden md:mx-0 md:max-w-none">
            <Image
              src={heroCollage}
              alt="Abstract material moodboard collage"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 34rem"
            />
          </div>
        </motion.div>
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
