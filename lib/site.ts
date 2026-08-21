export const siteConfig = {
  name: "IPTV Iconic",
  shortName: "IPTV Iconic",
  domain: "iptviconic.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://iptviconic.com",
  tagline: "Premium TV streaming experience",
  description:
    "IPTV Iconic offers premium IPTV player software with M3U playlist support, EPG guides, multi-device compatibility and dedicated setup support. Software only — bring your own legally licensed content.",
  locale: "en_US",
  contact: {
    whatsappNumber: "+447576599069",
    whatsappHref: "https://wa.me/447576599069",
    telegramHref: "https://t.me/pulseiptv4k",
  },
  social: {
    // Reserved for future profile links.
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function absoluteUrl(path: string) {
  const url = new URL(path, siteConfig.url);
  return url.toString();
}

export type OgImage = { url: string; width: number; height: number; alt: string };

/**
 * Default OG/Twitter share image for pages that don't have a more specific
 * one of their own. A page-level `openGraph`/`twitter` object replaces the
 * root layout's inherited image wholesale (Next.js merges metadata shallowly
 * per top-level key), so any page defining its own openGraph/twitter object
 * must include an explicit image or it silently loses the share image.
 */
export function defaultOgImage(): OgImage {
  return {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — ${siteConfig.tagline}`,
  };
}
