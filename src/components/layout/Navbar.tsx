"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import GlowButton from "@/components/ui/GlowButton";
import CartButton from "@/components/cart/CartButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setActive(null)}>
          {nav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setActive(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-silver transition-colors hover:text-white"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                )}
              </Link>
              <AnimatePresence>
                {active === item.label && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full w-72 pt-3"
                  >
                    <div className="glass-strong rounded-2xl border border-white/10 p-2 shadow-2xl">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <div className="text-sm font-medium text-white">{c.label}</div>
                          {c.desc && <div className="text-xs text-muted">{c.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <CartButton />
          <GlowButton href="/robots" className="px-5 py-2.5">
            Shop Robots
          </GlowButton>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <CartButton />
        <button
          className="grid h-10 w-10 place-items-center rounded-xl glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - var(--nav-h))" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-y-auto glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-white/5 py-2">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-medium text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="grid grid-cols-2 gap-1 pb-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-2 py-1.5 text-sm text-muted hover:text-cyan"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <GlowButton href="/robots" className="w-full">Shop Robots</GlowButton>
                <GlowButton href="/contact" variant="outline" className="w-full">Book a Demo</GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
