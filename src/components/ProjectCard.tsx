import { Typography } from "@material-tailwind/react";
import React, { ReactNode } from 'react';
import Iconify from "./Iconify";
import { Vercel } from "./StatusTag";

interface Project {
    title?: string;
    description?: string | ReactNode;
    imageUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    status?: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, imageUrl, demoUrl, githubUrl, status } = project;
   
    return (
        <div className='card bg-Off-white flex flex-col pl-5 py-3 w-[300px]'>
            <Typography variant='h4' className='min-h-[70px] flex flex-col-reverse pr-5 text-end text-slate-700'>
                {title}
            </Typography>
            <div className='mt-2' style={{ height: '-webkit-fill-available'}}>
                <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" />
                <div className="mt-5 pr-5">
                    {/* <div className="flex flex-row gap-2">
                        <Typography className="text-slate-700">Hosted by</Typography>
                        <Typography><Vercel vercel_link='' /></Typography>
                    </div> */}
                    <Typography variant='paragraph' className="text-slate-500">
                        {description}
                    </Typography>
                </div>
            </div>
            <div className="mt-5 pr-5 flex justify-between">
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-auto text-blue-500 hover:text-blue-700"
                    >
                    See more
                </a>

                {
                    githubUrl !== undefined ?         
                        <a href={githubUrl}>
                            <div className="btn btn-neutral flex gap-2 w-fit h-fit">
                                <Iconify icon="icomoon-free:github" className="text-white" />
                                <Typography variant="small" color="white">GitHub</Typography>
                            </div>
                        </a>
                    : <></>
                }
            </div>
        </div>
    );
};