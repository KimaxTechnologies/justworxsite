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
      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10">
          {homeCopy.differentiators.map((item, index) => (
            <ScrollReveal key={item.title} className="w-full" delay={index * 0.08}>
              <div className="panel-raised moodboard-frame relative aspect-[5/4] w-full overflow-hidden sm:aspect-[4/3]">
                <Image
                  src={linenTexture}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="relative z-10 flex h-full flex-col justify-between px-7 py-7 md:px-8 md:py-8 lg:px-9">
                  <div>
                    <h3 className="font-heading text-lg text-espresso md:text-xl lg:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm font-light leading-relaxed text-espresso/80 md:text-[0.95rem]">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-5 inline-block h-px w-10 bg-espresso/35" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
