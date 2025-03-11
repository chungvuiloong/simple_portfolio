import React from 'react';

const work_experience = [
    {
        company: "Emmy Clothing",
        time: "October 2024 - Present",
        duration: "ongoing",
        title: "Fullstack Developer",
        location: "Helsinki, Uusimaa, Finland · Remote",
        tech_stack: ["Next.js", "React", "TypeScript", "Javascript", "Node.js", "TailwindCSS", "Figma", "GraphQL", "Apollo Client"],
        responsibilities: [
            "Developed and maintained full-stack web applications using a variety of technologies.",
            "Redesigned UX/UI web pages and components via user research and trending designs.",
            "Identified and resolved bugs in web pages to enhance functionality, optimize performance, and improve user experience, ensuring site stability and preventing crashes.",
            "Prototyped wireframes of new sections, components, and web pages using Figma."
          ]
    },   
    {
        company: "Strive for Startups",
        time: "May 2024 - Present",
        duration: "ongoing",
        title: "UX/UI Frontend Developer",
        location: "Helsinki, Uusimaa, Finland · Remote",
        tech_stack: ["Next.js", "TypeScript", "Javascript", "Node.js", "TailwindCSS"],
        responsibilities: [
            "Collaborated with the marketing and branding teams to enhance the landing and dashboard pages of STRIVE for users.",
            "Built reusable, maintainable, and sustainable components from Figma designs using Tailwind, Typescript, Javascript, and Next.js."
          ] 
    },    
    {
        company: "Kyky Today",
        time: "February 2024 - May 2024",
        duration: "",
        title: "Fullstack Developer",
        location: "Helsinki, Uusimaa, Finland · Hybrid",
        tech_stack: [
            "React.js",
            "SASS",
            "User Experience (UX)",
            "Bootstrap",
            "Firebase",
            "Node.js",
            "User Experience Design (UED)"
          ],
        responsibilities: [
            "Developed and maintained dynamic web pages, ensuring optimal performance, responsiveness, and user experience across both frontend and backend technologies.",
            "Took initiative in redesigning the registration page with transparent and interactive error handling.",
            "Researched and utilized Yup schema for error handling.",
            "Redesigned and coded webpages to enhance user experience and functionality.",
            "Used CSS architecture to restructure and refactor spaghetti code into smaller, modular code for future convenient customization.",
        ] 
    },
    {
        company: "Worthmore",
        time: "July 2023 - February 2024",
        duration: "",
        title: "Front-end Developer",
        location: "København, Capital Region, Denmark · Remote",
        tech_stack: [
            "React.js",
            "Node.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript"
          ],
        responsibilities: [
            "Built reusable, maintainable, and sustainable components from Figma designs using Tailwind, TypeScript, JavaScript, and Next.js.",
            "Reviewed and prepared code to be pushed from development to production with the CTO.",
            "Worked with Intercom to handle customer inquiries about Worthmore products.",
            "Tested and debugged the website.",
            "Contributed to design system development, maintaining UI/UX standards and guidelines for the organization.",
            "Conducted user research, gathered insights, and translated findings into user personas, user journeys, and design requirements.",
            "Assisted in transitioning to new components, UI (shadcn/ui)."
          ]
    },
    {
        company: "Retink Media",
        time: "February 2023 - August 2023",
        duration: "",
        title: "Fullstack Developer",
        location: "Bonn, North Rhine-Westphalia, Germany · Remote",
        tech_stack: [
            "Next.js",
            "React.js",
            "Node.js",
            "Zustand",
            "Moment.js",
            "Redux"
          ],
        responsibilities: [
            "Contributed to building the company's PaaS by creating key components, including calendar, reminder, and form functionalities, in close collaboration with backend and design teams.",
            "Developed a custom component to accurately replicate Figma designs, ensuring precise visual alignment through effective teamwork with designers.",
            "Conducted thorough debugging and refactoring to improve performance and maintainability, working alongside backend engineers.",
            "Created a reusable component that streamlined design implementation and enhanced code reusability, fostering cross-team collaboration."
          ]
    },
    {
        company: "Professional Development",
        time: "May 2019 - April 2020",
        duration: "1 yr",
        title: "Career Break",
        location: "Vancouver, British Columbia",
        tech_stack: [],
        responsibilities: [
          "Participated in International Experience Canada to experience the valuable Canadian culture and work environment.",
          "Worked with Axiom builder.",
          "Studied programming (HTML, CSS, JavaScript) from freeCodeCamp during free time."
        ]
      },
      {
        company: "Givaudan",
        time: "2018 - 2019",
        duration: "1 yr",
        title: "Recruitment Coordinator",
        location: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · On-site",
        tech_stack: [],
        responsibilities: [
            "Coordinated recruitment activities, including job postings, screening resumes, and scheduling interviews.",
            "Managed candidate communications and maintained applicant tracking systems.",
            "Collaborated with hiring managers to understand staffing needs and job requirements.",
            "Facilitated the onboarding process for new hires and provided support during the transition period.",
            "Organized and participated in recruitment events and career fairs."
        ]
      },
      {
        company: "Adecco",
        time: "2016 - 2017",
        duration: "1 yr",
        title: "Recruitment Consultant",
        location: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · On-site",
        tech_stack: [],
        responsibilities: [
            "Consulted clients on hiring strategies and employment trends to optimize their recruitment processes.",
            "Provided recruitment consultancy services to clients, including job market analysis and candidate sourcing.",
            "Conducted interviews, assessed candidates' skills, and matched them with client requirements.",
            "Developed and maintained relationships with both clients and candidates to ensure a high level of service.",
            "Managed the full recruitment lifecycle from initial contact to job offer and placement.",
        ]
      }      
]

const Work: React.FC = () => {
    return (
        <section
          className="py-24 sm:py-32 px-6 lg:px-10"
          style={{ backgroundColor: "#00dcda" }}
        >
          <div className="mx-auto container">
            <div className="md:mb-10 mb-5 flex lg:items-center xl:gap-10 md:gap-5 gap-3">
                <h2  className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-all
                font-sans font-500 md:leading-[15rem] leading-[5rem] text-[#00224c] self-center tracking-tighter"
                >Expe<span className='tracking-normal'>ri</span>ence
                </h2>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                {work_experience.map( ({ location, tech_stack, time, title, company, responsibilities }) => 
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#00dcda] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-[#00224c] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <div className='ml-3'>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}
                                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                            </h3>
                            <div>
                                <h4 className='mb-1'>{company}</h4> 
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{time}</time>
                                <p className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{location}</p>
                            </div>
                            {
                                tech_stack.length > 0 && <p className='mb-3'>Tech Stack: <span className='text-sm text-gray-600'>{tech_stack.join(", ")}</span></p>
                            }
                            <div>                            
                                <p className="text-base dark:text-gray-400">My responsibilties include, but not limited to:</p>
                                <ul>
                                    {responsibilities.map((res) =>
                                        <li className="text-sm text-gray-600 dark:text-gray-400">
                                            &#x2022; {res}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </li>
                )}

            </ol>
          </div>
        </section>
      );
};

export default Work;