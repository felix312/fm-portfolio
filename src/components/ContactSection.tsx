"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

const channels = [
  {
    key: "call",
    label: "Voice line",
    value: profile.phone,
    href: profile.phoneHref,
    proto: "TEL://SECURE",
  },
  {
    key: "mail",
    label: "Encrypted mail",
    value: profile.email,
    href: profile.emailHref,
    proto: "SMTP://TLS",
  },
  {
    key: "code",
    label: "Source & work",
    value: profile.github,
    href: profile.githubHref,
    proto: "GIT://PUBLIC",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-white/10 py-24">
      <div
        className="pointer-events-none absolute inset-0 circuit-bg noise-fade opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--blue), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 rounded border border-blue/35 bg-blue/[0.06] px-3 py-1.5 font-mono text-[12px] tracking-[0.06em] text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            CHANNEL // OPEN
          </div>
          <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-semibold leading-tight">
            Let&rsquo;s establish a{" "}
            <span className="grad-text-alt">secure connection</span>.
          </h2>
          <p className="mt-4 max-w-lg text-[15.5px] text-ink">
            Whether it&rsquo;s securing infrastructure or telling your institution&rsquo;s
            story on screen — pick a channel below and I&rsquo;ll respond fast.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Incoming call card — the signature element */}
          <Reveal delay={0.05} className="md:col-span-1">
            <a
              href={channels[0].href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-red/30 bg-gradient-to-b from-red/[0.08] to-transparent p-6 transition-colors hover:border-red/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-red-glow">
                    {channels[0].proto}
                  </span>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red" />
                  </span>
                </div>

                <div className="relative mx-auto my-8 flex h-20 w-20 items-center justify-center">
                  {/* concentric call rings */}
                  <span className="ring-pulse absolute inset-0 rounded-full border border-red/40" />
                  <span
                    className="ring-pulse absolute inset-0 rounded-full border border-red/40"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <span
                    className="ring-pulse absolute inset-0 rounded-full border border-red/40"
                    style={{ animationDelay: "1.2s" }}
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-glow shadow-[0_0_30px_-4px_rgba(232,0,45,0.7)]">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[12px] uppercase tracking-wide text-muted">
                  {channels[0].label}
                </div>
                <div className="mt-1 font-display text-base font-semibold text-white">
                  {channels[0].value}
                </div>
                <div className="mt-3 font-mono text-[11px] text-red-glow opacity-0 transition-opacity group-hover:opacity-100">
                  tap to call →
                </div>
              </div>
            </a>
          </Reveal>

          {channels.slice(1).map((c, i) => (
            <Reveal delay={0.1 + i * 0.05} key={c.key}>
              <a
                href={c.href}
                target={c.key === "code" ? "_blank" : undefined}
                rel={c.key === "code" ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-blue-glow">
                    {c.proto}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue transition-transform group-hover:scale-125" />
                </div>

                <div className="my-8 font-mono text-[11px] text-muted">
                  <HandshakeLines />
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-wide text-muted">{c.label}</div>
                  <div className="mt-1 break-all font-display text-base font-semibold text-white">
                    {c.value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <div className="font-mono text-[11px] tracking-[0.15em] text-muted">
            {profile.location.toUpperCase()} — {profile.name.toUpperCase()} — 2026
          </div>
        </Reveal>
      </div>

      <style>{`
        .ring-pulse{ animation: ringPulse 2.4s ease-out infinite; }
        @keyframes ringPulse{
          0%{ transform: scale(0.6); opacity: 0.9; }
          100%{ transform: scale(2.1); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce){
          .ring-pulse{ animation: none; opacity: 0.25; }
        }
      `}</style>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandshakeLines() {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-1"
      aria-hidden="true"
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="block h-3 w-[2px] bg-blue/40"
          style={{ height: `${6 + ((i * 7) % 14)}px` }}
        />
      ))}
    </motion.div>
  );
}
