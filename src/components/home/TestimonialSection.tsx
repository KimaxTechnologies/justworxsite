import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeCopy } from "@/lib/content/copy";

export function TestimonialSection() {
  return (
    <SectionShell className="py-28 md:py-36" innerClassName="editorial-container-wide">
      <ScrollReveal>
        <blockquote className="editorial-narrow text-center">
          <p className="font-heading text-2xl leading-relaxed text-espresso md:text-3xl md:leading-relaxed">
            &ldquo;{homeCopy.testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8 font-sans text-sm text-taupe">
            — {homeCopy.testimonial.attribution}
          </footer>
        </blockquote>
      </ScrollReveal>
    </SectionShell>
  );
}
