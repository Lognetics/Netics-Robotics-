import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";
import { site } from "@/lib/site";

export const metadata = {
  title: "Distributor Program",
  description:
    "Become an official NETICS Robotics distributor. Territory rights, premium margins, training, marketing and demo units — partner with Africa's largest robotics company.",
};

const benefits = [
  { title: "Exclusive territory rights", desc: "Protected geographies so your investment in the market is yours to grow." },
  { title: "Premium margins", desc: "Distributor pricing engineered for healthy, sustainable resale economics." },
  { title: "Certified training", desc: "Sales, deployment and service academies — online and on-site." },
  { title: "Marketing engine", desc: "Co-branded campaigns, assets, events and qualified lead routing." },
  { title: "Dedicated support", desc: "A named partner manager plus 24/7 technical and fleet escalation." },
  { title: "Demo units", desc: "Subsidised showroom robots to win deals with live demonstrations." },
  { title: "Priority stock", desc: "Front-of-line allocation and forecasting on the newest platforms." },
  { title: "Co-selling", desc: "Joint pursuits on enterprise and government deals in your region." },
];

const tiers = [
  {
    name: "Authorized",
    tag: "Entry partner",
    accent: "text-silver",
    ring: "border-white/10",
    points: [
      { label: "Resale margin", value: "Standard" },
      { label: "Territory", value: "Shared" },
      { label: "Demo units", value: "1 subsidised" },
      { label: "Training seats", value: "5" },
      { label: "Lead routing", value: "Inbound" },
      { label: "Partner manager", value: "Pooled" },
    ],
  },
  {
    name: "Premier",
    tag: "Most popular",
    accent: "gradient-text",
    ring: "border-cyan/40",
    featured: true,
    points: [
      { label: "Resale margin", value: "Enhanced" },
      { label: "Territory", value: "Protected" },
      { label: "Demo units", value: "3 subsidised" },
      { label: "Training seats", value: "20" },
      { label: "Lead routing", value: "Priority + co-sell" },
      { label: "Partner manager", value: "Named" },
    ],
  },
  {
    name: "Elite",
    tag: "Strategic",
    accent: "text-violet",
    ring: "border-violet/30",
    points: [
      { label: "Resale margin", value: "Maximum" },
      { label: "Territory", value: "Exclusive" },
      { label: "Demo units", value: "Full showroom" },
      { label: "Training seats", value: "Unlimited" },
      { label: "Lead routing", value: "Dedicated pipeline" },
      { label: "Partner manager", value: "Executive + co-marketing fund" },
    ],
  },
];

const steps = [
  { n: "01", title: "Apply", desc: "Tell us about your market, team and ambitions through a short application." },
  { n: "02", title: "Qualify", desc: "A partnership manager reviews fit, territory and target tier with you." },
  { n: "03", title: "Onboard", desc: "Sign the agreement, complete certification and receive your demo units." },
  { n: "04", title: "Launch", desc: "Go live with marketing support, stock allocation and your first deals." },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Distributor Program"
        title={
          <>
            Sell the future. <span className="gradient-text">Own your region.</span>
          </>
        }
        subtitle="Become an official NETICS Robotics distributor and bring AI-powered humanoid, industrial and service robots to your market — backed by training, demo units and a global supply chain."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="#apply">Apply to partner</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Talk to partnerships
          </GlowButton>
        </div>
      </PageHeader>

      {/* Intro */}
      <Section className="py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Why partner"
            title={
              <>
                Build a robotics business on <span className="gradient-text">NETICS</span>
              </>
            }
            subtitle="As Africa's largest robotics company expands worldwide, distributors are how we reach every city, factory and home. We supply the robots, the intelligence and the support — you own the relationships in your territory."
          />
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "48", l: "Countries served" },
                { v: "30–45%", l: "Partner margins" },
                { v: "24/7", l: "Technical support" },
                { v: "18", l: "Robot categories" },
              ].map((s) => (
                <GlassCard key={s.l} hover={false} className="text-center">
                  <div className="gradient-text text-3xl font-semibold sm:text-4xl">{s.v}</div>
                  <div className="mt-2 text-sm text-muted">{s.l}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Benefits grid */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Partner benefits"
          title={
            <>
              Everything you need to <span className="gradient-text">win deals</span>
            </>
          }
          subtitle="A complete go-to-market platform — not just a price list."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.05}>
              <GlassCard className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <span className="text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Partner levels"
          title={
            <>
              Grow from Authorized to <span className="gradient-text">Elite</span>
            </>
          }
          subtitle="Perks scale with commitment and performance. Move up as you grow your NETICS business."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div
                className={`relative h-full overflow-hidden rounded-2xl border ${t.ring} bg-background-2 p-7 transition-all duration-500 hover:-translate-y-1 ${
                  t.featured ? "shadow-[0_24px_70px_-30px_var(--glow-cyan)]" : ""
                }`}
              >
                {t.featured && (
                  <div className="absolute inset-0 -z-10 bg-aurora opacity-30" />
                )}
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl font-semibold ${t.accent}`}>{t.name}</h3>
                  <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.16em] text-silver">
                    {t.tag}
                  </span>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {t.points.map((p) => (
                    <li key={p.label} className="flex items-start justify-between gap-4 border-b border-white/5 pb-3.5 text-sm last:border-0">
                      <span className="text-muted">{p.label}</span>
                      <span className="text-right font-medium text-white">{p.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <GlowButton
                    href="#apply"
                    variant={t.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    Apply as {t.name}
                  </GlowButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Steps timeline */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From application to <span className="gradient-text">first deal</span>
            </>
          }
          subtitle="A clear four-step path to becoming an official NETICS distributor."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <GlassCard className="h-full">
                <div className="gradient-text text-4xl font-semibold">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Application CTA */}
      <Section id="apply" className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-14 sm:px-12">
            <div className="absolute inset-0 bg-radial-glow opacity-70" />
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Apply now"
                  title={
                    <>
                      Ready to represent <span className="gradient-text">NETICS</span>?
                    </>
                  }
                  subtitle="Tell us about your market and we'll match you to the right partner tier. Most applications are reviewed within five business days."
                />
                <ul className="mt-6 space-y-2.5 text-sm text-silver">
                  {["Established business or distribution network", "Local sales & service capability", "Commitment to NETICS certification"].map((req) => (
                    <li key={req} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="text-muted">
                  Start your application or speak directly with our partnerships team at{" "}
                  <a href={`mailto:${site.email}`} className="text-cyan hover:underline">
                    {site.email}
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  <GlowButton href="/contact">Start application</GlowButton>
                  <GlowButton href="/contact" variant="outline">
                    Book a partner call
                  </GlowButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Bring NETICS robots to your market"
        subtitle="Join a worldwide network of partners deploying the future of robotics."
        primary={{ label: "Become a distributor", href: "/contact" }}
        secondary={{ label: "Explore the robots", href: "/robots" }}
      />
    </>
  );
}
