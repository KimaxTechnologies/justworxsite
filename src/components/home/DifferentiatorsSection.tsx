import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeCopy } from "@/lib/content/copy";

export function DifferentiatorsSection() {
  return (
    <SectionShell className="py-28 md:py-36" innerClassName="editorial-container">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {homeCopy.differentiators.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <div className="border-t border-stone/20 pt-8">
              <h3 className="font-heading text-xl md:text-2xl">{item.title}</h3>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-taupe md:text-base">
                {item.description}
              </p>
              <span className="mt-5 inline-block h-px w-8 bg-wood/30" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionShell>
  );
}
