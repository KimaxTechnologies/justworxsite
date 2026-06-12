import type { Metadata } from "next";

import { InquiryTriad } from "@/components/inquiry/InquiryTriad";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { WorkGrid } from "@/components/portfolio/WorkGrid";
import { SectionShell } from "@/components/ui/SectionShell";
import type { CategoryId } from "@/lib/content/categories";
import { workCopy } from "@/lib/content/copy";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore the Justworx portfolio — custom engraved gifts, signage, wall art, furniture, and signature one-of-a-kind pieces.",
};

type WorkPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const category = params.category as CategoryId | undefined;
  const validCategories: (CategoryId | "all")[] = [
    "gifts",
    "signage",
    "wall-art",
    "light-fittings",
    "furniture",
    "stone",
    "spiritual-decor",
    "seasonal",
    "corporate",
    "all",
  ];
  const initialCategory =
    category && validCategories.includes(category) ? category : "all";

  return (
    <>
      <SectionShell
        className="pt-32 pb-20 md:pt-40 md:pb-28"
        innerClassName="editorial-container"
      >
        <SectionHeading
          eyebrow={workCopy.eyebrow}
          headline={workCopy.headline}
          description={workCopy.description}
        />
        <WorkGrid initialCategory={initialCategory} />
      </SectionShell>

      <SectionShell className="py-28 md:py-36" innerClassName="editorial-container">
        <SectionHeading
          headline="Ready to begin?"
          description="Share your vision on WhatsApp or Instagram — we'll take it from there."
          align="center"
        />
        <InquiryTriad />
      </SectionShell>
    </>
  );
}
