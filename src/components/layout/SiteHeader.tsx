"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-warm border-b border-border/40 py-3"
          : isHome
            ? "border-b border-stone/10 bg-[#dad0c9] py-5 md:py-6"
            : "bg-canvas/55 py-5 backdrop-blur-md md:py-6",
      )}
    >
      <div className="editorial-container flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl tracking-wide text-espresso transition-opacity hover:opacity-70 md:text-2xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "label-caps text-[0.65rem] transition-colors hover:text-wood",
                pathname === link.href ? "text-wood" : "text-taupe",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/inquire"
            className="hidden h-9 items-center border border-stone/30 bg-canvas/60 px-4 font-sans text-xs font-medium uppercase tracking-[0.15em] text-espresso transition-colors hover:bg-linen/60 md:inline-flex"
          >
            Inquire
          </Link>

          <Sheet>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-lg text-espresso transition-colors hover:bg-linen/50 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-stone/30 bg-canvas">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-xl">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-heading text-2xl transition-colors hover:text-wood",
                      pathname === link.href ? "text-wood" : "text-espresso",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
