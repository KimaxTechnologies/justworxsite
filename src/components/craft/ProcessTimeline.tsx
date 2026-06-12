import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { craftCopy } from "@/lib/content/copy";

export function ProcessTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {craftCopy.process.map((step, index) => (
        <ScrollReveal key={step.step} delay={index * 0.1}>
          <div className="border-t border-stone/50 pt-6">
            <span className="label-caps text-[0.6rem] text-wood">{step.step}</span>
            <h3 className="mt-3 font-heading text-xl">{step.title}</h3>
            <p className="mt-2 font-sans text-sm font-light leading-relaxed text-taupe">
              {step.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
