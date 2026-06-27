"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import RobotCard from "@/components/ui/RobotCard";
import CTAStrip from "@/components/ui/CTAStrip";
import { robots, categories } from "@/lib/data";

const ALL = "All";

// Build the chip list from the robots' own categories, plus an "All" option.
const robotCategories = Array.from(new Set(robots.map((r) => r.category)));
const chips = [ALL, ...robotCategories];

// Map a category slug (from ?category=) onto a robot category label.
function slugToCategory(slug: string | null): string {
  if (!slug) return ALL;
  const direct = robotCategories.find((c) => c.toLowerCase() === slug.toLowerCase());
  if (direct) return direct;
  const cat = categories.find((c) => c.slug === slug.toLowerCase());
  if (cat) {
    const byTitle = robotCategories.find((c) =>
      cat.title.toLowerCase().includes(c.toLowerCase())
    );
    if (byTitle) return byTitle;
  }
  return ALL;
}

function RobotsLineup() {
  const searchParams = useSearchParams();
  const initial = slugToCategory(searchParams.get("category"));
  const [active, setActive] = useState<string>(initial);

  const filtered = useMemo(
    () => (active === ALL ? robots : robots.filter((r) => r.category === active)),
    [active]
  );

  return (
    <>
      {/* Hero header (client page can't export metadata) */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
            The Lineup
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Meet the <span className="gradient-text">NETICS fleet</span>
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Humanoid, security, service, industrial, agriculture and home robots — each one
            intelligent, connected and built to work from day one.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <Section className="pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {chips.map((chip) => {
            const isActive = chip === active;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setActive(chip)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan to-electric text-[#001016] shadow-[0_0_30px_-8px_var(--glow-cyan)]"
                    : "glass text-silver hover:text-white hover:border-white/20"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </Section>

      {/* Grid with layout animation */}
      <Section className="py-10">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((robot) => (
              <motion.div
                key={robot.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <RobotCard robot={robot} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted">
            No robots in this category yet — new models land every quarter.
          </p>
        )}
      </Section>

      {/* Comparison teaser */}
      <Section className="py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 p-8 sm:p-12">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan">
                  Compare
                </span>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Specs, payloads and runtimes — side by side
                </h2>
                <p className="mt-3 text-pretty text-muted">
                  Weigh every platform against your workload. Compare reach, runtime, sensors and
                  price, then spec the exact configuration your operation needs.
                </p>
                <div className="mt-5 flex flex-wrap gap-6">
                  {robotCategories.slice(0, 4).map((c) => (
                    <div key={c}>
                      <div className="text-[11px] uppercase tracking-wide text-muted">{c}</div>
                      <div className="text-sm font-medium text-white">
                        {robots.filter((r) => r.category === c).length} model
                        {robots.filter((r) => r.category === c).length === 1 ? "" : "s"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <GlowButton href="/build">Build Your Robot</GlowButton>
                <GlowButton href="/contact" variant="outline">
                  Book a Demo
                </GlowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Why the lineup */}
      <Section className="py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "One brain, every robot",
              desc: "NETICS Brain powers vision, voice and reasoning across the entire fleet.",
            },
            {
              title: "Cloud-connected",
              desc: "Fleet management, OTA updates and digital twins from NETICS Cloud.",
            },
            {
              title: "Deploy at any scale",
              desc: "From a single unit to thousands — integrated, supported and serviced.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <GlassCard className="flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Find your robot"
        subtitle="Configure a platform for your operation or browse the full marketplace — engineered in Africa, shipping worldwide."
        primary={{ label: "Build Your Robot", href: "/build" }}
        secondary={{ label: "Open Marketplace", href: "/marketplace" }}
      />
    </>
  );
}

export default function RobotsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <RobotsLineup />
    </Suspense>
  );
}
