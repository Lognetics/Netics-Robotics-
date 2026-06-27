import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAStrip from "@/components/ui/CTAStrip";
import { site, stats } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "NETICS Robotics — the robotics division of NETICS AI, building the intelligence infrastructure for the next generation of machines.",
};

const values = [
  { title: "Intelligence first", desc: "Every machine ships with NETICS Brain — perception, reasoning and learning built in." },
  { title: "Built in Africa", desc: "Engineered on the continent, designed for the world. Talent and ambition, exported." },
  { title: "One ecosystem", desc: "Hardware, AI, cloud and OS engineered as a single, connected organism." },
  { title: "Deployed at scale", desc: "From a single unit to thousands — integrated, supported and always-on." },
  { title: "Safety & trust", desc: "On-device AI, data sovereignty and rigorous safety certification by default." },
  { title: "The long horizon", desc: "We are building the infrastructure of an intelligent civilization, to 2055 and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NETICS Robotics"
        title={<>The intelligence infrastructure for <span className="gradient-text">humanity's next era</span></>}
        subtitle={site.description}
      />

      <Section className="py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.05}>
              <GlassCard className="text-center" hover={false}>
                <div className="text-3xl font-semibold gradient-text">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <SectionHeading
          eyebrow="Our Mission"
          align="left"
          title={<>Not selling robots — building an <span className="gradient-text">ecosystem</span></>}
          subtitle="NETICS Robotics manufactures, supplies and deploys AI-powered robots where hardware, AI, cloud services, automation and humanoid intelligence work together as one. We are creating the connected substrate that will power the homes, businesses, industries, cities and nations of the future."
        />
      </Section>

      <Section className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.06}>
              <GlassCard className="h-full">
                <h3 className="text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Build the future with us"
        subtitle="Partner, deploy or join the team building the world's robots from Africa."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Careers", href: "/careers" }}
      />
    </>
  );
}
