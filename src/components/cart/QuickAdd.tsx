"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import type { Robot } from "@/lib/data";

export default function QuickAdd({ robot }: { robot: Pick<Robot, "slug" | "name" | "price" | "image"> }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => {
        add({ slug: robot.slug, name: robot.name, price: robot.price, image: robot.image });
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-electric to-cyan px-4 py-2 text-xs font-semibold text-[#001016] transition-transform hover:-translate-y-0.5"
      aria-label={`Add ${robot.name} to cart`}
    >
      {added ? "✓ Added" : "Add +"}
    </button>
  );
}
