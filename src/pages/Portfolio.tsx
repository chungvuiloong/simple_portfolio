import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
// Web Development Projects
  {
    title: 'Landing Page - Retink Media',
    description: 'This is the entry task for Retink Media.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://retink-landingpage.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/retink_landingpage',
    category: 'web',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'Landing Page - Liana Technologies',
    description: 'This is the entry task for Liana Technologies.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://lianatechnologylandingpage.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/landingpage_liana_tech',
    category: 'web',
    year: 2022,
    status: 'Completed',
  },
  // Web application
  {
    title: 'Wolt Delivery Fee Calculator',
    description: 'This is the entry task for Wolt in 2023.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-wolt-delivery-calculator.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/Wolt_Delivery_Calculator',
    category: 'web app',
    year: 2023,
    status: 'In redesigning progress',
  },
  {
    title: 'Countries App',
    description: 'A web app that display info about countries.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://countries-basic.vercel.app/',
    githubUrl: 'https://github.com/jirimicvl/countriesBasic/',
    category: 'web app',
    year: 2022,
    status: 'In redesigning progress',
  },

// Personal Projects
  {
    title: 'Pokedex V2 - In Progress',
    description: 'Pokedex V2',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
    category: 'personal',
    year: 2023,
    status: 'In progress',
  },
  {
    title: 'Travel App',
    description: 'Travel App - All in one app for your travel conveniences.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjaytravelapp.netlify.app/',
    githubUrl: '#',
    category: 'personal',
    year:2022,
    status: 'In redesigning progress',
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
      <div className="mt-5 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-black-700'
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
    const [activeCategory, setActiveCategory] = useState<string>('web');
  
    const categories = [
      { id: 'web', label: 'Web Development' },
      { id: 'web app', label: 'Web Application' },
    //   { id: 'mobile', label: 'Mobile Development' },
    //   { id: 'data', label: 'Data Science and Analysis' },
    //   { id: 'software', label: 'Software Development' },
    //   { id: 'open-source', label: 'Open-source Contributions' },
      { id: 'personal', label: 'Personal Projects' },
    //   { id: 'freelance', label: 'Freelance or Client Work' },
    //   { id: 'hackathon', label: 'Hackathon or Competition Projects' },
    ];
  
    const filteredProjects = projects.filter(
      (project) => project.category === activeCategory
    );
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };
  
    return (
      <section className="px-6 py-12 sm:py-8 lg:px-8" style={{ backgroundColor: '#00dcda' }} >
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl tracking-tight sm:text-4xl 
          font-sans font-500"  
                style={{ color: 'var(--ext-dark-blue-01)' }}
          >
            Portfolio
          </h2>
          <PortfolioTab
          categories={categories}
          onChangeCategory={handleCategoryChange}
          activeCategory={activeCategory}
          />
        </div>
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Portfolio;