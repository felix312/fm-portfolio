"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Skills section backdrop: a loose cluster of icon glyphs (code, shield,
 * camera, chart) drifting gently on scroll. Kept low-opacity and confined to
 * one corner so it stays a texture, not a competing focal point.
 */
export default function SkillsGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const slow = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const fade = useTransform(scrollYProgress, [0, 0.5, 1], [0.16, 0.26, 0.1]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        style={{ y: slow, opacity: fade }}
        className="absolute -right-6 top-4 h-[300px] w-[300px] sm:h-[360px] sm:w-[360px]"
        viewBox="0 0 320 320"
        fill="none"
      >
        {/* code brackets */}
        <path d="M70 60 L50 90 L70 120" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M110 60 L130 90 L110 120" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* shield */}
        <path
          d="M220 40 L250 52 V80 C250 100 237 116 220 122 C203 116 190 100 190 80 V52 Z"
          stroke="var(--red)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* camera */}
        <rect x="50" y="180" width="60" height="42" rx="5" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="80" cy="201" r="12" stroke="var(--gold)" strokeWidth="2" />
        <path d="M65 180 L72 168 H92 L99 180" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" />

        {/* growth chart */}
        <path d="M190 240 H260" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="196" y="215" width="10" height="25" fill="var(--blue)" fillOpacity="0.7" />
        <rect x="214" y="205" width="10" height="35" fill="var(--red-glow)" fillOpacity="0.7" />
        <rect x="232" y="190" width="10" height="50" fill="var(--gold)" fillOpacity="0.7" />
      </motion.svg>
    </div>
  );
}
