import type { Metadata } from "next";

import { InquiryTriad } from "@/components/inquiry/InquiryTriad";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { siteConfig } from "@/lib/config/site";
import { inquireCopy } from "@/lib/content/copy";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Connect with Justworx on WhatsApp or Instagram — custom engraved gifts, signage, wall art, and handcrafted pieces made in South Africa.",
};

export default function InquirePage() {
  return (
    <SectionShell
      className="flex min-h-[80svh] flex-col justify-center pt-28 pb-20 md:pt-40 md:pb-36"
      innerClassName="editorial-container"
    >
      <SectionHeading
        eyebrow={inquireCopy.eyebrow}
        headline={inquireCopy.headline}
        description={inquireCopy.description}
        align="center"
        className="mb-4 md:mb-6"
      />

      <InquiryTriad />

      <p className="mx-auto mt-14 max-w-md text-center font-sans text-xs font-light leading-relaxed text-taupe md:text-sm">
        {inquireCopy.footnote.replace("{time}", siteConfig.responseTime)}
      </p>
    </SectionShell>
  );
}
