import React, { useState } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { computed, signal } from "@preact/signals";

const skills = [
    {
        "skill": "front-end",
        "technologies": [ "React.js", "Next.js", "Astro.js", "Vue.js" ]
    },
    {
        "skill": "back-end",
        "technologies": [ "Node.js", "Java", "C#" ]
    },
    {
        "skill": "others",
        "technologies": ["AWS", "Azure", "Firebase", "MongoDB", "PostgreSQL", "MySQL" ]
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
    const [activeCategory, setActiveCategory] = useState<string>("front-end");

    const categories = [
      { id: "front-end", label: "front-end" },
      { id: "back-end", label: "back-end" },
      { id: "others", label: "others" },
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
        <div className="mb-10 flex lg:items-center xl:gap-10 md:gap-5 gap-3">
            <h2  className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
            font-sans font-500 md:leading-[10rem] leading-[5rem] text-[#00224c] self-center tracking-tighter"
            >Skills</h2>
          <div className="self-center">
            <PortfolioTab
              categories={categories}
              onChangeCategory={handleCategoryChange}
              activeCategory={activeCategory}
            />
          </div>
        </div>
        <ul className="flex flex-row flex-wrap justify-center mx-auto gap-10">
          {filteredSkill.map((data, index) => (
            <>
                {
                    data.technologies.map((tech, index) => <li>{tech}</li>)
                }
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tech;
