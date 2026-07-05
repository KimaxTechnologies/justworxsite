import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeCopy } from "@/lib/content/copy";

const linenTexture = "/lookbook/textures/linen-fabric.png";
const heroTaupe = "#dad0c9";

export function DifferentiatorsSection() {
  return (
    <section
      className="relative overflow-hidden pb-28 pt-10 md:pb-36 md:pt-14"
      style={{
        background: `linear-gradient(180deg, ${heroTaupe} 0%, #e6dfd8 18%, #f0ebe4 42%, var(--canvas) 72%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-stone/20"
        aria-hidden
      />

      <div className="editorial-container relative -mt-1 md:-mt-2">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {homeCopy.differentiators.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div
                className="panel-raised moodboard-frame relative min-h-[220px] overflow-hidden md:min-h-[240px]"
                style={
                  index === 1
                    ? { marginTop: "0.5rem" }
                    : index === 2
                      ? { marginTop: "1rem" }
                      : undefined
                }
              >
                <Image
                  src={linenTexture}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="relative z-10 flex h-full flex-col px-8 py-9 md:px-9 md:py-10">
                  <h3 className="font-heading text-xl text-espresso md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 font-sans text-sm font-light leading-relaxed text-espresso/80 md:text-[0.95rem]">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-block h-px w-10 bg-espresso/35" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
