import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "Careers",
  description:
    "Build the world's robots from Africa. Join NETICS Robotics — engineering, AI, research, design and more across a global, fast-moving team.",
};

const values = [
  { title: "Build for the real world", desc: "We ship machines that work in factories, farms and hospitals — not just demos." },
  { title: "African-built, globally great", desc: "World-class engineering with roots and pride in the continent that raised us." },
  { title: "Move with intent", desc: "Speed matters, but direction matters more. We aim, then we move fast." },
  { title: "Earn trust through safety", desc: "Robots share our spaces. Safety and reliability are non-negotiable." },
  { title: "Learn relentlessly", desc: "Every machine, every teammate and every failure is a chance to get sharper." },
  { title: "Own the outcome", desc: "We take problems end-to-end and hold ourselves to the result, not the effort." },
];

const roles = [
  { title: "Senior Robotics Engineer", team: "Engineering", location: "Lagos, NG", type: "Full-time" },
  { title: "Control Systems Engineer", team: "Engineering", location: "Remote (Africa)", type: "Full-time" },
  { title: "Machine Learning Engineer", team: "AI", location: "Nairobi, KE", type: "Full-time" },
  { title: "Computer Vision Scientist", team: "AI", location: "Remote (Global)", type: "Full-time" },
  { title: "Research Scientist, Manipulation", team: "Research", location: "Accra, GH", type: "Full-time" },
  { title: "Enterprise Account Executive", team: "Sales", location: "Johannesburg, ZA", type: "Full-time" },
  { title: "Solutions Engineer", team: "Sales", location: "Cairo, EG", type: "Full-time" },
  { title: "Manufacturing Operations Lead", team: "Manufacturing", location: "Lagos, NG", type: "Full-time" },
  { title: "Industrial / Product Designer", team: "Design", location: "Remote (Global)", type: "Full-time" },
  { title: "Robotics Engineering Intern", team: "Internships", location: "Lagos, NG", type: "Internship" },
  { title: "AI Research Intern", team: "Internships", location: "Remote (Africa)", type: "Internship" },
];

const benefits = [
  { title: "Competitive equity", desc: "Own a real piece of what you build, from day one." },
  { title: "Health & wellbeing", desc: "Comprehensive medical cover for you and your family." },
  { title: "Remote-friendly", desc: "Work from home, a hub, or anywhere in your timezone." },
  { title: "Learning budget", desc: "Annual stipend for courses, conferences and hardware." },
  { title: "Relocation support", desc: "We help you move to wherever the work happens." },
  { title: "Build with the best gear", desc: "Top-tier compute, tooling and access to every NETICS robot." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Build the world's <span className="gradient-text">robots</span>
          </>
        }
        subtitle="We're a global team of engineers, scientists and builders making intelligent machines from Africa — for the world. Come build the future of work with us."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="#open-roles">See Open Roles</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Pitch Us a Role
          </GlowButton>
        </div>
      </PageHeader>

      {/* Why work here — mission band */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative max-w-3xl">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan">Our mission</span>
              <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight sm:text-3xl">
                We're building a robotics ecosystem that puts intelligent machines to work in
                every industry — and we're doing it from the ground up.
              </h2>
              <p className="mt-5 text-pretty text-muted">
                NETICS is where hardware, AI and ambition meet. You'll work alongside people who
                ship real robots into the real world, see your work running in factories and
                hospitals within months, and help write the story of African-built global robotics.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Values grid */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              What we <span className="gradient-text">value</span>
            </>
          }
          subtitle="The principles that shape how we build, decide and treat each other."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.04}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Open roles */}
      <Section id="open-roles" className="py-14">
        <SectionHeading
          align="left"
          eyebrow="Open roles"
          title={
            <>
              Find your <span className="gradient-text">seat</span>
            </>
          }
          subtitle="We're hiring across engineering, AI, research, sales, manufacturing and design."
        />
        <div className="mt-10 flex flex-col gap-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.03}>
              <div className="group flex flex-col gap-4 rounded-2xl glass px-6 py-5 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-cyan">
                    <span className="rounded-full bg-cyan/10 px-2.5 py-1">{r.team}</span>
                    <span className="text-muted">{r.location}</span>
                    <span className="text-muted">· {r.type}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
                </div>
                <GlowButton href="/contact" variant="outline" className="shrink-0">
                  Apply →
                </GlowButton>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-muted">
            Don't see your role?{" "}
            <a href="/contact" className="text-cyan hover:underline">
              Tell us what you'd build
            </a>
            .
          </p>
        </Reveal>
      </Section>

      {/* Benefits grid */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="Benefits"
          title={
            <>
              We invest in <span className="gradient-text">you</span>
            </>
          }
          subtitle="Because great machines are built by people who are taken care of."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Life at NETICS band */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-radial-glow opacity-70" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan">Life at NETICS</span>
              <h2 className="mt-4 text-balance text-2xl font-semibold sm:text-3xl">
                Hands on hardware, eyes on the horizon
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-muted">
                One week you're tuning a humanoid's gait; the next you're demoing it to a customer
                across the world. We mix deep technical work with a culture of curiosity,
                celebration and shared ownership — and the labs are always open.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "48", label: "Countries we serve" },
                  { value: "100%", label: "Hands-on hardware access" },
                  { value: "1", label: "Mission, every team" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl glass p-5">
                    <div className="text-3xl font-semibold gradient-text">{s.value}</div>
                    <div className="mt-1 text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTAStrip
        title="Ready to build with us?"
        subtitle="Browse open roles or tell us where you'd make the biggest dent."
        primary={{ label: "Apply Now", href: "/contact" }}
        secondary={{ label: "See Open Roles", href: "#open-roles" }}
      />
    </>
  );
}
