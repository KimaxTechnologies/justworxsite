import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeCopy } from "@/lib/content/copy";

const linenTexture = "/lookbook/textures/linen-fabric.png";

export function DifferentiatorsSection() {
  return (
    <SectionShell className="py-28 md:py-36" innerClassName="editorial-container">
      <div className="grid gap-6 md:grid-cols-3 md:gap-5">
        {homeCopy.differentiators.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <div className="panel-raised moodboard-frame relative min-h-[220px] overflow-hidden md:min-h-[240px]">
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
    </SectionShell>
  );
}
