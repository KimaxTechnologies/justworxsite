"use client";

import type { CategoryId } from "@/lib/content/categories";
import { categoryFilterOptions } from "@/lib/content/categories";
import { cn } from "@/lib/utils";

type WorkFilterProps = {
  active: CategoryId | "all";
  onChange: (category: CategoryId | "all") => void;
};

export function WorkFilter({ active, onChange }: WorkFilterProps) {
  return (
    <div className="-mx-1 overflow-x-auto pb-2 md:mx-0 md:overflow-visible md:pb-0">
      <div className="flex min-w-max gap-2 px-1 md:min-w-0 md:flex-wrap md:gap-3 md:px-0">
        {categoryFilterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              "label-caps shrink-0 cursor-pointer border px-4 py-2 text-[0.6rem] whitespace-nowrap transition-all duration-300",
              active === option.id
                ? "border-wood bg-wood text-canvas"
                : "border-stone/50 bg-transparent text-taupe hover:border-wood/40 hover:text-espresso",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
