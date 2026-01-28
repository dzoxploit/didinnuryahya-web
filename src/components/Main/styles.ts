import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;

  #tsparticles {
    position: fixed;
    inset: 0;
    z-index: -2;
  }

  /* CYBER GRID OVERLAY */
  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 150, 0.03) 0px,
      rgba(0, 255, 150, 0.03) 1px,
      transparent 1px,
      transparent 40px
    );
    pointer-events: none;
    z-index: -1;
  }

  /* FLOATING HACKER SYMBOLS */
  .bg-ornaments {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    font-family: "Fira Code", monospace;
    color: rgba(0, 255, 140, 0.08);
    font-size: 3rem;

    span {
      position: absolute;
      animation: float 18s linear infinite;
    }

    span:nth-child(1) {
      top: 10%;
      left: 15%;
    }
    span:nth-child(2) {
      top: 30%;
      left: 70%;
    }
    span:nth-child(3) {
      top: 60%;
      left: 20%;
    }
    span:nth-child(4) {
      top: 80%;
      left: 50%;
    }
    span:nth-child(5) {
      top: 45%;
      left: 85%;
    }
    span:nth-child(6) {
      top: 15%;
      left: 55%;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-30px);
      opacity: 0.6;
    }
    100% {
      transform: translateY(0px);
      opacity: 0.2;
    }
  }

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;
