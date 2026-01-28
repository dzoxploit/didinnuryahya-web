import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="intro">
            Hello <img src={Hello} alt="Hello" />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>
            Didin Nur Yahya
            <span className="cursor">|</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>
            Software Engineer who builds systems,
            <span className="highlight"> automates chaos</span>, and
            occasionally overthinks architecture.
          </h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={700}>
          <NavHashLink smooth to="#contact" className="button">
            🚀 Let's Talk
          </NavHashLink>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={900}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/didin-nur-yahya-63772512b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="http://github.com/dzoxploit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B6281413309326"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={800}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
