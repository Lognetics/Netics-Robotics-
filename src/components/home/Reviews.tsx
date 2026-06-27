import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const reviews = [
  { name: "Amara O.", role: "Operations Director, Lagos", text: "Two Aria R1 units now run our hotel reception around the clock. Guests love them and check-in times dropped by half.", rating: 5 },
  { name: "Daniel K.", role: "Plant Manager, Nairobi", text: "The Forge F9 arms paid for themselves in under a year. Precision and uptime have been flawless.", rating: 5 },
  { name: "Sofia M.", role: "Security Lead, Accra", text: "Sentinel S4 patrols our whole site at night. The thermal detection has already prevented two incidents.", rating: 5 },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-cyan">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <Section className="py-20">
      <SectionHeading
        eyebrow="Trusted worldwide"
        title={<>What customers <span className="gradient-text">say</span></>}
        subtitle="Thousands of robots deployed across hospitality, industry, security and the home."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl glass p-6">
              <Stars n={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-silver">“{r.text}”</blockquote>
              <figcaption className="mt-5 border-t border-white/5 pt-4">
                <div className="text-sm font-semibold text-white">{r.name}</div>
                <div className="text-xs text-muted">{r.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
