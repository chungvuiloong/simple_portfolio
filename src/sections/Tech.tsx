import React, { useState } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { computed, signal } from "@preact/signals";

const skills = [
    {
        "skill": "Front-end",
        "technologies": [ "React.js", "Next.js", "Astro.js", "Vue.js" ]
    },
    {
        "skill": "Back-end",
        "technologies": [ "Node.js", "Java", "C#", "Python", "C", "C++" ]
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

interface PortfolioTabProps {
  categories: { id: string; label: string }[];
  onChangeCategory: (category: string) => void;
  activeCategory: string;
}

const PortfolioTab: React.FC<PortfolioTabProps> = ({
  categories,
  onChangeCategory,
  activeCategory,
}) => {
  return (
    <div className="flex flex-col border-l-4 border-l-[#00224c]">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`md:px-6 px-4 py-2 rounded-tl-none rounded-bl-none rounded-r-3xl text-left xl:text-xl lg:text-md text-xs ${
            activeCategory === category.id
              ? "bg-[#00224c] text-white"
              : "bg-inherit text-[#00224c]"
          }`}
          onClick={() => onChangeCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

const Tech: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Front-end");

    const categories = [
      { id: "Front-end", label: "Front-end" },
      { id: "Back-end", label: "Back-end" },
      { id: "Others", label: "Others" },
    ];
  
    const filteredSkill = skills.filter(
      (data) => data.skill === activeCategory,
    );
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };  

  return (
    <section
      className="py-24 sm:py-32 px-6 lg:px-10"
      style={{ backgroundColor: "#00dcda" }}
    >
      <div className="mx-auto container">
        <div className="md:mb-10 mb-2 flex lg:items-center xl:gap-10 md:gap-5 gap-3">
            <h2  className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
            font-sans font-500 md:leading-[10rem] leading-[5rem] text-[#00224c] self-center tracking-tighter"
            >Skills</h2>
        </div>
        <ul className="flex flex-col flex-wrap justify-center mx-auto gap-10">
          {skills.map((data, index) => (
            <div className="flex flex-col">
                <div className="xl:text-[4rem] lg:text-[3rem] md:text-[2.5rem] text-[2rem]">
                    {data.skill}
                </div>
                <div className="grid grid-cols-12">
                    {
                        data.technologies.map((tech, index) => 
                        <li className="col-span-3 
                            xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem]">
                            {tech}
                        </li>)
                    }
                </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tech;
