import type { ReactNode } from "react";

import { TactilePanel } from "@/components/ui/TactilePanel";
import type { SurfaceId } from "@/lib/design/surfaces";
import { cn } from "@/lib/utils";

type ChannelPanelProps = {
  children: ReactNode;
  className?: string;
  surface?: SurfaceId;
  as?: "div" | "a";
  href?: string;
  external?: boolean;
};

export function ChannelPanel({
  children,
  className,
  surface = "linen",
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
      <TactilePanel surface={surface} className="absolute inset-0 opacity-60" />
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
