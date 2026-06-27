"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";

export default function CheckoutPage() {
  const { items, total, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = total > 25000 || total === 0 ? 0 : 1200;
  const tax = Math.round(total * 0.075);
  const grand = total + shipping + tax;

  if (placed) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 pt-[var(--nav-h)] text-center">
        <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-electric to-cyan text-3xl text-[#001016]">✓</div>
        <h1 className="text-3xl font-semibold">Order confirmed</h1>
        <p className="max-w-md text-muted">
          Thank you — your NETICS order is in. A robotics specialist will email you shortly to schedule delivery,
          installation and onboarding.
        </p>
        <Link href="/robots" className="rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-semibold text-[#001016]">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-[calc(var(--nav-h)+2rem)] sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl glass p-10 text-center">
          <p className="text-muted">Your cart is empty.</p>
          <Link href="/robots" className="mt-4 inline-block rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 text-sm font-semibold text-[#001016]">
            Browse robots
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Form + items */}
          <div className="space-y-8">
            <form
              id="checkout"
              onSubmit={(e) => { e.preventDefault(); setPlaced(true); clear(); }}
              className="space-y-6"
            >
              <fieldset className="rounded-2xl glass p-6">
                <legend className="px-2 text-sm font-semibold uppercase tracking-widest text-cyan">Contact & shipping</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input required type="email" placeholder="Email" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input placeholder="Company (optional)" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input required placeholder="Phone" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input required placeholder="Address" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40 sm:col-span-2" />
                  <input required placeholder="City" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input required placeholder="Country" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                </div>
              </fieldset>

              <fieldset className="rounded-2xl glass p-6">
                <legend className="px-2 text-sm font-semibold uppercase tracking-widest text-cyan">Payment</legend>
                <p className="mt-2 text-xs text-muted">Demo checkout — no real payment is processed.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input placeholder="Card number" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40 sm:col-span-2" />
                  <input placeholder="MM / YY" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                  <input placeholder="CVC" className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/40" />
                </div>
              </fieldset>
            </form>

            {/* Cart line items */}
            <div className="space-y-3">
              {items.map((it) => (
                <div key={it.slug} className="flex items-center gap-4 rounded-2xl glass p-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={it.image} alt={it.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <Link href={`/robots/${it.slug}`} className="text-sm font-medium text-white hover:text-cyan">{it.name}</Link>
                    <div className="text-sm text-cyan">${it.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full glass px-2 py-1">
                    <button onClick={() => setQty(it.slug, it.qty - 1)} className="h-5 w-5 text-silver hover:text-white">−</button>
                    <span className="w-5 text-center text-sm text-white">{it.qty}</span>
                    <button onClick={() => setQty(it.slug, it.qty + 1)} className="h-5 w-5 text-silver hover:text-white">+</button>
                  </div>
                  <button onClick={() => remove(it.slug)} className="text-xs text-muted hover:text-red-400">Remove</button>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-2xl glass p-6 lg:sticky lg:top-[calc(var(--nav-h)+1rem)]">
            <h2 className="text-base font-semibold text-white">Order summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-muted"><dt>Subtotal</dt><dd className="text-silver">${total.toLocaleString()}</dd></div>
              <div className="flex justify-between text-muted"><dt>Shipping</dt><dd className="text-silver">{shipping === 0 ? "Free" : `$${shipping.toLocaleString()}`}</dd></div>
              <div className="flex justify-between text-muted"><dt>Est. tax</dt><dd className="text-silver">${tax.toLocaleString()}</dd></div>
              <div className="mt-2 flex justify-between border-t border-white/10 pt-3 text-base"><dt className="font-semibold text-white">Total</dt><dd className="font-semibold text-white">${grand.toLocaleString()}</dd></div>
            </dl>
            <button form="checkout" type="submit" className="mt-5 w-full rounded-full bg-gradient-to-r from-electric to-cyan py-3 text-sm font-semibold text-[#001016] transition-transform hover:-translate-y-0.5">
              Place order
            </button>
            <p className="mt-3 text-center text-xs text-muted">🔒 Secure checkout · 2-year warranty · 0% financing available</p>
          </aside>
        </div>
      )}
    </div>
  );
}
