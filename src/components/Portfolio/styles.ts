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

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem;

    .project {
      padding: 2.4rem 2rem;
      border-radius: 1.6rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;

      /* ✨ GLASS EFFECT */
      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.02)
      );
      backdrop-filter: blur(12px);

      border: 1px solid rgba(255, 255, 255, 0.08);

      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

      transition: all 0.35s ease;

      &:hover {
        transform: translateY(-10px) scale(1.02);
        border: 1px solid var(--green);
        box-shadow: 0 0 25px rgba(35, 206, 107, 0.25);
      }

      /* ✨ glowing accent line */
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, var(--green), var(--blue));
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.5rem;

        svg {
          opacity: 0.7;
        }

        .project-links {
          display: flex;
          gap: 1.2rem;

          a {
            transition: transform 0.2s ease;

            &:hover {
              transform: scale(1.15);
            }
          }

          img {
            width: 2.4rem;
            filter: brightness(0.9);
          }
        }
      }

      h3 {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        color: #fff;
      }

      p {
        letter-spacing: 0.05rem;
        line-height: 1.6;
        opacity: 0.75;
        margin-bottom: 2rem;
        font-size: 1.5rem;
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;

          li {
            padding: 0.4rem 1rem;
            font-size: 1.2rem;
            border-radius: 2rem;
            background: rgba(35, 206, 107, 0.1);
            border: 1px solid rgba(35, 206, 107, 0.3);
            color: var(--green);
          }
        }
      }
    }
  }

  /* 📱 TABLET */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
