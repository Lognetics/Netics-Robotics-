import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import RobotCard from "@/components/ui/RobotCard";
import { robots } from "@/lib/data";

export default function FeaturedProducts() {
  const featured = robots.slice(0, 6);
  return (
    <Section className="py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Best sellers"
          title={<>Popular <span className="gradient-text">robots</span></>}
          subtitle="Our most-ordered models, ready to ship and deploy."
        />
        <GlowButton href="/robots" variant="outline" className="shrink-0">View all robots</GlowButton>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((r, i) => (
          <Reveal key={r.slug} delay={(i % 3) * 0.06}>
            <RobotCard robot={r} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
