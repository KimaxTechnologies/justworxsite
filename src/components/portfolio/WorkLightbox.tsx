"use client";

import { TactilePanel } from "@/components/ui/TactilePanel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { resolveSurface } from "@/lib/design/surfaces";
import type { WorkItem } from "@/lib/content/portfolio";

type WorkLightboxProps = {
  item: WorkItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function WorkLightbox({ item, open, onOpenChange }: WorkLightboxProps) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-stone/25 bg-canvas p-0">
        <TactilePanel
          surface={resolveSurface(undefined, item.accent, item.texture)}
          className="aspect-[4/3] w-full"
        />
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              {item.title}
            </DialogTitle>
            <DialogDescription className="font-sans text-sm leading-relaxed text-taupe">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-taupe">
            {item.materials.join(" · ")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
