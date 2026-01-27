import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    color: var(--green);
    margin-bottom: 5rem;
  }

  /* Timeline vertical line */
  .timeline-right {
    position: relative;
    max-width: 1000px;
    margin: auto;
  }

  .timeline-right::before {
    content: "";
    position: absolute;
    top: 0;
    right: 30px; /* garis di kanan */
    width: 4px;
    height: 100%;
    background: var(--green);
    border-radius: 10px;
  }

  .timeline-card {
    position: relative;
    margin: 3rem 0;
    display: flex;
    justify-content: flex-end; /* card ke kanan */
  }

  .timeline-icon {
    position: absolute;
    right: 18px;
    top: 20px;
    background: var(--green);
    color: black;
    border-radius: 50%;
    padding: 10px;
    font-size: 1.4rem;
    z-index: 2;
  }

  .card-content {
    width: 85%;
    background: rgba(255, 255, 255, 0.04);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(35, 206, 107, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  h3 {
    color: var(--green);
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 1.4rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .timeline-right::before {
      right: 10px;
    }

    .timeline-card {
      justify-content: flex-end;
    }

    .card-content {
      width: 92%;
    }
  }
`;
