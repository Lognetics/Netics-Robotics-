"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import GlowButton from "@/components/ui/GlowButton";
import { robots } from "@/lib/data";

const RobotScene = dynamic(() => import("@/components/three/RobotScene"), { ssr: false });

const VIEWS = ["360° View", "Exploded", "Walking", "AI Interaction"];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState(0);
  const robot = robots[active];

  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="3D Robot Showroom"
        title={<>Step inside the <span className="gradient-text">showroom</span></>}
        subtitle="Rotate, zoom and explore every machine in real time. Inspect components, watch interactions and experience engineering up close."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Stage */}
        <div className="relative overflow-hidden rounded-3xl glass-strong border border-white/10">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(60% 60% at 50% 50%, ${robot.accent}22, transparent 70%)` }}
          />
          <div className="relative h-[460px] sm:h-[540px]">
            <RobotScene accent={robot.accent} key={robot.slug} />
          </div>

          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {VIEWS.map((v, i) => (
              <button
                key={v}
                onClick={() => setView(i)}
                className={`rounded-full px-3 py-1.5 text-xs transition-all ${
                  view === i ? "bg-gradient-to-r from-electric to-cyan text-[#001016]" : "glass text-silver hover:text-white"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan">{robot.series}</p>
              <h3 className="text-2xl font-semibold text-white">{robot.name}</h3>
            </div>
            <span className="rounded-full glass px-3 py-1 text-xs text-silver">{robot.status}</span>
          </div>
        </div>

        {/* Panel */}
        <div className="flex flex-col gap-5">
          <div className="rounded-3xl glass p-6">
            <p className="text-sm leading-relaxed text-silver">{robot.tagline}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {robot.specs.slice(0, 6).map((s) => (
                <div key={s.label} className="rounded-xl bg-white/[0.03] px-3 py-2.5">
                  <div className="text-[11px] uppercase tracking-wide text-muted">{s.label}</div>
                  <div className="text-sm font-medium text-white">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">From</div>
                <div className="text-xl font-semibold text-white">${robot.priceFrom.toLocaleString()}</div>
              </div>
              <GlowButton href={`/robots/${robot.slug}`} variant="outline">View Robot</GlowButton>
            </div>
          </div>

          {/* Robot selector */}
          <div className="grid grid-cols-3 gap-2">
            {robots.map((r, i) => (
              <button
                key={r.slug}
                onClick={() => { setActive(i); setView(0); }}
                className={`rounded-xl border p-3 text-left transition-all ${
                  active === i ? "border-cyan/50 bg-white/[0.04]" : "border-white/5 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <div className="mb-2 h-1.5 w-8 rounded-full" style={{ background: r.accent }} />
                <div className="text-xs font-medium text-white">{r.name.replace("NETICS ", "")}</div>
                <div className="text-[10px] text-muted">{r.series}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
