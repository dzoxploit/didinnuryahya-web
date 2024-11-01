import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    margin-top: 0rem;
    color: var(--green);
  }

  .videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 5rem;
  }

  .video-card {
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: auto;
    }

    .body {
      padding: 1rem;
      
      h3 {
        font-size: 1.5rem;
        color: var(--green);
        margin: 0.5rem 0;
      }

      p {
        font-size: 1rem;
        color: #555;
      }

      .stats {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: #777;
      }
    }
  }

  @media (max-width: 960px) {
    .videos {
      margin: 0 1rem;
    }

    .video-card {
      width: 100%;
      max-width: 400px; // Adjust this if needed
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.5rem;
    }

    .video-card {
      width: 100%;
      max-width: 90%; // Adjust this for smaller screens
    }
  }
`;
