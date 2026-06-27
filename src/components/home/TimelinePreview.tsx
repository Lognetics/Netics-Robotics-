import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { timeline } from "@/lib/data";

export default function TimelinePreview() {
  const items = timeline.slice(0, 6);
  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="The Future of NETICS"
        title={<>A roadmap to <span className="gradient-text">2055</span></>}
        subtitle="From launch to a civilization powered by intelligent machines — here's where we're headed."
      />

      <div className="mt-14 overflow-x-auto pb-4 mask-fade-x">
        <div className="flex min-w-max gap-4 px-1">
          {items.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06}>
              <div className="relative w-64 rounded-2xl glass p-6">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-cyan/60 to-transparent" />
                <div className="text-3xl font-semibold gradient-text">{t.year}</div>
                <h3 className="mt-2 text-base font-semibold text-white">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <GlowButton href="/future" variant="outline">Explore the full timeline</GlowButton>
      </div>
    </Section>
  );
}
