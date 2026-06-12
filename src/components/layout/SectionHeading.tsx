import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  headline: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  headline,
  description,
  className,
  align = "left",
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
      <h2 className="font-heading text-3xl leading-tight text-balance md:text-4xl lg:text-5xl">
        {headline}
      </h2>
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
