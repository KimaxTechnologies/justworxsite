import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TactilePanel } from "@/components/ui/TactilePanel";
import { craftCopy } from "@/lib/content/copy";
import { resolveSurface } from "@/lib/design/surfaces";

const materialAccents = ["sand", "stone", "plaster", "linen"];

export function MaterialsPalette() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
      {craftCopy.materials.map((material, index) => (
        <ScrollReveal key={material.name} delay={index * 0.08}>
          <div className="moodboard-frame overflow-hidden bg-canvas">
            <TactilePanel
              surface={resolveSurface(
                undefined,
                materialAccents[index],
                material.texture,
              )}
              className="h-28"
            />
            <div className="border-t border-stone/15 px-6 py-6 md:px-8 md:py-7">
              <h3 className="font-heading text-xl">{material.name}</h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-taupe">
                {material.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
