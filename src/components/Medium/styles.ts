import styled from "styled-components";

// Define colors or other constants
const pink = "#ff6f61"; // Replace with your actual color value
const blue = "#0073e6"; // Replace with your actual color value
const green = "#28a745"; // Replace with your actual color value

// Container
export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    background: linear-gradient(90deg, #23ce6b, #00bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem;
  }

  .project {
    border-radius: 1.6rem;
    overflow: hidden;
    text-decoration: none;
    color: white;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-8px);
      border: 1px solid #23ce6b;
      box-shadow: 0 0 30px rgba(35, 206, 107, 0.2);
    }
  }

  .thumb {
    height: 180px;
    background-size: cover;
    background-position: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    }
  }

  .content {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h3 {
    font-size: 1.9rem;
    margin-bottom: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    opacity: 0.75;
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 2rem;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    margin-top: auto;
    color: #23ce6b;
    font-weight: 600;
    font-size: 1.3rem;
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
