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
    // <Card className='
    //     basis-1/4
    //     pl-5 py-3
    //     flex flex-col
    //     border-2 border-blue-900 rounded-xl
    //     min-w-[200px]
    //     font-san'
    // >
    //     <Typography variant='h4' className='grow'>
    //         <div className='pr-5'>{title}</div>
    //     </Typography>
    //     <CardBody className="grow-0 pr-5">
    //         {/* <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" /> */}
    //         <Typography variant='paragraph'>
    //             {description}
    //         </Typography>
    //     </CardBody>

    //     {/* <CardFooter className="grow-0 pr-5 flex justify-between">
            // <a
            //     href={demoUrl}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="my-auto text-blue-500 hover:text-blue-700"
            //     >
            //     See more
            // </a>
            // <Button className='flex gap-1 bg-gray-800 w-fit h-fit'>
            //     <FaGithub className="text-white my-auto" />
            //     <span>Github</span>
            // </Button>
    //         </CardFooter> */}
    // </Card>
    <Card className='flex flex-col pl-5 py-3 w-[300px]'>
        <Typography variant='h4' className='min-h-[70px] flex flex-col-reverse pr-5 text-end'>
            {title}
        </Typography>
        <CardBody className='mt-2' style={{ height: '-webkit-fill-available'}}>
            <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" />
            <Typography variant='paragraph' className="mt-5 pr-5">
                {description}
            </Typography>
        </CardBody>
        <CardFooter className="mt-5 pr-5 flex justify-between">
            <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="my-auto text-blue-500 hover:text-blue-700"
                >
                See more
            </a>
            <a href={githubUrl}>
                <Button className='flex gap-2 bg-gray-800 w-fit h-fit'>
                    <FaGithub className="text-white my-auto" />
                    <Typography variant="small">Github</Typography>
                </Button>
            </a>
        </CardFooter>
    </Card>
  );
};