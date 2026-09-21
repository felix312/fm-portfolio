"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * "Digitalization" motif for the SEO & Digital Growth section: an ascending
 * bar/line chart built from network nodes, plus a binary-to-signal transition
 * on the opposite side. Pure SVG/CSS, no raster images.
 */
export default function GrowthGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const slow = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.15]);
  const barGrow = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* ascending growth chart, right side */}
      <motion.svg
        style={{ y: slow, opacity: fade }}
        className="absolute -right-10 top-10 h-[360px] w-[360px] sm:h-[440px] sm:w-[440px]"
        viewBox="0 0 400 300"
        fill="none"
      >
        {/* baseline */}
        <path d="M20 260 H380" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.3" />
        {/* bars rising left to right, animated height on scroll */}
        {[
          { x: 60, h: 40 },
          { x: 120, h: 80 },
          { x: 180, h: 60 },
          { x: 240, h: 130 },
          { x: 300, h: 170 },
        ].map((b, i) => (
          <motion.rect
            key={b.x}
            x={b.x}
            width={34}
            y={260 - b.h}
            height={b.h}
            style={{ scaleY: barGrow, transformOrigin: `${b.x + 17}px 260px` }}
            fill={i % 2 === 0 ? "var(--blue)" : "var(--gold)"}
            fillOpacity={0.55}
            rx={3}
          />
        ))}
        {/* connecting trend line + node dots, echoing "network growth" */}
        <path
          d="M60 220 L120 180 L180 200 L240 130 L300 90"
          stroke="var(--red-glow)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {[
          [60, 220],
          [120, 180],
          [180, 200],
          [240, 130],
          [300, 90],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="4" fill="var(--red-glow)" />
        ))}
      </motion.svg>

      {/* binary → signal transition, left side */}
      <motion.div
        style={{ y: fast, opacity: fade }}
        className="absolute left-4 top-16 hidden select-none flex-col gap-2 font-mono text-[11px] leading-none text-blue/30 sm:flex"
      >
        <span>01 10 01</span>
        <span>▲ ▲▲ ▲▲▲</span>
        <span>10 01 11</span>
        <span>▲▲ ▲▲▲ ▲</span>
      </motion.div>
    </div>
  );
}
