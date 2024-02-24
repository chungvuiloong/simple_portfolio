// import { Typography } from "@material-tailwind/react";
// import React, { ReactNode } from "react";
// import Iconify from "./Iconify";
// import { HostedBy } from "./StatusTag";
// import TechnologiesUsed from "./TechnologiesUsed";

// interface Project {
//   title?: string;
//   description?: string | ReactNode;
//   host?: string;
//   imageUrl?: string;
//   demoUrl?: string;
//   githubUrl?: string;
//   status?: string;
//   technologiesUsed?: string[];
// }

// interface ProjectCardProps {
//   project: Project;
// }

// export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   const {
//     title,
//     description,
//     imageUrl,
//     host,
//     demoUrl,
//     githubUrl,
//     status,
//     technologiesUsed,
//   } = project;

//   return (
//     <div className="card bg-Off-white flex flex-col pl-5 py-3 w-[300px]">
//       <Typography
//         variant="h4"
//         className="min-h-[70px] flex flex-col-reverse pr-5 text-end text-slate-700"
//       >
//         {title}
//       </Typography>
//       <div className="mt-2" style={{ height: "-webkit-fill-available" }}>
//         <hr className="h-3 border-t-0 bg-blue-900 rounded-l-lg" />
//         <div className="mt-5 pr-5">
//           {/* <div className="flex flex-row gap-2">
//                         <Typography variant='paragraph' className="text-slate-800 self-center">Hosted by</Typography>
//                         <HostedBy host={host} link={demoUrl} />
//                     </div> */}
//           <Typography variant="paragraph" className="text-slate-500">
//             {description}
//           </Typography>
//           <div className="mt-5">
//             {/* <TechnologiesUsed array={technologiesUsed} /> */}
//             <Typography
//               variant="paragraph"
//               className="font-extrabold text-slate-800"
//             >
//               Built with:
//             </Typography>
//             <div className="mt-1 flex flex-row flex-wrap gap-x-3 gap-y-1">
//               {technologiesUsed?.map((techno, index) => (
//                 <div key={index} className="text-slate-800">
//                   {techno}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-5 pr-5 flex justify-between">
//         <a
//           href={demoUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="my-auto text-blue-500 hover:text-blue-700"
//         >
//           Live Demo
//         </a>
//         {githubUrl !== undefined && githubUrl !== "" ? (
//           <a href={githubUrl} target="_blank" rel="noopener noreferrer">
//             <div className={`btn btn-neutral flex gap-2 w-fit h-fit`}>
//               <Iconify icon="icomoon-free:github" className="text-white" />
//               <Typography variant="small" color="white">
//                 GitHub
//               </Typography>
//             </div>
//           </a>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// };
