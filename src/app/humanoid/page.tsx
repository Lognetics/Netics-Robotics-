import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";
import Image from "next/image";
import { robots } from "@/lib/data";

export const metadata = {
  title: "NETICS Atlas One — Humanoid",
  description:
    "Meet NETICS Atlas One: a general-purpose humanoid that walks, talks, sees, feels and learns. Emotion AI, multilingual voice, vision and cloud-sync memory in one body.",
};

const atlas = robots.find((r) => r.slug === "atlas-one");

const atlasSpecs = atlas?.specs ?? [
  { label: "Height", value: "1.72 m" },
  { label: "Payload", value: "25 kg" },
  { label: "Runtime", value: "8 hrs" },
  { label: "Degrees of Freedom", value: "42" },
  { label: "Vision", value: "360° depth + RGB" },
  { label: "Compute", value: "NETICS Brain X2" },
];

const capabilities: { title: string; desc: string }[] = [
  {
    title: "Human interaction",
    desc: "Reads the room, holds eye contact and responds with natural body language for genuinely human collaboration.",
  },
  {
    title: "Bipedal walking",
    desc: "Dynamic balance and terrain-aware gait let Atlas One walk, turn, climb stairs and recover from a shove.",
  },
  {
    title: "Natural conversation",
    desc: "Full-duplex voice with intent understanding — talk to Atlas One the way you'd talk to a colleague.",
  },
  {
    title: "Emotion AI",
    desc: "Perceives tone, expression and context to respond with empathy, urgency or calm as the moment demands.",
  },
  {
    title: "Object recognition",
    desc: "Identifies, locates and tracks thousands of objects in real time to plan and manipulate the world around it.",
  },
  {
    title: "Facial recognition",
    desc: "Recognizes people, remembers preferences and personalizes every interaction — privately, on-device.",
  },
  {
    title: "Gesture recognition",
    desc: "Understands pointing, waving and hand signs so people can direct Atlas One without a single word.",
  },
  {
    title: "Task execution",
    desc: "Breaks high-level goals into precise motor plans — fetch, sort, assemble, deliver, repeat, flawlessly.",
  },
  {
    title: "Continuous learning",
    desc: "Every demonstration sharpens its skills. Atlas One learns on the job and shares what it learns with the fleet.",
  },
  {
    title: "Cloud-sync memory",
    desc: "Context, faces and skills sync securely to NETICS Cloud — pick up any conversation, on any unit, anywhere.",
  },
  {
    title: "Multilingual voice",
    desc: "Speaks and understands dozens of languages and dialects, switching seamlessly mid-conversation.",
  },
  {
    title: "Object manipulation",
    desc: "Dexterous hands with force feedback handle a glass of water or a power tool with the same care.",
  },
];

const meters: { label: string; value: number }[] = [
  { label: "Perception accuracy", value: 98 },
  { label: "Conversational fluency", value: 95 },
  { label: "Balance & locomotion", value: 92 },
  { label: "Manipulation dexterity", value: 89 },
  { label: "Emotional intelligence", value: 90 },
  { label: "On-task autonomy", value: 94 },
];

export default function HumanoidPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Flagship Humanoid"
        title={
          <>
            NETICS <span className="gradient-text">Atlas One</span>
          </>
        }
        subtitle="A general-purpose humanoid that walks, talks, sees, feels and learns — built in Africa, made for the world."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Pre-order Atlas One</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Book a Demo
          </GlowButton>
        </div>
      </PageHeader>

      {/* Hero band — 3D viewer */}
      <Section className="pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative grid items-center gap-6 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 sm:h-[560px]">
                <Image src="/robots/atlas-hero.jpg" alt="NETICS Atlas One humanoid robot" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                  {atlas?.series ?? "Humanoid"} · {atlas?.status ?? "Pre-order"}
                </span>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  One body. <span className="gradient-text">Every capability.</span>
                </h2>
                <p className="text-pretty leading-relaxed text-muted">
                  {atlas?.tagline ??
                    "A general-purpose humanoid that walks, talks, sees and learns."}{" "}
                  Atlas One fuses NETICS Vision, Voice and Brain into a single machine that works beside
                  people — in homes, hospitals, factories and the field.
                </p>
                <div className="flex flex-wrap gap-2">
                  {(atlas?.features ?? capabilities.slice(0, 6).map((c) => c.title)).map((f) => (
                    <span
                      key={f}
                      className="rounded-full glass px-3 py-1.5 text-xs text-silver"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-end gap-6 pt-2">
                  <div>
                    <div className="text-3xl font-semibold gradient-text">
                      ${(atlas?.priceFrom ?? 89000).toLocaleString()}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted">Starting price</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-white">42</div>
                    <div className="text-xs uppercase tracking-widest text-muted">Degrees of freedom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Capability grid */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="What Atlas One Can Do"
          title={
            <>
              A humanoid that <span className="gradient-text">understands</span>
            </>
          }
          subtitle="Perception, conversation, emotion and dexterity — engineered together so Atlas One acts with intent, not just instruction."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05}>
              <GlassCard className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/5 text-cyan">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse-glow" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capability meters band */}
      <Section className="py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-8 sm:p-12">
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                  Performance Profile
                </span>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Benchmarked across the <span className="gradient-text">human envelope</span>
                </h2>
                <p className="text-pretty leading-relaxed text-muted">
                  Atlas One is measured the way people are — on how it sees, speaks, balances and handles the
                  world. These are live capability scores from the NETICS evaluation suite.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {meters.map((m, i) => (
                  <Reveal key={m.label} delay={i * 0.05}>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-silver">{m.label}</span>
                        <span className="font-semibold text-cyan">{m.value}%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet via-electric to-cyan shadow-[0_0_20px_var(--glow-cyan)]"
                          style={{ width: `${m.value}%` }}
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Specs */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Technical Specifications"
          title={
            <>
              Engineered to <span className="gradient-text">last a shift</span>
            </>
          }
          subtitle="Built around the NETICS Brain X2 compute core, with a power and sensor stack tuned for all-day work."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {atlasSpecs.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.05}>
              <GlassCard hover={false} className="h-full">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">{s.label}</div>
                <div className="mt-2 text-2xl font-semibold gradient-text-soft">{s.value}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Bring Atlas One into your world"
        subtitle="Reserve a unit, or see the flagship humanoid live in a guided demo with our team."
        primary={{ label: "Pre-order Atlas One", href: "/contact" }}
        secondary={{ label: "Book a Demo", href: "/contact" }}
      />
    </>
  );
}
