import {
    Card,
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

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, imageUrl, demoUrl, githubUrl } = project;
    return (
    <Card className='
    sm:
        basis-1/4
        pl-5 py-3
        border-2 border-blue-900 rounded-xl
        font-san'
    >
        <Typography variant='h4' className='pb-3 text-end self-end w-full'>
            <div className='pr-5'>{title}</div>
            <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" />
        </Typography>
        <CardBody className="pr-5">
            <Typography variant='paragraph'>
                {description}
            </Typography>
        </CardBody>

        <CardFooter className="pr-5 flex justify-between">
            {/* <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="my-auto text-blue-500 hover:text-blue-700"
                >
                See more
            </a> */}
            <Button className='flex gap-1 bg-gray-800 w-fit h-fit'>
                <FaGithub className="text-white my-auto" />
                <span>Github</span>
            </Button>
            </CardFooter>
    </Card>
  );
};