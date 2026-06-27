"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import NeuralBackground from "@/components/three/NeuralBackground";
import { stats } from "@/lib/site";

const RobotScene = dynamic(() => import("@/components/three/RobotScene"), { ssr: false });

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-h)]">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-30 bg-aurora" />
      <div className="absolute inset-0 -z-20 opacity-70">
        <NeuralBackground />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.div custom={0} variants={fade} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-wide text-silver">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
            Africa's largest robotics company · A division of NETICS AI
          </motion.div>

          <motion.h1 custom={1} variants={fade} initial="hidden" animate="show"
            className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Building the Future of{" "}
            <span className="gradient-text text-glow">Intelligent Robotics</span>
          </motion.h1>

          <motion.p custom={2} variants={fade} initial="hidden" animate="show"
            className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Manufacturing, supplying and deploying the world's most advanced AI-powered robots
            for homes, businesses, industries, governments — and the future of humanity.
          </motion.p>

          <motion.div custom={3} variants={fade} initial="hidden" animate="show"
            className="flex flex-wrap gap-3">
            <GlowButton href="/marketplace">Explore Robots</GlowButton>
            <GlowButton href="/build" variant="outline">Request a Quote</GlowButton>
            <GlowButton href="/distributors" variant="ghost">Become a Distributor</GlowButton>
          </motion.div>

          <motion.div custom={4} variants={fade} initial="hidden" animate="show"
            className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl glass px-3 py-3">
                <div className="text-xl font-semibold text-white sm:text-2xl">{s.value}</div>
                <div className="text-[11px] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="relative h-[420px] sm:h-[560px]"
        >
          <div className="absolute inset-0 rounded-full bg-cyan/10 blur-[80px]" />
          <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full glass px-4 py-1.5 text-xs text-cyan">
            NETICS Atlas One · Live 3D
          </div>
          <RobotScene accent="#19e3ff" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-muted">
            Drag to rotate · Procedural preview
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-floaty rounded-full bg-cyan" />
        </div>
      </div>
    </section>
  );
}
