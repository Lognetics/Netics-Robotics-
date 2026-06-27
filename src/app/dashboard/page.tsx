"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { dashboardMetrics } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Animated count-up metric card                                       */
/* ------------------------------------------------------------------ */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isFloat = !Number.isInteger(value);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  const formatted = isFloat
    ? display.toFixed(1)
    : Math.round(display).toLocaleString("en-US");

  return (
    <span className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Faux-live sparkline bars                                            */
/* ------------------------------------------------------------------ */
function LiveBars() {
  const COUNT = 28;
  // Deterministic seed (SSR-safe) — varied later inside the effect only.
  const seed = (i: number) => 30 + Math.round(40 * Math.abs(Math.sin(i * 1.7)));
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: COUNT }, (_, i) => seed(i)),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1];
        // random walk, clamped 18..96
        const delta = Math.round((Math.random() - 0.45) * 22);
        next.push(Math.max(18, Math.min(96, last + delta)));
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-28 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-cyan/20 to-cyan transition-[height] duration-700 ease-out"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Live pulsing indicator                                              */
/* ------------------------------------------------------------------ */
function LivePill({ label = "LIVE" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-cyan">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan/60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
      </span>
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Static seed data (SSR-safe — no random at render)                   */
/* ------------------------------------------------------------------ */
type FleetRow = {
  id: string;
  location: string;
  task: string;
  battery: number;
  status: "Active" | "Charging" | "Idle" | "Maintenance";
};

const FLEET_SEED: FleetRow[] = [
  { id: "ATL-0192", location: "Lagos HQ", task: "Concierge patrol", battery: 88, status: "Active" },
  { id: "SNT-0461", location: "Nairobi Port", task: "Perimeter sweep", battery: 64, status: "Active" },
  { id: "PRT-1130", location: "Cairo Medical", task: "Med delivery", battery: 31, status: "Charging" },
  { id: "FRG-0078", location: "Accra Plant", task: "Weld cycle", battery: 92, status: "Active" },
  { id: "HRV-0540", location: "Kano Fields", task: "Crop scan", battery: 47, status: "Active" },
  { id: "CMP-2201", location: "Joburg Home", task: "Standby", battery: 79, status: "Idle" },
  { id: "SNT-0488", location: "Kigali Mall", task: "Diagnostics", battery: 12, status: "Maintenance" },
  { id: "PRT-1188", location: "Dakar Hotel", task: "Room service", battery: 56, status: "Active" },
];

const STATUS_STYLES: Record<FleetRow["status"], string> = {
  Active: "text-cyan border-cyan/30 bg-cyan/10",
  Charging: "text-electric border-electric/30 bg-electric/10",
  Idle: "text-silver border-white/15 bg-white/5",
  Maintenance: "text-violet border-violet/30 bg-violet/10",
};

const ALERTS = [
  { robot: "SNT-0488", level: "Critical", msg: "Battery cell degradation — schedule swap within 24h", region: "Kigali" },
  { robot: "PRT-1130", level: "Warning", msg: "Joint actuator temperature trending high", region: "Cairo" },
  { robot: "FRG-0078", level: "Info", msg: "Tool changer due for calibration in 40 cycles", region: "Accra" },
  { robot: "HRV-0540", level: "Warning", msg: "Tire wear on track module above threshold", region: "Kano" },
];

const ALERT_STYLES: Record<string, string> = {
  Critical: "text-violet border-violet/40",
  Warning: "text-cyan border-cyan/40",
  Info: "text-silver border-white/15",
};

const REGIONS = [
  { name: "West Africa", count: 4820, pct: 41 },
  { name: "East Africa", count: 3110, pct: 26 },
  { name: "North Africa", count: 1980, pct: 17 },
  { name: "Southern Africa", count: 1240, pct: 10 },
  { name: "Rest of World", count: 692, pct: 6 },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function DashboardPage() {
  // Faux-live battery + status drift for the fleet table.
  const [fleet, setFleet] = useState<FleetRow[]>(FLEET_SEED);
  const [onlineDelta, setOnlineDelta] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFleet((prev) =>
        prev.map((r) => {
          if (r.status === "Charging") {
            return { ...r, battery: Math.min(100, r.battery + 2) };
          }
          if (r.status === "Active") {
            return { ...r, battery: Math.max(5, r.battery - (Math.random() < 0.5 ? 1 : 0)) };
          }
          return r;
        }),
      );
      setOnlineDelta((d) => d + Math.round(Math.random() * 3));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Heading (client page — rendered manually, no metadata export) */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <Section>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
                NETICS Cloud
              </span>
              <LivePill />
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Live Fleet <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Real-time telemetry, predictive maintenance and regional deployments across the global
              NETICS robot fleet — streamed from NETICS Cloud.
            </p>
          </div>
        </Section>
      </section>

      {/* Metric cards row */}
      <Section className="pb-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.05 * i}>
              <GlassCard className="h-full">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {m.label}
                  </span>
                  <span className="text-3xl font-bold leading-none gradient-text sm:text-4xl">
                    {m.label === "Robots Online" ? (
                      <span className="tabular-nums">
                        {(m.value + onlineDelta).toLocaleString("en-US")}
                      </span>
                    ) : (
                      <CountUp value={m.value} suffix={m.suffix} />
                    )}
                  </span>
                  <span className="text-xs text-cyan">{m.trend}</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Live activity + fleet table */}
      <Section className="py-4">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
          {/* Robots online sparkline */}
          <Reveal>
            <GlassCard hover={false} className="h-full">
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-tight">Robots Online</span>
                  <LivePill label="Streaming" />
                </div>
                <LiveBars />
                <p className="text-xs leading-relaxed text-muted">
                  Concurrent active units per 15-second window. Sampled live from the fleet mesh.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* Fleet status table */}
          <Reveal delay={0.05}>
            <GlassCard hover={false} className="h-full overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <span className="text-sm font-semibold tracking-tight">Fleet Status</span>
                <LivePill />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                      <th className="px-6 py-3 font-medium">Robot ID</th>
                      <th className="px-4 py-3 font-medium">Location</th>
                      <th className="px-4 py-3 font-medium">Task</th>
                      <th className="px-4 py-3 font-medium">Battery</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fleet.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-white/5 transition-colors hover:bg-white/[0.03]"
                      >
                        <td className="px-6 py-3 font-mono text-xs text-silver">{r.id}</td>
                        <td className="px-4 py-3 text-muted">{r.location}</td>
                        <td className="px-4 py-3 text-muted">{r.task}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-14 overflow-hidden rounded-full bg-white/10">
                              <div
                                className={`h-full rounded-full transition-[width] duration-700 ${
                                  r.battery < 20
                                    ? "bg-violet"
                                    : r.battery < 50
                                      ? "bg-electric"
                                      : "bg-cyan"
                                }`}
                                style={{ width: `${r.battery}%` }}
                              />
                            </div>
                            <span className="tabular-nums text-xs text-silver">{r.battery}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium ${STATUS_STYLES[r.status]}`}
                          >
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Battery health + maintenance alerts */}
      <Section className="py-4">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Battery health bars */}
          <Reveal>
            <GlassCard hover={false} className="h-full">
              <div className="flex flex-col gap-5">
                <span className="text-sm font-semibold tracking-tight">Fleet Battery Health</span>
                <div className="flex flex-col gap-4">
                  {fleet.slice(0, 6).map((r) => (
                    <div key={r.id} className="flex items-center gap-3">
                      <span className="w-20 flex-none font-mono text-xs text-muted">{r.id}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full transition-[width] duration-700 ${
                            r.battery < 20
                              ? "bg-violet"
                              : r.battery < 50
                                ? "bg-electric"
                                : "bg-gradient-to-r from-cyan to-electric"
                          }`}
                          style={{ width: `${r.battery}%` }}
                        />
                      </div>
                      <span className="w-10 flex-none text-right tabular-nums text-xs text-silver">
                        {r.battery}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Predictive maintenance alerts */}
          <Reveal delay={0.05}>
            <GlassCard hover={false} className="h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-tight">
                    Predictive Maintenance
                  </span>
                  <LivePill label="AI" />
                </div>
                <ul className="flex flex-col gap-3">
                  {ALERTS.map((a) => (
                    <li
                      key={a.robot}
                      className={`rounded-xl border-l-2 bg-white/[0.02] px-4 py-3 ${ALERT_STYLES[a.level]}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-silver">{a.robot}</span>
                        <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em]">
                          {a.level}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{a.msg}</p>
                      <span className="mt-1 inline-block text-[0.65rem] text-muted/70">
                        {a.region}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* Deployments by region */}
      <Section className="py-4">
        <Reveal>
          <GlassCard hover={false}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight">Deployments by Region</span>
                <LivePill label="Live" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {REGIONS.map((reg) => (
                  <div key={reg.name} className="flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted">{reg.name}</span>
                      <span className="tabular-nums text-xs text-cyan">{reg.pct}%</span>
                    </div>
                    <div className="text-2xl font-bold tabular-nums gradient-text">
                      {reg.count.toLocaleString("en-US")}
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-electric"
                        style={{ width: `${reg.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* CTA row */}
      <Section className="py-16">
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Run your fleet on <span className="gradient-text">NETICS Cloud</span>
            </h2>
            <p className="max-w-xl text-pretty text-muted">
              Telemetry, OTA updates, predictive maintenance and digital twins — for one robot or ten
              thousand.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <GlowButton href="/contact">Book a Demo</GlowButton>
              <GlowButton href="/ecosystem" variant="outline">
                Explore the Ecosystem
              </GlowButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
