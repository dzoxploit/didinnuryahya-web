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
      {/* HERO SECTION */}
      <section className="hero-about">
        <div className="left">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <span className="section-tag">About Me</span>

            <h2>
              Backend Engineer Specializing in Enterprise Systems, Workflow
              Automation, and Scalable API Architectures
            </h2>

            <div className="badges">
              <span>Enterprise Systems</span>
              <span>WMS</span>
              <span>ERP</span>
              <span>BPM Workflow</span>
              <span>Microservices</span>
            </div>

            <p>
              I’m Didin Nur Yahya — a Software Engineer focused on backend
              engineering, enterprise systems, and scalable architectures.
            </p>

            <p>
              I build production-grade applications for manufacturing,
              logistics, BPM workflows, and operational platforms.
            </p>

            <p>
              My experience spans backend engineering, QA processes, ERP
              integrations, and enterprise manufacturing systems.
            </p>
          </ScrollAnimation>
        </div>

        <div className="right">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div className="image-wrapper">
              <img
                src={AnakGaul}
                alt="Didin Nur Yahya"
                className="image--cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="metrics-section">
        <div className="metric-card">
          <h3>4+</h3>
          <span>Years Experience</span>
        </div>

        <div className="metric-card">
          <h3>300%</h3>
          <span>Traffic Growth</span>
        </div>

        <div className="metric-card">
          <h3>4000+</h3>
          <span>Localization Entries</span>
        </div>

        <div className="metric-card">
          <h3>Global</h3>
          <span>International Teams</span>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy-section">
        <p>
          “I believe great software engineering is not only about writing code,
          but designing systems that remain reliable, scalable, and maintainable
          as businesses grow.”
        </p>
      </section>

      {/* TECH STACK */}
      <section className="stack-section">
        <div className="stack-header">
          <h3>Core Tech Stack</h3>

          <p>
            Technologies used across enterprise systems, scalable backend
            services, and modern applications.
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
      </section>
    </Container>
  );
}
