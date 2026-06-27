"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Msg = { role: "ai" | "user"; text: string };

const SUGGESTIONS = [
  "Which robot fits my hotel?",
  "Request a quote",
  "Become a distributor",
  "Show me humanoids",
];

function answer(q: string): string {
  const t = q.toLowerCase();
  if (t.includes("quote") || t.includes("price")) return "I can generate an instant estimate. Head to Build Your Robot to configure specs, or tell me your industry and unit count and I'll route you to sales.";
  if (t.includes("distributor")) return "Excellent — our Distributor Program gives you territory rights, training and margins. Visit /distributors to apply. Want me to pre-fill the form?";
  if (t.includes("humanoid")) return "Meet NETICS Atlas One — a 1.72m general-purpose humanoid that walks, talks, sees and learns. Explore it on the Humanoid page.";
  if (t.includes("hotel") || t.includes("hospital") || t.includes("restaurant")) return "For hospitality I'd recommend the Porter P2 (delivery & concierge) and a reception unit. Want a tailored package?";
  if (t.includes("demo") || t.includes("book")) return "Let's book it. I can schedule a virtual or on-site demo — just share your email and preferred date on the Contact page.";
  return "I'm NETICS Assistant. I can recommend robots, generate quotes, book demos and connect you with experts. What industry are you in?";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Hi, I'm NETICS Assistant 🤖 — your guide to the future of robotics. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "ai", text: answer(q) }]), 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan shadow-[0_0_30px_-4px_var(--glow-cyan)] transition-transform hover:scale-105"
        aria-label="Open NETICS Assistant"
      >
        <span className="absolute inset-0 animate-pulse-glow rounded-full ring-2 ring-cyan/40" />
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#001016]" fill="none">
          <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7V4M9 12h.01M15 12h.01M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 flex h-[30rem] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-3xl glass-strong border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan text-[#001016]">
                <span className="h-2 w-2 rounded-full bg-[#001016]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">NETICS Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online · AI powered
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-electric to-cyan text-[#001016]"
                        : "glass text-silver"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full glass px-2.5 py-1 text-xs text-silver transition-colors hover:border-cyan/30 hover:text-cyan"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 rounded-full glass px-3 py-1.5"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan text-[#001016]"
                  aria-label="Send"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
