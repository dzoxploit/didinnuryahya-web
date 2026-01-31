import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { Work } from "../Work/Work";
import { Education } from "../Education/Education";
import { Medium } from "../Medium/Medium";
import { YouTubeVideos } from "../Youtube/Youtube";
import WeatherAndPraySchedule from "../WeatherAndPraySchedule/WeatherAndPraySchedule";
import RamadhanFullSchedule from "../WeatherAndPraySchedule/RamadhanFullSchedule";

// icons
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import outsystem from "../../assets/OutSystems.svg";
export function Main() {
  return (
    <Container>
      {/* HACKER FLOATING TEXT ORNAMENT */}
      <div className="bg-ornaments">
        <span>{"</>"}</span>
        <span>{"{ }"}</span>
        <span>{"0xAF"}</span>
        <span>{"npm i"}</span>
        <span>{"sudo"}</span>
        <span>{"git push"}</span>
      </div>

      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -2 },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            move: { enable: true, speed: 1.5, outMode: "out" },
            opacity: { value: 0.8, random: true },
            size: { value: 16 },
            shape: {
              type: "image",
              image: [
                { src: boostrapIcon, width: 20, height: 20 },
                { src: cssIcon, width: 20, height: 20 },
                { src: wordpress, width: 20, height: 20 },
                { src: shopify, width: 20, height: 20 },
                { src: htmlIcon, width: 20, height: 20 },
                { src: jsIcon, width: 20, height: 20 },
                { src: nodeIcon, width: 20, height: 20 },
                { src: reactIcon, width: 20, height: 20 },
                { src: sassIcon, width: 20, height: 20 },
                { src: typescriptIcon, width: 20, height: 20 },
                { src: vueIcon, width: 20, height: 20 },
                { src: outsystem, width: 20, height: 20 },
              ],
            },
          },
        }}
      />

      <Hero />
      <About />
      <Work />
      <Education />
      <Medium />
      <YouTubeVideos />
      <Portfolio />
      <WeatherAndPraySchedule />
      <RamadhanFullSchedule />
      <Contact />
    </Container>
  );
}
