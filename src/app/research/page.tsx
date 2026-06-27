import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "Research & Development — NETICS Labs",
  description:
    "Inside NETICS Labs: AI research, robotics, computer vision, machine learning, hardware, energy systems, humanoid development, automation, edge AI and swarm robotics.",
};

const areas: { title: string; desc: string }[] = [
  {
    title: "AI Research",
    desc: "Foundational models for reasoning, planning and language that give every NETICS robot a mind of its own.",
  },
  {
    title: "Robotics Research",
    desc: "Locomotion, manipulation and control — the science of machines that move and act in the real world.",
  },
  {
    title: "Computer Vision",
    desc: "Perception that runs in milliseconds: detection, segmentation, depth and 3D scene understanding.",
  },
  {
    title: "Machine Learning",
    desc: "Self-improving systems that learn from demonstration, simulation and millions of fleet-hours.",
  },
  {
    title: "Robotics Hardware",
    desc: "Actuators, joints, dexterous hands and sensor stacks engineered and manufactured in-house.",
  },
  {
    title: "Energy Systems",
    desc: "Battery chemistry, fast-charge and solar-hybrid power that keeps robots working a full shift and longer.",
  },
  {
    title: "Humanoid Development",
    desc: "The Atlas program — whole-body control, balance and human-robot interaction for general-purpose robots.",
  },
  {
    title: "Automation",
    desc: "Orchestration research that coordinates many robots into reliable, high-throughput workflows.",
  },
  {
    title: "Edge AI",
    desc: "Compressing big intelligence onto the NETICS Brain so robots think on-device, offline and private.",
  },
  {
    title: "Swarm Robotics",
    desc: "Hundreds of robots, one coordinated intent — decentralized planning for warehouses, fields and cities.",
  },
];

const stats: { value: string; label: string }[] = [
  { value: "240+", label: "Papers published" },
  { value: "68", label: "Patents filed" },
  { value: "9", label: "Research labs" },
  { value: "320", label: "Researchers & engineers" },
];

const insideLab: { title: string; desc: string }[] = [
  {
    title: "Simulation at scale",
    desc: "Millions of virtual robot-hours run nightly in our physics simulators before a single bolt is turned.",
  },
  {
    title: "Reality testbeds",
    desc: "Full mock environments — homes, wards, warehouses and streets — where robots prove themselves in the wild.",
  },
  {
    title: "Open collaboration",
    desc: "We partner with universities and labs across Africa and the world to push the frontier together.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research & Development"
        title={
          <>
            Inside <span className="gradient-text">NETICS Labs</span>
          </>
        }
        subtitle="Where the future of robotics is invented — intelligence, motion, perception and energy, engineered from first principles in Africa for the world."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Partner with Us</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Join the Team
          </GlowButton>
        </div>
      </PageHeader>

      {/* Stats band */}
      <Section className="py-12">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative flex flex-col items-center gap-2 bg-background-2 px-6 py-10 text-center"
              >
                <div className="text-4xl font-semibold gradient-text">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Research areas */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Research Areas"
          title={
            <>
              Ten frontiers, <span className="gradient-text">one mission</span>
            </>
          }
          subtitle="Our teams work across the full robotics stack — from the silicon a robot thinks on to the swarms it moves in."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.05}>
              <GlassCard className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/5 text-cyan">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse-glow" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Inside the lab feature row */}
      <Section className="py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-8 sm:p-12">
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <div className="max-w-2xl">
                <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                  Inside the Lab
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  We build the future <span className="gradient-text">twice</span>
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  Once in simulation, once in reality — every breakthrough is stress-tested in both before it ever
                  reaches a customer's robot.
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {insideLab.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <GlassCard className="h-full">
                      <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Build the future with NETICS"
        subtitle="Collaborate on research, license our technology, or join the team turning robotics breakthroughs into real machines."
        primary={{ label: "Partner with Us", href: "/contact" }}
        secondary={{ label: "View Open Roles", href: "/contact" }}
      />
    </>
  );
}
