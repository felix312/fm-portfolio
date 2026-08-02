import { skillCols } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {skillCols.map((col, i) => (
        <Reveal delay={i * 0.06} key={col.heading}>
          <h4 className="mb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            {col.heading}
          </h4>
          <ul>
            {col.items.map((item) => (
              <li
                key={item}
                className="border-b border-white/5 py-1.5 text-[14px] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
