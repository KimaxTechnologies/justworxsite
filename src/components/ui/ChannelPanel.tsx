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
    className,
  );

  const inner = (
    <>
      {texture ? (
        <>
          <Image
            src={texture.src}
            alt=""
            fill
            unoptimized
            className={cn("object-cover", texture.position)}
            sizes="(max-width: 768px) 90vw, 40vw"
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
