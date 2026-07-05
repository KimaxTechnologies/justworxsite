import Link from "next/link";

import { getWhatsAppUrl, navLinks, siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/20 bg-linen/50">
      <div className="editorial-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl text-espresso transition-opacity hover:opacity-70"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm font-light leading-relaxed text-taupe">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="label-caps mb-4">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-espresso transition-colors hover:text-wood"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps mb-4">Connect</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso transition-colors hover:text-wood"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso transition-colors hover:text-wood"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso transition-colors hover:text-wood"
                >
                  WhatsApp {siteConfig.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone/20 pt-8 md:flex-row md:items-center">
          <p className="font-sans text-xs text-taupe">
            © {year} {siteConfig.name}. Crafted in South Africa.
          </p>
          <p className="font-sans text-xs text-taupe">
            Signature pieces · Never seen before
          </p>
        </div>
      </div>
    </footer>
  );
}
