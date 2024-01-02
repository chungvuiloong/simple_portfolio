// import Cookies from "js-cookie";

import { Typography } from "@material-tailwind/react";

const people = [
  {
    name: "Jere / Chung Vui Loong",
    role: "Aspiring v-shaped programmer",
    company: "Our company",
    imageUrl: "",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/chungvuiloong/",
    githubUrl: "https://github.com/chungvuiloong",
  },
  {
    name: "Your name",
    role: "My future teammate",
    company: "Our company",
    imageUrl: "",
    twitterUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Our future colleague name",
    role: "Our future colleague",
    company: "Our company",
    imageUrl: "",
    twitterUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  // More people...
];

// var allCookies = document.cookie;
// var cookieObject = parseCookies(allCookies);

// function parseCookies(cookieString: any) {
//   var cookies: any = {};
//   if (cookieString) {
//     var cookieArray = cookieString.split(';');
//     for (var i = 0; i < cookieArray.length; i++) {
//       var cookie = cookieArray[i].trim().split('=');
//       var name = decodeURIComponent(cookie[0]);
//       var value = decodeURIComponent(cookie[1]);
//       cookies[name] = value;
//     }
//   }
//   return cookies;
// }

export default function Team() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Typography variant="h2" color="white">
            Meet our team
          </Typography>
          {/* <Typography variant='paragraph' className="mt-4 text-lg leading-8 text-gray-400"> 
				We’re ( yes, we ! you are part of our future team), a dynamic group of individuals who are passionate about what we do.
           </Typography> */}
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              {/* <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" /> */}
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              {/* <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                <p className="text-sm leading-6 text-gray-400">{person.company}</p> */}
              <ul className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1C5.58 1 2 4.58 2 9.02c0 3.97 2.67 7.34 6.34 8.47.46.08.63-.2.63-.44v-1.53c-2.58.56-3.12-1.24-3.12-1.24-.42-1.08-1.03-1.37-1.03-1.37-.85-.57.06-.56.06-.56.94.07 1.43.97 1.43.97.83 1.42 2.18 1.01 2.72.77.08-.61.32-1.01.58-1.24-2.04-.23-4.18-1.02-4.18-4.53 0-1 .36-1.83.97-2.48-.1-.23-.42-1.17.09-2.44 0 0 .77-.25 2.5.94.72-.2 1.5-.31 2.27-.31s1.55.11 2.27.31c1.73-1.19 2.5-.94 2.5-.94.51 1.27.2 2.2.1 2.44.61.65.97 1.48.97 2.48 0 3.52-2.15 4.3-4.2 4.53.33.28.63.84.63 1.69v2.5c0 .24.18.52.64.44C17.33 16.36 20 12.99 20 9.02 20 4.58 16.42 1 12 1h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
