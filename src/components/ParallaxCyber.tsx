"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative parallax layer built entirely from SVG/CSS — circuit trace lines,
 * a drifting hex/binary column, and a lock glyph. No raster images, so it stays
 * fast, and each layer moves at a different scroll speed for depth.
 */
export default function ParallaxCyber({ variant = "a" }: { variant?: "a" | "b" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slow = useTransform(scrollYProgress, [0, 1], [0, variant === "a" ? -60 : 40]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, variant === "a" ? 90 : -70]);
  const fade = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.55, 0.15]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* circuit trace layer */}
      <motion.svg
        style={{ y: slow, opacity: fade }}
        className="absolute -right-16 top-8 h-[420px] w-[420px] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M20 80 H140 V180 H260 V60 H380 M60 200 V320 H200 M200 320 H340 V240"
          stroke="var(--blue)"
          strokeWidth="1.4"
          strokeOpacity="0.55"
        />
        <circle cx="140" cy="80" r="4" fill="var(--blue-glow)" />
        <circle cx="260" cy="180" r="4" fill="var(--red-glow)" />
        <circle cx="200" cy="320" r="4" fill="var(--gold)" />
        <circle cx="340" cy="240" r="4" fill="var(--blue-glow)" />
      </motion.svg>

      {/* binary drift column */}
      <motion.div
        style={{ y: fast, opacity: fade }}
        className="absolute left-4 top-0 hidden select-none flex-col gap-3 font-mono text-[11px] leading-none text-blue/30 sm:flex"
      >
        {["01001", "11010", "00110", "10101", "01110", "11001", "00101"].map((row, i) => (
          <span key={i}>{row.repeat(3)}</span>
        ))}
      </motion.div>

      {/* lock glyph, drifts opposite direction */}
      <motion.svg
        style={{ y: slow }}
        className="absolute bottom-4 left-1/3 h-16 w-16 opacity-20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="var(--gold)" strokeWidth="1.2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="var(--gold)" strokeWidth="1.2" />
      </motion.svg>
    </div>
  );
}
