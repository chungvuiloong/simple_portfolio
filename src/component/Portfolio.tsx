import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
  },
  {
    title: 'Project 2',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
  },
  {
    title: 'Project 3',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
  },
  {
    title: 'Project 4',
    description: 'This is the description of Project 1.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://project1-demo.com',
    githubUrl: 'https://github.com/project1',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
