export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden mask-fade-x py-2">
      <div className="flex shrink-0 animate-marquee gap-3 pr-3">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full glass px-4 py-2 text-sm text-silver"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
