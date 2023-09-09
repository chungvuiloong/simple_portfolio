import './style.css'
import dark_sky from '../assets/images/darkSky.png'
import stars_sky from '../assets/images/stars.png'
import left_meteor from '../assets/images/meteorLeft.png'
import white_moon from '../assets/images/whiteMoonBckRing.png'
import back_mountains from '../assets/images/backMountains.png'
import sea from '../assets/images/seaNoMountains.png'
import front_island from '../assets/images/frontIsland.png'
import bottom_cloud from '../assets/images/bottomCloud.png'
import upper_cloud from '../assets/images/upperCloud.png'
import React, { useState, useEffect } from 'react';


export default function Hero() {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });

  return (
    <>  
        <section className="p-4 text-white text-4xl text-center">
            Scroll down to see more
        </section>
        <section className="layer-parent" id="heroBanner">
            {/* <h2 className="empty">Empty</h2> */}
            <img
                src={dark_sky}
                id="darkSky"
                alt="The Beautiful Dark Sky"
                className="layer"
            />
            <img
                src={stars_sky}
                id="stars"
                alt="starts in sky"
                className="stars blend layer"
                style={{ top: `${(scrollY * 0.25)}px`, left: `${(scrollY * 0.05)}px`}}
            />
            <img
                src={left_meteor}
                id="meteor"
                alt="meteor"
                className="meteor"
                style={{ top: `${scrollY}px`, left: `${scrollY}px` } }
            />
            <img
                src={white_moon}
                id="whiteMoon"
                alt="moon"
                className="whiteMoon blend"
                style={{ top: `${(scrollY * 1.25)}px`} }
            />
            <img
                src={back_mountains}
                id="backMountains"
                alt="mountain"
                className="layer"
                style={{ top: `${scrollY * 0.1}px` } }
            />
            <img src={sea} id="sea" className="layer" alt="sea"/>
            <img
                src={front_island}
                id="frontIsland"
                alt="island"
                className="layer frontIsland"
            />
            <img
                src={bottom_cloud}
                id="bottomCloud"
                alt="cloud"
                className="layer bottomCloud blend"
                style={{ top: `${scrollY * 0.25}px` } }
            />

            <img
                src={upper_cloud}
                id="upperCloud"
                alt="cloud"
                className="layer upperCloud blend"
            />
      </section>
    </>
  )
}