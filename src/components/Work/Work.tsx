import { Container } from "./styles";
import { workData } from "../../data/workData";
import ScrollAnimation from "react-animate-on-scroll";

export function Work() {
  return (
    <Container id="work">
      <div className="work-wrapper">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>Work Experience</h2>
        </ScrollAnimation>

        <div className="timeline">
          {workData.map((job, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInUp"
              delay={index * 100}
            >
              <div className="timeline-item">
                <div className="timeline-icon work">💼</div>

                <div className="timeline-card">
                  <h3>{job.company}</h3>

                  <p className="job-info">
                    {job.role} <span>•</span>{" "}
                    <em className="date">{job.date}</em>
                  </p>

                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </Container>
  );
}
