"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Education section backdrop: a stack of books paired with a laptop/network
 * glyph, tying academic credentials to the technical discipline. SVG only.
 */
export default function EducationGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const slow = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const fade = useTransform(scrollYProgress, [0, 0.5, 1], [0.22, 0.36, 0.12]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        style={{ y: slow, opacity: fade }}
        className="absolute -right-8 top-6 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]"
        viewBox="0 0 300 300"
        fill="none"
      >
        {/* stacked books */}
        <rect x="40" y="200" width="120" height="16" rx="2" fill="var(--red)" fillOpacity="0.55" />
        <rect x="52" y="182" width="120" height="16" rx="2" fill="var(--blue)" fillOpacity="0.55" />
        <rect x="40" y="164" width="120" height="16" rx="2" fill="var(--gold)" fillOpacity="0.55" />

        {/* laptop / screen */}
        <rect x="150" y="60" width="100" height="66" rx="4" stroke="var(--blue)" strokeWidth="2" />
        <path d="M140 132 H260 L250 144 H150 Z" stroke="var(--blue)" strokeWidth="2" strokeLinejoin="round" />
        {/* network nodes on screen */}
        <circle cx="175" cy="85" r="4" fill="var(--gold)" />
        <circle cx="225" cy="80" r="4" fill="var(--red-glow)" />
        <circle cx="200" cy="105" r="4" fill="var(--blue-glow)" />
        <path d="M175 85 L200 105 L225 80" stroke="var(--muted)" strokeWidth="1.2" strokeOpacity="0.6" />
      </motion.svg>

      {/* faint certificate ribbon, drifts opposite */}
      <motion.svg
        style={{ y: fast, opacity: fade }}
        className="absolute bottom-2 left-6 h-16 w-16 opacity-70"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="8" r="5" stroke="var(--gold)" strokeWidth="1.3" />
        <path d="M9 12.5 L7.5 20 L12 17.5 L16.5 20 L15 12.5" stroke="var(--gold)" strokeWidth="1.3" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}
