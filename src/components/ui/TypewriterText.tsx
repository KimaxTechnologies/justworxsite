"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
  as?: "h1" | "h2" | "p" | "span";
  triggerOnView?: boolean;
};

export function TypewriterText({
  text,
  className,
  speedMs = 42,
  startDelayMs = 400,
  as: Tag = "h1",
  triggerOnView = false,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const shouldStart = triggerOnView ? isInView : true;
  const [displayed, setDisplayed] = useState(prefersReducedMotion ? text : "");
  const [done, setDone] = useState(Boolean(prefersReducedMotion));

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    if (!shouldStart) {
      setDisplayed("");
      setDone(false);
      return;
    }

    setDisplayed("");
    setDone(false);

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, prefersReducedMotion, shouldStart]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {displayed}
      {!done && displayed.length > 0 && (
        <span
          className="ml-0.5 inline-block w-px animate-pulse bg-espresso/70"
          aria-hidden
        >
          &nbsp;
        </span>
      )}
    </Tag>
  );
}
