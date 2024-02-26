import React from "react";
import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const INTERESTS = [
  `AI`,
  `UX / UI`,
  `Service Design`,
  `Front-end development`,
  `Back-end development`,
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
    <section className={`py-24 sm:py-32 px-6 lg:px-10 bg-[#00dcda] h-svh`}>
      <div className="mx-auto container">
        <div className="flex flex-row justify-start">
          <div className="flex flex-col">
            <h1 className="text-white mt-6 xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] tracking-tighter">
                Hi there!<br />
            </h1>
            <p className="mt-6 text-left md:text-4xl text-md text-black opacity-50">
                I am "Jere" Vui Loong Chung. <br />A developer who is passionate about{""}<br />
            </p>
            <h2 className="text-left md:text-8xl text-4xl text-[#00224c]">
                <span className={fadeProp.fade}>{INTERESTS[wordOrder]}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
