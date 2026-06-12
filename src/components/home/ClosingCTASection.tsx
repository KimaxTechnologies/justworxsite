import { InquiryTriad } from "@/components/inquiry/InquiryTriad";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeCopy } from "@/lib/content/copy";

export function ClosingCTASection() {
  return (
    <SectionShell className="py-28 md:py-36" innerClassName="editorial-container">
      <SectionHeading
        headline={homeCopy.closingCta.headline}
        description={homeCopy.closingCta.description}
        align="center"
      />
      <InquiryTriad />
    </SectionShell>
  );
}
