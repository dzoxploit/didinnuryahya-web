import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMediumArticles from "../components/Medium/FetchMediumArticle";
import he from "he";

import {
  Wrapper,
  ArticleBox,
  Title,
  Thumbnail,
  Content,
  ReadButton,
} from "./styles";

type Article = {
  guid: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

export default function MediumDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMediumArticles();
      const found = data.find(
        (a: Article) => encodeURIComponent(a.guid) === id,
      );
      setArticle(found || null);
    };
    load();
  }, [id]);

  if (!article)
    return (
      <Wrapper>
        <h2>Loading article...</h2>
      </Wrapper>
    );

  return (
    <Wrapper>
      <ArticleBox>
        <Title>{article.title}</Title>

        {article.thumbnail && (
          <Thumbnail src={article.thumbnail} alt={article.title} />
        )}

        <Content
          dangerouslySetInnerHTML={{
            __html: he.decode(article.description),
          }}
        />

        <ReadButton href={article.link} target="_blank" rel="noreferrer">
          Read on Medium ↗
        </ReadButton>
      </ArticleBox>
    </Wrapper>
  );
}
