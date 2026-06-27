import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAStrip from "@/components/ui/CTAStrip";
import { timeline } from "@/lib/data";

export const metadata = {
  title: "The Future of NETICS",
  description:
    "A timeline of the NETICS mission — from Africa's first robotics manufacturer in 2026 to robotics and AI as the substrate of civilization by 2055.",
};

const visionPillars = [
  {
    title: "Build the machines",
    desc: "Humanoid, industrial and service robots manufactured at continental scale, then global scale.",
  },
  {
    title: "Build the intelligence",
    desc: "One brain — NETICS AI — that perceives, reasons, plans and learns across every robot and surface.",
  },
  {
    title: "Build the network",
    desc: "A planetary fabric of autonomous machines coordinated through NETICS Cloud and NETICS OS.",
  },
];

export default function FuturePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Roadmap to 2055"
        title={
          <>
            The future is being <span className="gradient-text">manufactured</span>
          </>
        }
        subtitle="A thirty-year mission to make robotics and artificial intelligence the operating substrate of human civilization — engineered, owned and deployed from Africa to the world."
      />

      {/* Vision intro band */}
      <Section className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-60" />
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan">
                  The thesis
                </span>
                <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Every era is defined by the machines it builds. The next one will be{" "}
                  <span className="gradient-text">built by machines.</span>
                </h2>
                <p className="text-pretty leading-relaxed text-muted">
                  NETICS is not shipping a single product. We are assembling the full stack — hardware,
                  intelligence, cloud and operating system — and laying it down decade by decade until
                  autonomous robotics is as ordinary as electricity and as foundational as the internet.
                </p>
              </div>
              <div className="grid gap-4">
                {visionPillars.map((pillar, i) => (
                  <Reveal key={pillar.title} delay={0.05 * i}>
                    <div className="flex items-start gap-4 rounded-2xl glass p-5">
                      <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-cyan animate-pulse-glow" />
                      <div>
                        <h3 className="font-semibold tracking-tight">{pillar.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Interactive alternating timeline */}
      <Section className="py-10">
        <SectionHeading
          eyebrow="2026 → 2055"
          title={
            <>
              Eleven milestones to a <span className="gradient-text">robotic civilization</span>
            </>
          }
          subtitle="Each step compounds on the last. The factories fund the fleets, the fleets train the intelligence, the intelligence builds the network."
        />

        <div className="relative mt-16">
          {/* Central glowing spine */}
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan/60 to-transparent md:left-1/2 md:-translate-x-1/2"
          >
            <div className="absolute inset-0 blur-sm bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
          </div>

          <ol className="flex flex-col gap-10">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={entry.year} className="relative">
                  <Reveal y={28} delay={0.02 * (i % 3)}>
                    <div
                      className={`relative flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center ${
                        isLeft ? "" : ""
                      }`}
                    >
                      {/* Node on the spine */}
                      <span
                        aria-hidden
                        className="absolute left-6 top-3 z-10 -translate-x-1/2 md:left-1/2"
                      >
                        <span className="relative flex h-4 w-4 items-center justify-center">
                          <span className="absolute h-4 w-4 rounded-full bg-cyan/30 animate-ping" />
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_2px_var(--glow-cyan)]" />
                        </span>
                      </span>

                      {/* Card — alternates sides on md+ */}
                      <div
                        className={`pl-14 md:pl-0 ${
                          isLeft
                            ? "md:col-start-1 md:pr-12 md:text-right"
                            : "md:col-start-2 md:pl-12"
                        }`}
                      >
                        <GlassCard className="md:inline-block md:w-full">
                          <div
                            className={`flex flex-col gap-2 ${
                              isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
                            }`}
                          >
                            <span className="text-4xl font-bold leading-none gradient-text sm:text-5xl">
                              {entry.year}
                            </span>
                            <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
                            <p className="text-sm leading-relaxed text-muted">{entry.desc}</p>
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Closing manifesto band */}
      <Section className="py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-background-2 px-6 py-16 text-center sm:px-12">
            <div className="absolute inset-0 bg-radial-glow opacity-80" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">
                The manifesto
              </span>
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-4xl">
                We believe the most important infrastructure of the next century will not be roads or
                grids — it will be{" "}
                <span className="gradient-text">intelligent machines</span>, and they should be built
                by everyone, for everyone.
              </p>
              <p className="text-pretty leading-relaxed text-muted">
                The roadmap above is a promise. Every year on this line is a generation of robots
                deployed, a country brought online, and a step toward a world where work is optional
                and capability is abundant. We are building it in the open, and we are building it now.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Build the future with us"
        subtitle="Partner, deploy or develop on the NETICS stack. The roadmap moves faster with you on it."
        primary={{ label: "Book a Demo", href: "/contact" }}
        secondary={{ label: "Explore the Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
