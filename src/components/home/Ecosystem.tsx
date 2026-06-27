"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ecosystem } from "@/lib/data";

export default function Ecosystem() {
  return (
    <Section className="py-24">
      <SectionHeading
        eyebrow="The NETICS AI Ecosystem"
        title={<>One connected <span className="gradient-text">intelligence fabric</span></>}
        subtitle="Every layer talks to every other. Robots, cloud, vision, voice and the operating system move as a single organism."
      />

      <div className="relative mt-16">
        {/* central spine */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan/40 to-transparent lg:block" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((node, i) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative flex items-start gap-3 rounded-2xl glass p-5 transition-all duration-500 hover:border-cyan/30 hover:bg-white/[0.05]"
            >
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-electric to-cyan shadow-[0_0_12px_var(--glow-cyan)]" />
              <div>
                <h3 className="text-sm font-semibold text-white">{node.name}</h3>
                <p className="text-xs leading-relaxed text-muted">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
