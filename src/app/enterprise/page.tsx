import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "Enterprise Solutions",
  description:
    "NETICS deploys robotics at scale for governments, militaries, factories, hospitals, airports, hotels, banks and universities — with enterprise security, SLAs and 24/7 support.",
};

const sectors = [
  {
    title: "Government",
    tag: "Public Sector",
    desc: "Citizen-facing assistants, document automation and city-scale surveillance. We integrate with existing public infrastructure and meet sovereign data requirements.",
  },
  {
    title: "Military & Defense",
    tag: "Mission Critical",
    desc: "Reconnaissance, bomb disposal, autonomous ground vehicles and battlefield AI. Ruggedized, encrypted and operable in fully contested, GPS-denied environments.",
  },
  {
    title: "Factories",
    tag: "Industrial",
    desc: "Welding, assembly, machine tending and quality inspection. Digital twins and predictive maintenance keep lines running toward lights-out production.",
  },
  {
    title: "Hospitals",
    tag: "Healthcare",
    desc: "Medication logistics, patient monitoring, disinfection and surgical assist. HIPAA-aware workflows that free clinical staff to focus on care.",
  },
  {
    title: "Airports",
    tag: "Aviation",
    desc: "Passenger guidance, baggage handling, security patrol and terminal cleaning — coordinated fleets that scale with passenger volume in real time.",
  },
  {
    title: "Hotels",
    tag: "Hospitality",
    desc: "Concierge, room delivery, luggage handling and smart housekeeping. Branded guest-facing robots that lift service scores and lower cost per stay.",
  },
  {
    title: "Large Corporations",
    tag: "Enterprise",
    desc: "Reception, internal logistics, facility security and workplace automation across global campuses — managed from a single NETICS Cloud console.",
  },
  {
    title: "Banks",
    tag: "Finance",
    desc: "Branch concierge robots, secure cash transport and fraud-aware surveillance, with hardened security controls and full audit trails.",
  },
  {
    title: "Universities",
    tag: "Education",
    desc: "Teaching assistants, research lab robotics, campus security and AI labs that train the next generation of roboticists on real hardware.",
  },
];

const process = [
  {
    step: "01",
    title: "Consult",
    desc: "We map your operation, KPIs and constraints, then model the ROI of automation before a single robot ships.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Engineers spec the fleet, integrations and safety architecture — tailored to your facilities and existing systems.",
  },
  {
    step: "03",
    title: "Pilot",
    desc: "A live pilot proves the deployment against agreed metrics. We tune behaviors and validate uptime in your environment.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Full rollout with on-site commissioning, staff training and integration into your operations and security stack.",
  },
  {
    step: "05",
    title: "Support",
    desc: "24/7 monitoring, OTA upgrades, on-site servicing and continuous optimization across the life of the fleet.",
  },
];

const compliance = [
  { title: "End-to-end encryption", desc: "All telemetry and control channels are encrypted in transit and at rest." },
  { title: "Data sovereignty", desc: "On-prem, regional or sovereign-cloud deployment to meet local regulation." },
  { title: "Role-based access", desc: "Granular permissions, SSO and full audit logging across every fleet action." },
  { title: "Safety certified", desc: "Collaborative-safe robots with redundant stop systems and compliance reporting." },
  { title: "On-device AI", desc: "Sensitive perception runs on-robot — data never has to leave the building." },
  { title: "Penetration tested", desc: "Continuous red-teaming and hardening of the NETICS OS control plane." },
];

const sla = [
  { value: "99.9", suffix: "%", label: "Uptime SLA" },
  { value: "<2", suffix: "h", label: "Critical response" },
  { value: "24/7", suffix: "", label: "Remote monitoring" },
  { value: "48", suffix: "", label: "Countries serviced" },
];

export default function EnterprisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise Solutions"
        title={
          <>
            Robotics at <span className="gradient-text">enterprise scale</span>
          </>
        }
        subtitle="From a single building to a national rollout, NETICS deploys, integrates and supports robotic fleets for the world's most demanding organizations."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Talk to Sales</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Book a Consultation
          </GlowButton>
        </div>
      </PageHeader>

      {/* Sectors */}
      <Section className="py-16" id="sectors">
        <SectionHeading
          eyebrow="Who We Serve"
          title={
            <>
              Trusted by the{" "}
              <span className="gradient-text">institutions that run nations</span>
            </>
          }
          subtitle="Each engagement is engineered around your environment, your security posture and your operating model — not a one-size-fits-all box."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <GlassCard className="flex h-full flex-col gap-3">
                <span className="inline-flex w-fit rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan ring-1 ring-white/10">
                  {s.tag}
                </span>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Deployment process timeline */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Deployment Process"
          title={
            <>
              From first call to{" "}
              <span className="gradient-text">full fleet</span>
            </>
          }
          subtitle="A proven five-stage path that de-risks automation — you see measurable results before you commit at scale."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 5) * 0.06}>
              <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-3xl font-semibold gradient-text">{p.step}</div>
                {i < process.length - 1 && (
                  <span className="absolute right-4 top-7 hidden text-cyan/40 lg:block">→</span>
                )}
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Security & compliance band */}
      <Section className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:p-10">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative">
              <div className="max-w-2xl">
                <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                  Security & Compliance
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built for the world's{" "}
                  <span className="gradient-text">highest-stakes</span> environments
                </h2>
                <p className="mt-3 text-pretty text-muted">
                  Defense-grade security is the default, not an upgrade. Every NETICS deployment
                  ships with hardened controls, sovereign data options and full auditability.
                </p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {compliance.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
                  >
                    <h3 className="text-base font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SLA / support highlights */}
      <Section className="py-12">
        <SectionHeading
          eyebrow="Support & SLA"
          title={
            <>
              Support that <span className="gradient-text">never sleeps</span>
            </>
          }
          subtitle="Backed by guaranteed service levels, global field engineers and remote monitoring from NETICS Cloud."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sla.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.05}>
              <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.02] py-7 text-center">
                <div className="text-4xl font-semibold tracking-tight">
                  <span className="gradient-text">{s.value}</span>
                  <span className="text-2xl text-cyan">{s.suffix}</span>
                </div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Let's design your deployment"
        subtitle="Bring us your operation and KPIs. We'll model the ROI, spec the fleet and prove it in a pilot — before you scale."
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
