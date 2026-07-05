import { CuratedFeed } from "@/components/social/CuratedFeed";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { homeCopy } from "@/lib/content/copy";
import { siteConfig } from "@/lib/config/site";

export function SocialSection() {
  return (
    <SectionShell className="py-28 md:py-36" innerClassName="editorial-container-wide">
      <SectionHeading
        eyebrow={homeCopy.social.eyebrow}
        headline={homeCopy.social.headline}
        description={homeCopy.social.description}
        animateHeadline
      />

      <CuratedFeed />

      <p className="mt-10 text-center">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps text-[0.65rem] text-taupe transition-colors hover:text-wood"
        >
          @justworx_za on Instagram →
        </a>
      </p>
    </SectionShell>
  );
}
