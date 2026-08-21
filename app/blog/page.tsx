import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, SecondaryButton, SectionHeading } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog";
import { defaultOgImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
  description:
    "In-depth guides for IPTV buyers from the IPTV Iconic team — covering encoders, playlists, EPG, provider evaluation and device compatibility. New guides coming soon.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    type: "website",
    title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
    description:
      "In-depth guides for IPTV buyers from the IPTV Iconic team — covering encoders, playlists, EPG, provider evaluation and device compatibility. New guides coming soon.",
    images: [defaultOgImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
    description:
      "In-depth guides for IPTV buyers from the IPTV Iconic team — covering encoders, playlists, EPG, provider evaluation and device compatibility. New guides coming soon.",
    images: [defaultOgImage().url],
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="IPTV Guides & Streaming Tips"
            description="Practical, legitimate guides for getting the most out of your IPTV player — from playlist setup to performance and legal use."
          />
          {sorted.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((post, index) => (
                <BlogCard key={post.slug} post={post} priority={index < 3} />
              ))}
            </div>
          ) : (
            <GlassCard className="flex flex-col items-center gap-4 py-14 text-center">
              <h2 className="font-display text-xl font-semibold text-ice">No articles yet</h2>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                We&apos;re preparing new IPTV Iconic guides and resources. Check back soon.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <SecondaryButton href="/features">Explore Features</SecondaryButton>
                <SecondaryButton href="/contact">Get Setup Help</SecondaryButton>
              </div>
            </GlassCard>
          )}
        </Container>
      </section>
    </>
  );
}
