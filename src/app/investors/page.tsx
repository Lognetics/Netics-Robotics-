import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";
import { timeline } from "@/lib/data";

export const metadata = {
  title: "Investors",
  description:
    "Invest in the robotics company building the future from Africa. NETICS Robotics — growth, vision, technology moats and global expansion.",
};

const growth = [
  { value: "+214%", label: "YoY revenue growth", trend: "Trailing 12 months" },
  { value: "11,842", label: "Robots deployed", trend: "+182 this week" },
  { value: "48", label: "Countries served", trend: "+2 this quarter" },
  { value: "99.2%", label: "Fleet uptime", trend: "30-day average" },
];

const moats = [
  { title: "Vertically integrated", desc: "We design the hardware, the AI and the cloud — and manufacture in-house. The full stack is ours." },
  { title: "NETICS Brain & OS", desc: "A unified robotics operating system and on-robot compute that competitors must rebuild from scratch." },
  { title: "Fleet data flywheel", desc: "Every deployed robot makes the whole fleet smarter through NETICS Cloud — a compounding data advantage." },
  { title: "Manufacturing footprint", desc: "African production capacity with global logistics gives us cost and speed advantages at scale." },
  { title: "Distribution network", desc: "Local servicing and partners across 48 countries — a moat that takes years and capital to replicate." },
  { title: "Talent density", desc: "A concentration of world-class robotics and AI engineers, built around a mission people want to join." },
];

const regions = [
  { region: "Africa", detail: "HQ, manufacturing & 14 markets", share: "Core" },
  { region: "Middle East", detail: "Smart-city & security deployments", share: "Growth" },
  { region: "Europe", detail: "Industrial & logistics partners", share: "Growth" },
  { region: "Asia-Pacific", detail: "Service & retail robotics", share: "Expansion" },
  { region: "North America", detail: "Enterprise & developer platform", share: "Expansion" },
  { region: "Latin America", detail: "Agriculture & warehousing", share: "Emerging" },
];

const roadmap = timeline.slice(0, 7);

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investor Relations"
        title={
          <>
            Investing in the <span className="gradient-text">robot economy</span>
          </>
        }
        subtitle="NETICS is building the ecosystem that puts intelligent machines to work in every industry — manufactured in Africa, deployed worldwide. Here's where we're headed."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Request Investor Deck</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Contact IR
          </GlowButton>
        </div>
      </PageHeader>

      {/* Growth stats band */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="Company growth"
          title={
            <>
              Momentum you can <span className="gradient-text">measure</span>
            </>
          }
          subtitle="Compounding deployment, expanding markets and a fleet that gets smarter every day."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {growth.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="text-4xl font-semibold gradient-text">{g.value}</div>
                <div className="mt-2 font-medium">{g.label}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-cyan">{g.trend}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative max-w-3xl">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan">The vision</span>
              <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight sm:text-3xl">
                Robotics will become the infrastructure of the global economy — and we intend to
                build a defining piece of it.
              </h2>
              <p className="mt-5 text-pretty text-muted">
                The convergence of cheaper hardware, capable AI and a labor-constrained world is
                creating one of the largest markets of the century. NETICS is positioned at the
                center: owning the hardware, the intelligence and the cloud, with manufacturing and
                talent advantages that compound over time.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Roadmap (condensed timeline) */}
      <Section className="py-14">
        <SectionHeading
          align="left"
          eyebrow="Roadmap"
          title={
            <>
              The path <span className="gradient-text">ahead</span>
            </>
          }
          subtitle="Our staged plan from launch to autonomous logistics and beyond."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.04}>
              <GlassCard className="h-full">
                <div className="text-sm font-semibold tracking-wide text-cyan">{t.year}</div>
                <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technology moats */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="Defensibility"
          title={
            <>
              Our technology <span className="gradient-text">moats</span>
            </>
          }
          subtitle="The advantages that get harder to challenge as we scale."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moats.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.04}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Global expansion band */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-radial-glow opacity-70" />
            <div className="absolute inset-0 bg-grid opacity-25 animate-grid" />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan">Global expansion</span>
              <h2 className="mt-4 text-balance text-2xl font-semibold sm:text-3xl">
                A footprint built to scale across continents
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                From an African core to deployments on six continents — and accelerating.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {regions.map((r) => (
                  <div
                    key={r.region}
                    className="rounded-2xl glass p-5 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{r.region}</span>
                      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan">
                        {r.share}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Investor relations contact card */}
      <Section className="py-14">
        <Reveal>
          <GlassCard hover={false} className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.18em] text-cyan">Investor relations</span>
            <h2 className="mt-4 text-balance text-2xl font-semibold sm:text-3xl">
              Let's talk about the next chapter
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted">
              For our investor deck, financials or partnership inquiries, reach the NETICS investor
              relations team directly.
            </p>
            <div className="mt-6 flex flex-col items-center gap-1 text-sm">
              <span className="text-silver">investors@netics.ai</span>
              <span className="text-muted">Response within 2 business days</span>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <GlowButton href="/contact">Request Investor Deck</GlowButton>
              <GlowButton href="/contact" variant="outline">
                Schedule a Call
              </GlowButton>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      <CTAStrip
        title="Build the robot economy with us"
        subtitle="Partner with the company manufacturing the world's robots from Africa."
        primary={{ label: "Contact Investor Relations", href: "/contact" }}
        secondary={{ label: "Explore NETICS", href: "/robots" }}
      />
    </>
  );
}
