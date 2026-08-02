"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), {
  ssr: false,
});

export default function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden border-b border-white/10 pb-24 pt-32 sm:pt-40"
    >
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* red radial glow, top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--red), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* scanning sweep line */}
      <div className="scan-sweep pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded border border-gold/35 bg-gold/[0.06] px-3 py-1.5 font-mono text-[12px] tracking-[0.06em] text-gold"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          PORTFOLIO // 2026 EDITION
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display text-[clamp(42px,8vw,84px)] font-bold leading-[0.98] tracking-tight"
        >
          {profile.first} <span className="grad-text">{profile.last}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 font-display text-[clamp(18px,2.6vw,25px)] font-medium text-blue"
        >
          Cybersecurity Engineer <span className="font-body font-normal text-muted">&amp;</span>{" "}
          Cloud IT Professional
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-2 font-mono text-[13px] tracking-wide text-gold"
        >
          // second discipline: videography &amp; content editing
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-ink"
        >
          {profile.lede}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px] text-muted"
        >
          <a href={profile.phoneHref} className="transition-colors hover:text-white">
            {profile.phone}
          </a>
          <a href={profile.emailHref} className="transition-colors hover:text-white">
            {profile.email}
          </a>
          <span>{profile.location}</span>
          <a
            href={profile.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {profile.github}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#security"
            className="rounded bg-gradient-to-r from-red to-red-glow px-6 py-3 font-display text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(232,0,45,0.55)] transition-transform hover:-translate-y-0.5"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="rounded border border-white/15 px-6 py-3 font-display text-sm font-semibold text-white/90 transition-colors hover:border-white/35 hover:bg-white/5"
          >
            Establish contact
          </a>
        </motion.div>
      </div>

      <style>{`
        .scan-sweep{
          background: linear-gradient(90deg, transparent, rgba(26,115,232,0.9), transparent);
          box-shadow: 0 0 12px 2px rgba(26,115,232,0.6);
          animation: scanSweep 6s linear infinite;
        }
        @keyframes scanSweep{
          0%{ transform: translateY(0); opacity:0; }
          5%{ opacity:1; }
          95%{ opacity:1; }
          100%{ transform: translateY(560px); opacity:0; }
        }
        @media (prefers-reduced-motion: reduce){
          .scan-sweep{ animation: none; opacity: 0.4; }
        }
      `}</style>
    </header>
  );
}
