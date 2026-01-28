import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioData from "../../data/portofolioData";
import { ProjectCard } from "./ProjectCard";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        {portfolioData.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <ProjectCard project={project} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
