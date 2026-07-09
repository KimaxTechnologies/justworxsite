import type { Metadata } from "next";

import { MaterialsPalette } from "@/components/craft/MaterialsPalette";
import { ProcessTimeline } from "@/components/craft/ProcessTimeline";
import { InquiryTriad } from "@/components/inquiry/InquiryTriad";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { craftCopy } from "@/lib/content/copy";

export const metadata: Metadata = {
  title: "Craft",
  description:
    "Discover the Justworx story — South African handcrafted artistry, sustainable materials, and a meticulous four-step process.",
};

export default function CraftPage() {
  return (
    <>
      <SectionShell
        className="pt-28 pb-16 md:pt-40 md:pb-28"
        innerClassName="editorial-container"
      >
        <SectionHeading
          eyebrow={craftCopy.eyebrow}
          headline={craftCopy.headline}
        />
        <div className="editorial-narrow space-y-7 px-0">
          {craftCopy.story.map((paragraph) => (
            <ScrollReveal key={paragraph.slice(0, 24)}>
              <p className="font-sans text-base font-light leading-relaxed text-taupe md:text-lg">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="py-20 md:py-36" innerClassName="editorial-container">
        <SectionHeading
          eyebrow="Process"
          headline="From vision to heirloom"
          description="Every piece follows the same careful journey — tailored to your story."
        />
        <ProcessTimeline />
      </SectionShell>

      <SectionShell className="py-20 md:py-36" innerClassName="editorial-container">
        <SectionHeading
          eyebrow="Materials"
          headline="Textures we trust"
          description="Hardwood, stone, metal, and perspex — chosen for beauty and longevity."
        />
        <MaterialsPalette />
        <ScrollReveal className="mt-12 border-t border-stone/20 pt-8">
          <p className="editorial-narrow px-0 font-sans text-sm font-light italic text-taupe">
            {craftCopy.sustainability}
          </p>
        </ScrollReveal>
      </SectionShell>

      <SectionShell className="py-20 md:py-36" innerClassName="editorial-container">
        <SectionHeading
          headline="Ready to begin?"
          description="Share your vision on WhatsApp or Instagram."
          align="center"
        />
        <InquiryTriad />
      </SectionShell>
    </>
  );
}
