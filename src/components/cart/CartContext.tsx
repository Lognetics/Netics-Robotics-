"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "netics-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add: CartCtx["add"] = (item, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === item.slug);
      if (found) return prev.map((i) => (i.slug === item.slug ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { ...item, qty }];
    });
    setIsOpen(true);
  };

  const remove: CartCtx["remove"] = (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug));
  const setQty: CartCtx["setQty"] = (slug, qty) =>
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    return {
      items, count, total, isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add, remove, setQty, clear,
    };
  }, [items, isOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
