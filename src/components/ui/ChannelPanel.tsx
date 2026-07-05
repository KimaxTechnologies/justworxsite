import Image from "next/image";
import type { ReactNode } from "react";

import { TactilePanel } from "@/components/ui/TactilePanel";
import type { SurfaceId } from "@/lib/design/surfaces";
import { cn } from "@/lib/utils";

type ChannelPanelProps = {
  children: ReactNode;
  className?: string;
  surface?: SurfaceId;
  texture?: {
    src: string;
    position: string;
    scale?: number;
  };
  as?: "div" | "a";
  href?: string;
  external?: boolean;
};

export function ChannelPanel({
  children,
  className,
  surface = "linen",
  texture,
  as: Tag = "div",
  href,
  external,
}: ChannelPanelProps) {
  const panelClass = cn(
    "panel-raised moodboard-frame group relative block overflow-hidden bg-canvas",
    texture &&
      "shadow-[2px_8px_24px_color-mix(in_srgb,var(--espresso)_6%,transparent)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[4px_14px_34px_color-mix(in_srgb,var(--espresso)_11%,transparent)]",
    className,
  );

  const inner = (
    <>
      {texture ? (
        <>
          <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <Image
              src={texture.src}
              alt=""
              fill
              unoptimized
              className={cn("object-cover", texture.position)}
              style={{
                transform: `scale(${texture.scale ?? 1})`,
                transformOrigin: "58% 12%",
              }}
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas/88 via-canvas/68 to-canvas/30"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-2 border border-stone/12"
            aria-hidden
          />
        </>
      ) : (
        <TactilePanel surface={surface} className="absolute inset-0 opacity-60" />
      )}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </>
  );

  if (Tag === "a" && href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={panelClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={panelClass}>{inner}</div>;
}
