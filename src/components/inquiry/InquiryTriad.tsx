"use client";

import { MessageCircle } from "lucide-react";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { ChannelPanel } from "@/components/ui/ChannelPanel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getWhatsAppUrl, siteConfig } from "@/lib/config/site";
import { inquireCopy } from "@/lib/content/copy";
import { cn } from "@/lib/utils";

type InquiryTriadProps = {
  className?: string;
  activeChannel?: "whatsapp" | "instagram";
};

const channels = [
  {
    id: "whatsapp" as const,
    icon: MessageCircle,
    surface: "sand" as const,
    title: inquireCopy.channels.whatsapp.title,
    description: inquireCopy.channels.whatsapp.description,
    href: getWhatsAppUrl(),
    external: true,
    cta: inquireCopy.channels.whatsapp.cta,
  },
  {
    id: "instagram" as const,
    icon: InstagramIcon,
    surface: "ceramic" as const,
    title: inquireCopy.channels.instagram.title,
    description: inquireCopy.channels.instagram.description,
    href: siteConfig.social.instagram,
    external: true,
    cta: inquireCopy.channels.instagram.cta,
  },
];

export function InquiryTriad({ className, activeChannel }: InquiryTriadProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "mx-auto grid max-w-3xl gap-5 md:grid-cols-2 md:gap-8",
          className,
        )}
      >
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isActive = activeChannel === channel.id;

          return (
            <ChannelPanel
              key={channel.id}
              as="a"
              href={channel.href}
              external={channel.external}
              surface={channel.surface}
              className={cn(
                "flex min-h-[220px] flex-col justify-between p-8 md:min-h-[260px] md:p-10",
                isActive && "border-stone/30",
              )}
            >
              <div>
                <Icon className="mb-5 size-5 text-wood" />
                <h3 className="font-heading text-2xl md:text-3xl">
                  {channel.title}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-taupe md:text-base">
                  {channel.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-wood transition-all group-hover:gap-3">
                {channel.cta}
                <span aria-hidden>→</span>
              </span>
            </ChannelPanel>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
