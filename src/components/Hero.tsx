import './style.css'
import React, { useState, useEffect } from 'react';
import dark_sky from '../assets/images/night/darkSky.png'
import stars_sky from '../assets/images/night/stars.png'
import left_meteor from '../assets/images/night/meteorLeft.png'
import white_moon from '../assets/images/night/whiteMoonBckRing.png'
import back_mountains_night from '../assets/images/night/backMountains.png'
import sea from '../assets/images/night/seaNoMountains.png'
import front_island from '../assets/images/night/frontIsland.png'
import bottom_cloud_night from '../assets/images/night/bottomCloud.png'
import upper_cloud_night from '../assets/images/night/upperCloud.png'

import sunny_sky from '../assets/images/day/sunny_sky.png'
import sun from '../assets/images/day/sun_sunshine_darkrings.png'
import back_mountains from '../assets/images/day/backMountains_day.png'
import sea_day from '../assets/images/day/sea_day.png'
import front_island_day from '../assets/images/day/frontIsland_day.png'
import bottom_cloud from '../assets/images/day/bottomCloud_day.png'
import upper_cloud from '../assets/images/day/upperCloud_day.png'
import cloudy from '../assets/images/day/cloudy.png'
import DarkModeButton from './DarkModeButton'
import useLocalStorage from 'use-local-storage'
import { defaultTheme } from '../helpers/theme';




export default function Hero() {
    const [scrollY, setScrollY] = useState<number>(0);
    const [theme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light');

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });

    const Day = () => {
        return (
            <>
                <img
                    src={`${sunny_sky}`}
                    id="darkSky"
                    alt="The Beautiful Dark Sky"
                    className="layer"
                />
                <img
                    src={cloudy}
                    id="cloudy"
                    alt="Clouds in the sky"
                    className="stars blend layer"
                    style={{ bottom: `${(scrollY * 0.50)}px`}}
                />
                <img
                    src={sun}
                    id="whiteMoon"
                    alt="sun"
                    className={`whiteMoon blend blur-[10px] overflow-auto`}
                    style={{ top: `${((scrollY - 320) * 1.25)}px`} }
                />
                <img
                    src={upper_cloud}
                    id="upperCloud"
                    alt="cloud"
                    className="layer upperCloud blend"
                />            
                <img
                    src={bottom_cloud}
                    id="bottomCloud"
                    alt="cloud"
                    className="layer bottomCloud blend"
                    style={{ top: `${scrollY * 0.25}px` } }
                />
                <img
                    src={back_mountains}
                    id="backMountains"
                    alt="mountain"
                    className="layer"
                    style={{ top: `${scrollY * 0.1}px` } }
                />
                <img src={sea_day} id="sea" className="layer" alt="sea"/>
                <img
                    src={front_island_day}
                    id="frontIsland"
                    alt="island"
                    className="layer frontIsland"
                />
            </>
        )
    }

    const Night = () => {
        return (
            <>
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
                    src={bottom_cloud_night}
                    id="bottomCloud"
                    alt="cloud"
                    className="layer bottomCloud blend"
                    style={{ top: `${scrollY * 0.25}px` } }
                />
                <img
                    src={upper_cloud_night}
                    id="upperCloud"
                    alt="cloud"
                    className="layer upperCloud blend"
                />            
                <img
                    src={back_mountains_night}
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
            </>
        )
    }

  return (
    <div className='bg-[#8f81fc] dark:bg-black'>  
        <div className='container mx-auto '>
            <nav className='flex flex-row w-full justify-between'>
                <div>{" "}</div>
                <div className={`p-4 text-4xl text-white`}>Scroll down to see more</div>
                <DarkModeButton />
            </nav>
        </div>

        <section className="layer-parent" id="heroBanner">
            {theme === 'dark' ? <Night /> : <Day />}
        </section>
    </div>
  )
}