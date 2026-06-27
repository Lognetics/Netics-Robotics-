import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import RobotCard from "@/components/ui/RobotCard";
import RobotViewer from "@/components/three/RobotViewer";
import CTAStrip from "@/components/ui/CTAStrip";
import { robots } from "@/lib/data";

export function generateStaticParams() {
  return robots.map((robot) => ({ slug: robot.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const robot = robots.find((r) => r.slug === slug);
  if (!robot) return { title: "Robot Not Found" };
  return {
    title: robot.name,
    description: `${robot.tagline} — ${robot.series} series from NETICS Robotics. From $${robot.priceFrom.toLocaleString()}.`,
  };
}

const infoRow = [
  {
    title: "AI Features",
    desc: "Runs NETICS Brain on-device — vision, voice and predictive intelligence with cloud-synced memory.",
  },
  {
    title: "Downloads",
    desc: "Datasheets, CAD models, integration guides and the NETICS OS SDK, free to your team.",
  },
  {
    title: "Warranty",
    desc: "Up to 5-year coverage with on-site servicing in 48 countries and 24/7 remote diagnostics.",
  },
  {
    title: "Financing",
    desc: "Buy, lease or subscribe with Robotics-as-a-Service plans tailored to your deployment.",
  },
];

export default async function RobotDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const robot = robots.find((r) => r.slug === slug);
  if (!robot) notFound();

  const related = robots.filter((r) => r.slug !== robot.slug).slice(0, 3);

  return (
    <>
      {/* Hero / overview */}
      <Section className="pt-36 pb-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Left: 3D stage */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-4">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(60% 60% at 50% 35%, ${robot.accent}22, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute left-6 top-6 z-10 flex gap-2">
                <span className="rounded-full glass px-3 py-1 text-[11px] text-silver">
                  {robot.series} Series
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-cyan">
                  {robot.status}
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <RobotViewer accent={robot.accent} className="h-[520px]" />
              </div>
            </div>
          </Reveal>

          {/* Right: details */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                  NETICS · {robot.category}
                </span>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  {robot.name}
                </h1>
                <p className="mt-4 max-w-md text-pretty text-lg text-muted">{robot.tagline}</p>
              </div>

              <div className="flex flex-wrap items-end gap-6 border-y border-white/5 py-5">
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted">From</div>
                  <div className="text-3xl font-semibold text-white">
                    ${robot.priceFrom.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-muted">Availability</div>
                  <div className="text-lg font-medium text-cyan">{robot.status}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <GlowButton href="/build">Add to Quote</GlowButton>
                <GlowButton href="/contact" variant="outline">
                  Book a Demo
                </GlowButton>
                <GlowButton href="/marketplace" variant="ghost">
                  Buy Now
                </GlowButton>
              </div>

              <p className="text-sm text-muted">
                Ships with NETICS OS, Cloud connectivity and a 5-year support plan. Configure
                payloads, modules and fleet options at checkout.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Specs grid */}
      <Section className="py-12">
        <SectionHeading
          align="left"
          eyebrow="Technical Specs"
          title={
            <>
              Engineered to <span className="gradient-text">perform</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {robot.specs.map((spec, i) => (
            <Reveal key={spec.label} delay={(i % 3) * 0.05}>
              <GlassCard hover={false} className="flex flex-col gap-1">
                <div className="text-xs uppercase tracking-wide text-muted">{spec.label}</div>
                <div className="text-xl font-semibold text-white">{spec.value}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Features grid */}
      <Section className="py-12">
        <SectionHeading
          align="left"
          eyebrow="Capabilities"
          title={
            <>
              What it does <span className="gradient-text">out of the box</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {robot.features.map((feature, i) => (
            <Reveal key={feature} delay={(i % 3) * 0.05}>
              <div className="flex items-start gap-3 rounded-2xl glass p-5">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: robot.accent, boxShadow: `0 0 16px ${robot.accent}` }}
                />
                <span className="text-sm text-silver">{feature}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Info row */}
      <Section className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoRow.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <GlassCard className="flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related robots */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Related Robots"
          title={
            <>
              Explore the <span className="gradient-text">rest of the fleet</span>
            </>
          }
          subtitle="Build a complete robotic operation across security, service, industrial and beyond."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 0.06}>
              <RobotCard robot={r} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title={`Deploy ${robot.name}`}
        subtitle="Configure it for your operation, book a live demo, or order today with full warranty and support."
        primary={{ label: "Add to Quote", href: "/build" }}
        secondary={{ label: "Book a Demo", href: "/contact" }}
      />
    </>
  );
}
