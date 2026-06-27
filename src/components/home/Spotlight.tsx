import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { robots } from "@/lib/data";

export default function Spotlight() {
  const atlas = robots.find((r) => r.slug === "atlas-one")!;
  return (
    <Section className="py-20">
      <Reveal>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 lg:grid-cols-2">
          <div className="relative aspect-square min-h-[340px] lg:aspect-auto lg:h-full">
            <Image src={atlas.gallery[1]} alt={atlas.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-2/40" />
          </div>
          <div className="p-8 sm:p-12">
            <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-cyan">Flagship humanoid</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{atlas.name}</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted">{atlas.description[0]}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {atlas.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-silver">
                  <span className="mt-0.5 text-cyan">✓</span> {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div>
                <div className="text-xs text-muted">From</div>
                <div className="text-2xl font-semibold text-white">${atlas.priceFrom.toLocaleString()}</div>
              </div>
              <GlowButton href={`/robots/${atlas.slug}`}>View & Buy</GlowButton>
              <Link href="/robots" className="text-sm text-silver hover:text-white">Compare models →</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
