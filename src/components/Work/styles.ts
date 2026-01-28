import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding-bottom: 6rem;

  .work-wrapper {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
    color: var(--green);
  }

  /* ===== TIMELINE LINE ===== */
  .timeline {
    position: relative;
    padding-left: 40px;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    width: 3px;
    height: 100%;
    background: var(--timeline-line);
    border-radius: 10px;
  }

  /* ===== ITEM ===== */
  .timeline-item {
    position: relative;
    margin-bottom: 4rem;
  }

  /* ===== ICON BULAT ===== */
  .timeline-icon {
    position: absolute;
    left: -2px;
    top: 5px;
    width: 32px;
    height: 32px;
    background: var(--timeline-icon-bg);
    color: var(--timeline-icon-text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 0 10px rgba(35, 206, 107, 0.4);
  }

  /* ===== CARD ===== */
  .timeline-card {
    background: var(--card-bg);
    padding: 2rem 2.5rem;
    border-radius: 18px;
    border: 1px solid var(--card-border);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
  }

  .timeline-card:hover {
    transform: translateY(-4px);
    border-color: var(--green);
  }

  .timeline-card h3 {
    color: var(--green);
    font-size: 2.2rem;
    margin-bottom: 0.6rem;
  }

  .job-info {
    font-size: 1.5rem;
    opacity: 0.8;
    margin-bottom: 1.2rem;
  }

  .job-info span {
    margin: 0 8px;
  }

  ul {
    padding-left: 18px;
  }

  li {
    margin-bottom: 8px;
    font-size: 1.5rem;
    line-height: 1.6;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    .timeline {
      padding-left: 30px;
    }

    .timeline-card {
      padding: 1.6rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`;
