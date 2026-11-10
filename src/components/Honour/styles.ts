
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem 4rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    color: var(--green);
    margin-bottom: 5rem;
  }

  .timeline-left {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 65px;
  }

  /* Vertical timeline line */
  .timeline-left::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 24px;
    width: 4px;
    background: var(--green);
    border-radius: 10px;
  }

  /* Timeline item */
  .timeline-card {
    position: relative;
    width: 100%;
    margin: 0 0 2rem;
    display: flex;
    justify-content: flex-start;
  }

  /* Medal / Timeline marker */
  .timeline-icon {
    position: absolute;
    left: -57px;
    top: 24px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
    color: #111;
    border-radius: 50%;
    font-size: 1.4rem;
    z-index: 2;
  }

  /* Card */
  .card-content {
    width: 100%;
    min-width: 0;
    background: rgba(255, 255, 255, 0.06);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(35, 206, 107, 0.35);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .card-content:hover {
    border-color: var(--green);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  h3 {
    color: var(--green);
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 1.4rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.2rem;
    margin: 0;
  }

  li {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 0.6rem;
  }

  /* Tablet */
  @media (max-width: 768px) {
    margin-top: 6rem;
    padding: 0 1.2rem 3rem;

    h2 {
      font-size: 2.8rem;
      margin-bottom: 3rem;
    }

    .timeline-left {
      padding-left: 45px;
    }

    .timeline-left::before {
      left: 15px;
      width: 3px;
    }

    .timeline-card {
      margin-bottom: 1.5rem;
    }

    .timeline-icon {
      left: -44px;
      top: 18px;
      width: 36px;
      height: 36px;
      font-size: 1.2rem;
    }

    .card-content {
      padding: 1.5rem;
      border-radius: 14px;
    }

    h3 {
      font-size: 1.7rem;
    }

    .info,
    li {
      font-size: 1.3rem;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .timeline-left {
      padding-left: 38px;
    }

    .timeline-left::before {
      left: 11px;
    }

    .timeline-icon {
      left: -38px;
      width: 30px;
      height: 30px;
      top: 16px;
      font-size: 1rem;
    }

    .card-content {
      padding: 1.2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .info,
    li {
      font-size: 1.2rem;
    }
  }
`;
