import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import { EXPERIENCES } from "@lib/data";
import type { Experience } from "@lib/data";
import { Badge, Label, Dot } from "@components/ui";

/* ── Mobile responsive styles ──────────────────────────── */
const STYLES = `
  @media (max-width: 768px) {
    .exp-layout { flex-direction: column !important; }
    .exp-sidebar { width: 100% !important; flex-direction: column !important; gap: 0 !important; }
    .exp-sidebar > p { padding: 0 4px 8px; }
    .exp-sidebar-inner {
      flex-direction: row !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      gap: 0 !important;
      margin-top: 0 !important;
      scrollbar-width: none;
      border-bottom: 1px solid rgba(0,216,214,0.12);
    }
    .exp-sidebar-inner::-webkit-scrollbar { display: none; }
    .exp-tab {
      border-left: none !important;
      border-bottom: 2px solid transparent !important;
      border-right: 1px solid rgba(0,216,214,0.08) !important;
      min-width: 160px !important;
      width: auto !important;
      flex-shrink: 0 !important;
      padding: 14px 18px !important;
    }
    .exp-connector { display: none !important; }
  }
`;

/* ── Tab button ──────────────────────────────────────────── */
interface TabBtnProps {
  exp: Experience;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function TabBtn({ exp, isActive, onClick, index }: TabBtnProps) {
  const handleClick = () => {
    console.log('TabBtn clicked:', exp.id);
    onClick();
  };

  const delays = ["delay-[40ms]", "delay-[120ms]", "delay-[200ms]", "delay-[280ms]", "delay-[360ms]"];

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      role="button"
      tabIndex={0}
      className={`
        exp-tab animate-fade-up ${delays[index]}
        w-full p-4 sm:px-5 shrink-0 cursor-pointer select-none relative z-10
        transition-all duration-200
        ${isActive
          ? 'bg-cyan/5 border-l-[3px] border-l-cyan border-b-2 border-b-cyan'
          : 'bg-transparent border-l-[3px] border-l-cyan/15 border-b-2 border-b-transparent'}
      `}
    >
      <p className={`
        font-mono text-[9px] tracking-[0.14em] uppercase mb-1
        transition-colors
        ${isActive ? 'text-cyan' : 'text-cyan/40'}
      `}>
        {exp.id}
      </p>
      <p className={`
        font-fraunces text-[15px] font-bold leading-tight mb-0.5
        transition-colors
        ${isActive ? 'text-white' : 'text-white/45'}
      `}>
        {exp.role}
      </p>
      <p className={`
        font-dm text-[12px]
        transition-colors
        ${isActive ? 'text-cyan' : 'text-cyan/30'}
      `}>
        {exp.company}
      </p>
      {isActive && (
        <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-cyan/50 mt-2">
          {exp.period}
        </p>
      )}
    </div>
  );
}

/* ── Detail panel ────────────────────────────────────────── */
function DetailPanel({ exp }: { exp: Experience }) {
  return (
    <div
      key={exp.id}
      className="animate-fade-slide-in flex flex-col h-full bg-white/5 border border-cyan/10"
    >
      {/* ── Role header ── */}
      <div className="p-6 sm:p-8 md:p-10 border-b border-cyan/10">
        <div className="flex flex-wrap justify-between gap-4 items-start">
          {/* Left: title block */}
          <div>
            <h2 className="font-fraunces font-bold leading-tight mb-2 text-white text-[clamp(24px,4vw,40px)]">
              {exp.role}
            </h2>
            <p className="font-fraunces font-light text-cyan text-[clamp(18px,2.5vw,24px)]">
              {exp.company}
            </p>
          </div>

          {/* Right: meta */}
          <div className="flex flex-col items-start sm:items-end gap-2 mt-1">
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/50">
              {exp.period}
            </p>
            <Badge variant="tenure">{exp.tenure}</Badge>
            <p className="font-dm text-[11px] text-white/40">
              {exp.location}
            </p>
          </div>
        </div>
      </div>

      {/* ── Stack ── */}
      <div className="p-6 sm:p-8 md:p-10 border-b border-cyan/10">
        <Label muted>Tech Stack</Label>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {exp.stack.map((s) => (
            <Badge key={s} variant="stackDark">{s}</Badge>
          ))}
        </div>
      </div>

      {/* ── Responsibilities ── */}
      <div className="p-6 sm:p-8 md:p-10 flex-1">
        <Label muted>Responsibilities</Label>
        <ul className="mt-4 grid gap-3">
          {exp.responsibilities.map((r, ri) => (
            <li key={ri} className="flex gap-3 items-start">
              <Dot />
              <span className="font-dm text-[13px] leading-relaxed text-white/70">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────── */
export default function Work() {
  const [active, setActive] = useState(EXPERIENCES[0].id);
  const exp = EXPERIENCES.find(e => e.id === active);

  return (
    <>
      <style>{STYLES}</style>

      <SectionContainer id="work" backgroundColor="#0d2a3a">
        <div className="font-dm">
          {/* ── Section header ── */}
          <header className="mb-10 sm:mb-14">
            {/* Eyebrow */}
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase flex items-center gap-3 mb-3 text-white/40">
              <span className="inline-block w-6 h-px bg-white/40" />
              3+ years of experience
            </p>

            {/* Big title */}
            <h1 className="font-fraunces font-bold text-[clamp(48px,11vw,148px)] leading-[0.88] -tracking-[0.02em]">
              <span className="text-white">Exper</span>
              <em className="font-fraunces not-italic font-light text-cyan">ience.</em>
            </h1>
          </header>

          {/* ── Divider ── */}
          <div className="mb-10 sm:mb-12 h-px bg-cyan/10" />

          {/* ── Layout: sidebar + panel ── */}
          <div className="exp-layout flex gap-6 items-start">
            {/* ── Sidebar ── */}
            <aside className="exp-sidebar w-60 shrink-0 flex flex-col gap-2">
              <Label muted>Positions</Label>
              <div className="exp-sidebar-inner flex flex-col gap-2 mt-3">
                {EXPERIENCES.map((e, i) => (
                  <TabBtn
                    key={e.id}
                    exp={e}
                    isActive={active === e.id}
                    onClick={() => setActive(e.id)}
                    index={i}
                  />
                ))}
              </div>

              {/* Decorative timeline connector */}
              <div className="exp-connector mt-6 ml-5 pl-5 border-l-2 border-cyan/10">
                <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-cyan/30 mb-1">
                  Since
                </p>
                <p className="font-mono text-[9px] text-white/30">
                  Feb 2023
                </p>
              </div>
            </aside>

            {/* ── Detail panel ── */}
            <div className="flex-1 min-w-0">
              {exp && <DetailPanel exp={exp} />}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
