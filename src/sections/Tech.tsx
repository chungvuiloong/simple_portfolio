import React from "react";
import { SectionContainer } from "@components/SectionContainer";
import { SectionTitle } from "@components/SectionTitle";

const skills = [
    {
        "skill": "Front-end",
        "technologies": [ "React.js", "Next.js", "Astro.js", "Vue.js" ]
    },
    {
        "skill": "Back-end",
        "technologies": [ "Node.js", "Java", "C#", "Python", "C", "C++", "PHP", "Symfony" ]
    },
    {
        "skill": "Others",
        "technologies": [
            "AWS", "Azure", "Firebase",
            "MongoDB", "PostgreSQL", "MySQL",
            "Jest", "Playwright", "Cypress",
            "Docker", "Kubernetes",
            "Figma", "Canvas"
        ]
    },
];

const Tech: React.FC = () => {
  return (
    <SectionContainer>
      <div className="md:mb-10 mb-2 flex lg:items-center xl:gap-10 md:gap-5 gap-3">
        <SectionTitle className="md:leading-[10rem]">Skills</SectionTitle>
      </div>
      <ul className="flex flex-col flex-wrap justify-center mx-auto gap-10">
        {skills.map((data) => (
          <div key={data.skill} className="flex flex-col">
            <div className="xl:text-[4rem] lg:text-[3rem] md:text-[2.5rem] text-[2rem]">
              {data.skill}
            </div>
            <div className="grid grid-cols-12">
              {data.technologies.map((tech) => (
                <li
                  key={tech}
                  className="col-span-3 xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-black opacity-50"
                >
                  {tech}
                </li>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Tech;
