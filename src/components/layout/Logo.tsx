import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="NETICS Robotics home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan shadow-[0_0_22px_-4px_var(--glow-cyan)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#001016]" fill="none">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-[0.2em] text-white">NETICS</span>
        <span className="text-[10px] font-medium tracking-[0.3em] text-cyan">ROBOTICS</span>
      </span>
    </Link>
  );
}
