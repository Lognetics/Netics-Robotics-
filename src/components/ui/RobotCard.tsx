import Link from "next/link";
import type { Robot } from "@/lib/data";

export default function RobotCard({ robot }: { robot: Robot }) {
  return (
    <Link
      href={`/robots/${robot.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_24px_70px_-32px_var(--glow-cyan)]"
    >
      {/* Visual */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(70% 70% at 50% 40%, ${robot.accent}33, transparent 70%)` }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] text-silver">{robot.series}</div>
        <div className="absolute right-4 top-4 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-cyan">{robot.status}</div>
        {/* silhouette */}
        <div className="absolute bottom-0 left-1/2 h-32 w-20 -translate-x-1/2 rounded-t-[40px] bg-gradient-to-t from-white/10 to-transparent ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105">
          <div className="mx-auto mt-3 h-6 w-10 rounded-lg" style={{ background: robot.accent, boxShadow: `0 0 24px ${robot.accent}` }} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{robot.name}</h3>
          <p className="text-sm text-muted">{robot.tagline}</p>
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-4">
          <div>
            <div className="text-[11px] text-muted">From</div>
            <div className="text-lg font-semibold text-white">${robot.priceFrom.toLocaleString()}</div>
          </div>
          <span className="flex items-center gap-1.5 text-sm text-cyan transition-transform group-hover:translate-x-0.5">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
