import styled from "styled-components";

export const Container = styled.section`
  margin-top: 14rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(35, 206, 107, 0.25),
      transparent 70%
    );
    top: -120px;
    left: -120px;
    animation: floatOrb 8s ease-in-out infinite alternate;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    background: radial-gradient(
      circle,
      rgba(0, 188, 212, 0.2),
      transparent 70%
    );
    bottom: -120px;
    right: -120px;
    animation: floatOrb 10s ease-in-out infinite alternate;
    z-index: 0;
  }

  @keyframes floatOrb {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(40px);
    }
  }
  .sparkle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #23ce6b;
    border-radius: 50%;
    filter: blur(2px);
    animation: blink 2s infinite ease-in-out alternate;
    opacity: 0.5;
  }

  @keyframes blink {
    from {
      opacity: 0.2;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1.4);
    }
  }

  .about-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    padding: 3rem;
    border-radius: 2rem;
    z-index: 1;
  }

  h2 {
    font-size: 3.6rem;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #23ce6b, #00bcd4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: #23ce6b;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.7;
    margin-bottom: 1.6rem;
  }

  /* SKILL BADGES */
  .hard-skills {
    adisplay: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
  }

  .tech-pill {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    border-radius: 999px;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--pill-text);
    background: var(--pill-bg);
    border: 1px solid var(--pill-border);
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .tech-pill img {
    width: 18px;
    height: 18px;
  }

  .tech-pill:hover {
    transform: translateY(-4px);
    border-color: var(--green);
    box-shadow: 0 0 12px var(--pill-glow);
  }

  /* Shine animation */
  .tech-pill::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transform: translateX(-120%);
    transition: transform 0.6s ease;
  }

  .tech-pill:hover::after {
    transform: translateX(120%);
  }
  /* IMAGE AREA */
  .about-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image--cover {
    width: 100%;
    max-width: 420px;
    border-radius: 2rem;
    position: relative;
    z-index: 1;
  }

  /* glowing aura */
  .about-image::before {
    content: "";
    position: absolute;
    width: 110%;
    height: 110%;
    border-radius: 2rem;
    background: linear-gradient(45deg, #23ce6b, #00bcd4, #9c27b0);
    filter: blur(50px);
    opacity: 0.25;
    z-index: 0;
  }

  /* FLOATING SHAPES */
  .floating-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.2;
    z-index: 0;
  }

  .shape1 {
    width: 220px;
    height: 220px;
    background: #23ce6b;
    bottom: 50px;
    right: 200px;
  }

  .shape2 {
    width: 150px;
    height: 150px;
    background: #00bcd4;
    top: 200px;
    right: 50px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .about-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* IMAGE BESAR */
  .image--cover {
    width: 100%;
    max-width: 520px; /* ⬅ DIBESARIN */
    border-radius: 2rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 60px rgba(35, 206, 107, 0.25);
  }

  /* GLOW AURA */
  .about-image::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 2rem;
    background: radial-gradient(
      circle,
      rgba(35, 206, 107, 0.25),
      transparent 70%
    );
    filter: blur(80px);
    z-index: 1;
  }

  /* ⚡ LIGHTNING ACCENT */
  .lightning {
    position: absolute;
    width: 120px;
    height: 120px;
    background: linear-gradient(45deg, #23ce6b, #00bcd4);
    clip-path: polygon(
      40% 0%,
      60% 0%,
      45% 35%,
      75% 35%,
      35% 100%,
      45% 60%,
      25% 60%
    );
    filter: drop-shadow(0 0 10px #23ce6b);
    animation: floatLightning 3s ease-in-out infinite;
    opacity: 0.6;
    z-index: 0;
  }

  .lightning1 {
    top: -30px;
    right: -40px;
    transform: rotate(20deg);
  }

  .lightning2 {
    bottom: -20px;
    left: -30px;
    transform: rotate(-30deg);
  }

  /* FLOAT ANIMATION */
  @keyframes floatLightning {
    0% {
      transform: translateY(0px) rotate(20deg);
    }
    50% {
      transform: translateY(-10px) rotate(22deg);
    }
    100% {
      transform: translateY(0px) rotate(20deg);
    }
  }
`;
