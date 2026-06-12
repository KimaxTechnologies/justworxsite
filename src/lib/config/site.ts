export const siteConfig = {
  name: "Justworx",
  tagline: "Objects made for the moments that matter",
  description:
    "Premium custom laser engraving and handcrafted artistry in South Africa. Signature gifts, signage, wall art, and one-of-a-kind pieces — never mass-produced.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://justworx.co.za",
  whatsapp: {
    number: "27722730883",
    display: "+27 72 273 0883",
    defaultMessage:
      "Hello Justworx — I'd love to begin a custom piece.",
  },
  social: {
    instagram:
      "https://www.instagram.com/justworx_za?igsh=a250bmF3bTZvOHdl",
    facebook: "https://www.facebook.com/justworxza",
  },
  responseTime: "24–48 hours",
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/craft", label: "Craft" },
  { href: "/inquire", label: "Inquire" },
] as const;

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.whatsapp.defaultMessage,
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
