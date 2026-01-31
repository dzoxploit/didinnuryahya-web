import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding-top: 12rem;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const ArticleBox = styled.article`
  width: 100%;
  max-width: 900px;
  background: rgba(20, 20, 20, 0.85);
  border-radius: 16px;
  padding: 4rem 5rem;
  box-shadow: 0 0 40px rgba(35, 206, 107, 0.15);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.4;
  color: var(--green);
`;

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 2.5rem 0;
`;

export const Content = styled.div`
  line-height: 1.9;
  font-size: 1.7rem;

  h2,
  h3 {
    margin-top: 3rem;
    color: var(--green);
  }

  p {
    margin-bottom: 1.6rem;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 2rem 0;
  }

  pre {
    background: #111;
    padding: 1.6rem;
    border-radius: 10px;
    overflow-x: auto;
  }

  code {
    color: var(--green);
  }

  a {
    color: var(--green);
    text-decoration: underline;
  }
`;

export const ReadButton = styled.a`
  display: inline-block;
  margin-top: 3rem;
  padding: 1rem 2rem;
  background: var(--green);
  color: #000;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(35, 206, 107, 0.4);
  }
`;
