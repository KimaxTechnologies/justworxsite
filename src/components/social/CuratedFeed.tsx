"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { socialPosts } from "@/lib/content/social-posts";
import { staggerContainer, fadeUp } from "@/lib/motion/variants";

export function CuratedFeed() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ScrollReveal>
      <motion.div
        className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6"
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        {socialPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            variants={prefersReducedMotion ? undefined : fadeUp}
            className="panel-raised moodboard-frame group relative block aspect-square overflow-hidden bg-linen transition-transform duration-500 hover:-translate-y-0.5"
            style={index % 3 === 1 ? { marginTop: "0.5rem" } : undefined}
            aria-label={post.alt}
          >
            <div className="absolute inset-3 md:inset-3.5">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/8">
              <InstagramIcon className="size-5 text-canvas opacity-0 drop-shadow-sm transition-opacity duration-300 group-hover:opacity-80" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </ScrollReveal>
  );
}
