import { Container } from "./styles";
import { honourData } from "../../data/honourData";
import ScrollAnimation from "react-animate-on-scroll";

export function Honour() {
    return (
        <Container id="honour">
            <h2>Honour</h2>
            <div className="timeline-left">
                {honourData.map((hon, index) => (
                    <ScrollAnimation
                      key={index}
                      animateIn="fadeInLeft"
                      delay={index * 100}
                    >
                        <div className="card-content">
                            <div className="timeline-icon">🏅</div>

                            <div className="card-content">
                                <h3>{hon.organizer}</h3>
                                <p className="info">
                                    {hon.title} <span>*</span> <em>{hon.date}</em>
                                </p>

                                <ul>
                                    {hon.desc.map((g, i) => (
                                        <li key={i}>{g}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </Container>
    )
}