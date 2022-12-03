import { Container } from "./styles";
import AnakGaul from "../../assets/WhatsApp Image 2022-12-03 at 11.13.06 PM.webp";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <div className="work-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>Education</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>Gunadarma University</h3>
                  <p className="info">
                    Informatics<span>&bull;</span>{" "}
                    <em className="date">Oct 2019 - Now</em>
                  </p>
                  <p>
                    Activities and societies: Final Year StudentActivities and
                    societies: Final Year Student Programming stack : Assembly,
                    COBOL, Python,Ruby, C#, PHP, Golang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>SMK Bina Informatika</h3>
                  <p className="info">
                    Associate Software engineering<span>&bull;</span>{" "}
                    <em className="date">July 2016 - May 2019</em>
                  </p>
                  <p>
                    Activities and societies: Elected Captain of Software
                    Engineering Professional development completed in Fullstack
                    Java Developer Received Bina Informatika Scholarship Awarded
                    Web technologies Student Skills Competition in regional city
                    and province level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>Google Developer Kejar</h3>
                  <p className="info">
                    Mobile Web Service Student<span>&bull;</span>{" "}
                    <em className="date">October 2018 - December 2018</em>
                  </p>
                  <p>
                    Activities and societies: Elected Captain of Software
                    Engineering Professional development completed in Fullstack
                    Java Developer Received Bina Informatika Scholarship Awarded
                    Web technologies Student Skills Competition in regional city
                    and province level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
