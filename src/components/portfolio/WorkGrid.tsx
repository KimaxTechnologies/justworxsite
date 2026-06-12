"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { TactilePanel } from "@/components/ui/TactilePanel";
import { WorkFilter } from "@/components/portfolio/WorkFilter";
import { WorkLightbox } from "@/components/portfolio/WorkLightbox";
import { resolveSurface } from "@/lib/design/surfaces";
import type { CategoryId } from "@/lib/content/categories";
import { portfolioItems, type WorkItem } from "@/lib/content/portfolio";
import { cn } from "@/lib/utils";

type WorkGridProps = {
  initialCategory?: CategoryId | "all";
};

const aspectClasses = {
  portrait: "md:row-span-2",
  landscape: "",
  square: "",
};

const aspectRatios = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function WorkGrid({ initialCategory = "all" }: WorkGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">(
    initialCategory,
  );
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <div>
      <WorkFilter active={activeCategory} onChange={setActiveCategory} />

      <motion.div
        layout={!prefersReducedMotion}
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const tilt =
              index % 4 === 0 ? 0.2 : index % 4 === 1 ? -0.25 : index % 4 === 2 ? 0.15 : -0.2;

            return (
              <motion.div
                key={item.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={cn(
                  "group relative",
                  aspectClasses[item.aspectRatio],
                  index % 4 === 1 && "md:translate-y-4",
                )}
              >
                <div
                  className="absolute inset-0 bg-stone/8 panel-shadow"
                  style={{
                    transform: `translate(4px, 8px) rotate(${tilt * 0.4}deg)`,
                  }}
                  aria-hidden
                />

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="panel-raised moodboard-frame relative w-full cursor-pointer overflow-hidden bg-canvas text-left transition-transform duration-500 group-hover:-translate-y-0.5"
                  style={{ rotate: `${tilt}deg` }}
                >
                  <TactilePanel
                    surface={resolveSurface(undefined, item.accent, item.texture)}
                    tornEdge
                    className={cn("w-full", aspectRatios[item.aspectRatio])}
                  />

                  <div className="absolute inset-x-0 bottom-0 z-20 border-t border-stone/15 bg-canvas/92 px-5 py-4">
                    <p className="label-caps mb-1 text-[0.55rem]">
                      {item.category.replaceAll("-", " ")}
                    </p>
                    <h3 className="font-heading text-lg text-espresso">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <WorkLightbox
        item={selectedItem}
        open={!!selectedItem}
        onOpenChange={(open) => !open && setSelectedItem(null)}
      />
    </div>
  );
}
