import { education } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function EducationList() {
  return (
    <div>
      {education.map((e, i) => (
        <Reveal delay={i * 0.06} key={e.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/[0.06] py-4 last:border-none">
            <div>
              <div className="font-display text-[15.5px] font-semibold">{e.name}</div>
              <div className="mt-0.5 text-[13.5px] text-muted">{e.school}</div>
            </div>
            <div className="whitespace-nowrap font-mono text-[12.5px] text-blue">{e.year}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
