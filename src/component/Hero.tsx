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


export default function Hero() {
    let stars = document.querySelector("#stars") as HTMLImageElement;
    let moon = document.querySelector("#whiteMoon") as HTMLImageElement;
    let meteor = document.querySelector("#meteor") as HTMLImageElement;
    let backMountains = document.querySelector("#backMountains") as HTMLImageElement;
    let bottomCloud = document.querySelector("#bottomCloud") as HTMLImageElement;

    window.addEventListener("scroll", () => {
        let yPosition = window.scrollY;

        stars.style.left = yPosition * 0.05 + "px";
        stars.style.top = yPosition * 0.25 + "px";

        meteor.style.left = yPosition * 1 + "px";
        meteor.style.top = yPosition * 1 + "px";

        moon.style.marginTop = yPosition * 1.25 + "px";
        bottomCloud.style.top = yPosition * 0.25 + "px";
        backMountains.style.top = yPosition * 0.1 + "px";
    });


  return (
    <>
        <section className="layer-parent" id="heroBanner">
            <h2 className="empty">Empty</h2>
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
            />
            <img
                src={left_meteor}
                id="meteor"
                alt="meteor"
                className="meteor"
            />
            <img
                src={white_moon}
                id="whiteMoon"
                alt="moon"
                className="whiteMoon blend"
            />
            <img
                src={back_mountains}
                id="backMountains"
                alt="mountain"
                className="layer"
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