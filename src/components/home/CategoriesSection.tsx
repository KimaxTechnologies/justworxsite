import { MaterialCard } from "@/components/moodboard/MaterialCard";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { categories } from "@/lib/content/categories";
import { homeCopy } from "@/lib/content/copy";

export function CategoriesSection() {
  return (
    <SectionShell className="pt-20 pb-32 md:pt-24 md:pb-40" innerClassName="editorial-container">
      <SectionHeading
        eyebrow={homeCopy.categories.eyebrow}
        headline={homeCopy.categories.headline}
        description={homeCopy.categories.description}
      />

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {categories.map((category, index) => (
          <MaterialCard
            key={category.id}
            category={category}
            index={index}
            className={
              index % 3 === 1 ? "lg:mt-10" : index % 3 === 2 ? "lg:mt-5" : ""
            }
          />
        ))}
      </div>
    </SectionShell>
  );
}
