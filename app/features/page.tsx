import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { FeatureCard } from "@/components/FeatureCard";
import { coreFeatures, additionalFeatures } from "@/lib/features";
import { defaultOgImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — Everything Inside the IPTV Player",
  description:
    "Explore every IPTV Iconic feature: M3U & Xtream playlist support, EPG guide, multi-device compatibility, HD/4K playback, favorites, parental controls and more.",
  alternates: { canonical: "/features" },
  openGraph: {
    url: "/features",
    type: "website",
    title: "Features — Everything Inside the IPTV Player",
    description:
      "Explore every IPTV Iconic feature: M3U & Xtream playlist support, EPG guide, multi-device compatibility, HD/4K playback, favorites, parental controls and more.",
    images: [defaultOgImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Everything Inside the IPTV Player",
    description:
      "Explore every IPTV Iconic feature: M3U & Xtream playlist support, EPG guide, multi-device compatibility, HD/4K playback, favorites, parental controls and more.",
    images: [defaultOgImage().url],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Feature Set"
            title="A Complete IPTV Player Software, Built for Daily Use"
            description="Every plan includes the full feature set below — there are no locked tiers or paywalled features. Just software built to make managing your own playlists genuinely easy."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-ink-soft/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Also included"
            title="Small details that add up"
            description="Beyond the core feature set, these extras make the player easier to live with day to day."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Playlist and EPG formats we support
            </h2>
            <p className="text-sm leading-relaxed text-mist">
              The player accepts standard M3U and M3U8 playlist files or URLs, as well as
              Xtream Codes-style login credentials. For program guide data, connect any XMLTV feed
              or an Xtream-compatible EPG source. These are open, widely used formats — not
              proprietary to us — so you&apos;re free to use any properly licensed source that supports
              them.
            </p>
            <p className="text-sm leading-relaxed text-mist">
              Want help adding a playlist and EPG source? Message our{" "}
              <Link href="/contact" className="text-brand-300 underline underline-offset-2">
                support team
              </Link>{" "}
              for a step-by-step walkthrough.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Compatible devices
            </h2>
            <p className="text-sm leading-relaxed text-mist">
              Install the player on Android and iOS phones and tablets, Windows, macOS, Amazon Fire
              TV, and most Android-based smart TVs and streaming boxes. Configuration and settings
              carry over consistently across every supported platform.
            </p>
            <p className="text-sm leading-relaxed text-mist">
              Message our{" "}
              <Link href="/contact" className="text-brand-300 underline underline-offset-2">
                support team
              </Link>{" "}
              for device-specific setup steps.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 py-16 sm:py-20">
        <Container className="glass-strong flex flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center sm:px-14">
          <h2 className="font-display text-3xl font-semibold text-ice sm:text-4xl">
            See these features in action
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-mist">
            Choose a plan and our team will help you install the player and configure your playlist
            and EPG from the start.
          </p>
          <PrimaryButton href="/pricing">View Pricing Plans</PrimaryButton>
        </Container>
      </section>
    </>
  );
}
