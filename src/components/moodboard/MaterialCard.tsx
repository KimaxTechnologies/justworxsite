"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { TactilePanel } from "@/components/ui/TactilePanel";
import { getCategoryTexture } from "@/lib/design/lookbook-textures";
import type { Category } from "@/lib/content/categories";
import { cn } from "@/lib/utils";

type MaterialCardProps = {
  category: Category;
  index?: number;
  className?: string;
};

export function MaterialCard({ category, index = 0, className }: MaterialCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isOffset = index % 2 === 1;
  const tilt = index % 3 === 0 ? 0.25 : index % 3 === 1 ? -0.2 : 0.1;
  const textureSrc = getCategoryTexture(category.id);
  const overflowShift = index % 2 === 0 ? { x: 10, y: 14 } : { x: -8, y: 12 };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={cn("group relative", isOffset && "md:mt-8", className)}
    >
      <div
        className="texture-overflow absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${overflowShift.x}px, ${overflowShift.y}px) rotate(${tilt * 1.4}deg) scale(1.04)`,
        }}
        aria-hidden
      >
        <Image
          src={textureSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      <Link
        href={`/work?category=${category.id}`}
        className="panel-raised moodboard-frame relative block overflow-hidden bg-canvas transition-transform duration-500 group-hover:-translate-y-0.5"
        style={{ rotate: `${tilt}deg` }}
      >
        <TactilePanel
          surface={category.surface}
          tornEdge
          className="aspect-[4/5]"
        />

        <div className="border-t border-stone/15 bg-canvas px-5 py-5">
          <span className="label-caps mb-2 block text-[0.6rem]">
            {category.id.replaceAll("-", " ")}
          </span>
          <h3 className="font-heading text-xl text-espresso md:text-2xl">
            {category.title}
          </h3>
          <p className="mt-2 font-sans text-sm font-light leading-relaxed text-taupe">
            {category.description}
          </p>
          <span className="mt-4 inline-block h-px w-0 bg-wood/50 transition-all duration-500 group-hover:w-8" />
        </div>
      </Link>
    </motion.div>
  );
}
