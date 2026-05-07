import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioData from "../../data/portofolioData";
import { ProjectCard } from "./ProjectCard";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Enterprise & Personal Projects</h2>

      {portfolioData.map((category, categoryIndex) => (
        <div className="category-section" key={categoryIndex}>
          <h3 className="category-title">{category.category}</h3>

          <div className="projects">
            {category.projects.map((project: any, projectIndex: number) => (
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                duration={0.5}
                key={projectIndex}
              >
                <ProjectCard project={project} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}
