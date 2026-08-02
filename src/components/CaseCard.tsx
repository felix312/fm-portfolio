import type { CaseStudy } from "@/data/portfolio";
import { TagChip, StatStrip } from "./Bits";
import Reveal from "./Reveal";

export default function CaseCard({ item, delay = 0 }: { item: CaseStudy; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-hidden rounded-md border border-white/10 bg-white/[0.015] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-red/40">
        <div
          className="pointer-events-none absolute inset-y-0 -left-full w-3/5 bg-gradient-to-r from-transparent via-blue/[0.06] to-transparent transition-[left] duration-700 ease-out group-hover:left-[120%]"
          aria-hidden="true"
        />
        <div className="mb-3.5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-display text-lg font-semibold sm:text-xl">{item.title}</div>
            <div className="mt-1 font-mono text-[12.5px] text-blue">{item.org}</div>
          </div>
          <span className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            {item.period}
          </span>
        </div>

        <p className="max-w-2xl text-[15px] text-ink">{item.description}</p>

        {item.stats && <StatStrip stats={item.stats} />}

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <TagChip key={t.label} tag={t} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
