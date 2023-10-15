import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from '@material-tailwind/react';

const projects = [
  // Components
  {
    title: '3-column preview card component',
    description: <>
    This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
    Access the challenge from <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-" className='underline underline-offset-4'>here</a>
                          </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-3-column-preview-card-component.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/3-column-preview-card-component',
    category: 'components',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'Single price grid',
    description: <>
    This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
    Access the challenge from <a href="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc" className='underline underline-offset-4'>here</a>
                          </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-single-price-grid-component.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/single-price-grid-component',
    category: 'components',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'QR code',
    description: <>
    This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
    Access the challenge from <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" className='underline underline-offset-4'>here</a>
                          </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-qrcode-component.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/qr-code-component',
    category: 'components',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'Order Summary',
    description: <>
    This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
    Access the challenge from <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" className='underline underline-offset-4'>here</a>
                          </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-order-summary-component.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/order-summary-component',
    category: 'components',
    year: 2023,
    status: 'Completed',
  },

  // Web Development Projects
  {
    title: 'Huddle Landing Page',
    description:
      <>
        This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
        Access the challenge from <a href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0" className='underline underline-offset-4'>here</a>
     </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-huddle-landing-page.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/huddle-landing-page',
    category: 'web',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'News Landing Page',
    description:
      <>
        This is a challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
        Access the challenge from <a href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl" className='underline underline-offset-4'>here</a>
     </>,
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjays-news-landing-page.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/news-landing-page',
    category: 'web',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'Retink Media Landing Page',
    description: 'This is the entry task for Retink Media.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://retink-landingpage.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/retink_landingpage',
    category: 'web',
    year: 2023,
    status: 'Completed',
  },
  {
    title: 'Liana Technologies Landing Page',
    description: 'This is the entry task for Liana Technologies.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://lianatechnologylandingpage.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/landingpage_liana_tech',
    category: 'web',
    year: 2022,
    status: 'Completed',
  },

  // Web application
  {
    title: 'BMI',
    // description: <>This is a premium challenge from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Access the challenge from here https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T</>,
    description:  <>
    This is a premium challenge from <a href="https://www.frontendmentor.io/" className='underline underline-offset-4'>Frontend Mentor</a>.
    Access the challenge from <a href="https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T" className='underline underline-offset-4'>here </a>
                          </>,
    imageUrl: '',
    demoUrl: 'https://mrjays-bmi-calculator.vercel.app/',
    githubUrl: 'https://github.com/jeresulovuo/bmi_calculator',
    category: 'web app',
    year: 2023,
    status: 'Completed',
  },
  // {
  //   title: 'Wolt Delivery Fee Calculator',
  //   description: 'This is the entry task for Wolt in 2023.',
  //   imageUrl: 'project1.jpg',
  //   demoUrl: 'https://mrjays-wolt-delivery-calculator.vercel.app/',
  //   githubUrl: 'https://github.com/jeresulovuo/Wolt_Delivery_Calculator',
  //   category: 'web app',
  //   year: 2023,
  //   status: 'In redesigning progress',
  // },
  {
    title: 'Countries App',
    description: 'A web app that display info about countries.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://countries-basic.vercel.app/',
    githubUrl: 'https://github.com/jirimicvl/countriesBasic/',
    category: 'web app',
    year: 2022,
    status: 'In redesigning progress',
  },

// Personal Projects
  // {
  //   title: 'Pokedex V2 - In Progress',
  //   description: 'Pokedex V2',
  //   imageUrl: 'project1.jpg',
  //   demoUrl: 'https://project1-demo.com',
  //   githubUrl: 'https://github.com/project1',
  //   category: 'personal',
  //   year: 2023,
  //   status: 'In progress',
  // },
  {
    title: 'Travel App',
    description: 'Travel App - All in one app for your travel conveniences.',
    imageUrl: 'project1.jpg',
    demoUrl: 'https://mrjaytravelapp.netlify.app/',
    githubUrl: '#',
    category: 'personal',
    year:2022,
    status: 'In redesigning progress',
  },
];

interface PortfolioTabProps {
    categories: { id: string; label: string }[];
    onChangeCategory: (category: string) => void;
    activeCategory: string;
  }
  
  const PortfolioTab: React.FC<PortfolioTabProps> = ({
    categories,
    onChangeCategory,
    activeCategory,
  }) => {
    return (
      <div className='mt-5 mb-10'>
        {categories.map((category) => (
          <Button
            key={category.id}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-black-700'
            }`}
            onClick={() => onChangeCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
    );
  };
  
  const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('web');
  
    const categories = [
      { id: 'web', label: 'Web Development' },
      { id: 'web app', label: 'Web Application' },
      { id: 'components', label: 'Components' },
    //   { id: 'mobile', label: 'Mobile Development' },
    //   { id: 'data', label: 'Data Science and Analysis' },
    //   { id: 'software', label: 'Software Development' },
    //   { id: 'open-source', label: 'Open-source Contributions' },
      { id: 'personal', label: 'Personal Projects' },
    //   { id: 'freelance', label: 'Freelance or Client Work' },
    //   { id: 'hackathon', label: 'Hackathon or Competition Projects' },
    ];
  
    const filteredProjects = projects.filter(
      (project) => project.category === activeCategory
    );
  
    const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
    };
  
    return (
        <section className='py-24 sm:py-32 px-6 lg:px-10' style={{ backgroundColor: '#00dcda' }} >
            <div className='mx-auto container'>
                <div className='lg:flex lg:items-center lg:justify-between'>
                     <h2 className='text-4xl tracking-tight sm:text-4xl 
                        font-sans font-500'  
                        style={{ color: 'var(--ext-dark-blue-01)' }}
                    >
                    Portfolio
                    </h2>
                    <PortfolioTab
                        categories={categories}
                        onChangeCategory={handleCategoryChange}
                        activeCategory={activeCategory}
                    />
                </div>
                <ul className='flex flex-row flex-wrap justify-center mx-auto gap-10'>
                    {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    );
  };
  
  export default Portfolio;