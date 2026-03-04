import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import { PROJECTS, PORTFOLIO_FILTERS } from "@lib/data";
import type { Project } from "@lib/data";

/* ─── Google Fonts injection ─────────────────────────────── */
const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,300;0,9..144,700;1,9..144,100;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  .font-fraunces { font-family: 'Fraunces', serif; }
  .font-dm       { font-family: 'DM Sans', sans-serif; }
  .font-mono     { font-family: 'Space Mono', monospace; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.55s cubic-bezier(.25,.46,.45,.94) both; }
  .d1 { animation-delay: 0.05s; }
  .d2 { animation-delay: 0.13s; }
  .d3 { animation-delay: 0.21s; }
  .d4 { animation-delay: 0.29s; }
  .d5 { animation-delay: 0.37s; }
  .d6 { animation-delay: 0.45s; }
  .d7 { animation-delay: 0.53s; }
  .d8 { animation-delay: 0.61s; }
  .d9 { animation-delay: 0.69s; }
  .d10 { animation-delay: 0.77s; }
`;

/* ─── Colour tokens ──────────────────────────────────────── */
const C = {
  cyan: "#00D8D6",
  navy: "#0d2a3a",
  blue: "#00224C",
  cream: "#f5f2ed",
  creamborder: "#e8e4dc",
};

const ACCENT_BARS: Record<string, string> = {
  navy: C.navy,
  cyan: C.cyan,
  blue: C.blue,
};

/* ─── Sub-components ─────────────────────────────────────── */

function ArrowCTA({ color = C.blue, url }: { color?: string; url?: string }) {
  const [h, setH] = useState(false);

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="font-mono text-[9px] md:text-[10px] tracking-[0.14em] uppercase flex items-center gap-1.5 md:gap-2 bg-transparent border-0 p-0 cursor-pointer transition-all duration-200 no-underline"
      style={{ color }}
    >
      Live Demo
      <span
        className="flex items-center transition-all duration-200"
        style={{ gap: h ? 2 : 0 }}
      >
        <span
          className="block h-px transition-all duration-200"
          style={{ width: h ? 24 : 16, background: color }}
        />
        <span
          className="block flex-shrink-0"
          style={{
            width: 5,
            height: 5,
            borderTop: `1px solid ${color}`,
            borderRight: `1px solid ${color}`,
            transform: "rotate(45deg)",
            marginLeft: -3,
          }}
        />
      </span>
    </a>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-[8px] md:text-[9px] tracking-[0.1em] uppercase px-1.5 md:px-2 py-0.5 md:py-1"
      style={{ background: C.creamborder, color: C.navy, borderRadius: 2 }}
    >
      {label}
    </span>
  );
}

/* ─── Card ───────────────────────────────────────────────── */
function Card({ project, delay }: { project: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`fade-up d${delay}`}
      style={{
        gridColumn: "span 1",
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: C.cream,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 22px 56px rgba(0,34,76,0.18)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="flex-shrink-0 h-1"
          style={{ background: ACCENT_BARS[project.accent] }}
        />

        {/* Ghost number */}
        <span
          className="font-mono absolute top-2 md:top-3 right-3 md:right-4 text-[9px] md:text-[10px] tracking-[0.15em] pointer-events-none select-none transition-opacity duration-300"
          style={{ color: C.blue, opacity: hovered ? 0.35 : 0.18 }}
        >
          {project.id}
        </span>

        {/* Body */}
        <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1 gap-2.5 md:gap-3">
          <h2
            className="font-fraunces font-light leading-snug"
            style={{
              fontSize: "clamp(16px, 1.7vw, 22px)",
              color: C.blue,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h2>

          <p
            className="font-dm text-[12px] md:text-[13px] leading-relaxed flex-1"
            style={{ color: "rgba(13,42,58,0.75)" }}
          >
            {project.desc}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Tag key={s} label={s} />
            ))}
          </div>

          {/* Footer */}
          <div
            className="pt-2.5 md:pt-3 mt-1"
            style={{ borderTop: `1px solid rgba(0,34,76,0.09)` }}
          >
            <ArrowCTA color={C.blue} url={project.demoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Web Development");

  const filteredProjects = PROJECTS.filter((p) => {
    const filterMap: Record<string, string> = {
      "Web Development": "web",
      "Web Application": "web app",
      "Components": "components",
      "Personal Projects": "personal",
    };
    return p.category === filterMap[activeFilter];
  });

  return (
    <>
      <style>{FONT_STYLE}</style>

      <SectionContainer id="portfolio" backgroundColor="#00dcda">
        <div className="font-dm">
          {/* ── Header ── */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-4">
            {/* Title block */}
            <div>
              {/* Eyebrow */}
              <p
                className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase flex items-center gap-2 md:gap-3 mb-2 md:mb-3"
                style={{ color: "rgba(13,42,58,0.6)" }}
              >
                <span
                  className="block h-px w-4 md:w-6"
                  style={{ background: "rgba(13,42,58,0.6)" }}
                />
                Selected work
              </p>

              {/* Wordmark */}
              <h1
                className="font-fraunces font-bold tracking-tight leading-none"
                style={{
                  fontSize: "clamp(48px, 12vw, 152px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ color: C.blue }}>Port</span>
                <em className="not-italic font-light block" style={{ color: C.navy }}>
                  folio.
                </em>
              </h1>
            </div>

            {/* Filter + count */}
            <div className="flex flex-col items-start md:items-end gap-3 md:gap-4 w-full md:w-auto md:self-end md:pb-1">
              <nav className="flex flex-wrap gap-2 justify-start md:justify-end w-full">
                {PORTFOLIO_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="font-dm text-[11px] md:text-[12px] px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer border-0 transition-all duration-200"
                    style={
                      activeFilter === f
                        ? { background: C.blue, color: "#fff" }
                        : { background: "transparent", color: "rgba(13,42,58,0.65)" }
                    }
                    onMouseEnter={(e) => {
                      if (activeFilter !== f)
                        e.currentTarget.style.background = "rgba(13,42,58,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeFilter !== f)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {f}
                  </button>
                ))}
              </nav>

              <p
                className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase"
                style={{ color: "rgba(13,42,58,0.45)" }}
              >
                {filteredProjects.length} projects
              </p>
            </div>
          </header>

          {/* ── Divider ── */}
          <div
            className="mb-8 md:mb-12 lg:mb-14 mt-6 md:mt-8"
            style={{ height: 1, background: "rgba(13,42,58,0.15)" }}
          />

          {/* ── 12-col asymmetric grid ── */}
          <div
            className="grid gap-4 md:gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {filteredProjects.map((p, i) => (
              <Card key={p.id} project={p} delay={i + 1} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
