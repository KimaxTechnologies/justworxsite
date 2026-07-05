"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { TypewriterText } from "@/components/ui/TypewriterText";
import { getWhatsAppUrl } from "@/lib/config/site";
import { homeCopy } from "@/lib/content/copy";
import { fadeUp } from "@/lib/motion/variants";

const heroFull = "/moodboard/hero-full.png";
const heroTaupe = "#dad0c9";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      style={{ backgroundColor: heroTaupe }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-20 md:top-24"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -8, 0, 5, 0],
                  rotate: [0, 0.1, 0, -0.08, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-full w-full min-h-[56.25vw]">
            <Image
              src={heroFull}
              alt=""
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </motion.div>

        <div
          className="absolute inset-y-0 left-0 w-[42%]"
          style={{
            background: `linear-gradient(90deg, color-mix(in srgb, ${heroTaupe} 42%, transparent) 0%, color-mix(in srgb, ${heroTaupe} 18%, transparent) 70%, transparent 100%)`,
          }}
        />

        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, #dad0c9 28%, transparent) 0%, transparent 38%, color-mix(in srgb, #dad0c9 42%, transparent) 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-16 md:h-20"
          style={{
            background: `linear-gradient(to bottom, transparent, ${heroTaupe})`,
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col px-6 pb-28 pt-28 md:px-10 md:pb-16 md:pt-32">
        <motion.p
          className="label-caps mb-5 max-w-xs text-espresso [text-shadow:0_1px_14px_color-mix(in_srgb,var(--canvas)_88%,transparent)] md:absolute md:left-[6%] md:top-[20%] md:mb-0 lg:left-[7%]"
          initial={prefersReducedMotion ? false : fadeUp.hidden}
          animate={prefersReducedMotion ? undefined : fadeUp.visible}
          transition={{ delay: 0.1 }}
        >
          {homeCopy.hero.eyebrow}
        </motion.p>

        <TypewriterText
          text={homeCopy.hero.headline}
          as="h1"
          className="font-heading max-w-[11rem] text-[2rem] leading-[1.1] text-espresso sm:max-w-sm sm:text-[2.35rem] md:absolute md:left-[6%] md:top-[26%] md:max-w-md md:text-5xl lg:left-[7%] lg:max-w-lg lg:text-6xl xl:max-w-xl xl:text-[4.25rem]"
          startDelayMs={700}
          speedMs={78}
        />

        <div className="mt-auto flex flex-col gap-10 md:absolute md:inset-x-[6%] md:bottom-[8%] md:flex-row md:items-center md:justify-between md:gap-8 lg:inset-x-[7%]">
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 4.2 }}
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
              className="inline-flex h-12 items-center justify-center border border-stone/30 bg-canvas/75 px-8 font-sans text-xs font-medium uppercase tracking-[0.15em] text-espresso backdrop-blur-sm transition-colors hover:bg-canvas/90 sm:h-11"
            >
              {homeCopy.hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.p
            className="max-w-[16rem] rounded-sm bg-canvas/55 px-3 py-2.5 font-sans text-sm font-semibold leading-relaxed text-espresso shadow-[0_2px_16px_color-mix(in_srgb,var(--canvas)_40%,transparent)] backdrop-blur-[2px] sm:max-w-xs sm:text-base md:max-w-[17rem] md:text-right lg:max-w-xs lg:text-lg"
            initial={prefersReducedMotion ? false : fadeUp.hidden}
            animate={prefersReducedMotion ? undefined : fadeUp.visible}
            transition={{ delay: 4.6 }}
          >
            {homeCopy.hero.subheadline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
