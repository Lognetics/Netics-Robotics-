import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import RobotCard from "@/components/ui/RobotCard";
import RobotViewer from "@/components/three/RobotViewer";
import CTAStrip from "@/components/ui/CTAStrip";
import { robots, categories } from "@/lib/data";

export const metadata = {
  title: "Marketplace",
  description:
    "The NETICS Marketplace — browse, configure and order the most advanced robots on the planet. Humanoids, security, service, industrial, agriculture and home robots, ready to deploy.",
};

const featured = robots.find((r) => r.slug === "atlas-one") ?? robots[0];

const valueProps = [
  {
    title: "Accessories & Modules",
    desc: "Swappable end-effectors, charging docks, sensor packs and fleet hardware to extend every robot.",
  },
  {
    title: "Flexible Financing",
    desc: "Lease, subscribe or buy. Robotics-as-a-Service plans from a monthly fee — scale up without the capex.",
  },
  {
    title: "Warranty & Care",
    desc: "Up to 5-year coverage, on-site servicing in 48 countries and 24/7 remote diagnostics from NETICS Cloud.",
  },
  {
    title: "OTA & Skills",
    desc: "New capabilities ship over the air. Buy skills from the marketplace and your fleet learns overnight.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="NETICS Marketplace"
        title={
          <>
            The store for the <span className="gradient-text">robotic age</span>
          </>
        }
        subtitle="Browse the full NETICS lineup, configure it to your operation and order in minutes. Every robot ships intelligent, connected and ready to work."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/build">Configure a Robot</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Talk to Sales
          </GlowButton>
        </div>
      </PageHeader>

      {/* Featured hero band */}
      <Section className="py-12">
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:p-10 lg:grid-cols-2">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                Featured · {featured.series}
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {featured.name}
              </h2>
              <p className="max-w-md text-pretty text-muted">{featured.tagline}</p>
              <div className="flex flex-wrap items-end gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted">From</div>
                  <div className="text-2xl font-semibold text-white">
                    ${featured.priceFrom.toLocaleString()}
                  </div>
                </div>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-cyan">
                  {featured.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <GlowButton href={`/robots/${featured.slug}`}>View Robot</GlowButton>
                <GlowButton href="/build" variant="outline">
                  Add to Quote
                </GlowButton>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl glass-strong">
                <RobotViewer accent={featured.accent} className="h-[360px]" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Full lineup grid */}
      <Section className="py-16" id="lineup">
        <SectionHeading
          eyebrow="The Lineup"
          title={
            <>
              Every robot, <span className="gradient-text">ready to deploy</span>
            </>
          }
          subtitle="Six flagship platforms today, with new models landing every quarter. Each one runs NETICS Brain and connects to NETICS Cloud out of the box."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {robots.map((robot, i) => (
            <Reveal key={robot.slug} delay={(i % 3) * 0.06}>
              <RobotCard robot={robot} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Browse by category */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Browse by Category"
          title={
            <>
              Find the robot for <span className="gradient-text">your industry</span>
            </>
          }
          subtitle="From hospital corridors to factory floors and open fields — explore the lineup by where it goes to work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 3) * 0.05}>
              <Link href={`/robots?category=${cat.slug}`} className="block h-full">
                <GlassCard className="flex h-full flex-col gap-3">
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                  <p className="text-sm text-muted">{cat.blurb}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-sm text-cyan transition-transform group-hover:translate-x-0.5">
                    Explore {cat.title.replace(" Robots", "")} →
                  </span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Value strip */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="More Than Hardware"
          title={
            <>
              Built to <span className="gradient-text">keep running</span>
            </>
          }
          subtitle="Accessories, financing, warranty and a skill marketplace — everything you need to deploy and grow a fleet."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.05}>
              <GlassCard className="flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold text-white">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Compare callout */}
      <Section className="py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-8 sm:p-12">
            <div className="absolute inset-0 bg-radial-glow opacity-60" />
            <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Not sure which robot fits?
                </h3>
                <p className="mt-3 text-pretty text-muted">
                  Compare specs, payloads and runtimes side by side — or let our team spec the
                  perfect deployment for your operation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <GlowButton href="/robots">Compare Robots</GlowButton>
                <GlowButton href="/contact" variant="outline">
                  Book a Demo
                </GlowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Your fleet starts here"
        subtitle="Configure, order and deploy the world's most advanced robots — engineered in Africa, shipping worldwide."
        primary={{ label: "Build Your Robot", href: "/build" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
