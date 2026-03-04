import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import { SectionHeader } from "@components/SectionHeader";
import { PROJECTS, PORTFOLIO_FILTERS } from "@lib/data";
import type { Project } from "@lib/data";

const ACCENT_BARS: Record<string, string> = {
  navy: "#0d2a3a",
  cyan: "#00D8D6",
  blue: "#00224C",
};

/* ─── Sub-components ─────────────────────────────────────── */

function ArrowCTA({ url }: { url?: string }) {
  const [h, setH] = useState(false);

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="font-mono text-[9px] md:text-[10px] tracking-[0.14em] uppercase flex items-center bg-transparent border-0 p-0 cursor-pointer transition-all duration-200 no-underline text-blue"
    >
      Live Demo
      <span className={`flex items-center transition-all duration-200 ${h ? 'gap-0.5' : 'gap-0'}`}>
        <span className={`block h-px transition-all duration-200 bg-blue ${h ? 'w-6' : 'w-4'}`} />
        <span className="block flex-shrink-0 w-[5px] h-[5px] border-t border-r border-blue rotate-45 -ml-[3px]" />
      </span>
    </a>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[8px] md:text-[9px] tracking-[0.1em] uppercase px-1.5 md:px-2 py-0.5 md:py-1 bg-cream-border text-navy rounded-sm">
      {label}
    </span>
  );
}

/* ─── Card ───────────────────────────────────────────────── */
function Card({ project, delay }: { project: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);

  const delays = ["delay-[50ms]", "delay-[130ms]", "delay-[210ms]", "delay-[290ms]", "delay-[370ms]", "delay-[450ms]", "delay-[530ms]", "delay-[610ms]", "delay-[690ms]", "delay-[770ms]"];

  return (
    <div className={`animate-fade-up ${delays[delay - 1]} col-span-1`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 bg-cream ${
          hovered ? '-translate-y-1.5 shadow-[0_22px_56px_rgba(0,34,76,0.18)]' : 'translate-y-0 shadow-none'
        }`}
      >
        {/* Top accent bar */}
        <div className="flex-shrink-0 h-1" style={{ background: ACCENT_BARS[project.accent] }} />

        {/* Ghost number */}
        <span
          className={`font-mono absolute top-2 md:top-3 right-3 md:right-4 text-[9px] md:text-[10px] tracking-[0.15em] pointer-events-none select-none transition-opacity duration-300 text-blue ${
            hovered ? 'opacity-35' : 'opacity-[0.18]'
          }`}
        >
          {project.id}
        </span>

        {/* Body */}
        <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1 gap-2.5 md:gap-3">
          <h2 className="font-light text-[clamp(16px,1.7vw,22px)] text-blue leading-[1.2]">
            {project.title}
          </h2>

          <p className="font-dm text-[12px] md:text-[13px] leading-relaxed flex-1 text-navy-light">
            {project.desc}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Tag key={s} label={s} />
            ))}
          </div>

          {/* Footer */}
          <div className="pt-2.5 md:pt-3 mt-1 border-t border-blue/[0.09]">
            <ArrowCTA url={project.demoUrl} />
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
    <SectionContainer id="portfolio" backgroundColor="#00dcda">
      <div className="font-dm text-navy">
        <SectionHeader
          eyebrow="Selected work"
          title="Port"
          titleAccent="folio."
          accentPosition="end"
          actions={
            <div className="flex flex-col items-start md:items-end gap-3 md:gap-4 w-full md:w-auto md:self-end md:pb-1">
              <nav className="flex flex-wrap gap-2 justify-start md:justify-end w-full">
                {PORTFOLIO_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`font-dm text-[11px] md:text-[12px] px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer border-0 transition-all duration-200 ${
                      activeFilter === f
                        ? 'bg-blue text-white'
                        : 'bg-transparent text-navy/65 hover:bg-navy/10'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </nav>

              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-navy/45">
                {filteredProjects.length} projects
              </p>
            </div>
          }
        />

        {/* ── Divider ── */}
        <div className="mb-8 md:mb-12 lg:mb-14 mt-6 md:mt-8 h-px bg-navy/15" />

        {/* ── 12-col asymmetric grid ── */}
        <div className="grid gap-4 md:gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {filteredProjects.map((p, i) => (
            <Card key={p.id} project={p} delay={i + 1} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
