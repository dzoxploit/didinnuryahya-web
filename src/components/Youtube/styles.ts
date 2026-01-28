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
    background: linear-gradient(90deg, #ff0000, #ff6f61);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem;
  }

  .video-card {
    text-decoration: none;
    color: white;
    border-radius: 1.6rem;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-8px);
      border: 1px solid #ff0000;
      box-shadow: 0 0 30px rgba(255, 0, 0, 0.25);
    }
  }

  .thumb {
    height: 190px;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.4s ease;

    .play-btn {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.2rem;
      color: white;
      background: rgba(0, 0, 0, 0.35);
      opacity: 0;
      transition: 0.3s;
    }
  }

  .video-card:hover .thumb {
    transform: scale(1.05);
  }

  .video-card:hover .play-btn {
    opacity: 1;
  }

  .info {
    padding: 1.6rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: 1.3rem;
    opacity: 0.7;
  }

  @media (max-width: 960px) {
    .videos {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    .videos {
      grid-template-columns: 1fr;
    }
  }
`;
