import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { robots } from "@/lib/data";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import RobotCard from "@/components/ui/RobotCard";
import CTAStrip from "@/components/ui/CTAStrip";
import Gallery from "@/components/product/Gallery";
import AddToCart from "@/components/cart/AddToCart";

export function generateStaticParams() {
  return robots.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const robot = robots.find((r) => r.slug === slug);
  if (!robot) return { title: "Robot not found" };
  return { title: robot.name, description: robot.tagline };
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-cyan">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < Math.round(rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const robot = robots.find((r) => r.slug === slug);
  if (!robot) notFound();

  const related = robots.filter((r) => r.slug !== robot.slug && r.series === robot.series).slice(0, 3);
  const fallback = robots.filter((r) => r.slug !== robot.slug).slice(0, 3);
  const recommend = related.length ? related : fallback;

  return (
    <div className="pt-[var(--nav-h)]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 text-sm text-muted sm:px-8">
        <Link href="/robots" className="hover:text-cyan">Store</Link>
        <span className="px-2">/</span>
        <Link href={`/robots?category=${robot.series}`} className="hover:text-cyan">{robot.series}</Link>
        <span className="px-2">/</span>
        <span className="text-silver">{robot.name}</span>
      </div>

      {/* Product hero */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2">
        <Gallery images={robot.gallery} name={robot.name} />

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-cyan">{robot.series}</span>
            {robot.badge && (
              <span className="rounded-full bg-gradient-to-r from-electric to-cyan px-3 py-1 text-xs font-semibold text-[#001016]">{robot.badge}</span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{robot.name}</h1>
          <p className="mt-2 text-lg text-muted">{robot.tagline}</p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={robot.rating} />
            <span className="text-sm text-silver">{robot.rating.toFixed(1)}</span>
            <span className="text-sm text-muted">· {robot.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <div className="text-3xl font-semibold text-white">${robot.price.toLocaleString()}</div>
            <div className="pb-1 text-sm text-muted">or from ${Math.round(robot.price / 36).toLocaleString()}/mo financing</div>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <span className={`h-2 w-2 rounded-full ${robot.status === "Available" ? "bg-green-400" : "bg-amber-400"}`} />
            <span className="text-silver">{robot.status === "Available" ? "In stock · ships in 2–4 weeks" : `${robot.status} · reserve your unit`}</span>
          </div>

          {/* Highlights */}
          <ul className="mt-6 grid gap-2">
            {robot.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-silver">
                <span className="mt-0.5 text-cyan">✓</span> {h}
              </li>
            ))}
          </ul>

          {/* Buy box */}
          <div className="mt-8 rounded-2xl glass p-5">
            <AddToCart robot={robot} showQty />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <GlowButton href="/contact" variant="outline" className="w-full">Request a Quote</GlowButton>
              <GlowButton href="/contact" variant="ghost" className="w-full">Book a Demo</GlowButton>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-center text-[11px] text-muted">
              <span>🚚 Worldwide delivery</span>
              <span>🛡️ 2-yr warranty</span>
              <span>💳 0% financing</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {robot.features.map((f) => (
              <span key={f} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-silver">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted">
              {robot.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan">What&apos;s in the box</h3>
              <ul className="mt-4 space-y-2.5">
                {robot.whatsInBox.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-silver">
                    <span className="mt-0.5 text-cyan">▪</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Functionality */}
      <Section className="py-12">
        <SectionHeading
          align="left"
          eyebrow="What it does"
          title={<>Built-in <span className="gradient-text">functionality</span></>}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {robot.functionality.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl glass p-6">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-cyan/30 text-cyan ring-1 ring-white/10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Specs */}
      <Section className="py-12">
        <SectionHeading align="left" eyebrow="Tech specs" title={<>Specifications</>} />
        <div className="mt-8 overflow-hidden rounded-2xl glass">
          <dl className="grid sm:grid-cols-2">
            {robot.specs.map((s, i) => (
              <div key={s.label} className={`flex items-center justify-between gap-4 border-b border-white/5 px-6 py-4 ${i % 2 ? "sm:bg-white/[0.015]" : ""}`}>
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="text-sm font-medium text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Use cases */}
      <Section className="py-12">
        <SectionHeading align="left" eyebrow="Where it works" title={<>Ideal <span className="gradient-text">use cases</span></>} />
        <div className="mt-8 flex flex-wrap gap-3">
          {robot.useCases.map((u) => (
            <span key={u} className="rounded-2xl glass px-5 py-3 text-sm text-silver">{u}</span>
          ))}
        </div>
      </Section>

      {/* Related */}
      <Section className="py-12">
        <SectionHeading align="left" eyebrow="You may also like" title={<>Related robots</>} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recommend.map((r) => (
            <RobotCard key={r.slug} robot={r} />
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Not sure which robot fits?"
        subtitle="Talk to our team for a tailored recommendation, quote and financing options."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Browse the Store", href: "/robots" }}
      />
    </div>
  );
}
