import React, { useState } from "react";
import s from "./News.module.css";
import NewsArticle from "./NewsArticle";
import Preloader from "../Common/Preloader";

const News = ({ news, searchNews }) => {
  console.log(news);

  let [searchedNews, setNewsItem] = useState();

  const onSearchedNewsChange = (e) => {
    setNewsItem(e.target.value);
    searchNews(e.target.value);
  };

  return (
    <div className={s.news}>
      <h3 className={s.title}>News</h3>
      <div>
        <input
          className={s.newsInput}
          onChange={onSearchedNewsChange}
          value={searchedNews}
        />
      </div>
      <div className={s.newsInner}>
        {news ? (
          news.map((n) => {
            return <NewsArticle data={n} key={n.url} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default News;
