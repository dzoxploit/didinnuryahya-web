import styled from "styled-components";

// Define colors or other constants
const pink = "#ff6f61";
const blue = "#0073e6";
const green = "#28a745";

// Container
export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: ${green};
  }

  .videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
  }

  .video-card {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;

    &:hover {
      transform: translateY(-5px);
      background-color: ${pink};
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${blue};
      margin-bottom: 3.6rem;

      .video-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 5rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0.8rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-top: 1rem;
      font-size: 1.2rem;
      color: #ddd;
    }
  }

  @media (max-width: 960px) {
    .videos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .videos {
      grid-template-columns: 1fr;
    }
  }
`;
