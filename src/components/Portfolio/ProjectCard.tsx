import externalLink from "../../assets/external-link.svg";
import githubIcon from "../../assets/github.svg";

interface Props {
  project: any;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="project">
      <header>
        <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>

        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="github" />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              <img src={externalLink} alt="live" />
            </a>
          )}
        </div>
      </header>

      <div className="body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <footer>
        <ul className="tech-list">
          {project.tech.map((t: string, i: number) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
