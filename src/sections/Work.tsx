import React from 'react';

const work_experience = [
    {
        company: "Strive for Startups",
        time: "May 2024 - Present",
        duration: "ongoing",
        title: "UX/UI Frontend Developer",
        location: "Helsinki, Uusimaa, Finland · Remote",
        tech_stack: ["Next.js", "TailwindCSS", ],
        responsibilities: [
            "Collaborated with the marketing and branding teams to enhance the landing and dashboard pages of STRIVE for users.",
            "Built reusable, maintainable, and sustainable components from Figma designs using Tailwind, Typescript, Javascript, and Next.js."
          ] 
    },
    {
        company: "Strive for Startups",
        time: "May 2024 - Present",
        duration: "ongoing",
        title: "UX/UI Frontend Developer",
        location: "Helsinki, Uusimaa, Finland · Remote",
        tech_stack: ["Next.js", "TailwindCSS", ],
        responsibilities: [
            "Collaborated with the marketing and branding teams to enhance the landing and dashboard pages of STRIVE for users.",
            "Built reusable, maintainable, and sustainable components from Figma designs using Tailwind, Typescript, Javascript, and Next.js."
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
            <div className="md:mb-10 mb-2 flex lg:items-center xl:gap-10 md:gap-5 gap-3">
                <h2  className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-all
                font-sans font-500 md:leading-[15rem] leading-[5rem] text-[#00224c] self-center tracking-tighter"
                >Experience
                </h2>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                {work_experience.map( ({ location, tech_stack, time, title, company, responsibilities }) => 
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
                            <p className='mb-3'>Tech Stack: <span className='text-gray-600'>{tech_stack}</span></p>
                            <div>                            
                                <p className="text-base dark:text-gray-400">My responsibilties include, but not limited to:</p>
                                <ul>
                                    {responsibilities.map((res) =>
                                        <li className="text-sm text-gray-600 dark:text-gray-400">
                                            {res}
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg> Download ZIP
                            </a> */}
                        </div>
                    </li>
                )}

            </ol>
          </div>
        </section>
      );
};

export default Work;