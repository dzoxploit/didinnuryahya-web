import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    background: linear-gradient(90deg, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .category-section {
    margin-bottom: 6rem;
  }

  .category-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    color: var(--white);
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.8rem;
      width: 60%;
      height: 3px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--green), var(--blue));
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem 0;
  }

  .project {
    padding: 2.4rem 2rem;
    border-radius: 1.8rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;

    background: var(--card-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow-card);

    transition: all 0.35s ease;

    &:hover {
      transform: translateY(-10px);
      border-color: rgba(35, 206, 107, 0.5);
      box-shadow: 0 0 30px rgba(35, 206, 107, 0.12);
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, var(--green), var(--blue));
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 1rem;

      .project-top {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      svg {
        opacity: 0.9;
      }

      .project-status {
        width: fit-content;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 999px;

        color: var(--green);
        background: rgba(35, 206, 107, 0.08);
        border: 1px solid rgba(35, 206, 107, 0.2);
      }

      .project-links {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        a {
          transition: 0.25s ease;

          &:hover {
            transform: scale(1.15);
          }
        }

        img {
          width: 2.2rem;
        }
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      flex: 1;

      h3 {
        margin-bottom: 1.4rem;
        font-size: 2rem;
        line-height: 1.4;
        color: var(--card-title);
      }

      p {
        letter-spacing: 0.03rem;
        line-height: 1.8;
        color: var(--card-text);
        margin-bottom: 2rem;
        font-size: 1.45rem;
      }

      .confidential-badge {
        width: fit-content;
        margin-bottom: 1.5rem;

        padding: 0.45rem 1rem;
        border-radius: 999px;

        font-size: 1.1rem;
        font-weight: 500;

        color: #ffb020;
        background: rgba(255, 176, 32, 0.08);
        border: 1px solid rgba(255, 176, 32, 0.2);
      }

      .project-highlights {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        margin-bottom: 2rem;

        .highlight-item {
          padding: 0.5rem 1rem;
          border-radius: 999px;

          font-size: 1.1rem;
          line-height: 1.4;

          color: #d4d4d4;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
      }
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;

        li {
          padding: 0.5rem 1.1rem;
          font-size: 1.15rem;
          border-radius: 999px;

          background: var(--tag-bg);
          border: 1px solid var(--tag-border);
          color: var(--green);

          transition: 0.25s ease;

          &:hover {
            border-color: var(--green);
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    margin-top: 10rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }

    .category-title {
      font-size: 1.8rem;
    }

    .projects {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .project {
      padding: 2rem 1.6rem;

      .body {
        h3 {
          font-size: 1.8rem;
        }

        p {
          font-size: 1.35rem;
        }
      }
    }
  }
`;
