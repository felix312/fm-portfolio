import { stitchProject } from "@/data/portfolio";
import Reveal from "./Reveal";

const severities = [
  { label: "Critical", value: 4, pct: 85, color: "var(--red)" },
  { label: "High", value: 11, pct: 62, color: "var(--gold)" },
  { label: "Medium", value: 27, pct: 40, color: "var(--blue)" },
  { label: "Low", value: 53, pct: 22, color: "var(--muted)" },
];

export default function StitchShowcase() {
  return (
    <section
      id="stitch"
      className="relative overflow-hidden border-b border-white/10 py-20"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(26,115,232,0.05), transparent 40%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded border border-gold/35 bg-gold/[0.06] px-3 py-1.5 font-mono text-[12px] tracking-[0.06em] text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            {stitchProject.status.toUpperCase()} — FOUNDER PROJECT
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="font-display text-[clamp(24px,3.4vw,32px)] font-semibold leading-tight">
              {stitchProject.name}{" "}
              <span className="text-gold">({stitchProject.shortName})</span>
            </h2>
            <div className="mt-1.5 font-mono text-[12.5px] text-blue">{stitchProject.role}</div>

            <p className="mt-4 text-[15px] text-ink">{stitchProject.tagline}</p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
              {stitchProject.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {stitchProject.modules.map((m) => (
                <span
                  key={m}
                  className="rounded-[3px] border border-blue/30 bg-blue/[0.06] px-2.5 py-1 font-mono text-[11px] tracking-wide text-blue-glow"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-4 font-mono text-[11.5px] text-muted">
              // {stitchProject.roadmapNote}
            </div>

            <div className="mt-6 rounded-md border border-red/25 bg-red/[0.05] p-4">
              <p className="text-[13.5px] italic leading-relaxed text-ink">
                &ldquo;{stitchProject.sellLine}&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Dashboard-style infographic mockup */}
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0F1420] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue/70" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  security-dashboard · S.S.S
                </span>
              </div>

              <div className="p-5">
                {/* risk gauge */}
                <div className="flex items-center gap-5">
                  <svg viewBox="0 0 100 56" className="h-[72px] w-[130px] shrink-0">
                    <path
                      d="M8 52 A42 42 0 0 1 92 52"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 52 A42 42 0 0 1 92 52"
                      fill="none"
                      stroke="url(#riskGradient)"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray="132"
                      strokeDashoffset="38"
                    />
                    <defs>
                      <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--blue)" />
                        <stop offset="55%" stopColor="var(--gold)" />
                        <stop offset="100%" stopColor="var(--red)" />
                      </linearGradient>
                    </defs>
                    <text x="50" y="46" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="var(--font-display)">
                      68
                    </text>
                  </svg>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      Composite Risk Score
                    </div>
                    <div className="mt-0.5 font-display text-sm font-semibold text-gold">
                      Elevated — review recommended
                    </div>
                  </div>
                </div>

                {/* severity bars */}
                <div className="mt-5 space-y-2.5">
                  {severities.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="w-16 shrink-0 font-mono text-[11px] text-muted">{s.label}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${s.pct}%`, backgroundColor: s.color }}
                        />
                      </div>
                      <span className="w-5 shrink-0 text-right font-mono text-[11px] text-ink">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* live alert row */}
                <div className="mt-5 flex items-center gap-3 rounded border border-red/25 bg-red/[0.06] px-3 py-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
                  </span>
                  <span className="flex-1 text-[12px] text-ink">
                    Critical vuln detected → alert pushed to CIO
                  </span>
                  <span className="shrink-0 font-mono text-[10.5px] text-muted">2m ago</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
