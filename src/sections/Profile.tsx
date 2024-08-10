import React, { useRef } from "react";
import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const INTERESTS = [
    `Fullstack development`,
// `Back-end development`,
    `AI`,
//   `UX / UI`,
//   `Service Design`,
//   `Front-end development`,
//   `Back-end development`,
    `Cloud engineering`,
];

type FadeProp = { fade: "fade-in" | "fade-out" };

export default function Profile() {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp((prevFadeProp) => ({
        fade: prevFadeProp.fade === "fade-in" ? "fade-out" : "fade-in",
      }));
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % INTERESTS.length);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <section className={`py-24 sm:py-32 px-6 lg:px-10 bg-[#00dcda]`}>
      <div className="mx-auto container">
        <div className="flex flex-col justify-start">
            <h1 className="text-white mt-6 xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] tracking-tighter">
                Hi there!<br />
            </h1>
            <div className="flex flex-row">
                <div className="lg:basis-1/2 basis-none flex flex-col gap-5">
                    <div>
                        <p className="text-left xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-black opacity-50">
                            I am "Jere" Vui Loong Chung. <br />A Full-stack developer who is passionate about{""}<br />
                        </p>
                        <h2 className="text-left md:text-6xl text-2xl text-[#00224c]">
                            <span className={fadeProp.fade}>{INTERESTS[wordOrder]}</span>
                        </h2>
                        </div>
                        {/* <p className="text-left xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-black opacity-50">
                            Currently I am in Finland undergoing a tyokokeilu in <a href="https://www.linkedin.com/company/kyky-today/" target="_blank"  className="underline underline-offset-4">Kyky Today</a>, a Finnish Startup. At the same time, I am helping out a Danish Startup, <a href="https://www.linkedin.com/company/worthmore/" target="_blank"  className="underline underline-offset-4">Worthmore</a>, in their mission in making a big social impact in the world.
                            Before that, I was doing an internship for a German Startup, Retink Media.
                        </p> */}
                        <p className="text-left xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-black opacity-50">
                            During my free time, I volunteer in various Finnish Organisations, learn new programming languages and making responsive web applications from <a href="https://www.frontendmentor.io/" target="_blank"  className="underline underline-offset-4">Frontend Mentor</a>. 
                        </p>
                        <a href="#portfolio" className="px-8 py-3 h-30 w-fit bg-[#00224c] text-white rounded-full
                        xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1rem]">Check out my portfolio</a>
                    </div>
                <div className="lg:basis-1/2 basis-none flex flex-col gap-10" >
                {" "}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
