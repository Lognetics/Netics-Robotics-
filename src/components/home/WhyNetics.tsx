import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { whyNetics } from "@/lib/data";

export default function WhyNetics() {
  return (
    <Section className="py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-radial-glow opacity-60" />
      <SectionHeading
        eyebrow="Why NETICS Robotics"
        title={<>Not just robots — an <span className="gradient-text">intelligence ecosystem</span></>}
        subtitle="Hardware, AI, cloud and support engineered as one. This is the infrastructure powering the next generation of machines."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyNetics.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 0.05}>
            <div className="group relative flex h-full flex-col gap-3 rounded-2xl glass p-6 transition-all duration-500 hover:border-cyan/30">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-cyan/30 text-cyan ring-1 ring-white/10">
                <span className="text-lg font-semibold">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="text-base font-semibold leading-snug text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
