import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <Section className="py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-aurora opacity-80" />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan/20 blur-[100px]" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan">
              {site.tagline}
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Ready to deploy the <span className="gradient-text">future</span>?
            </h2>
            <p className="max-w-xl text-pretty text-base text-muted sm:text-lg">
              Talk to our robotics engineers, request a tailored quote, or become an official
              NETICS Robotics distributor in your region.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <GlowButton href="/contact">Book a Consultation</GlowButton>
              <GlowButton href="/build" variant="outline">Build Your Robot</GlowButton>
              <GlowButton href="/distributors" variant="ghost">Become a Distributor</GlowButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
