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
    { icon: GoIcon, name: "Golang" },
    { icon: reactIcon, name: "React" },
    { icon: typescriptIcon, name: "TypeScript" },
    { icon: vueIcon, name: "Vue.js" },
    { icon: nodeIcon, name: "Node.js" },
    { icon: laravel, name: "Laravel" },
    { icon: flutter, name: "Flutter" },
    { icon: pythonIcon, name: "Python" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: cssIcon, name: "CSS" },
    { icon: boostrapIcon, name: "Bootstrap" },
  ];

  return (
    <Container id="about">
      {/* Background Effects */}
      <div className="sparkle" style={{ top: "20%", left: "10%" }} />
      <div className="sparkle" style={{ top: "40%", right: "15%" }} />
      <div className="sparkle" style={{ bottom: "30%", left: "25%" }} />

      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>

      {/* LEFT CONTENT */}
      <div className="about-card">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <span className="section-tag">About Me</span>

          <h2>Building Enterprise Systems & Scalable Backend Architectures</h2>

          <p>
            I’m Didin Nur Yahya — a Software Engineer focused on backend
            engineering, enterprise systems, and scalable architectures for
            manufacturing, logistics, and operational platforms.
          </p>

          <p>
            Experienced in developing production-grade applications including
            Warehouse Management Systems (WMS), ERP integrations, BPM workflows,
            and distributed microservice ecosystems used in real operational
            environments.
          </p>

          <p>
            My background spans software development, QA engineering, and
            enterprise manufacturing systems — helping me understand both
            technical implementation and real business processes.
          </p>

          <p>
            I enjoy transforming complex business requirements into reliable,
            maintainable, and scalable systems with strong focus on performance,
            system stability, and engineering quality.
          </p>

          {/* TECH STACK */}
          <div className="stack-header">
            <h3>Core Tech Stack</h3>

            <p>
              Technologies and tools used across backend services, enterprise
              systems, and modern web applications.
            </p>
          </div>

          <div className="tech-stack">
            {skills.map((skill, i) => (
              <div key={i} className="tech-pill">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* RIGHT IMAGE */}
      <div className="about-image">
        <div className="lightning lightning1"></div>
        <div className="lightning lightning2"></div>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div className="image-wrapper">
            <img
              src={AnakGaul}
              alt="Didin Nur Yahya"
              className="image--cover"
            />

            <div className="image-glow"></div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
