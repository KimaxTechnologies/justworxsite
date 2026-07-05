import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeCopy } from "@/lib/content/copy";

const linenTexture = "/lookbook/textures/linen-fabric.png";
const heroTaupe = "#dad0c9";

export function DifferentiatorsSection() {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-2 md:pb-20 md:pt-4"
      style={{
        background: `linear-gradient(180deg, ${heroTaupe} 0%, #e4dcd4 10%, #ede8e1 24%, var(--canvas) 48%)`,
      }}
    >
      <div className="editorial-container relative -mt-8 md:-mt-12">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {homeCopy.differentiators.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="panel-raised moodboard-frame relative min-h-[188px] overflow-hidden md:min-h-[204px]">
                <Image
                  src={linenTexture}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="relative z-10 flex h-full flex-col px-7 py-7 md:px-8 md:py-8">
                  <h3 className="font-heading text-lg text-espresso md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-espresso/80">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block h-px w-8 bg-espresso/35" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
