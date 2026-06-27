"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, isOpen, close, total, remove, setQty, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-0 top-0 z-[71] flex h-full w-[min(92vw,26rem)] flex-col glass-strong border-l border-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="text-base font-semibold text-white">Your Cart ({count})</h2>
              <button onClick={close} aria-label="Close cart" className="grid h-8 w-8 place-items-center rounded-lg glass text-silver hover:text-white">✕</button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-2xl glass text-2xl">🛒</div>
                <p className="text-sm text-muted">Your cart is empty.</p>
                <Link href="/robots" onClick={close} className="rounded-full bg-gradient-to-r from-electric to-cyan px-5 py-2.5 text-sm font-medium text-[#001016]">
                  Browse robots
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
                  {items.map((it) => (
                    <div key={it.slug} className="flex gap-3 rounded-2xl glass p-3">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image src={it.image} alt={it.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <Link href={`/robots/${it.slug}`} onClick={close} className="text-sm font-medium text-white hover:text-cyan">
                          {it.name}
                        </Link>
                        <div className="text-sm text-cyan">${it.price.toLocaleString()}</div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full glass px-2 py-1">
                            <button onClick={() => setQty(it.slug, it.qty - 1)} className="h-5 w-5 text-silver hover:text-white" aria-label="Decrease">−</button>
                            <span className="w-5 text-center text-sm text-white">{it.qty}</span>
                            <button onClick={() => setQty(it.slug, it.qty + 1)} className="h-5 w-5 text-silver hover:text-white" aria-label="Increase">+</button>
                          </div>
                          <button onClick={() => remove(it.slug)} className="text-xs text-muted hover:text-red-400">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 px-5 py-4">
                  <div className="mb-1 flex items-center justify-between text-sm text-muted">
                    <span>Subtotal</span>
                    <span className="text-lg font-semibold text-white">${total.toLocaleString()}</span>
                  </div>
                  <p className="mb-3 text-xs text-muted">Shipping, tax & financing calculated at checkout.</p>
                  <Link
                    href="/checkout"
                    onClick={close}
                    className="block w-full rounded-full bg-gradient-to-r from-electric to-cyan py-3 text-center text-sm font-semibold text-[#001016] transition-transform hover:-translate-y-0.5"
                  >
                    Checkout · ${total.toLocaleString()}
                  </Link>
                  <Link href="/robots" onClick={close} className="mt-2 block text-center text-xs text-silver hover:text-white">
                    Continue shopping
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
