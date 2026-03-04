import React from "react";

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
          {skills.map((data) => (
            <div key={data.skill} className="flex flex-col">
                <div className="xl:text-[4rem] lg:text-[3rem] md:text-[2.5rem] text-[2rem]">
                    {data.skill}
                </div>
                <div className="grid grid-cols-12">
                    {
                        data.technologies.map((tech) =>
                        <li key={tech} className="col-span-3
                            xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-black opacity-50">
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
