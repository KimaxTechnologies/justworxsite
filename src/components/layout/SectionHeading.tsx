"use client";

import { TypewriterText } from "@/components/ui/TypewriterText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  headline: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  animateHeadline?: boolean;
};

const headlineClassName =
  "font-heading text-3xl leading-tight text-balance md:text-4xl lg:text-5xl";

export function SectionHeading({
  eyebrow,
  headline,
  description,
  className,
  align = "left",
  animateHeadline = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        align === "center" && "text-center",
        "mb-12 md:mb-16",
        className,
      )}
    >
      {eyebrow && <p className="label-caps mb-4">{eyebrow}</p>}
      {animateHeadline ? (
        <TypewriterText
          text={headline}
          as="h2"
          className={headlineClassName}
          triggerOnView
          speedMs={72}
          startDelayMs={200}
        />
      ) : (
        <h2 className={headlineClassName}>{headline}</h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-taupe md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
