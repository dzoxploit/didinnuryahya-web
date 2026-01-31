import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMediumArticles from "./FetchMediumArticle";
import styled from "styled-components";
import he from "he";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  font-family: Arial, sans-serif;
`;

type Params = {
  id: string;
};

export function MediumDetail() {
  const { id } = useParams<Params>(); // 🔥 INI FIX NYA
  const history = useHistory();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMediumArticles();
      const found = data.find((a) => a.guid === decodeURIComponent(id));
      setArticle(found);
    };
    load();
  }, [id]);

  if (!article) return <Container>Loading...</Container>;

  const clean = he.decode(article.description.replace(/<\/?[^>]+(>|$)/g, ""));

  return (
    <Container>
      <button onClick={() => history.goBack()}>← Back</button>
      <h1>{article.title}</h1>
      {article.thumbnail && <img src={article.thumbnail} alt="" />}
      <p>{clean}</p>
      <a href={article.link} target="_blank" rel="noreferrer">
        Read on Medium →
      </a>
    </Container>
  );
}
