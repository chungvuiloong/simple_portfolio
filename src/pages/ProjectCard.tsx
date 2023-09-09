import {
    Card,
    CardHeader,
    Typography,
    Button,
    IconButton,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
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
    <Card className='
        grid grid-rows-3
        pl-5 py-3
        border-2 border-blue-900 rounded-xl
        font-san'
    >
        <Typography className='pr-5 pb-3 row-span-1 text-end self-end'>{title}</Typography>
        <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" />
        <CardBody>
            Test
        </CardBody>
        <CardFooter className="pr-5 row-span-1 flex justify-between">
            <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="my-auto text-blue-500 hover:text-blue-700"
                >
                See more
            </a>
            <Button className='flex gap-1 bg-gray-800'>
                <FaGithub className="text-white my-auto" />
                <span>Github</span>
            </Button>
            </CardFooter>
    </Card>
  );
};

export default ProjectCard;

    // <div className="grid grid-rows-6 grid-flow-col bg-white rounded-lg overflow-hidden shadow-md">
      {/* <img src={imageUrl} alt={title} className="w-full h-40 object-cover" /> */}

      {/* <div className='row-span-1 border-b-2 border-blue-900'>{title}</div> */}
        {/* <div className="p-4 flex-grow">
            <h3 className="text-lg font-medium">{title}</h3>
            <div className="border-b-2 border-blue-900"></div>
            <p className="text-gray-600 mt-2">{description}</p>
        </div> */}
        {/* <div className="row-start-6 row-span-1 p-4 flex justify-between">
            <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto text-blue-500 hover:text-blue-700"
            >
            See more
            </a>
            <Button>
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
            </Button>
        </div> */}
    // </div>