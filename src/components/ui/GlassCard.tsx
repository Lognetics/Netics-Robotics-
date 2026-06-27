import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 ${
        hover ? "hover:border-cyan/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_var(--glow-cyan)]" : ""
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}
