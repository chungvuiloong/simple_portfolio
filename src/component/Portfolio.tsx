import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
    category: 'web',
  },
  {
    title: 'Project 2',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
    category: 'web',
  },
  {
    title: 'Project 3',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
    category: 'web',
  },
  {
    title: 'Project 4',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
    category: 'web',
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
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
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
        <div className="p-10" style={{ backgroundColor: '#00dcda' }}>
            <div>
                <div>Portfolio</div>
                <PortfolioTab
                    categories={categories}
                    onChangeCategory={handleCategoryChange}
                    activeCategory={activeCategory}
                />
            </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

        </div>

    );
  };
  
  export default Portfolio;