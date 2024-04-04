import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";

const BACKEND_ADDRESS = "https://morningnews-backend-tan.vercel.app";

function Home() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const hiddenArticles = useSelector((state) => state.hiddenArticles.value);
  console.log("hiddenArticle: ", hiddenArticles);

  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  useEffect(() => {
    fetch(`${BACKEND_ADDRESS}/articles`)
      .then((response) => response.json())
      .then((data) => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);

  const articlesFiltered = articlesData.filter(
    (data) =>
      !hiddenArticles.some(
        (hiddenArticle) => hiddenArticle.title === data.title
      )
  );
  // console.log("articlesFiltered: ", articlesFiltered);

  const articles = articlesFiltered.map((data, i) => {
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.title === data.title
    );
    return (
      <Article key={i} {...data} isBookmarked={isBookmarked} isHome={true} />
    );
  });

  let topArticles;
  if (bookmarks.some((bookmark) => bookmark.title === topArticle.title)) {
    topArticles = <TopArticle {...topArticle} isBookmarked={true} />;
  } else {
    topArticles = <TopArticle {...topArticle} isBookmarked={false} />;
  }

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>
      {topArticles}
      <div className={styles.articlesContainer}>{articles}</div>
    </div>
  );
}

export default Home;