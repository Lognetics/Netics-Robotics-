"use client";

import { useState } from "react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import GlassCard from "@/components/ui/GlassCard";
import { site, socials } from "@/lib/site";
import { industries } from "@/lib/data";

const intents = ["Quote", "Demo", "Consultation", "Distributor", "Support"] as const;
type Intent = (typeof intents)[number];

const intentBlurb: Record<Intent, string> = {
  Quote: "Get pricing for a fleet, a single unit, or a custom build.",
  Demo: "See a NETICS robot live — virtual or at your site.",
  Consultation: "Map a deployment with our solutions engineers.",
  Distributor: "Bring NETICS robotics to your territory.",
  Support: "Help with an existing robot, fleet or contract.",
};

const offices = [
  { city: "Lagos", role: "Global HQ & Manufacturing", note: "Yaba, Lagos · Nigeria" },
  { city: "Nairobi", role: "East Africa Hub", note: "Westlands · Kenya" },
  { city: "Dubai", role: "MEA Commercial", note: "DIFC · UAE" },
  { city: "London", role: "Europe & Partnerships", note: "Shoreditch · UK" },
];

const supportHours = [
  { label: "Sales & quotations", value: "Mon–Sat · 08:00–20:00 WAT" },
  { label: "Technical support", value: "24 / 7 · Every day" },
  { label: "Fleet emergencies", value: "Always-on · < 15 min SLA" },
];

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("Quote");
  const [demoMode, setDemoMode] = useState<"Virtual" | "On-site">("Virtual");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Heading */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow>Talk to NETICS</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s build your <span className="gradient-text">robotic future</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Request a quote, book a live demo, or schedule a consultation with our
              robotics engineers. Real humans. Fast answers. No pressure.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <Reveal>
            <GlassCard hover={false} className="p-7 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center gap-5 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-electric text-3xl text-[#001016] animate-pulse-glow">
                    ✓
                  </div>
                  <h3 className="text-2xl font-semibold">Message received.</h3>
                  <p className="max-w-md text-muted">
                    Thanks for reaching out about a <span className="text-cyan">{intent.toLowerCase()}</span>.
                    A NETICS specialist will reply to your inbox within one business day.
                  </p>
                  <GlowButton variant="outline" onClick={() => setSubmitted(false)}>
                    Send another message
                  </GlowButton>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
                    <p className="mt-1 text-sm text-muted">{intentBlurb[intent]}</p>
                  </div>

                  {/* Intent selector */}
                  <div>
                    <label className="mb-2.5 block text-xs font-medium uppercase tracking-[0.18em] text-silver">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {intents.map((it) => {
                        const active = it === intent;
                        return (
                          <button
                            key={it}
                            type="button"
                            onClick={() => setIntent(it)}
                            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                              active
                                ? "border-cyan/50 bg-cyan/10 text-cyan shadow-[0_0_24px_-10px_var(--glow-cyan)]"
                                : "border-white/10 text-silver hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {it}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name">
                      <input
                        required
                        type="text"
                        placeholder="Ada Lovelace"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Work email">
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Company">
                      <input type="text" placeholder="Your organisation" className={inputCls} />
                    </Field>
                    <Field label="Industry">
                      <select className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select industry
                        </option>
                        {industries.map((i) => (
                          <option key={i} value={i} className="bg-background-2">
                            {i}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="How can we help?">
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your use case, fleet size or timeline…"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted">
                      By submitting you agree to be contacted by {site.name}.
                    </p>
                    <GlowButton type="submit">Send message →</GlowButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </Reveal>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <GlassCard hover={false}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-cyan">Direct line</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block text-lg font-medium text-white transition-colors hover:text-cyan"
                >
                  {site.email}
                </a>
                <p className="mt-1 text-sm text-muted">{site.location}</p>
              </GlassCard>
            </Reveal>

            {/* Book a demo */}
            <Reveal delay={0.1}>
              <GlassCard hover={false}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-cyan">Book a demo</h3>
                <p className="mt-2 text-sm text-muted">
                  Watch a NETICS robot in action and ask anything, live.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-1 rounded-full glass p-1">
                  {(["Virtual", "On-site"] as const).map((m) => {
                    const active = m === demoMode;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setDemoMode(m)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          active ? "bg-gradient-to-r from-cyan to-electric text-[#001016]" : "text-silver hover:text-white"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 text-sm text-silver">
                  {demoMode === "Virtual"
                    ? "30-minute guided video session with a solutions engineer — no travel required."
                    : "We bring a unit to your facility for a hands-on pilot and integration review."}
                </p>
                <div className="mt-4">
                  <GlowButton variant="outline" className="w-full" onClick={() => setIntent("Demo")}>
                    Reserve a {demoMode.toLowerCase()} slot
                  </GlowButton>
                </div>
              </GlassCard>
            </Reveal>

            {/* Support hours */}
            <Reveal delay={0.15}>
              <GlassCard hover={false}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-cyan">Support hours</h3>
                <ul className="mt-3 space-y-3">
                  {supportHours.map((s) => (
                    <li key={s.label} className="flex items-start justify-between gap-4 text-sm">
                      <span className="text-silver">{s.label}</span>
                      <span className="text-right text-white">{s.value}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Offices */}
      <Section className="py-16">
        <SectionHeading
          eyebrow="Find us"
          title={
            <>
              Local presence, <span className="gradient-text">global reach</span>
            </>
          }
          subtitle="Hubs across four continents — with engineers and spare parts close to your fleet."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-cyan">{o.role}</div>
                <div className="mt-3 text-xl font-semibold">{o.city}</div>
                <div className="mt-1 text-sm text-muted">{o.note}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Socials */}
      <Section className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 text-center sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-60" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <h3 className="text-2xl font-semibold sm:text-3xl">Follow the build</h3>
              <p className="text-muted">
                Robots, breakthroughs and behind-the-scenes from the labs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-full glass px-5 py-2.5 text-sm text-silver transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-cyan/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-silver">{label}</span>
      {children}
    </label>
  );
}
