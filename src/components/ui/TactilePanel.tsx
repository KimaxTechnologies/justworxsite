import type { SurfaceId } from "@/lib/design/surfaces";
import { cn } from "@/lib/utils";

type TactilePanelProps = {
  surface?: SurfaceId;
  className?: string;
  tornEdge?: boolean;
  children?: React.ReactNode;
};

export function TactilePanel({
  surface = "linen",
  className,
  tornEdge = false,
  children,
}: TactilePanelProps) {
  return (
    <div
      className={cn(
        "surface-panel relative overflow-hidden",
        `surface-${surface}`,
        className,
      )}
    >
      <div className="surface-grain pointer-events-none absolute inset-0" aria-hidden />
      {tornEdge && (
        <>
          <div
            className="absolute -right-px top-6 z-10 h-14 w-1.5 bg-canvas/90"
            style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
            aria-hidden
          />
          <div
            className="absolute bottom-6 left-4 z-10 h-2 w-10 bg-linen/70"
            style={{ clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)" }}
            aria-hidden
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-2 border border-stone/12" aria-hidden />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
