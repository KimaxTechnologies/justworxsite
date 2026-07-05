import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeCopy } from "@/lib/content/copy";

const linenTexture = "/lookbook/textures/linen-fabric.png";
const heroTaupe = "#dad0c9";

export function DifferentiatorsSection() {
  return (
    <section
      className="relative z-0 flex min-h-[clamp(18rem,40vh,30rem)] items-center overflow-hidden py-14 md:min-h-[clamp(20rem,44vh,34rem)] md:py-16"
      style={{
        background: `linear-gradient(180deg, ${heroTaupe} 0%, #e4dcd4 14%, #ede8e1 50%, var(--canvas) 100%)`,
      }}
    >
      <div className="editorial-container-wide relative">
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-5 lg:gap-6 xl:gap-7">
          {homeCopy.differentiators.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="min-w-0 flex-1"
              delay={index * 0.08}
            >
              <div className="panel-raised moodboard-frame relative min-h-[188px] w-full overflow-hidden md:min-h-[200px]">
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
