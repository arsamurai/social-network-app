import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src={props.ava} alt="" className={s.post__ava} />
      <div className={s.post__info}>
        <div className={s.post__message}>{props.message}</div>
        <div className={s.post__like}>Like: {props.likeCount}</div>
      </div>
    </div>
  );
};

export default Post;
