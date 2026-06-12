import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "div";
};

export function SectionShell({
  children,
  className,
  innerClassName,
  as: Tag = "section",
}: SectionShellProps) {
  return (
    <Tag className={cn("relative bg-canvas", className)}>
      <div className={cn("relative", innerClassName)}>{children}</div>
    </Tag>
  );
}
