"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-background-2">
        <Image
          key={active}
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-xl border transition-all ${
                active === i ? "border-cyan/60 ring-1 ring-cyan/40" : "border-white/10 opacity-70 hover:opacity-100"
              }`}
              aria-label={`View ${i + 1}`}
            >
              <Image src={img} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
