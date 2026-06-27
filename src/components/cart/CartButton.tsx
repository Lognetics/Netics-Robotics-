"use client";

import { useCart } from "./CartContext";

export default function CartButton({ className = "" }: { className?: string }) {
  const { count, open } = useCart();
  return (
    <button
      onClick={open}
      aria-label={`Open cart, ${count} items`}
      className={`relative grid h-10 w-10 place-items-center rounded-xl glass text-silver transition-colors hover:text-white ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L22 8H6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-r from-electric to-cyan px-1 text-[11px] font-semibold text-[#001016]">
          {count}
        </span>
      )}
    </button>
  );
}
