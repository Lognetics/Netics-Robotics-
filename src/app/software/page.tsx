import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "NETICS OS — Robotics Operating System",
  description:
    "NETICS OS is the operating system for fleets of robots: OTA updates, fleet management, remote monitoring, AI learning, voice, vision, analytics, automation and developer APIs.",
};

const features: { title: string; desc: string }[] = [
  {
    title: "Robot updates (OTA)",
    desc: "Ship new skills and firmware to thousands of robots with staged, signed, roll-back-safe over-the-air updates.",
  },
  {
    title: "Fleet management",
    desc: "One console for every machine — group, assign, schedule and orchestrate fleets across sites and borders.",
  },
  {
    title: "Remote monitoring",
    desc: "Live telemetry, health, battery and location for every unit, streamed in real time to NETICS Cloud.",
  },
  {
    title: "AI learning",
    desc: "Robots learn from the field and share skills fleet-wide. Train once, deploy everywhere.",
  },
  {
    title: "Voice commands",
    desc: "Natural multilingual voice control built in — speak to any robot or your whole fleet at once.",
  },
  {
    title: "Vision AI",
    desc: "Sub-20ms perception on the edge: detection, recognition, tracking and scene understanding on-robot.",
  },
  {
    title: "Analytics",
    desc: "Tasks completed, uptime, throughput and ROI — measured, charted and exportable per robot or per fleet.",
  },
  {
    title: "Automation",
    desc: "Compose multi-robot workflows with triggers, conditions and actions — no code required.",
  },
  {
    title: "Developer APIs",
    desc: "A programmable surface for the entire stack: deploy apps, query telemetry and command robots over REST and streaming.",
  },
];

const layers: { name: string; desc: string }[] = [
  { name: "Applications & Skills", desc: "Marketplace apps, custom workflows and per-industry skill packs." },
  { name: "Developer APIs & SDK", desc: "REST, streaming and SDKs to build, simulate and ship robot software." },
  { name: "AI Services", desc: "NETICS Vision, Voice and Brain — perception, language and reasoning." },
  { name: "Automation & Orchestration", desc: "Fleet routing, scheduling and multi-robot coordination." },
  { name: "Fleet & Device Management", desc: "Provisioning, OTA, telemetry, security and remote monitoring." },
  { name: "Hardware Abstraction Layer", desc: "Drivers, sensors and motors — one OS across every NETICS robot." },
];

export default function SoftwarePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Robotics Operating System"
        title={
          <>
            NETICS <span className="gradient-text">OS</span>
          </>
        }
        subtitle="One operating system for every robot you run — from a single unit to a planetary fleet. Update, monitor, automate and extend, all from one place."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Request Access</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Read the Docs
          </GlowButton>
        </div>
      </PageHeader>

      {/* Feature grid */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="One Platform, Every Capability"
          title={
            <>
              The OS that <span className="gradient-text">runs the fleet</span>
            </>
          }
          subtitle="NETICS OS unifies hardware, intelligence and automation so your robots ship value on day one — and keep getting better."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <GlassCard className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/5 text-cyan">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse-glow" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Console / API snippet */}
      <Section className="py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                Built for Developers
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Command your fleet in <span className="gradient-text">a few lines</span>
              </h2>
              <p className="text-pretty leading-relaxed text-muted">
                Every robot is programmable. The NETICS OS API gives you typed access to telemetry, skills and
                control — deploy a workflow to ten thousand robots with a single request.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["REST", "Streaming", "Webhooks", "Python SDK", "TypeScript SDK"].map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1.5 text-xs text-silver">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-background-2 shadow-[0_30px_80px_-40px_var(--glow-cyan)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-violet/70" />
                <span className="h-3 w-3 rounded-full bg-electric/70" />
                <span className="h-3 w-3 rounded-full bg-cyan/70" />
                <span className="ml-3 text-xs font-medium text-muted">netics-os · console</span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-silver">
                <code>{`import { NeticsOS } from "@netics/os";

const fleet = NeticsOS.connect(process.env.NETICS_KEY);

// deploy a skill to every Porter in Lagos
await fleet
  .filter({ model: "porter-p2", site: "lagos" })
  .deploy("delivery.v3");

// stream live telemetry
fleet.telemetry.on("battery", (r) => {
  if (r.level < 15) fleet.command(r.id, "return-to-dock");
});

console.log("✓ fleet online:", await fleet.count());
// ✓ fleet online: 11842`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Architecture diagram — stacked glass bars */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="System Architecture"
          title={
            <>
              Six layers, <span className="gradient-text">one stack</span>
            </>
          }
          subtitle="From silicon to skill, NETICS OS is layered so each tier can evolve independently — without breaking the robots above or below it."
        />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {layers.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 0.05}>
              <div
                className="group relative flex flex-col gap-1 overflow-hidden rounded-xl glass px-6 py-5 transition-all duration-500 hover:border-cyan/30 sm:flex-row sm:items-center sm:justify-between"
                style={{ marginInline: `${i * 1.5}rem` }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan via-electric to-violet"
                  aria-hidden
                />
                <div className="font-semibold tracking-tight text-white">{layer.name}</div>
                <div className="text-sm text-muted sm:max-w-md sm:text-right">{layer.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Run your robots on NETICS OS"
        subtitle="Get developer access, or talk to our team about deploying NETICS OS across your fleet."
        primary={{ label: "Request Access", href: "/contact" }}
        secondary={{ label: "Book a Demo", href: "/contact" }}
      />
    </>
  );
}
