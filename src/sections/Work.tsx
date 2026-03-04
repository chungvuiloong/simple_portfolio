import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";

/* ── Fonts & keyframes ───────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,300;0,9..144,700;1,9..144,100;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  .ff  { font-family: 'Fraunces', serif; }
  .fdm { font-family: 'DM Sans', sans-serif; }
  .fmono { font-family: 'Space Mono', monospace; }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .anim-panel  { animation: fadeSlideIn 0.4s cubic-bezier(.25,.46,.45,.94) both; }
  .anim-fadein { animation: fadeIn 0.35s ease both; }
  .anim-up     { animation: fadeUp 0.5s cubic-bezier(.25,.46,.45,.94) both; }
  .d1{animation-delay:.04s}.d2{animation-delay:.12s}.d3{animation-delay:.20s}.d4{animation-delay:.28s}.d5{animation-delay:.36s}

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

/* ── Palette ─────────────────────────────────────────────── */
const C = {
  cyan:  "#00D8D6",
  navy:  "#0d2a3a",
  blue:  "#00224C",
  cream: "#f5f2ed",
  creamborder: "#e8e4dc",
};

/* ── Data ────────────────────────────────────────────────── */
const EXPERIENCES = [
  {
    id: "01",
    role: "Fullstack Developer",
    company: "Emmy Clothing",
    period: "Oct 2024 — Present",
    tenure: "1 yr 5 mos",
    location: "Helsinki, Uusimaa, Finland · Remote",
    type: "Full-time",
    stack: ["Next.js","React","TypeScript","Javascript","Node.js","TailwindCSS","Figma","GraphQL","Apollo Client"],
    responsibilities: [
      "Developed and maintained full-stack web applications using a variety of modern technologies.",
      "Redesigned UX/UI web pages and components via user research and trending design patterns.",
      "Identified and resolved bugs to enhance functionality, optimize performance, and improve UX.",
      "Prototyped wireframes of new sections, components, and web pages using Figma.",
    ],
  },
  {
    id: "02",
    role: "UX/UI Frontend Developer",
    company: "Strive for Startups",
    period: "May 2024 — Present",
    tenure: "1 yr 10 mos",
    location: "Helsinki, Uusimaa, Finland · Remote",
    type: "Contract",
    stack: ["Next.js","TypeScript","Javascript","Node.js","TailwindCSS"],
    responsibilities: [
      "Collaborated with marketing and branding teams to enhance landing and dashboard pages.",
      "Built reusable, maintainable components from Figma designs using Tailwind and Next.js.",
      "Improved performance metrics and accessibility scores across core user flows.",
    ],
  },
  {
    id: "03",
    role: "Fullstack Developer",
    company: "Kyky Today",
    period: "Feb 2024 — May 2024",
    tenure: "4 months",
    location: "Helsinki, Uusimaa, Finland · Hybrid",
    type: "Full-time",
    stack: ["React.js","SASS","Bootstrap","Firebase","Node.js"],
    responsibilities: [
      "Developed and maintained dynamic web pages, ensuring optimal performance and responsiveness.",
      "Took initiative in redesigning the registration page with transparent and interactive error handling.",
      "Researched and utilized Yup schema for error handling.",
      "Used CSS architecture to restructure and refactor code into smaller, modular components.",
    ],
  },
  {
    id: "04",
    role: "Frontend Developer",
    company: "Worthmore",
    period: "Jul 2023 — Feb 2024",
    tenure: "8 months",
    location: "København, Capital Region, Denmark · Remote",
    type: "Full-time",
    stack: ["React.js","Next.js","TypeScript","Tailwind CSS","JavaScript","Node.js"],
    responsibilities: [
      "Built reusable, maintainable components from Figma designs using Tailwind, TypeScript, and Next.js.",
      "Reviewed and prepared code to be pushed from development to production with the CTO.",
      "Contributed to design system development, maintaining UI/UX standards and guidelines.",
      "Conducted user research and translated findings into user personas and design requirements.",
      "Assisted in transitioning to new components and UI (shadcn/ui).",
    ],
  },
  {
    id: "05",
    role: "Fullstack Developer",
    company: "Retink Media",
    period: "Feb 2023 — Aug 2023",
    tenure: "7 months",
    location: "Bonn, North Rhine-Westphalia, Germany · Remote",
    type: "Full-time",
    stack: ["Next.js","React.js","Node.js","Zustand","Moment.js","Redux"],
    responsibilities: [
      "Contributed to building the company's PaaS by creating key components including calendar, reminder, and form functionalities.",
      "Developed custom components to accurately replicate Figma designs, ensuring precise visual alignment.",
      "Conducted thorough debugging and refactoring to improve performance and maintainability.",
      "Created reusable components that streamlined design implementation and enhanced code reusability.",
    ],
  },
];

/* ── Atoms ───────────────────────────────────────────────── */

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: C.blue, color: C.cyan },
    tenure:  { background: "rgba(0,216,214,0.12)", color: C.cyan },
    stack:   { background: C.creamborder, color: C.navy },
    stackDark: { background: "rgba(0,34,76,0.55)", color: C.cyan },
  };
  return (
    <span className="fmono inline-block"
          style={{ ...styles[variant], fontSize: 9, letterSpacing: "0.14em",
                   textTransform: "uppercase", padding: "3px 9px", borderRadius: 2 }}>
      {children}
    </span>
  );
}

function Dot() {
  return <span className="flex-shrink-0 rounded-full mt-[7px]"
               style={{ width: 5, height: 5, background: C.cyan }} />;
}

function Label({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p className="fmono uppercase tracking-[0.22em]"
       style={{ fontSize: 9, color: muted ? "rgba(0,216,214,0.5)" : C.cyan }}>
      {children}
    </p>
  );
}

/* ── Tab button (sidebar on desktop, pill on mobile) ─────── */
interface TabBtnProps {
  exp: any;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function TabBtn({ exp, isActive, onClick, index }: TabBtnProps) {
  const handleClick = () => {
    console.log('TabBtn clicked:', exp.id);
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`exp-tab anim-up d${index + 1}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      style={{
        background:   isActive ? "rgba(0,216,214,0.07)" : "transparent",
        borderLeft:   `3px solid ${isActive ? C.cyan : "rgba(0,216,214,0.15)"}`,
        borderBottom: isActive ? `2px solid ${C.cyan}` : "2px solid transparent",
        padding:      "16px 20px",
        flexShrink:   0,
        width: "100%",
        cursor: "pointer",
        transition: "all 0.2s",
        userSelect: "none",
        position: "relative",
        zIndex: 10,
      }}
    >
      <p className="fmono" style={{
        fontSize: 9,
        letterSpacing: "0.14em",
        color: isActive ? C.cyan : "rgba(0,216,214,0.4)",
        textTransform: "uppercase",
        margin: "0 0 4px 0",
      }}>
        {exp.id}
      </p>
      <p className="ff" style={{
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 1.2,
        color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
        margin: "0 0 2px 0",
      }}>
        {exp.role}
      </p>
      <p className="fdm" style={{
        fontSize: 12,
        color: isActive ? C.cyan : "rgba(0,216,214,0.3)",
        margin: 0,
      }}>
        {exp.company}
      </p>
      {isActive && (
        <p className="fmono" style={{
          fontSize: 9,
          letterSpacing: "0.12em",
          color: "rgba(0,216,214,0.5)",
          textTransform: "uppercase",
          margin: "8px 0 0 0",
        }}>
          {exp.period}
        </p>
      )}
    </div>
  );
}

/* ── Detail panel ────────────────────────────────────────── */
function DetailPanel({ exp }: any) {
  return (
    <div key={exp.id} className="anim-panel flex flex-col h-full"
         style={{ background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,216,214,0.1)" }}>

      {/* ── Role header ── */}
      <div className="p-6 sm:p-8 md:p-10"
           style={{ borderBottom: "1px solid rgba(0,216,214,0.1)" }}>
        <div className="flex flex-wrap justify-between gap-4 items-start">

          {/* Left: title block */}
          <div>
            <h2 className="ff font-bold leading-tight mb-2"
                style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "#fff" }}>
              {exp.role}
            </h2>
            <p className="ff font-light" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: C.cyan }}>
              {exp.company}
            </p>
          </div>

          {/* Right: meta */}
          <div className="flex flex-col items-start sm:items-end gap-2 mt-1">
            <p className="fmono uppercase tracking-widest" style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
              {exp.period}
            </p>
            <Badge variant="tenure">{exp.tenure}</Badge>
            <p className="fdm" style={{ fontSize: 11, color: "rgba(255,255,255,0.38)" }}>
              {exp.location}
            </p>
          </div>
        </div>
      </div>

      {/* ── Stack ── */}
      <div className="p-6 sm:p-8 md:p-10"
           style={{ borderBottom: "1px solid rgba(0,216,214,0.1)" }}>
        <Label muted>Tech Stack</Label>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {exp.stack.map((s: string) => <Badge key={s} variant="stackDark">{s}</Badge>)}
        </div>
      </div>

      {/* ── Responsibilities ── */}
      <div className="p-6 sm:p-8 md:p-10 flex-1">
        <Label muted>Responsibilities</Label>
        <ul className="mt-4 grid gap-3"
            style={{ gridTemplateColumns: "repeat(1, 1fr)" }}>
          {exp.responsibilities.map((r: string, ri: number) => (
            <li key={ri} className="flex gap-3 items-start">
              <Dot />
              <span className="fdm leading-relaxed" style={{ fontSize: 13, color: "rgba(255,255,255,0.72)" }}>
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

      <SectionContainer id="work" backgroundColor={C.navy}>
        <div className="fdm">
          {/* ── Section header ── */}
          <header className="mb-10 sm:mb-14">
            {/* Eyebrow */}
            <p className="fmono uppercase tracking-[0.25em] flex items-center gap-3 mb-3"
               style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: "rgba(255,255,255,0.4)" }} />
              3+ years of experience
            </p>

            {/* Big title */}
            <h1 className="ff font-bold tracking-tight"
                style={{ fontSize: "clamp(48px, 11vw, 148px)", lineHeight: 0.88,
                         letterSpacing: "-0.02em" }}>
              <span style={{ color: "#fff" }}>Exper</span>
              <em className="ff" style={{ fontStyle: "normal", fontWeight: 100, color: C.cyan }}>ience.</em>
            </h1>
          </header>

          {/* ── Divider ── */}
          <div className="mb-10 sm:mb-12" style={{ height: 1, background: "rgba(0,216,214,0.12)" }} />

          {/* ══════════════════════════════════════════
              DESKTOP: sidebar + panel side by side
              MOBILE:  horizontal tab strip + panel stacked
          ══════════════════════════════════════════ */}

          {/* Always side-by-side: sidebar left, panel right */}
          <div className="exp-layout" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

            {/* ── Sidebar ── */}
            <aside className="exp-sidebar" style={{ width: 240, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <Label muted>Positions</Label>
              <div className="exp-sidebar-inner" style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
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
              <div className="exp-connector" style={{ marginTop: 24, marginLeft: 20, paddingLeft: 20,
                            borderLeft: "2px solid rgba(0,216,214,0.12)" }}>
                <p className="fmono uppercase" style={{ fontSize: 9, letterSpacing: "0.14em",
                                                         color: "rgba(0,216,214,0.3)", marginBottom: 4 }}>Since</p>
                <p className="fmono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>Feb 2023</p>
              </div>
            </aside>

            {/* ── Detail panel ── */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {exp && <DetailPanel exp={exp} />}
            </div>

          </div>
        </div>
      </SectionContainer>
    </>
  );
}
