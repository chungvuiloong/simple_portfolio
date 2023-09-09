import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, imageUrl, demoUrl, githubUrl } = project;

  return (
    <div className="grid grid-rows-6 grid-flow-col bg-white rounded-lg overflow-hidden shadow-md">
      {/* <img src={imageUrl} alt={title} className="w-full h-40 object-cover" /> */}
      <div className='row-span-1 border-b-2 border-blue-900'>{title}</div>
        {/* <div className="p-4 flex-grow">
            <h3 className="text-lg font-medium">{title}</h3>
            <div className="border-b-2 border-blue-900"></div>
            <p className="text-gray-600 mt-2">{description}</p>
        </div> */}
        <div className="row-start-6 row-span-1 p-4 flex justify-between">
            <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto text-blue-500 hover:text-blue-700"
            >
            See more
            </a>
            <a href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-800"
                style={{
                    backgroundColor: '#24292f'
                }}
            >
            <FaGithub className="text-white" />
            <span>Github</span>
            </a>
        </div>
    </div>
  );
};

export default ProjectCard;
