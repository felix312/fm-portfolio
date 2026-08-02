import type { Tag, Stat } from "@/data/portfolio";

export function SectionHeading({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
      <h2 className="font-display text-[clamp(27px,3.6vw,36px)] font-semibold">
        {title}
      </h2>
      <div className="font-mono text-[12px] tracking-[0.05em] text-muted">{note}</div>
    </div>
  );
}

const toneStyles: Record<Tag["tone"], string> = {
  default: "text-gold border-gold/35 bg-gold/[0.06]",
  red: "text-red-glow border-red/35 bg-red/[0.06]",
  blue: "text-blue-glow border-blue/35 bg-blue/[0.06]",
};

const dotStyles: Record<Tag["tone"], string> = {
  default: "bg-gold",
  red: "bg-red",
  blue: "bg-blue",
};

export function TagChip({ tag }: { tag: Tag }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[3px] border px-2.5 py-1 font-mono text-[11.5px] tracking-wide ${toneStyles[tag.tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[tag.tone]}`} />
      {tag.label}
    </span>
  );
}

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 border-t border-dashed border-white/10 pt-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="whitespace-nowrap font-display text-lg font-bold text-gold">
            {s.num}
          </div>
          <div className="mt-1 text-[12px] leading-snug text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
