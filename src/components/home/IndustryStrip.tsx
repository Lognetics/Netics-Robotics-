import Marquee from "@/components/ui/Marquee";
import { industries } from "@/lib/data";

export default function IndustryStrip() {
  return (
    <div className="border-y border-white/5 bg-background-2/60 py-6">
      <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-muted">
        Deployed across 22 industries worldwide
      </p>
      <Marquee items={industries} />
    </div>
  );
}
