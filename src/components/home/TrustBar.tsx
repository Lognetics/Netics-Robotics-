import { Section } from "@/components/ui/Section";

const items = [
  { icon: "🚚", title: "Worldwide delivery", desc: "Shipped & installed in 48 countries." },
  { icon: "🛡️", title: "2-year warranty", desc: "Plus extended care plans available." },
  { icon: "💳", title: "Flexible financing", desc: "Lease or pay monthly from 0% APR." },
  { icon: "🧑‍🔧", title: "24/7 support", desc: "On-site servicing & remote help." },
];

export default function TrustBar() {
  return (
    <Section className="py-10">
      <div className="grid gap-3 rounded-2xl glass p-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3 rounded-xl px-4 py-3">
            <span className="text-2xl">{it.icon}</span>
            <div>
              <div className="text-sm font-semibold text-white">{it.title}</div>
              <div className="text-xs text-muted">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
