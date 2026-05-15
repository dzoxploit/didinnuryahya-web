import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem 6%;
  position: relative;

  .hero-about {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 5rem;
    align-items: center;
  }

  .left {
    width: 100%;
  }

  .right {
    display: flex;
    justify-content: center;
  }

  .section-tag {
    color: #23ce6b;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: inline-block;
  }

  h2 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 2rem;

    background: linear-gradient(90deg, #23ce6b, #00bcd4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .badges span {
    padding: 0.7rem 1.4rem;
    border-radius: 999px;
    background: rgba(35, 206, 107, 0.1);
    border: 1px solid rgba(35, 206, 107, 0.2);
    color: #23ce6b;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.8;
    color: #d4d4d4;
    margin-bottom: 1.5rem;
  }

  .image-wrapper {
    position: relative;
  }

  .image--cover {
    width: 100%;
    max-width: 420px;
    border-radius: 2rem;
    box-shadow: 0 0 50px rgba(35, 206, 107, 0.2);
  }

  /* METRICS */
  .metrics-section {
    margin-top: 6rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .metric-card {
    padding: 2rem;
    border-radius: 1.8rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);

    text-align: center;
  }

  .metric-card h3 {
    font-size: 3rem;
    color: #23ce6b;
    margin-bottom: 0.5rem;
  }

  .metric-card span {
    color: #d4d4d4;
    font-size: 1.4rem;
  }

  /* PHILOSOPHY */
  .philosophy-section {
    margin-top: 4rem;

    padding: 3rem;
    border-radius: 2rem;

    background: rgba(255, 255, 255, 0.03);
    border-left: 4px solid #23ce6b;
  }

  .philosophy-section p {
    font-size: 2rem;
    line-height: 1.8;
    font-style: italic;
    margin: 0;
  }

  /* STACK */
  .stack-section {
    margin-top: 5rem;
  }

  .stack-header {
    margin-bottom: 2rem;
  }

  .stack-header h3 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .tech-pill {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem 1.6rem;
    border-radius: 1.4rem;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);

    transition: 0.3s ease;
  }

  .tech-pill:hover {
    transform: translateY(-4px);
    border-color: #23ce6b;
  }

  .tech-pill img {
    width: 24px;
    height: 24px;
  }

  .tech-pill span {
    color: white;
    font-size: 1.4rem;
  }

  @media (max-width: 960px) {
    .hero-about {
      grid-template-columns: 1fr;
    }

    .metrics-section {
      grid-template-columns: repeat(2, 1fr);
    }

    h2 {
      font-size: 3rem;
    }

    .right {
      order: -1;
    }
  }

  @media (max-width: 600px) {
    padding: 6rem 2rem;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.5rem;
    }

    .metrics-section {
      grid-template-columns: 1fr;
    }

    .image--cover {
      max-width: 100%;
    }
  }
`;
