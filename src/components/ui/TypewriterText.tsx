"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function TypewriterText({
  text,
  className,
  speedMs = 42,
  startDelayMs = 400,
  as: Tag = "h1",
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(prefersReducedMotion ? text : "");
  const [done, setDone] = useState(Boolean(prefersReducedMotion));

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
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
  }, [text, speedMs, startDelayMs, prefersReducedMotion]);

  return (
    <Tag className={cn(className)}>
      {displayed}
      {!done && (
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
