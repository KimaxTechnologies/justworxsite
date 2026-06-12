import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

import { FloatingInquiryBar } from "@/components/layout/FloatingInquiryBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/lib/config/site";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Custom Laser Engraving & Handcrafted Art`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom laser engraving",
    "handcrafted gifts South Africa",
    "hardwood engraving",
    "personalized gifts",
    "wall art",
    "corporate gifts",
    "Justworx",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Custom Laser Engraving & Handcrafted Art`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full`}
    >
      <body className="relative flex min-h-full flex-col bg-canvas text-espresso antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingInquiryBar />
      </body>
    </html>
  );
}
