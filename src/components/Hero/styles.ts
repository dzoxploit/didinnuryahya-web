import styled from "styled-components";

//👋
export const Container = styled.section`
  min-height: 100vh; /* 🔥 bikin 1 layar penuh */
  display: flex;
  align-items: center; /* tengah vertikal */
  justify-content: space-between;
  gap: 8rem;
  padding: 0 5%;
  position: relative;

  /* subtle hacker grid background */
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 255, 100, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 100, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: 0;
  }

  .hero-text {
    position: relative;
    z-index: 2;

    .intro {
      font-size: 1.8rem;
      opacity: 0.8;
    }

    h1 {
      font-size: 7rem;
      color: #23ce6b;
      text-shadow:
        0 0 10px #23ce6b,
        0 0 25px rgba(35, 206, 107, 0.6);
    }

    .cursor {
      animation: blink 1s infinite;
      margin-left: 5px;
    }

    h3 {
      margin: 1rem 0;
      color: #ccc;
      font-weight: 400;
      max-width: 600px;
    }

    .highlight {
      color: #23ce6b;
      text-shadow: 0 0 8px #23ce6b;
    }
  }

  .button {
    margin-top: 4rem;
    padding: 1.4rem 5rem;
    background: transparent;
    border: 1px solid #23ce6b;
    color: #23ce6b;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background: #23ce6b;
      color: #000;
      box-shadow: 0 0 20px #23ce6b;
    }
  }

  .social-media {
    display: flex;
    gap: 1.5rem;
    margin-top: 4rem;

    img {
      width: 3.5rem;
      filter: brightness(0) invert(1);
      transition: all 0.3s;
    }

    a:hover img {
      transform: translateY(-4px);
      filter: drop-shadow(0 0 8px #23ce6b);
    }
  }

  .hero-image img {
    max-width: 520px;
    filter: drop-shadow(0 0 30px rgba(35, 206, 107, 0.2));
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hero-image {
      display: none;
    }

    h1 {
      font-size: 5rem;
    }
  }
`;
