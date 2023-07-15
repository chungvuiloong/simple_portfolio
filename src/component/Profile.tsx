import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const INTERESTS = [
    `UX/ UI`,
    `Service Design`,
    `Front-end`,
    `Back-end`,
    `Cloud`,
];

type FadeProp = { fade: 'fade-in' | 'fade-out' };

export default function Profile() {
    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' });
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
          setFadeProp((prevFadeProp) => ({
            fade: prevFadeProp.fade === 'fade-in' ? 'fade-out' : 'fade-in'
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
        <section style={{ backgroundColor: '#00dcda' }}>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight sm:text-4xl"  
                    style={{ color: 'var(--ext-dark-blue-01)' }}
                >
                    Ready to dive in?
                </h2>
                <p className="font-semibold mx-auto mt-6 max-w-xl text-2xl leading-8 text-white">
                    Hi there ! I am Jere Sulovuo. <br />
                    An aspiring V-shaped programmer who has strong passion in&nbsp; 
                    <span className={fadeProp.fade} style={{ color: 'var(--ext-dark-blue-01)' }}>
                        {HASH_TAGS_WORDS[wordOrder]}
                    </span>
                </p>
            </div>
        </section>
    )
  }
  