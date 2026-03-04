import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import Navbar from "@components/Navbar";
import {
  HERO_DATA,
  TECH_STACK,
  STATS,
  SOCIALS,
} from "@lib/data";

const MOBILE_STYLES = `
  @media (max-width: 680px) {
    .info-cards { grid-template-columns: 1fr 1fr !important; }
    .hero-right { margin-left: 0 !important; max-width: 100% !important; }
    .ghost-name { font-size: 42vw !important; top: 10% !important; opacity:0.04 !important; }
  }
`;

/* ── Stack pill ─────────────────────────────────────────── */
function StackPill({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={`font-mono text-[9px] tracking-[0.12em] uppercase px-[11px] py-[5px] rounded-sm cursor-default transition-all duration-[180ms] ${
        h ? 'bg-cyan text-blue' : 'bg-cyan/10 text-cyan'
      }`}
    >
      {label}
    </span>
  );
}

/* ── Main export ─────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{MOBILE_STYLES}</style>
      <SectionContainer id="hero" backgroundColor="#00224C">
          {/* Ghost name — purely decorative, aria-hidden */}
          <span
            aria-hidden="true"
            className="ghost-name absolute top-1/2 -translate-y-1/2 -left-[2vw] font-fraunces text-[clamp(200px,28vw,380px)] font-bold leading-[0.85] -tracking-[0.04em] text-cyan/[0.05] pointer-events-none select-none whitespace-nowrap"
          >
            {HERO_DATA.ghost}
          </span>

          {/* ── NAV ── */}
          <Navbar variant="hero" showAvailability={true} />

          {/* ── BODY ── */}
          <div className="flex-1 flex items-center py-[60px] relative z-10">
            {/* Content pushed right to let ghost breathe on left */}
            <div className="hero-right ml-auto max-w-[640px] w-full">
              {/* Eyebrow */}
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan-light mb-[14px] flex items-center gap-[10px] animate-fade-up delay-[60ms]">
                <span className="inline-block w-5 h-px bg-cyan-light" />
                {HERO_DATA.tagline}
              </p>

              {/* Greeting */}
              <h1 className="text-[clamp(52px,8vw,100px)] font-thin leading-[0.92] -tracking-[0.025em] text-white mb-0 animate-fade-up delay-[140ms]">
                Hi there,
              </h1>

              {/* Name */}
              <h1 className="text-[clamp(52px,8vw,100px)] font-bold leading-[0.92] -tracking-[0.025em] text-cyan mb-5 animate-fade-up delay-[220ms]">
                I'm {HERO_DATA.name.first}.
                <span
                  aria-hidden="true"
                  className="inline-block w-[3px] h-[clamp(40px,6.5vw,80px)] ml-[5px] align-middle rounded-[1px] bg-cyan animate-blink"
                />
              </h1>

              {/* Full name */}
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan-light mb-7 animate-fade-up delay-[220ms]">
                {HERO_DATA.name.full}
              </p>

              {/* Body copy */}
              <p className="font-dm text-[clamp(14px,1.3vw,16px)] leading-[1.85] text-white max-w-[460px] mb-7 animate-fade-up delay-[300ms]">
                {HERO_DATA.bio}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-8 animate-fade-up delay-[300ms]">
                {TECH_STACK.map((s) => (
                  <StackPill key={s} label={s} />
                ))}
              </div>

              {/* ── Info cards ── */}
              <div className="info-cards grid grid-cols-3 gap-[10px] mb-9 animate-fade-up delay-[380ms]">
                {/* Stack card — spans 2 cols, navy bg */}
                <div className="col-span-2 bg-navy p-[20px_22px]">
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-cyan mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-[5px]">
                    {TECH_STACK.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[9px] tracking-[0.1em] uppercase px-[10px] py-1 rounded-sm bg-cyan/10 text-cyan"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location card — cyan bg (featured) */}
                <div className="bg-cyan p-[20px_22px] flex flex-col justify-between">
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-blue mb-2">
                    Based in
                  </p>
                  <p className="font-fraunces text-[22px] font-bold text-blue leading-[1.1]">
                    Helsinki,
                    <br />
                    Finland
                  </p>
                </div>

                {/* Stat cards */}
                {STATS.map((s, i) => (
                  <div
                    key={s.l}
                    className={`p-[18px_20px] ${
                      i === 0 ? 'bg-cyan' : 'bg-navy border border-cyan/15'
                    }`}
                  >
                    <p className={`font-fraunces text-[32px] font-bold leading-none ${i === 0 ? 'text-blue' : 'text-white'}`}>
                      {s.v}
                    </p>
                    <p className={`font-dm text-[11px] mt-1 ${i === 0 ? 'text-navy' : 'text-cyan'}`}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative divider */}
              <div
                aria-hidden="true"
                className="h-px bg-cyan/[0.12] max-w-[460px] mb-8 animate-expand-x origin-left delay-[460ms]"
              />

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap items-center mb-7 animate-fade-up delay-[540ms]">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-[10px] font-dm text-[13px] font-medium tracking-[0.06em] uppercase px-7 py-[14px] rounded-full border-0 cursor-pointer transition-all duration-200 bg-cyan text-blue shadow-[0_10px_32px_rgba(0,216,214,0.2)] no-underline hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-cyan focus-visible:outline-offset-[3px]"
                >
                  View Portfolio →
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-[10px] font-mono text-[10px] tracking-[0.15em] uppercase bg-transparent border-0 cursor-pointer p-0 transition-all duration-200 text-white no-underline hover:gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 focus-visible:rounded-sm"
                >
                  <span className="inline-block h-px w-[18px] bg-white transition-all duration-200 group-hover:w-7" />
                  Get in Touch
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-[22px] animate-fade-up delay-[620ms]">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[9px] tracking-[0.18em] uppercase text-cyan-light no-underline transition-colors duration-150 hover:text-cyan"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
      </SectionContainer>
    </>
  );
}
