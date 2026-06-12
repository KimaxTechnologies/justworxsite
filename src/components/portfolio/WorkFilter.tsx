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
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categoryFilterOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={cn(
            "label-caps cursor-pointer border px-4 py-2 text-[0.6rem] transition-all duration-300",
            active === option.id
              ? "border-wood bg-wood text-canvas"
              : "border-stone/50 bg-transparent text-taupe hover:border-wood/40 hover:text-espresso",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
