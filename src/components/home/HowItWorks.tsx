import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Choose your robot", desc: "Browse the store, compare models and pick the robot that fits your needs." },
  { n: "02", title: "Order or request a quote", desc: "Buy online, or get a tailored quote with financing for fleets and enterprise." },
  { n: "03", title: "We deliver & install", desc: "Worldwide shipping with on-site setup, commissioning and team training." },
  { n: "04", title: "Support & updates", desc: "24/7 servicing plus over-the-air skill updates that keep robots improving." },
];

export default function HowItWorks() {
  return (
    <Section className="py-20">
      <SectionHeading
        eyebrow="How it works"
        title={<>From cart to <span className="gradient-text">deployed</span></>}
        subtitle="Buying a robot should be as simple as buying a laptop. Here's how."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={(i % 4) * 0.06}>
            <div className="relative h-full rounded-2xl glass p-6">
              <div className="text-3xl font-semibold gradient-text">{s.n}</div>
              <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
