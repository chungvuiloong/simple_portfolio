import React, { useState } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { computed, signal } from "@preact/signals";

const projects = [
  // Components
  {
    title: "Product preview card",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
          className="underline underline-offset-4"
          target="_blank"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-product-preview-card-component-main.vercel.app/",
    githubUrl:
      "https://github.com/chungvuiloong/product-preview-card-component-main",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["HTML", "TailwindCSS"],
  },
  {
    title: "Stats preview card",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-stats-preview-card-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/stats-preview-card-component",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["HTML", "TailwindCSS", "Javascript"],
  },
  {
    title: "3-column preview card",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-3-column-preview-card-component.vercel.app/",
    githubUrl:
      "https://github.com/chungvuiloong/3-column-preview-card-component",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "React", "TailwindCSS", "HTML", "Javascript"],
  },
  {
    title: "Single price grid",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-single-price-grid-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/single-price-grid-component",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "React", "TailwindCSS", "HTML", "Javascript"],
  },
  {
    title: "QR code",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-qrcode-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/qr-code-component",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Material Tailwind",
      "HTML",
    ],
  },
  {
    title: "Order Summary",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-order-summary-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/order-summary-component",
    category: "components",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["TailwindCSS", "Material Tailwind", "HTML"],
  },

  // Web Development Projects
  {
    title: "Workit Landing Page",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu"
          className="underline underline-offset-4"
          target="_blank"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-workit-landing-page.vercel.app/",
    githubUrl: "",
    category: "web",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "TailwindCSS", "Spline", "HeyGen", "HTML"],
  },
  {
    title: "EasyBank Landing Page",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-easybank-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/easybank-landing-page",
    category: "web",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "DaisyUI", "TailwindCSS", "HTML"],
  },
  {
    title: "Huddle Landing Page",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-huddle-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/huddle-landing-page",
    category: "web",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["TailwindCSS", "HTML"],
  },
  {
    title: "News Landing Page",
    description: (
      <>
        This is a challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
          className="underline underline-offset-4"
        >
          here
        </a>
      </>
    ),
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-news-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/news-landing-page",
    category: "web",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "React", "Javascript", "TailwindCSS", "HTML"],
  },
  {
    title: "Retink Media Landing Page",
    description: "This is the entry task for Retink Media.",
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://retink-landingpage.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/retink_landingpage",
    category: "web",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["React", "Javascript", "HTML", "Bootstrap"],
  },
  {
    title: "Liana Technologies Landing Page",
    description: "This is the entry task for Liana Technologies.",
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://lianatechnologylandingpage.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/landingpage_liana_tech",
    category: "web",
    year: 2022,
    status: "Completed",
    technologiesUsed: ["React", "Javascript", "HTML", "Bootstrap", "RSS"],
  },

  // Web application
  {
    title: "BMI",
    // description: <>This is a premium challenge from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Access the challenge from here https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T</>,
    description: (
      <>
        This is a premium challenge from{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-4"
        >
          Frontend Mentor
        </a>
        . Access the challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T"
          className="underline underline-offset-4"
        >
          here{" "}
        </a>
      </>
    ),
    imageUrl: "",
    host: "Vercel",
    demoUrl: "https://mrjays-bmi-calculator.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/bmi_calculator",
    category: "web app",
    year: 2023,
    status: "Completed",
    technologiesUsed: ["Next.js", "TailwindCSS", "Javascript", "HTML"],
  },
  // {
  //   title: 'Wolt Delivery Fee Calculator',
  //   description: 'This is the entry task for Wolt in 2023.',
  //   imageUrl: 'project1.jpg',
  // host: 'Vercel',
  //   demoUrl: 'https://mrjays-wolt-delivery-calculator.vercel.app/',
  //   githubUrl: 'https://github.com/chungvuiloong/Wolt_Delivery_Calculator',
  //   category: 'web app',
  //   year: 2023,
  //   status: 'In redesigning progress',
  // },
  {
    title: "Countries App",
    description: "A web app that display info about countries.",
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://countries-basic.vercel.app/",
    githubUrl: "https://github.com/jirimicvl/countriesBasic/",
    category: "web app",
    year: 2022,
    status: "In redesigning progress",
    technologiesUsed: ["React", "Redux", "Javascript", "RESTful API"],
  },

  // Personal Projects
  // {
  //   title: 'Pokedex V2 - In Progress',
  //   description: 'Pokedex V2',
  //   imageUrl: 'project1.jpg',
  //   demoUrl: 'https://project1-demo.com',
  //   githubUrl: 'https://github.com/project1',
  //   category: 'personal',
  //   year: 2023,
  //   status: 'In progress',
  // },
  {
    title: "Simple Portfolio",
    description: "A simple portfolio to display all the work done.",
    imageUrl: "project1.jpg",
    host: "Vercel",
    demoUrl: "https://mrjays-simple-portfolio.vercel.app/",
    githubUrl: "",
    category: "personal",
    year: 2022,
    status: "In redesigning progress",
    technologiesUsed: ["Astro", "React", "TailwindCSS", "Javascript", "HTML"],
  },
  {
    title: "Travel App",
    description: "Travel App - All in one app for your travel conveniences.",
    imageUrl: "project1.jpg",
    host: "Netlify",
    demoUrl: "https://mrjaytravelapp.netlify.app/",
    githubUrl: "",
    category: "personal",
    year: 2022,
    status: "In redesigning progress",
    technologiesUsed: [
      "React",
      "Javascript",
      "Material UI",
      "Redux",
      "Bootstrap",
      "RESTful API",
    ],
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

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("web");

    const categories = [
      { id: "web", label: "Web Development" },
      { id: "web app", label: "Web Application" },
      { id: "components", label: "Components" },
      //   { id: 'mobile', label: 'Mobile Development' },
      //   { id: 'data', label: 'Data Science and Analysis' },
      //   { id: 'software', label: 'Software Development' },
      //   { id: 'open-source', label: 'Open-source Contributions' },
      { id: "personal", label: "Personal Projects" },
      //   { id: 'freelance', label: 'Freelance or Client Work' },
      //   { id: 'hackathon', label: 'Hackathon or Competition Projects' },
    ];
  
    const filteredProjects = projects.filter(
      (project) => project.category === activeCategory,
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
        <div className="mb-10 flex lg:items-center gap-10">
          <h2
            className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
                        font-sans font-500 md:leading-[16rem] leading-[5rem] text-[#00224c] self-center tracking-tighter"
          >
            Po<span className="tracking-wider">rt</span>
            <span className="sm:hidden">
              <br />
            </span>
            folio
          </h2>
          <div className="self-center">
            <PortfolioTab
              categories={categories}
              onChangeCategory={handleCategoryChange}
              activeCategory={activeCategory}
            />
          </div>
        </div>
        <ul className="flex flex-row flex-wrap justify-center mx-auto gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
