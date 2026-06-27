import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAStrip from "@/components/ui/CTAStrip";
import { industries } from "@/lib/data";

export const metadata = {
  title: "Industries We Serve",
  description:
    "From hospitals to oilfields, NETICS robots work across 22 industries worldwide. Explore tailored robotic automation for every sector — engineered in Africa, deployed across 48 countries.",
};

// One-line value prop tailored to each industry (keyed by name from data.industries)
const valueProps: Record<string, string> = {
  Healthcare: "Robotic logistics, patient monitoring and around-the-clock elderly care.",
  Hospitality: "Concierge, room delivery and guest experience robots that never sleep.",
  Education: "Teaching assistants, coding companions and AI laboratory robotics.",
  Manufacturing: "Welding, assembly and machine tending at micron-level precision.",
  Government: "Public-service automation, surveillance and citizen-facing assistants.",
  Construction: "Autonomous surveying, bricklaying and inspection of hazardous sites.",
  "Oil & Gas": "Pipeline inspection, leak detection and robots for high-risk zones.",
  Retail: "Cashier-less checkout, shelf scanning and live store analytics.",
  Restaurants: "Food delivery, kitchen automation and contactless table service.",
  "Smart Cities": "Traffic, cleaning and infrastructure inspection at city scale.",
  Mining: "Subterranean exploration, haulage and remote-operated heavy lifting.",
  Energy: "Grid inspection, solar-farm maintenance and turbine diagnostics.",
  Transportation: "Autonomous fleets, last-mile delivery and terminal logistics.",
  Logistics: "End-to-end robotic supply chains with swarm-coordinated routing.",
  Warehousing: "Picking, sorting and palletizing with 24/7 fulfilment throughput.",
  Military: "Reconnaissance, bomb disposal and autonomous battlefield systems.",
  Defense: "Perimeter security, threat detection and rapid-response robotics.",
  Agriculture: "Precision harvesting, targeted spraying and live crop-health AI.",
  Telecom: "Tower inspection, network maintenance and field diagnostics.",
  Finance: "Branch concierge robots, secure transport and fraud-aware surveillance.",
  Homes: "Companion, cleaning and security robots for everyday living.",
  Entertainment: "Interactive performers, museum guides and theme-park robotics.",
};

// Sector outcome stats
const outcomes = [
  { value: "22", label: "Industries served", suffix: "" },
  { value: "48", label: "Countries deployed", suffix: "" },
  { value: "37", label: "Avg. cost reduction", suffix: "%" },
  { value: "99.2", label: "Fleet uptime", suffix: "%" },
];

// Global reach regions for the stylized world-map band
const regions = [
  { name: "West Africa", note: "HQ & manufacturing" },
  { name: "East Africa", note: "Deployment hubs" },
  { name: "Europe", note: "Enterprise rollouts" },
  { name: "Middle East", note: "Smart-city pilots" },
  { name: "North America", note: "R&D partnerships" },
  { name: "Asia-Pacific", note: "Logistics fleets" },
  { name: "South America", note: "Agriculture programs" },
  { name: "Southern Africa", note: "Mining & energy" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title={
          <>
            Robotics for <span className="gradient-text">every sector</span>
          </>
        }
        subtitle="NETICS robots are at work across 22 industries — from hospital corridors and factory floors to open fields, oil rigs and city streets. Wherever there's work, there's a robot for it."
      />

      {/* Industry grid */}
      <Section className="py-16" id="sectors">
        <SectionHeading
          eyebrow="The Map of Work"
          title={
            <>
              22 industries, <span className="gradient-text">one platform</span>
            </>
          }
          subtitle="Every deployment runs on NETICS OS and NETICS Brain — so a robot in a hospital and a robot in a mine share the same intelligence, fleet control and OTA upgrades."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((name, i) => (
            <Reveal key={name} delay={(i % 3) * 0.05}>
              <GlassCard className="flex h-full flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-sm font-semibold text-cyan ring-1 ring-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-white">{name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {valueProps[name] ?? "Tailored robotic automation engineered for your operation."}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm text-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Explore deployment →
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Global reach band — stylized CSS world-map feel */}
      <Section className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:p-10">
            <div className="absolute inset-0 bg-grid opacity-20 animate-grid" />
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                  Global Reach
                </span>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built in Africa.{" "}
                  <span className="gradient-text">Working worldwide.</span>
                </h2>
                <p className="max-w-md text-pretty text-muted">
                  Our robots ship globally with local servicing in 48 countries. Wherever they land,
                  they connect to NETICS Cloud for fleet management, telemetry and over-the-air
                  upgrades.
                </p>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {regions.map((r) => (
                    <div
                      key={r.name}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                        {r.name}
                      </div>
                      <div className="mt-0.5 text-xs text-muted">{r.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stylized dotted-grid "world map" panel built purely with CSS */}
              <div className="relative min-h-[300px] overflow-hidden rounded-2xl glass-strong">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1.3px, transparent 1.3px)",
                    backgroundSize: "20px 20px",
                    color: "rgba(25, 227, 255, 0.28)",
                    maskImage:
                      "radial-gradient(120% 90% at 50% 45%, #000 35%, transparent 78%)",
                    WebkitMaskImage:
                      "radial-gradient(120% 90% at 50% 45%, #000 35%, transparent 78%)",
                  }}
                />
                <div className="absolute inset-0 bg-aurora opacity-40" />
                {/* Connection nodes */}
                {[
                  { top: "32%", left: "26%" },
                  { top: "44%", left: "48%" },
                  { top: "58%", left: "40%" },
                  { top: "38%", left: "70%" },
                  { top: "66%", left: "64%" },
                  { top: "26%", left: "58%" },
                ].map((n, i) => (
                  <span
                    key={i}
                    className="absolute h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_4px_var(--glow-cyan)] animate-pulse-glow"
                    style={{ top: n.top, left: n.left }}
                  />
                ))}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl glass px-4 py-3 text-xs text-muted">
                  <span className="font-semibold text-white">11,842</span> robots online ·{" "}
                  <span className="font-semibold text-white">48</span> countries · live network
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Sector outcomes stats strip */}
      <Section className="py-12">
        <Reveal>
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {outcomes.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] py-6 text-center"
              >
                <div className="text-4xl font-semibold tracking-tight text-white">
                  <span className="gradient-text">{s.value}</span>
                  <span className="text-2xl text-cyan">{s.suffix}</span>
                </div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Find the robot for your industry"
        subtitle="Tell us where you operate and we'll spec a deployment for your sector — from a single unit to a continental fleet."
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "Browse the Marketplace", href: "/marketplace" }}
      />
    </>
  );
}
