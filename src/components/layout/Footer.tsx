import Link from "next/link";
import { footerCols, site, socials } from "@/lib/site";
import Logo from "./Logo";
import GlowButton from "@/components/ui/GlowButton";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-background-2">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="glass w-fit rounded-xl px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-cyan">Join the newsletter</p>
              <form className="mt-2 flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-44 bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
                />
                <GlowButton type="submit" className="px-4 py-2 text-xs">Subscribe</GlowButton>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-muted transition-colors hover:text-cyan">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted">© 2026 {site.name}. A division of {site.parent}.</p>
            <p className="text-xs text-cyan">{site.location}</p>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-xs text-silver transition-colors hover:border-cyan/30 hover:text-cyan"
                aria-label={s.label}
              >
                {s.label[0]}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted/70">
          {["Privacy", "Terms", "Security", "Cookies", "Accessibility", "Sitemap"].map((l) => (
            <Link key={l} href="#" className="hover:text-silver">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
