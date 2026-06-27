import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Research, engineering and ideas from inside NETICS Robotics — the people building the world's robots from Africa.",
};

const [featured, ...rest] = blogPosts;
const tags = Array.from(new Set(blogPosts.map((p) => p.tag)));

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & Insights"
        title={
          <>
            Notes from the <span className="gradient-text">frontier</span>
          </>
        }
        subtitle="Research, engineering deep-dives and ideas from the team building intelligent machines for the real world."
      />

      {/* Featured hero */}
      <Section className="py-10">
        <Reveal>
          <a
            href={`/blog/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-8 transition-all duration-500 hover:border-cyan/30 sm:p-12"
          >
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-cyan">
                <span className="rounded-full bg-cyan/10 px-3 py-1">Featured</span>
                <span>{featured.tag}</span>
                <span className="text-muted">· {featured.read} read</span>
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-pretty text-muted">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-cyan transition-transform duration-300 group-hover:translate-x-1">
                Read the story →
              </span>
            </div>
          </a>
        </Reveal>
      </Section>

      {/* Tag filter row (static chips) */}
      <Section className="py-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-cyan to-electric px-4 py-2 text-sm font-medium text-[#001016]">
              All
            </span>
            {tags.map((t) => (
              <span
                key={t}
                className="cursor-default rounded-full glass px-4 py-2 text-sm text-silver transition-colors duration-300 hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Grid of remaining posts */}
      <Section className="py-10">
        <SectionHeading
          align="left"
          eyebrow="Latest"
          title={
            <>
              Fresh from the <span className="gradient-text">lab</span>
            </>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <a href={`/blog/${post.slug}`} className="block h-full">
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-cyan">
                    <span className="rounded-full bg-cyan/10 px-2.5 py-1">{post.tag}</span>
                    <span className="text-muted">· {post.read}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan transition-transform duration-300 group-hover:translate-x-1">
                    Read →
                  </span>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Newsletter band (static markup) */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 text-center sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-60" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
                Get the next dispatch
              </h2>
              <p className="mt-2 text-muted">
                Research, releases and robotics ideas — straight to your inbox, no noise.
              </p>
              <form className="mt-7 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full glass px-5 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
                />
                <GlowButton href="/contact">Subscribe</GlowButton>
              </form>
              <p className="mt-3 text-xs text-muted">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Want to build the future with us?"
        subtitle="Explore our robots or talk to the team behind the research."
        primary={{ label: "See the Robots", href: "/robots" }}
        secondary={{ label: "Join the Team", href: "/careers" }}
      />
    </>
  );
}
