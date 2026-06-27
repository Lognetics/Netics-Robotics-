"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { robots, shopCategories } from "@/lib/data";
import RobotCard from "@/components/ui/RobotCard";

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "rating", label: "Top rated" },
] as const;

function ShopInner() {
  const params = useSearchParams();
  const initial = params.get("category") ?? "All";
  const [category, setCategory] = useState(initial);
  const [sort, setSort] = useState<(typeof SORTS)[number]["key"]>("featured");

  const categories = ["All", ...shopCategories.map((c) => c.slug)];

  const list = useMemo(() => {
    const r = category === "All" ? [...robots] : robots.filter((x) => x.series === category);
    if (sort === "price-asc") r.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "price-desc") r.sort((a, b) => b.priceFrom - a.priceFrom);
    if (sort === "rating") r.sort((a, b) => b.rating - a.rating);
    return r;
  }, [category, sort]);

  return (
    <div className="pt-[var(--nav-h)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 py-12">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">The Robot Store</h1>
          <p className="mt-2 max-w-2xl text-muted">
            {robots.length} models across {shopCategories.length} categories — shipped, installed and supported worldwide.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-[var(--nav-h)] z-30 border-b border-white/5 glass-strong">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-all ${
                  category === c ? "bg-gradient-to-r from-electric to-cyan text-[#001016]" : "glass text-silver hover:text-white"
                }`}
              >
                {c === "All" ? "All" : c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-muted">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-full glass px-3 py-1.5 text-sm text-white focus:outline-none [&>option]:bg-background-2"
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="mb-6 text-sm text-muted">{list.length} robots</div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((r) => (
              <motion.div
                key={r.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <RobotCard robot={r} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

export default function RobotsPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-muted">Loading store…</div>}>
      <ShopInner />
    </Suspense>
  );
}
