import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  padding: 0 5%;
  position: relative;
  overflow: hidden; /* stops the illustration from spilling off-screen */

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
    pointer-events: none;
  }

  .hero-text {
    position: relative;
    z-index: 2;
    padding: 20px;
    flex: 1 1 auto;

    .intro {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.8rem;
      opacity: 0.8;

      /* 👋 keep the GIF the size of the text */
      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }

    h1 {
      font-size: 7rem;
      line-height: 1.1;
      margin: 0.5rem 0;
      color: #23ce6b;
      text-shadow:
        0 0 10px #23ce6b,
        0 0 25px rgba(35, 206, 107, 0.6);
    }

    .cursor {
      display: inline-block;
      margin-left: 5px;
      animation: blink 1s step-end infinite;
    }

    h3 {
      margin: 1.5rem 0 0;
      color: #ccc;
      font-weight: 400;
      line-height: 1.5;
      max-width: 600px;
    }

    .highlight {
      color: #23ce6b;
      text-shadow: 0 0 8px #23ce6b;
    }
  }

  /* <a> is inline by default, so margin-top was ignored -> overlap */
  .button {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 3.5rem;
    padding: 1.6rem 2.8rem;
    background: transparent;
    border: 1px solid #23ce6b;
    color: #23ce6b;
    border-radius: 8px;
    font-size: 1.8rem;
    transition: all 0.3s;

    &:hover {
      background: #23ce6b;
      color: #000;
      box-shadow: 0 0 20px #23ce6b;
    }
  }

  .social-media {
    display: flex;
    gap: 1.4rem;
    margin-top: 3.5rem;

    a {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(35, 206, 107, 0.4);
      transition: all 0.3s;

      &:hover {
        transform: translateY(-4px);
        background: rgba(35, 206, 107, 0.15);
        box-shadow: 0 0 12px rgba(35, 206, 107, 0.6);
      }
    }

    /* removed brightness(0) invert(1): it turned the logos into white blobs */
    img {
      width: 2.6rem;
      height: 2.6rem;
      object-fit: contain;
    }
  }

  .hero-image {
    position: relative;
    z-index: 1;
    flex: 0 1 520px;

    img {
      width: 100%;
      max-width: 520px;
      height: auto;
      filter: drop-shadow(0 0 30px rgba(35, 206, 107, 0.2));
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 960px) {
    display: block;
    padding-top: 12rem;
    text-align: center;

    .hero-image {
      display: none;
    }

    .hero-text {
      h1 {
        font-size: 5rem;
      }

      h3 {
        margin-left: auto;
        margin-right: auto;
      }

      .intro,
      .social-media {
        justify-content: center;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-text h1 {
      font-size: 3.8rem;
    }
  }
`;
