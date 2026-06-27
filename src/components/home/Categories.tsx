import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="Robot Categories"
        title={<>A robot for <span className="gradient-text">every mission</span></>}
        subtitle="From humanoid assistants to industrial arms, defence systems to farm robots — 18 categories engineered for the world's hardest problems."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.slug} delay={(i % 3) * 0.06}>
            <Link
              href={`/robots?category=${cat.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_20px_60px_-30px_var(--glow-cyan)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                <span className="grid h-8 w-8 place-items-center rounded-lg glass text-cyan transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">{cat.blurb}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {cat.items.slice(0, 4).map((it) => (
                  <span key={it} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-silver">
                    {it}
                  </span>
                ))}
                {cat.items.length > 4 && (
                  <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-cyan">
                    +{cat.items.length - 4}
                  </span>
                )}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
