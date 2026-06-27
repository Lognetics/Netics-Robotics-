import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60";

const variants: Record<Variant, string> = {
  primary:
    "text-[#001016] bg-gradient-to-r from-cyan to-electric hover:shadow-[0_0_36px_-6px_var(--glow-cyan)] hover:-translate-y-0.5",
  outline:
    "text-foreground border-glow hover:shadow-[0_0_30px_-10px_var(--glow-blue)] hover:-translate-y-0.5",
  ghost:
    "text-silver glass hover:text-white hover:border-white/20 hover:-translate-y-0.5",
};

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
