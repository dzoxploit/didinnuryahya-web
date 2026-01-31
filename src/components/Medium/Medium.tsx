import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import fetchMediumArticles from "./FetchMediumArticle";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import he from "he"; // Import the he library
import { Link } from "react-router-dom";

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

  const decodeAndLimitDescription = (description: string, limit: number) => {
    const textOnly = description.replace(/<\/?[^>]+(>|$)/g, "");
    const decoded = he.decode(textOnly);
    return decoded.length <= limit ? decoded : decoded.slice(0, limit) + "...";
  };

  return (
    <Container id="medium">
      <h2>✍️ My Medium Articles</h2>

      <div className="projects">
        {articles.map((article) => (
          <ScrollAnimation key={article.guid} animateIn="fadeInUp">
            <Link
              to={`/article/${encodeURIComponent(article.guid)}`}
              className="project"
            >
              {/* THUMB */}
              {article.thumbnail && (
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${article.thumbnail})` }}
                />
              )}

              {/* CONTENT */}
              <div className="content">
                <h3>{article.title}</h3>
                <p>{decodeAndLimitDescription(article.description, 160)}</p>
                <div className="read-more">Read Article →</div>
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
export default Medium;
