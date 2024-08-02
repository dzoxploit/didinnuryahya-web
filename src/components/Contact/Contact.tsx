import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>
          If you want to talk to me, don't hesitate to call me or send me a
          message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:didinnuryahya@gmail.com">didinnuryahya@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone No" />
          <a href="tel:+6281413309326">(+62) 81413309326</a>
        </div>
      </div>
    </Container>
  );
}
