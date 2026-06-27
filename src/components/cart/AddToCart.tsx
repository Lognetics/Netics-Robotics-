"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import type { Robot } from "@/lib/data";

export default function AddToCart({
  robot,
  className = "",
  showQty = false,
}: {
  robot: Pick<Robot, "slug" | "name" | "price" | "image">;
  className?: string;
  showQty?: boolean;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add({ slug: robot.slug, name: robot.name, price: robot.price, image: robot.image }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showQty && (
        <div className="flex items-center gap-3 rounded-full glass px-3 py-2.5">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-silver hover:text-white" aria-label="Decrease quantity">−</button>
          <span className="w-6 text-center text-sm text-white">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} className="text-silver hover:text-white" aria-label="Increase quantity">+</button>
        </div>
      )}
      <button
        onClick={handleAdd}
        className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-semibold text-[#001016] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-6px_var(--glow-cyan)]"
      >
        {added ? "✓ Added to cart" : "Add to Cart"}
      </button>
    </div>
  );
}
