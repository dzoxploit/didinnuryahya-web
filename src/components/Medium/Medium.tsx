import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import fetchMediumArticles from "./FetchMediumArticle";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import he from "he"; // Import the he library

// Define the type for an article
type Article = {
  guid: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  // Add other properties as needed
};

export function Medium() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const data: Article[] = await fetchMediumArticles();
      setArticles(data);
    };

    getArticles();
  }, []);

  // Helper function to remove HTML tags, decode entities, and limit description
  const decodeAndLimitDescription = (description: string, limit: number) => {
    // Remove HTML tags using regex
    const textOnly = description.replace(/<\/?[^>]+(>|$)/g, "");
    // Decode HTML entities
    const decodedDescription = he.decode(textOnly);
    // Limit length and add ellipsis
    if (decodedDescription.length <= limit) return decodedDescription;
    return decodedDescription.slice(0, limit) + "...";
  };

  return (
    <Container id="portfolio">
      <h2>My Medium Articles</h2>
      <div className="projects">
        {articles.map((article) => (
          <ScrollAnimation key={article.guid} animateIn="flipInX">
            <div className="project">
              <header>
                <div className="project-links">
                  <a href={article.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit article" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{article.title}</h3>
                <p>{decodeAndLimitDescription(article.description, 255)}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
