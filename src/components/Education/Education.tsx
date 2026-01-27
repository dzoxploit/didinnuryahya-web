import { Container } from "./styles";
import { educationData } from "../../data/educationData";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <h2>Education</h2>

      <div className="timeline-right">
        {educationData.map((edu, index) => (
          <ScrollAnimation
            key={index}
            animateIn="fadeInRight"
            delay={index * 100}
          >
            <div className="timeline-card">
              <div className="timeline-icon">🎓</div>

              <div className="card-content">
                <h3>{edu.school}</h3>
                <p className="info">
                  {edu.major} <span>•</span> <em>{edu.date}</em>
                </p>

                <ul>
                  {edu.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
