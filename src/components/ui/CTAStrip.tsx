import { Section } from "./Section";
import Reveal from "./Reveal";
import GlowButton from "./GlowButton";

export default function CTAStrip({
  title,
  subtitle,
  primary = { label: "Book a Consultation", href: "/contact" },
  secondary,
}: {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section className="py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-2 px-6 py-14 text-center sm:px-12">
          <div className="absolute inset-0 bg-aurora opacity-70" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {subtitle && <p className="max-w-xl text-pretty text-muted">{subtitle}</p>}
            <div className="flex flex-wrap justify-center gap-3">
              <GlowButton href={primary.href}>{primary.label}</GlowButton>
              {secondary && (
                <GlowButton href={secondary.href} variant="outline">
                  {secondary.label}
                </GlowButton>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
