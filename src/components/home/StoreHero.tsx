import Image from "next/image";
import Link from "next/link";
import GlowButton from "@/components/ui/GlowButton";

export default function StoreHero() {
  return (
    <section className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/robots/atlas-hero.jpg"
          alt="NETICS Atlas One humanoid robot"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-wide text-silver">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
            The robot store · Free global shipping over $25,000
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Buy the world's most advanced{" "}
            <span className="gradient-text">AI robots</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-silver sm:text-lg">
            Humanoids, industrial arms, drones, security and home robots — shipped, installed
            and supported worldwide. Browse the store, compare models and order in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GlowButton href="/robots">Shop All Robots</GlowButton>
            <GlowButton href="/robots/atlas-one" variant="outline">Meet Atlas One</GlowButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2"><span className="text-cyan">✓</span> 2-year warranty</span>
            <span className="flex items-center gap-2"><span className="text-cyan">✓</span> Financing available</span>
            <span className="flex items-center gap-2"><span className="text-cyan">✓</span> On-site setup</span>
            <span className="flex items-center gap-2"><span className="text-cyan">✓</span> 48-country support</span>
          </div>
        </div>
      </div>

      <Link
        href="/robots"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted hover:text-white"
      >
        Scroll to shop ↓
      </Link>
    </section>
  );
}
