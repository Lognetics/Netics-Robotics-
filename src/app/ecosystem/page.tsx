import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";
import { ecosystem } from "@/lib/data";

export const metadata = {
  title: "The NETICS AI Ecosystem",
  description:
    "One connected intelligence fabric — AI, robotics, cloud, vision, voice, brain and OS — unified into a single programmable platform for autonomous machines.",
};

const flow = [
  { name: "AI", hint: "The intelligence core" },
  { name: "Robotics", hint: "The bodies" },
  { name: "Cloud", hint: "Fleet & telemetry" },
  { name: "Vision", hint: "Perception" },
  { name: "Voice", hint: "Conversation" },
  { name: "Brain", hint: "On-robot compute" },
  { name: "OS", hint: "The connective tissue" },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="One Connected Intelligence"
        title={
          <>
            The NETICS <span className="gradient-text">AI Ecosystem</span>
          </>
        }
        subtitle="Seventeen products. One fabric. Every robot, cloud and surface runs on a shared intelligence — so capability learned anywhere becomes capability everywhere."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Talk to the Platform Team</GlowButton>
          <GlowButton href="/future" variant="outline">
            See the Roadmap
          </GlowButton>
        </div>
      </PageHeader>

      {/* Intro: connected intelligence fabric */}
      <Section className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-60" />
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan">
                  The fabric
                </span>
                <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Not a product line — a{" "}
                  <span className="gradient-text">single nervous system</span> for machines.
                </h2>
                <p className="text-pretty leading-relaxed text-muted">
                  Most robotics companies ship isolated boxes. NETICS ships a connected ecosystem: the
                  same intelligence that sees through NETICS Vision speaks through NETICS Voice, reasons
                  in NETICS Brain, coordinates through NETICS Cloud, and ships to your fleet over NETICS
                  OS. Every node is independently useful and exponentially more powerful together.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["AI", "Robotics", "Cloud", "Vision", "Voice", "Brain"].map((n, i) => (
                  <Reveal key={n} delay={0.04 * i}>
                    <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl glass text-center">
                      <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
                      <span className="text-sm font-medium text-silver">{n}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* The connected web of nodes */}
      <Section className="py-10">
        <SectionHeading
          eyebrow="17 Connected Nodes"
          title={
            <>
              The complete <span className="gradient-text">NETICS stack</span>
            </>
          }
          subtitle="From the intelligence core to the marketplace — every layer of the autonomous machine economy, built and owned end to end."
        />

        <div className="relative mt-14">
          {/* connective glow lines behind the grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-40"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ecosystem.map((node, i) => (
              <Reveal key={node.name} delay={0.02 * (i % 4)} y={22}>
                <GlassCard className="h-full">
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3 items-center justify-center">
                        <span className="absolute h-3 w-3 rounded-full bg-cyan/30 animate-ping" />
                        <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_14px_2px_var(--glow-cyan)]" />
                      </span>
                      <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                        Node {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-cyan">
                      {node.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{node.desc}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How it connects flow band */}
      <Section className="py-16">
        <SectionHeading
          align="left"
          eyebrow="How it connects"
          title={
            <>
              Signal flows through the <span className="gradient-text">whole stack</span>
            </>
          }
          subtitle="One request — see, understand, decide, act — travels every layer in milliseconds."
        />
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:p-10">
            <div className="absolute inset-0" />
            <div className="flex flex-wrap items-stretch gap-3">
              {flow.map((step, i) => (
                <div key={step.name} className="flex items-stretch gap-3">
                  <div className="flex min-w-[7.5rem] flex-col justify-center gap-1 rounded-2xl glass px-5 py-4 text-center">
                    <span className="text-base font-semibold tracking-tight text-white">
                      {step.name}
                    </span>
                    <span className="text-[0.7rem] leading-tight text-muted">{step.hint}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <span
                      aria-hidden
                      className="flex items-center text-xl text-cyan/70"
                    >
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-muted">
              A camera frame enters <span className="text-silver">NETICS Vision</span>, is reasoned over
              in <span className="text-silver">NETICS Brain</span>, voiced through{" "}
              <span className="text-silver">NETICS Voice</span>, logged to{" "}
              <span className="text-silver">NETICS Cloud</span>, and orchestrated across the fleet by{" "}
              <span className="text-silver">NETICS OS</span> — all on one shared intelligence.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Developer platform / API callout */}
      <Section className="py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-background-2 px-6 py-14 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-70" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan">
                  Build on NETICS
                </span>
                <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  One <span className="gradient-text">API</span> for the entire autonomous stack.
                </h2>
                <p className="text-pretty leading-relaxed text-muted">
                  The NETICS Developer Platform exposes vision, voice, planning, fleet control and the
                  marketplace through a single programmable interface. Simulate a robot, ship a skill,
                  deploy to ten thousand machines — without leaving your editor.
                </p>
                <div className="flex flex-wrap gap-3">
                  <GlowButton href="/contact">Request API Access</GlowButton>
                  <GlowButton href="/future" variant="ghost">
                    Read the Vision
                  </GlowButton>
                </div>
              </div>
              <div className="rounded-2xl glass-strong p-5 font-mono text-[0.8rem] leading-relaxed">
                <div className="flex items-center gap-2 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-electric/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
                  <span className="ml-2 text-xs text-muted">netics.ts</span>
                </div>
                <pre className="overflow-x-auto text-silver">
                  <code>{`import { NETICS } from "@netics/sdk";

const fleet = NETICS.connect(API_KEY);

await fleet.deploy("skill:patrol", {
  robots: fleet.query({ status: "online" }),
  region: "lagos-01",
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Plug into the ecosystem"
        subtitle="Deploy a robot, integrate the API, or build the next skill on the NETICS platform."
        primary={{ label: "Book a Demo", href: "/contact" }}
        secondary={{ label: "View the Roadmap", href: "/future" }}
      />
    </>
  );
}
