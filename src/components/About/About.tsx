import { Container } from "./styles";
import AnakGaul from "../../assets/Grimeart.png";

import flutter from "../../assets/flutter_logo.svg";
import laravel from "../../assets/Laravel.svg";
import pythonIcon from "../../assets/python-3.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import GoIcon from "../../assets/Go-Logo_Aqua.svg";

import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const skills = [
    { icon: flutter, name: "Flutter" },
    { icon: laravel, name: "Laravel" },
    { icon: reactIcon, name: "React" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: vueIcon, name: "Vue" },
    { icon: nodeIcon, name: "Node" },
    { icon: pythonIcon, name: "Python" },
    { icon: cssIcon, name: "CSS" },
    { icon: boostrapIcon, name: "Bootstrap" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: GoIcon, name: "Golang" },
  ];

  return (
    <Container id="about">
      <div className="sparkle" style={{ top: "20%", left: "10%" }} />
      <div className="sparkle" style={{ top: "40%", right: "15%" }} />
      <div className="sparkle" style={{ bottom: "30%", left: "25%" }} />
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>

      <div className="about-card">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <p>
          I’m Didin Nur Yahya — a Full-Stack Software Engineer focused on
          scalable systems, backend architecture, and enterprise platforms used
          in real operational environments.
        </p>

        <p>
          My background spans development, QA, and manufacturing IT systems,
          giving me deep understanding of how software supports real business
          processes.
        </p>

        <p>
          I build structured systems, not just features — turning business
          requirements into reliable architectures.
        </p>

        <h3>Core Tech Stack</h3>

        <div className="tech-stack">
          {skills.map((skill, i) => (
            <div key={i} className="tech-pill">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <div className="lightning lightning1"></div>
        <div className="lightning lightning2"></div>

        <ScrollAnimation animateIn="fadeInRight">
          <img src={AnakGaul} alt="Didin Nur Yahya" className="image--cover" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
