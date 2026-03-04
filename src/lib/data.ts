/* ══════════════════════════════════════════════════════════
   CENTRALIZED DATA
   All portfolio projects, work experience, and site content
══════════════════════════════════════════════════════════ */

/* ── Types ───────────────────────────────────────────────── */

export interface Project {
  id: string;
  title: string;
  cat: string;
  stack: string[];
  desc: string;
  accent: string;
  cols: number;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  tenure: string;
  location: string;
  type: string;
  stack: string[];
  responsibilities: string[];
}

export interface Social {
  label: string;
  url: string;
}

/* ── Hero Data ───────────────────────────────────────────── */

export const HERO_DATA = {
  name: {
    first: "Jere",
    last: "Vu",
    full: "Jere · Vui Loong Chung",
  },
  tagline: "Full-stack Developer · Helsinki, Finland",
  bio: "A full-stack developer with 3+ years of experience building modern, responsive web applications. Specializing in React, Next.js, and TypeScript, I create solutions from Frontend Mentor challenges to production applications.",
  availability: "Available",
  ghost: "JERE",
};

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "GraphQL",
];

export const STATS = [
  { v: "3+", l: "Years experience" },
  { v: "16+", l: "Projects built" },
  { v: "5", l: "Companies worked" },
];

export const SOCIALS: Social[] = [
  { label: "GitHub ↗", url: "https://github.com/chungvuiloong" },
  {
    label: "LinkedIn ↗",
    url: "https://www.linkedin.com/in/jason-vu-42b7b7156/",
  },
  { label: "CV ↗", url: "#" },
];

/* ── Work Experience ─────────────────────────────────────── */

export const EXPERIENCES: Experience[] = [
  {
    id: "01",
    role: "Fullstack Developer",
    company: "Emmy Clothing",
    period: "Oct 2024 — Present",
    tenure: "1 yr 5 mos",
    location: "Helsinki, Uusimaa, Finland · Remote",
    type: "Full-time",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Javascript",
      "Node.js",
      "TailwindCSS",
      "Figma",
      "GraphQL",
      "Apollo Client",
    ],
    responsibilities: [
      "Developed and maintained full-stack web applications using a variety of modern technologies.",
      "Redesigned UX/UI web pages and components via user research and trending design patterns.",
      "Identified and resolved bugs to enhance functionality, optimize performance, and improve UX.",
      "Prototyped wireframes of new sections, components, and web pages using Figma.",
    ],
  },
  {
    id: "02",
    role: "UX/UI Frontend Developer",
    company: "Strive for Startups",
    period: "May 2024 — Present",
    tenure: "1 yr 10 mos",
    location: "Helsinki, Uusimaa, Finland · Remote",
    type: "Contract",
    stack: ["Next.js", "TypeScript", "Javascript", "Node.js", "TailwindCSS"],
    responsibilities: [
      "Collaborated with marketing and branding teams to enhance landing and dashboard pages.",
      "Built reusable, maintainable components from Figma designs using Tailwind and Next.js.",
      "Improved performance metrics and accessibility scores across core user flows.",
    ],
  },
  {
    id: "03",
    role: "Fullstack Developer",
    company: "Kyky Today",
    period: "Feb 2024 — May 2024",
    tenure: "4 months",
    location: "Helsinki, Uusimaa, Finland · Hybrid",
    type: "Full-time",
    stack: ["React.js", "SASS", "Bootstrap", "Firebase", "Node.js"],
    responsibilities: [
      "Developed and maintained dynamic web pages, ensuring optimal performance and responsiveness.",
      "Took initiative in redesigning the registration page with transparent and interactive error handling.",
      "Researched and utilized Yup schema for error handling.",
      "Used CSS architecture to restructure and refactor code into smaller, modular components.",
    ],
  },
  {
    id: "04",
    role: "Frontend Developer",
    company: "Worthmore",
    period: "Jul 2023 — Feb 2024",
    tenure: "8 months",
    location: "København, Capital Region, Denmark · Remote",
    type: "Full-time",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
    ],
    responsibilities: [
      "Built reusable, maintainable components from Figma designs using Tailwind, TypeScript, and Next.js.",
      "Reviewed and prepared code to be pushed from development to production with the CTO.",
      "Contributed to design system development, maintaining UI/UX standards and guidelines.",
      "Conducted user research and translated findings into user personas and design requirements.",
      "Assisted in transitioning to new components and UI (shadcn/ui).",
    ],
  },
  {
    id: "05",
    role: "Fullstack Developer",
    company: "Retink Media",
    period: "Feb 2023 — Aug 2023",
    tenure: "7 months",
    location: "Bonn, North Rhine-Westphalia, Germany · Remote",
    type: "Full-time",
    stack: ["Next.js", "React.js", "Node.js", "Zustand", "Moment.js", "Redux"],
    responsibilities: [
      "Contributed to building the company's PaaS by creating key components including calendar, reminder, and form functionalities.",
      "Developed custom components to accurately replicate Figma designs, ensuring precise visual alignment.",
      "Conducted thorough debugging and refactoring to improve performance and maintainability.",
      "Created reusable components that streamlined design implementation and enhanced code reusability.",
    ],
  },
];

/* ── Portfolio Projects ──────────────────────────────────── */

export const PROJECTS: Project[] = [
  // Web Development Projects
  {
    id: "01",
    title: "Workit Landing Page",
    cat: "Landing Page",
    stack: ["Next.js", "TailwindCSS", "Spline", "HeyGen", "HTML"],
    desc: "A challenge from Frontend Mentor. Responsive layout with Spline 3D and HeyGen AI video integration.",
    accent: "navy",
    cols: 5,
    demoUrl: "https://mrjays-workit-landing-page.vercel.app/",
    githubUrl: "",
    category: "web",
  },
  {
    id: "02",
    title: "EasyBank Landing Page",
    cat: "Landing Page",
    stack: ["Next.js", "DaisyUI", "TailwindCSS", "HTML"],
    desc: "A challenge from Frontend Mentor. DaisyUI components with full Tailwind styling throughout.",
    accent: "cyan",
    cols: 4,
    demoUrl: "https://mrjays-easybank-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/easybank-landing-page",
    category: "web",
  },
  {
    id: "03",
    title: "Huddle Landing Page",
    cat: "Landing Page",
    stack: ["TailwindCSS", "HTML"],
    desc: "A challenge from Frontend Mentor. Clean, minimal community landing page.",
    accent: "blue",
    cols: 3,
    demoUrl: "https://mrjays-huddle-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/huddle-landing-page",
    category: "web",
  },
  {
    id: "04",
    title: "News Landing Page",
    cat: "Landing Page",
    stack: ["Next.js", "React", "Javascript", "TailwindCSS", "HTML"],
    desc: "A challenge from Frontend Mentor. Modern news site layout with React components.",
    accent: "cyan",
    cols: 3,
    demoUrl: "https://mrjays-news-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/news-landing-page",
    category: "web",
  },
  {
    id: "05",
    title: "Retink Media Landing Page",
    cat: "Entry Task",
    stack: ["React", "Javascript", "HTML", "Bootstrap"],
    desc: "Entry task for Retink Media. Brand-consistent, fully responsive layout.",
    accent: "navy",
    cols: 6,
    demoUrl: "https://retink-landingpage.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/retink_landingpage",
    category: "web",
  },
  {
    id: "06",
    title: "Liana Technologies Landing Page",
    cat: "Entry Task",
    stack: ["React", "Javascript", "HTML", "Bootstrap", "RSS"],
    desc: "Entry task for Liana Technologies. RSS-powered content feed with Bootstrap structure.",
    accent: "blue",
    cols: 6,
    demoUrl: "https://mrjays-liana-technology-landing-page.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/landingpage_liana_tech",
    category: "web",
  },

  // Web Applications
  {
    id: "07",
    title: "Phonebook App",
    cat: "Full-stack",
    stack: ["React.js", "Node.js", "Express", "Javascript", "HTML"],
    desc: "Users can add, delete, and update contacts via this fullstack phonebook app.",
    accent: "cyan",
    cols: 4,
    demoUrl: "https://phonebookfullstac.onrender.com/",
    githubUrl: "",
    category: "web app",
  },
  {
    id: "08",
    title: "BMI Calculator",
    cat: "Web Tool",
    stack: ["Next.js", "TailwindCSS", "Javascript", "HTML"],
    desc: "Premium challenge from Frontend Mentor. Calculate and track your Body Mass Index.",
    accent: "navy",
    cols: 4,
    demoUrl: "https://mrjays-bmi-calculator.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/bmi_calculator",
    category: "web app",
  },
  {
    id: "09",
    title: "Countries App",
    cat: "Data Explorer",
    stack: ["React", "Redux", "Javascript", "RESTful API"],
    desc: "A web app that displays info about countries using REST APIs.",
    accent: "blue",
    cols: 4,
    demoUrl: "https://countries-basic.vercel.app/",
    githubUrl: "https://github.com/jirimicvl/countriesBasic/",
    category: "web app",
  },

  // Components
  {
    id: "10",
    title: "Bento Grid Component",
    cat: "UI Component",
    stack: ["Next.js", "React", "TailwindCSS"],
    desc: "Frontend Mentor challenge. Modern bento-style grid layout component.",
    accent: "cyan",
    cols: 3,
    demoUrl: "https://mrjays-bento-grid-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/bento-grid",
    category: "components",
  },
  {
    id: "11",
    title: "Transcript & Audio Player",
    cat: "UI Component",
    stack: ["Next.js", "React", "TailwindCSS"],
    desc: "Interactive audio player with synchronized transcript scrolling.",
    accent: "navy",
    cols: 3,
    demoUrl: "https://mrjays-transcipt-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/transcript",
    category: "components",
  },
  {
    id: "12",
    title: "Product Preview Card",
    cat: "UI Component",
    stack: ["HTML", "TailwindCSS"],
    desc: "Frontend Mentor challenge. Product card with responsive design.",
    accent: "blue",
    cols: 3,
    demoUrl: "https://mrjays-product-preview-card-component-main.vercel.app/",
    githubUrl:
      "https://github.com/chungvuiloong/product-preview-card-component-main",
    category: "components",
  },
  {
    id: "13",
    title: "QR Code Component",
    cat: "UI Component",
    stack: ["Next.js", "React", "TailwindCSS", "Material Tailwind", "HTML"],
    desc: "Frontend Mentor challenge. Clean QR code display component.",
    accent: "cyan",
    cols: 3,
    demoUrl: "https://mrjays-qrcode-component.vercel.app/",
    githubUrl: "https://github.com/chungvuiloong/qr-code-component",
    category: "components",
  },

  // Personal Projects
  {
    id: "14",
    title: "Phonebook - Fullstack",
    cat: "Personal",
    stack: [
      "React",
      "Render",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
    ],
    desc: "A fullstack phonebook to add, update and delete contacts.",
    accent: "navy",
    cols: 6,
    demoUrl: "https://phonebookfullstac.onrender.com/",
    githubUrl: "",
    category: "personal",
  },
  {
    id: "15",
    title: "Simple Portfolio",
    cat: "Personal",
    stack: ["Astro", "React", "TailwindCSS", "Javascript", "HTML"],
    desc: "A simple portfolio to display all the work done.",
    accent: "blue",
    cols: 3,
    demoUrl: "https://mrjays-simple-portfolio.vercel.app/",
    githubUrl: "",
    category: "personal",
  },
  {
    id: "16",
    title: "Travel App",
    cat: "Personal",
    stack: [
      "React",
      "Javascript",
      "Material UI",
      "Redux",
      "Bootstrap",
      "RESTful API",
    ],
    desc: "Travel App - All in one app for your travel conveniences.",
    accent: "cyan",
    cols: 3,
    demoUrl: "https://mrjaytravelapp.netlify.app/",
    githubUrl: "",
    category: "personal",
  },
];

/* ── Navigation ──────────────────────────────────────────── */

export const NAV_LINKS = ["Portfolio", "Work", "Tech", "Contact"];

/* ── Portfolio Filters ───────────────────────────────────── */

export const PORTFOLIO_FILTERS = [
  "Web Development",
  "Web Application",
  "Components",
  "Personal Projects",
];
