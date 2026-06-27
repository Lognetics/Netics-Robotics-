"use client";

import { useMemo, useState } from "react";
import { Section, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import GlassCard from "@/components/ui/GlassCard";
import RobotViewer from "@/components/three/RobotViewer";
import { industries } from "@/lib/data";

/* ---------- Option model ---------- */
type Opt = { label: string; price: number };

const aiTiers: { label: string; price: number; accent: string; desc: string }[] = [
  { label: "Core", price: 0, accent: "#7c5cff", desc: "On-device essentials" },
  { label: "Pro", price: 9000, accent: "#2f6bff", desc: "NETICS Brain X1 + cloud" },
  { label: "Ultra", price: 22000, accent: "#19e3ff", desc: "Brain X2 · reasoning + learning" },
];

const heights: Opt[] = [
  { label: "0.9 m · compact", price: 0 },
  { label: "1.3 m · mid", price: 4000 },
  { label: "1.72 m · full", price: 9000 },
];
const weightClasses: Opt[] = [
  { label: "Light · ≤40 kg", price: 0 },
  { label: "Standard · ≤90 kg", price: 3500 },
  { label: "Heavy · ≤180 kg", price: 8000 },
];
const batteries: Opt[] = [
  { label: "8 hrs", price: 0 },
  { label: "12 hrs", price: 2200 },
  { label: "16 hrs", price: 4800 },
  { label: "24 hrs · swappable", price: 8500 },
];
const mobility: Opt[] = [
  { label: "Wheeled", price: 0 },
  { label: "Tracked", price: 3000 },
  { label: "Quadruped", price: 11000 },
  { label: "Bipedal", price: 19000 },
];
const aiTierBase: Opt[] = aiTiers.map((t) => ({ label: t.label, price: t.price }));

const sensors = [
  { label: "LiDAR", price: 3200 },
  { label: "Thermal", price: 2400 },
  { label: "Ultrasonic", price: 900 },
  { label: "RTK GPS", price: 2800 },
  { label: "Force / torque", price: 1800 },
  { label: "Gas / environment", price: 1500 },
];
const accessories = [
  { label: "Auto-charge dock", price: 1900 },
  { label: "Tool changer", price: 2600 },
  { label: "Cargo modules ×3", price: 1400 },
  { label: "Weatherproofing IP67", price: 2200 },
  { label: "Spare battery", price: 1200 },
  { label: "Fleet beacon", price: 800 },
];
const softwareModules = [
  { label: "Fleet manager", price: 2500 },
  { label: "Digital twin", price: 3400 },
  { label: "Analytics suite", price: 1800 },
  { label: "OTA updates", price: 1200 },
  { label: "Developer API", price: 2000 },
];
const languages = ["English", "French", "Arabic", "Swahili", "Hausa", "Yoruba", "Spanish", "Mandarin"];
const LANG_PRICE = 600;
const armOptions: Opt[] = [
  { label: "None", price: 0 },
  { label: "Single arm", price: 6000 },
  { label: "Dual arm", price: 13500 },
];

const BASE_PRICE = 18500;

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}
function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function BuildPage() {
  const [industry, setIndustry] = useState(industries[3]);
  const [height, setHeight] = useState(heights[1].label);
  const [weight, setWeight] = useState(weightClasses[1].label);
  const [battery, setBattery] = useState(batteries[1].label);
  const [mobilityType, setMobilityType] = useState(mobility[0].label);
  const [aiTier, setAiTier] = useState(aiTiers[1].label);
  const [arms, setArms] = useState(armOptions[1].label);
  const [vision, setVision] = useState(true);
  const [voice, setVoice] = useState(true);
  const [branding, setBranding] = useState(false);
  const [selSensors, setSelSensors] = useState<string[]>(["LiDAR"]);
  const [selAccessories, setSelAccessories] = useState<string[]>(["Auto-charge dock"]);
  const [selSoftware, setSelSoftware] = useState<string[]>(["Fleet manager", "OTA updates"]);
  const [selLangs, setSelLangs] = useState<string[]>(["English", "French"]);
  const [units, setUnits] = useState(1);

  const [sent, setSent] = useState(false);

  const accent = useMemo(
    () => aiTiers.find((t) => t.label === aiTier)?.accent ?? "#19e3ff",
    [aiTier]
  );

  const priceOf = (list: Opt[], label: string) =>
    list.find((o) => o.label === label)?.price ?? 0;

  const unitPrice = useMemo(() => {
    let p = BASE_PRICE;
    p += priceOf(heights, height);
    p += priceOf(weightClasses, weight);
    p += priceOf(batteries, battery);
    p += priceOf(mobility, mobilityType);
    p += priceOf(aiTierBase, aiTier);
    p += priceOf(armOptions, arms);
    if (vision) p += 4200;
    if (voice) p += 2800;
    if (branding) p += 3500;
    p += selSensors.reduce((s, l) => s + (sensors.find((x) => x.label === l)?.price ?? 0), 0);
    p += selAccessories.reduce((s, l) => s + (accessories.find((x) => x.label === l)?.price ?? 0), 0);
    p += selSoftware.reduce((s, l) => s + (softwareModules.find((x) => x.label === l)?.price ?? 0), 0);
    p += Math.max(0, selLangs.length - 1) * LANG_PRICE;
    return p;
  }, [
    height, weight, battery, mobilityType, aiTier, arms, vision, voice, branding,
    selSensors, selAccessories, selSoftware, selLangs,
  ]);

  const total = unitPrice * units;
  const fleetDiscount = units >= 10 ? 0.12 : units >= 5 ? 0.07 : 0;
  const finalTotal = Math.round(total * (1 - fleetDiscount));

  return (
    <>
      {/* Heading */}
      <section className="relative overflow-hidden pt-36 pb-10">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow>Build Your Robot</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Configure a <span className="gradient-text">custom NETICS robot</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Spec your machine option by option and watch the price update live. When it&apos;s
              perfect, send it to our engineers for a formal quotation.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-8">
        <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
          {/* ---------- Configurator ---------- */}
          <div className="flex flex-col gap-6">
            {/* Industry */}
            <ConfigCard title="Industry" hint="We tune defaults to your sector.">
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <Chip key={i} active={industry === i} onClick={() => setIndustry(i)}>
                    {i}
                  </Chip>
                ))}
              </div>
            </ConfigCard>

            {/* Form factor */}
            <ConfigCard title="Form factor">
              <Group label="Height">
                {heights.map((o) => (
                  <Chip key={o.label} active={height === o.label} onClick={() => setHeight(o.label)} price={o.price}>
                    {o.label}
                  </Chip>
                ))}
              </Group>
              <Group label="Weight class">
                {weightClasses.map((o) => (
                  <Chip key={o.label} active={weight === o.label} onClick={() => setWeight(o.label)} price={o.price}>
                    {o.label}
                  </Chip>
                ))}
              </Group>
              <Group label="Mobility">
                {mobility.map((o) => (
                  <Chip key={o.label} active={mobilityType === o.label} onClick={() => setMobilityType(o.label)} price={o.price}>
                    {o.label}
                  </Chip>
                ))}
              </Group>
              <Group label="Arms">
                {armOptions.map((o) => (
                  <Chip key={o.label} active={arms === o.label} onClick={() => setArms(o.label)} price={o.price}>
                    {o.label}
                  </Chip>
                ))}
              </Group>
            </ConfigCard>

            {/* Power */}
            <ConfigCard title="Power & runtime">
              <Group label="Battery / runtime">
                {batteries.map((o) => (
                  <Chip key={o.label} active={battery === o.label} onClick={() => setBattery(o.label)} price={o.price}>
                    {o.label}
                  </Chip>
                ))}
              </Group>
            </ConfigCard>

            {/* Intelligence */}
            <ConfigCard title="Intelligence">
              <Group label="AI tier">
                {aiTiers.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setAiTier(t.label)}
                    className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                      aiTier === t.label
                        ? "border-cyan/50 bg-cyan/[0.07] shadow-[0_0_24px_-12px_var(--glow-cyan)]"
                        : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.accent }} />
                      {t.label}
                    </span>
                    <span className="mt-1 text-xs text-muted">{t.desc}</span>
                    <span className="mt-1 text-xs text-cyan">{t.price ? "+" + fmt(t.price) : "Included"}</span>
                  </button>
                ))}
              </Group>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ToggleRow label="NETICS Vision" desc="360° depth + recognition (+$4,200)" on={vision} set={setVision} />
                <ToggleRow label="NETICS Voice" desc="Multilingual conversation (+$2,800)" on={voice} set={setVoice} />
              </div>
            </ConfigCard>

            {/* Sensors */}
            <ConfigCard title="Sensors" hint="Pick any combination.">
              <div className="flex flex-wrap gap-2">
                {sensors.map((s) => (
                  <Chip
                    key={s.label}
                    active={selSensors.includes(s.label)}
                    onClick={() => setSelSensors((p) => toggle(p, s.label))}
                    price={s.price}
                  >
                    {s.label}
                  </Chip>
                ))}
              </div>
            </ConfigCard>

            {/* Software */}
            <ConfigCard title="Software">
              <div className="flex flex-wrap gap-2">
                {softwareModules.map((s) => (
                  <Chip
                    key={s.label}
                    active={selSoftware.includes(s.label)}
                    onClick={() => setSelSoftware((p) => toggle(p, s.label))}
                    price={s.price}
                  >
                    {s.label}
                  </Chip>
                ))}
              </div>
            </ConfigCard>

            {/* Languages */}
            <ConfigCard title="Languages" hint={`First language free · +$${LANG_PRICE} each after.`}>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <Chip
                    key={l}
                    active={selLangs.includes(l)}
                    onClick={() => setSelLangs((p) => toggle(p, l))}
                  >
                    {l}
                  </Chip>
                ))}
              </div>
            </ConfigCard>

            {/* Accessories */}
            <ConfigCard title="Accessories">
              <div className="flex flex-wrap gap-2">
                {accessories.map((a) => (
                  <Chip
                    key={a.label}
                    active={selAccessories.includes(a.label)}
                    onClick={() => setSelAccessories((p) => toggle(p, a.label))}
                    price={a.price}
                  >
                    {a.label}
                  </Chip>
                ))}
              </div>
            </ConfigCard>

            {/* Branding + units */}
            <ConfigCard title="Branding & fleet">
              <ToggleRow
                label="Custom branding"
                desc="Your livery, logo and UI theme (+$3,500)"
                on={branding}
                set={setBranding}
              />
              <Group label="Units">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 rounded-full glass p-1">
                    <button
                      type="button"
                      onClick={() => setUnits((u) => Math.max(1, u - 1))}
                      className="h-9 w-9 rounded-full text-lg text-silver transition-colors hover:bg-white/10 hover:text-white"
                      aria-label="Decrease units"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-lg font-semibold text-white">{units}</span>
                    <button
                      type="button"
                      onClick={() => setUnits((u) => Math.min(999, u + 1))}
                      className="h-9 w-9 rounded-full text-lg text-silver transition-colors hover:bg-white/10 hover:text-white"
                      aria-label="Increase units"
                    >
                      +
                    </button>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={Math.min(units, 50)}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="flex-1 accent-cyan"
                    aria-label="Units"
                  />
                </div>
                {fleetDiscount > 0 && (
                  <p className="text-xs text-cyan">
                    Fleet discount applied: −{Math.round(fleetDiscount * 100)}%
                  </p>
                )}
              </Group>
            </ConfigCard>
          </div>

          {/* ---------- Live summary (sticky) ---------- */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <GlassCard hover={false} className="overflow-hidden p-0">
              <div className="relative">
                <RobotViewer accent={accent} className="h-[300px]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background-2 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Your build</h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: `${accent}1a`, color: accent }}
                  >
                    {aiTier} AI
                  </span>
                </div>

                <dl className="mt-4 space-y-2 text-sm">
                  <SummaryRow k="Industry" v={industry} />
                  <SummaryRow k="Height" v={height} />
                  <SummaryRow k="Weight" v={weight} />
                  <SummaryRow k="Mobility" v={mobilityType} />
                  <SummaryRow k="Arms" v={arms} />
                  <SummaryRow k="Runtime" v={battery} />
                  <SummaryRow k="Vision / Voice" v={`${vision ? "Vision" : "—"} · ${voice ? "Voice" : "—"}`} />
                  <SummaryRow k="Sensors" v={selSensors.length ? selSensors.join(", ") : "None"} />
                  <SummaryRow k="Software" v={selSoftware.length ? `${selSoftware.length} modules` : "None"} />
                  <SummaryRow k="Languages" v={selLangs.length ? selLangs.join(", ") : "None"} />
                  <SummaryRow k="Accessories" v={selAccessories.length ? `${selAccessories.length} items` : "None"} />
                  <SummaryRow k="Branding" v={branding ? "Custom" : "Standard"} />
                  <SummaryRow k="Units" v={String(units)} />
                </dl>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>Per unit</span>
                    <span className="text-white">{fmt(unitPrice)}</span>
                  </div>
                  {fleetDiscount > 0 && (
                    <div className="mt-1 flex items-center justify-between text-sm text-cyan">
                      <span>Fleet discount</span>
                      <span>−{Math.round(fleetDiscount * 100)}%</span>
                    </div>
                  )}
                  <div className="mt-3 flex items-end justify-between border-t border-white/10 pt-3">
                    <span className="text-sm text-silver">Estimated total</span>
                    <span className="gradient-text text-3xl font-semibold">{fmt(finalTotal)}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    Indicative estimate. Final pricing confirmed in your quotation.
                  </p>
                </div>

                <div className="mt-4">
                  <GlowButton href="#quote" className="w-full">
                    Request quotation →
                  </GlowButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* ---------- Quotation form ---------- */}
      <Section id="quote" className="py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative mx-auto max-w-2xl">
              {sent ? (
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-electric text-3xl text-[#001016] animate-pulse-glow">
                    ✓
                  </div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Quotation requested</h3>
                  <p className="max-w-md text-muted">
                    We&apos;ve captured your configuration ({units} unit{units > 1 ? "s" : ""},
                    est. {fmt(finalTotal)}). A NETICS engineer will send a formal quote within one
                    business day.
                  </p>
                  <GlowButton variant="outline" onClick={() => setSent(false)}>
                    Edit and resubmit
                  </GlowButton>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <Eyebrow>Get your quote</Eyebrow>
                    <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                      Send this build to our engineers
                    </h3>
                    <p className="mt-2 text-muted">
                      No commitment — just a tailored quotation for your configuration.
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="mt-8 grid gap-5 sm:grid-cols-2"
                  >
                    <input required type="text" placeholder="Full name" className={inputCls} />
                    <input required type="email" placeholder="Work email" className={inputCls} />
                    <input type="text" placeholder="Company" className={`${inputCls} sm:col-span-2`} />
                    <div className="sm:col-span-2">
                      <GlowButton type="submit" className="w-full">
                        Request quotation
                      </GlowButton>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ---------- Local UI helpers ---------- */

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-cyan/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan/20";

function ConfigCard({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <GlassCard hover={false}>
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
          {hint && <span className="text-xs text-muted">{hint}</span>}
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </GlassCard>
    </Reveal>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-silver">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
  price,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  price?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? "border-cyan/50 bg-cyan/10 text-cyan shadow-[0_0_22px_-12px_var(--glow-cyan)]"
          : "border-white/10 text-silver hover:border-white/25 hover:text-white"
      }`}
    >
      {children}
      {price ? <span className={`ml-1.5 text-xs ${active ? "text-cyan/80" : "text-muted"}`}>+${price.toLocaleString()}</span> : null}
    </button>
  );
}

function ToggleRow({
  label,
  desc,
  on,
  set,
}: {
  label: string;
  desc: string;
  on: boolean;
  set: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => set(!on)}
      className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
        on ? "border-cyan/40 bg-cyan/[0.06]" : "border-white/10 hover:border-white/25"
      }`}
    >
      <span>
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block text-xs text-muted">{desc}</span>
      </span>
      <span
        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300 ${
          on ? "bg-gradient-to-r from-cyan to-electric" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300 ${
            on ? "left-[1.375rem]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
}

function SummaryRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
      <dt className="text-muted">{k}</dt>
      <dd className="max-w-[60%] text-right text-white">{v}</dd>
    </div>
  );
}
