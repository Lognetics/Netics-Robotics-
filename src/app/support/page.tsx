import PageHeader from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTAStrip from "@/components/ui/CTAStrip";

export const metadata = {
  title: "Support",
  description:
    "The NETICS Support Center — knowledge base, downloads, documentation, training and 24/7 remote support for every robot in your fleet.",
};

const categories = [
  { title: "Knowledge Base", desc: "Searchable answers, guides and how-tos for every NETICS product.", icon: "◆" },
  { title: "Downloads", desc: "Firmware, datasheets, SDKs and the NETICS OS installer.", icon: "↓" },
  { title: "Documentation", desc: "API references, integration guides and deployment playbooks.", icon: "▤" },
  { title: "Software", desc: "NETICS Cloud, Studio and fleet tools — release notes & access.", icon: "❖" },
  { title: "Drivers", desc: "Sensor, peripheral and accessory drivers for every platform.", icon: "⚙" },
  { title: "Maintenance", desc: "Service schedules, spare parts and predictive-care workflows.", icon: "✚" },
  { title: "Training", desc: "Certified operator courses, labs and the NETICS Academy.", icon: "✦" },
  { title: "Remote Support", desc: "Secure remote diagnostics and live teleoperation by engineers.", icon: "⤢" },
  { title: "Live Chat", desc: "Instant answers from the NETICS Assistant and human experts.", icon: "✆" },
];

const popular = [
  { title: "Pairing a new robot with NETICS Cloud", cat: "Getting Started", read: "4 min" },
  { title: "Scheduling staged OTA firmware updates", cat: "Fleet Ops", read: "7 min" },
  { title: "Calibrating LiDAR & depth vision sensors", cat: "Hardware", read: "6 min" },
  { title: "Setting up role-based fleet access", cat: "Security", read: "5 min" },
  { title: "Recovering a robot from safe mode", cat: "Troubleshooting", read: "3 min" },
  { title: "Integrating NETICS API with your stack", cat: "Developers", read: "9 min" },
];

const channels = [
  { name: "Live Chat", detail: "Avg. response under 60 seconds", meta: "24/7", href: "/contact" },
  { name: "Email", detail: "support@netics.ai", meta: "< 4 hr reply", href: "/contact" },
  { name: "Phone", detail: "Priority line for enterprise fleets", meta: "24/7", href: "/contact" },
  { name: "On-Site", detail: "Field engineers across 48 countries", meta: "Book a visit", href: "/contact" },
];

const faqs = [
  {
    q: "How fast can I get help with a deployed robot?",
    a: "Live chat and our priority phone line are staffed 24/7 with a typical first response under one minute. Enterprise fleets receive a named support engineer and guaranteed SLAs.",
  },
  {
    q: "Do you offer remote diagnostics?",
    a: "Yes. With your authorization, NETICS engineers can securely connect to any robot for live diagnostics, calibration and teleoperated recovery — resolving most issues without a site visit.",
  },
  {
    q: "What is covered under maintenance plans?",
    a: "Plans include predictive-care monitoring, firmware and OS updates, spare parts, scheduled servicing and unlimited support. Coverage scales from a single unit to fleets of thousands.",
  },
  {
    q: "Where do I find drivers, firmware and SDKs?",
    a: "Everything lives in the Downloads center, organized by product and platform. Firmware is also delivered automatically over the air through NETICS Cloud.",
  },
  {
    q: "Can my team get certified to operate NETICS robots?",
    a: "The NETICS Academy offers certified operator and engineer tracks with hands-on labs, available online and on-site, so your team can run, service and extend your fleet with confidence.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Center"
        title={
          <>
            Help that <span className="gradient-text">never sleeps</span>
          </>
        }
        subtitle="Knowledge, downloads, documentation and engineers — everything you need to deploy, run and scale your NETICS fleet, 24 hours a day."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/contact">Talk to Support</GlowButton>
          <GlowButton href="/contact" variant="outline">
            Browse Knowledge Base
          </GlowButton>
        </div>
      </PageHeader>

      {/* Search bar (visual) */}
      <Section className="py-8">
        <Reveal>
          <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-full glass-strong px-5 py-4">
            <span className="text-cyan">⌕</span>
            <span className="flex-1 text-sm text-muted">
              Search guides, articles, firmware and documentation…
            </span>
            <span className="hidden rounded-full bg-gradient-to-r from-cyan to-electric px-4 py-1.5 text-xs font-medium text-[#001016] sm:inline-flex">
              Search
            </span>
          </div>
        </Reveal>
      </Section>

      {/* Categories */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="Where to start"
          title={
            <>
              Explore <span className="gradient-text">support</span>
            </>
          }
          subtitle="Nine pathways into everything that keeps your robots running at peak performance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <GlassCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-electric/10 text-xl text-cyan">
                  {c.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Popular articles */}
      <Section className="py-14">
        <SectionHeading
          align="left"
          eyebrow="Popular articles"
          title={
            <>
              Most-read <span className="gradient-text">answers</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {popular.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <a
                href="/contact"
                className="group flex items-center justify-between gap-4 rounded-2xl glass px-5 py-4 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-cyan">
                    <span>{p.cat}</span>
                    <span className="text-muted">· {p.read}</span>
                  </div>
                  <p className="mt-1.5 font-medium">{p.title}</p>
                </div>
                <span className="text-cyan transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact support band */}
      <Section className="py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
                Reach a human, on any channel
              </h2>
              <p className="mt-2 max-w-xl text-muted">
                Our engineers are online around the clock — pick whatever works for you.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {channels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    className="group rounded-2xl glass p-5 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{ch.name}</span>
                      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cyan">
                        {ch.meta}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted">{ch.detail}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ accordion via native details/summary */}
      <Section className="py-14">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently <span className="gradient-text">asked</span>
            </>
          }
          subtitle="Quick answers to the questions our support team hears most."
        />
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-2xl glass px-5 py-4 transition-colors duration-300 open:border-cyan/30 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                  <span>{f.q}</span>
                  <span className="text-cyan transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Still need a hand?"
        subtitle="Our engineers are standing by 24/7 to keep your fleet moving."
        primary={{ label: "Contact Support", href: "/contact" }}
        secondary={{ label: "Explore Robots", href: "/robots" }}
      />
    </>
  );
}
