import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "Case Studies",
  description:
    "Real-world outcomes from NETICS deployments — across a hospital network, an international airport, a smart factory and a smart-city pilot. See the ROI, hours saved and uptime.",
};

type CaseStudy = {
  tag: string;
  client: string;
  title: string;
  accent: string;
  before: string;
  after: string;
  narrative: string;
  stats: { value: string; label: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    tag: "Healthcare",
    client: "Pan-African Hospital Network",
    title: "From overstretched wards to 24/7 robotic logistics",
    accent: "#19e3ff",
    before:
      "Nurses spent up to 3 hours per shift fetching medication and supplies, pulling them away from patient care. Night-shift delivery delays were a recurring safety risk.",
    after:
      "A fleet of 60 Porter P2 robots now runs medication, lab samples and supplies across 4 hospitals around the clock — with elevator integration and contactless drop-off.",
    narrative:
      "NETICS deployed across the network in a staged 90-day rollout. Within the first quarter, internal logistics ran autonomously day and night, and clinical staff reclaimed thousands of hours for direct patient care.",
    stats: [
      { value: "+41%", label: "Nurse time at bedside" },
      { value: "118k", label: "Staff hours saved / yr" },
      { value: "99.4%", label: "Delivery uptime" },
    ],
  },
  {
    tag: "Aviation",
    client: "International Hub Airport",
    title: "A terminal that guides, cleans and secures itself",
    accent: "#2f6bff",
    before:
      "Passenger wayfinding complaints were rising, overnight cleaning windows were tight, and perimeter security relied entirely on stretched human patrols.",
    after:
      "Service robots now guide passengers in 12 languages, autonomous cleaners cover concourses overnight, and Sentinel S4 units patrol the perimeter with thermal detection.",
    narrative:
      "A mixed fleet of guidance, cleaning and security robots was integrated with the airport's operations center. Coordinated by NETICS Cloud, the fleet scales its activity with live passenger volume and flight schedules.",
    stats: [
      { value: "−32%", label: "Passenger wait time" },
      { value: "$2.4M", label: "Annual cost saved" },
      { value: "24/7", label: "Perimeter coverage" },
    ],
  },
  {
    tag: "Manufacturing",
    client: "Automotive Components Plant",
    title: "Toward a lights-out production line",
    accent: "#7c5cff",
    before:
      "Manual welding and inspection capped throughput, defect rates fluctuated by shift, and unplanned downtime ate into margins every quarter.",
    after:
      "Eighteen Forge F9 arms run welding, assembly and vision-guided inspection with digital twins and predictive maintenance — pushing the plant toward lights-out operation.",
    narrative:
      "After a six-week pilot on a single line proved a 27% throughput gain, NETICS scaled the deployment across the facility. Predictive maintenance now flags wear before failure, collapsing unplanned downtime.",
    stats: [
      { value: "212%", label: "ROI in year one" },
      { value: "−68%", label: "Unplanned downtime" },
      { value: "±0.02mm", label: "Repeatability" },
    ],
  },
  {
    tag: "Smart City",
    client: "Coastal Smart-City Pilot",
    title: "Robotics infrastructure for a growing metropolis",
    accent: "#19e3ff",
    before:
      "City services struggled to keep pace with growth — street cleaning lagged, infrastructure inspection was reactive, and public-safety coverage had blind spots.",
    after:
      "Autonomous cleaning, inspection and patrol robots now operate across the central district, feeding a live city dashboard with telemetry and incident streams.",
    narrative:
      "Launched as a 12-month pilot with the municipal authority, the program connected every robot to a unified smart-city console. Early results convinced the city to expand robotics across three additional districts.",
    stats: [
      { value: "+58%", label: "Inspection coverage" },
      { value: "94k", label: "Labor hours saved / yr" },
      { value: "3×", label: "Districts expansion" },
    ],
  },
];

const aggregate = [
  { value: "200", suffix: "%", label: "Avg. first-year ROI" },
  { value: "330k", suffix: "+", label: "Labor hours saved / yr" },
  { value: "99.3", suffix: "%", label: "Avg. fleet uptime" },
  { value: "4", suffix: "", label: "Sectors transformed" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            Proof, not <span className="gradient-text">promises</span>
          </>
        }
        subtitle="Real deployments, real numbers. See how NETICS robots transformed operations across healthcare, aviation, manufacturing and smart cities."
      />

      {/* Case studies */}
      <Section className="py-16" id="stories">
        <div className="flex flex-col gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.client} delay={0.05}>
              <GlassCard className="flex flex-col gap-8 p-6 sm:p-10 lg:flex-row">
                {/* Left: story */}
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em] ring-1 ring-white/10"
                      style={{ color: cs.accent, background: "rgba(255,255,255,0.04)" }}
                    >
                      {cs.tag}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted">
                      {cs.client}
                    </span>
                  </div>
                  <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {cs.title}
                  </h3>

                  {/* Before / After */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                        Before
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-silver">{cs.before}</p>
                    </div>
                    <div
                      className="rounded-2xl border bg-white/[0.02] p-5"
                      style={{ borderColor: `${cs.accent}33` }}
                    >
                      <div
                        className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: cs.accent }}
                      >
                        After
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-silver">{cs.after}</p>
                    </div>
                  </div>

                  <p className="text-pretty text-sm leading-relaxed text-muted">{cs.narrative}</p>
                </div>

                {/* Right: stats rail */}
                <div className="flex shrink-0 flex-row gap-4 lg:w-56 lg:flex-col">
                  {cs.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-background-2 py-5 text-center lg:items-start lg:px-5 lg:text-left"
                    >
                      <div
                        className="text-3xl font-semibold tracking-tight"
                        style={{ color: cs.accent }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs leading-snug text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Aggregate results band */}
      <Section className="py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-6 sm:p-10">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                  Aggregate Outcomes
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  The numbers across <span className="gradient-text">every deployment</span>
                </h2>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aggregate.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] py-6 text-center"
                  >
                    <div className="text-4xl font-semibold tracking-tight">
                      <span className="gradient-text">{s.value}</span>
                      <span className="text-2xl text-cyan">{s.suffix}</span>
                    </div>
                    <div className="text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Your success story is next"
        subtitle="Let's model the impact of robotics on your operation — and prove it with a pilot before you scale."
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "Explore Enterprise", href: "/enterprise" }}
      />
    </>
  );
}
