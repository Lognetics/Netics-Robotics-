import Image from "next/image";
import Link from "next/link";
import type { Robot } from "@/lib/data";
import QuickAdd from "@/components/cart/QuickAdd";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-cyan" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={i < Math.round(rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function RobotCard({ robot }: { robot: Robot }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_24px_70px_-32px_var(--glow-cyan)]">
      <Link href={`/robots/${robot.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={robot.image}
          alt={robot.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          {robot.badge && (
            <span className="rounded-full bg-gradient-to-r from-electric to-cyan px-2.5 py-1 text-[11px] font-semibold text-[#001016]">
              {robot.badge}
            </span>
          )}
        </div>
        <span className="absolute right-3 top-3 rounded-full glass px-2.5 py-1 text-[11px] text-silver">{robot.status}</span>
        <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] text-cyan backdrop-blur-sm">{robot.series}</span>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <Stars rating={robot.rating} />
          <span className="text-xs text-muted">{robot.reviews} reviews</span>
        </div>
        <Link href={`/robots/${robot.slug}`}>
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan">{robot.name}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-muted">{robot.tagline}</p>

        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-4">
          <div>
            <div className="text-[11px] text-muted">From</div>
            <div className="text-lg font-semibold text-white">${robot.priceFrom.toLocaleString()}</div>
          </div>
          <QuickAdd robot={robot} />
        </div>
      </div>
    </div>
  );
}
