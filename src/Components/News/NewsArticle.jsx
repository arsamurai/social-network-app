import React from "react";
import s from "./News.module.css";

const NewsArticle = ({ data }) => {
  return (
    <div className={s.article}>
      <h3 className={s.articleTitle}>{data.title}</h3>
      {data.urlToImage ? (
        <img className={s.photo} src={data.urlToImage} alt="" />
      ) : (
        " "
      )}
      <p className={s.description}>{data.description}</p>
      <div className={s.info}>
        <p className={s.name}>{data.source.name}</p>
        <p className={s.publishedAt}>{data.publishedAt}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
