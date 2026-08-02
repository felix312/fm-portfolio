import type { ReelCase } from "@/data/portfolio";
import { TagChip, StatStrip } from "./Bits";
import Reveal from "./Reveal";

export default function ReelCard({ item, delay = 0 }: { item: ReelCase; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.02]">
        <div className="p-7 pb-0">
          <div className="font-display text-lg font-semibold sm:text-xl">{item.title}</div>
          <div className="mt-1 font-mono text-[12.5px] text-blue">{item.org}</div>
          <p className="mt-3 max-w-2xl text-[15px] text-ink">{item.description}</p>
        </div>

        <div className="relative mx-7 my-6 flex h-[110px] items-center justify-center overflow-hidden rounded border border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(232,0,45,0.10), rgba(26,115,232,0.10)), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 40px)",
          }}
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red/90 play-pulse">
            <span
              className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-x-0 bottom-3 flex items-end justify-center gap-[3px] opacity-55">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`w-[3px] rounded-sm ${i % 2 === 0 ? "bg-red" : "bg-blue"} wave-bar`}
                style={{ animationDelay: `${(i % 6) * 0.1}s` }}
              />
            ))}
          </div>
          <span className="sr-only">Video reel preview — {item.title}</span>
        </div>

        <div className="px-7 pb-7">
          {item.stats && <StatStrip stats={item.stats} />}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <TagChip key={t.label} tag={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .play-pulse{ animation: playPulse 2.4s ease-out infinite; }
        @keyframes playPulse{
          0%{ box-shadow: 0 0 0 0 rgba(232,0,45,0.5); }
          70%{ box-shadow: 0 0 0 18px rgba(232,0,45,0); }
          100%{ box-shadow: 0 0 0 0 rgba(232,0,45,0); }
        }
        .wave-bar{ height: 6px; animation: wave 1.2s ease-in-out infinite; }
        @keyframes wave{ 0%,100%{ height:6px; } 50%{ height:22px; } }
        @media (prefers-reduced-motion: reduce){
          .play-pulse{ animation: none; }
          .wave-bar{ animation: none; height: 14px; }
        }
      `}</style>
    </Reveal>
  );
}
