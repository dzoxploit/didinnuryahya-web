import { Container } from "./styles";
import { HeadProvider, Title, Link, Meta } from "react-head";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import logoIcon from "../../assets/logodny.jpg";
import logoOG from "../../assets/WhatsApp Image 2022-12-03 at 11.13.06 PM-fotor-bg-remover-2023040841623.png";

import CV from "../../assets/Didin nur yahya - Fullstack Engineer - CV.pdf";
export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <div>
      <Title>Didin Nur Yahya</Title>
      <Meta property="og:title" content="DNY Aka Didin Nur Yahya" />
      <Meta
        property="og:description"
        content="Didin Nur Yahya, Software Engineer and Test Engineer"
      />
      <Meta property="og:url" content="https://didinnuryahya.vercel.app" />
      <meta property="og:type" content="website" />

      <Meta
        property="og:image"
        content={"https://didinnuryahya.vercel.app" + logoOG}
      />
      <Meta property="og:image:type" content="image/png" />

      {/* Google / Search Engine Tags */}
      <Meta itemProp="name" content="Didin Nur Yahya" />
      <Meta
        itemProp="description"
        content="Didin Nur Yahya, Software Engineer and Test Engineer"
      />
      <Meta
        itemProp="image"
        content={"https://didinnuryahya.vercel.app" + logoOG}
      />

      {/* Twitter Meta Tags */}
      <Meta
        name="twitter:card"
        content={"https://didinnuryahya.vercel.app" + logoIcon}
      />
      <Meta name="twitter:title" content="Didin Nur Yahya" />
      <Meta
        name="twitter:description"
        content="Didin Nur Yahya, Software Engineer and Test Engineer"
      />
      <Meta
        name="twitter:image"
        content={"https://didinnuryahya.vercel.app" + logoIcon}
      />
      {/* Facebook App ID */}
      <Meta property="fb:app_id" content="1166728617405476" />
      <Container className="header-fixed">
        <Router>
          <HashLink smooth to="#home" className="logo">
            <img src={logoIcon} alt="Home" className="image--cover" />
          </HashLink>

          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch">Toggle</label>

          <nav className={isActive ? "active" : ""}>
            <NavHashLink smooth to="#home" onClick={closeMenu}>
              Home
            </NavHashLink>
            <NavHashLink smooth to="#about" onClick={closeMenu}>
              About me
            </NavHashLink>
            <NavHashLink smooth to="#work" onClick={closeMenu}>
              Work
            </NavHashLink>
            <NavHashLink smooth to="#education" onClick={closeMenu}>
              Education
            </NavHashLink>
            <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
              Portfolio
            </NavHashLink>
            <NavHashLink smooth to="#contact" onClick={closeMenu}>
              Contact
            </NavHashLink>
            <a href={CV} download className="button">
              CV
            </a>
          </nav>

          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "Fechar menu" : "Abrir menu"}
            className={isActive ? "menu active" : "menu"}
            onClick={() => {
              setActive(!isActive);
            }}
          ></div>
        </Router>
      </Container>
    </div>
  );
}
