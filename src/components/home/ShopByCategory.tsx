import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { shopCategories } from "@/lib/data";

export default function ShopByCategory() {
  return (
    <Section className="py-20">
      <SectionHeading
        eyebrow="Shop by category"
        title={<>Find the right <span className="gradient-text">robot</span></>}
        subtitle="Eight families of robots, one platform. Pick a category to explore the lineup."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shopCategories.map((cat, i) => (
          <Reveal key={cat.slug} delay={(i % 4) * 0.05}>
            <Link
              href={`/robots?category=${cat.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-silver">{cat.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Shop now →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
