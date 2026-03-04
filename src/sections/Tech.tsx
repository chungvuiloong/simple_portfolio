import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import { SectionHeader } from "@components/SectionHeader";

const skills = [
  {
    category: "Front-end",
    technologies: ["React.js", "Next.js", "Astro.js", "Vue.js"],
  },
  {
    category: "Back-end",
    technologies: ["Node.js", "Java", "C#", "Python", "C", "C++", "PHP", "Symfony"],
  },
  {
    category: "Others",
    technologies: [
      "AWS", "Azure", "Firebase",
      "MongoDB", "PostgreSQL", "MySQL",
      "Jest", "Playwright", "Cypress",
      "Docker", "Kubernetes",
      "Figma", "Canvas",
    ],
  },
];

const Tech: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SectionContainer id="tech" backgroundColor="#00D8D6">
      <div className="relative">
        {/* Ghost background text */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 -left-[2vw] -translate-y-1/2 select-none pointer-events-none font-fraunces font-black leading-none text-[clamp(140px,18vw,220px)] text-blue/[0.07] -tracking-[0.045em]"
        >
          SKILLS
        </span>

        {/* Header */}
        <div className="relative z-10">
          <SectionHeader
            as="h2"
            eyebrow="My Toolkit"
            title="Ski"
            titleAccent="lls."
            accentPosition="end"
            inLightBackground
          />

          {/* Divider */}
          <div className="mb-8 md:mb-12 lg:mb-14 mt-6 md:mt-8 h-px bg-blue/15" />

          {/* Skill groups */}
          <div className="flex flex-col gap-12">
            {skills.map(({ category, technologies }) => (
              <div key={category}>
                {/* Category row */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-blue shrink-0">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-blue" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((skill) => (
                    <button
                      key={skill}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      className={`px-5 py-2 font-mono text-[11px] md:text-[12px] font-semibold tracking-[0.08em] rounded-sm border-2 transition-all duration-200 cursor-pointer ${
                        hovered === skill
                          ? 'bg-blue text-cyan border-blue'
                          : 'bg-transparent text-blue border-blue'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tech;
