import React from "react";
import s from "./../Dialogs.module.css";

const Messages = (props) => {
  return (
    <div className={s.message}>
      <div className={s.message__dialog}>
        <img className={s.dialog__photo} src={props.dialogPhoto} alt="" />
        <div className={s.dialog__name}>{props.dialogName}</div>
      </div>
      <div className={s.message__text}>{props.message}</div>
    </div>
  );
};

export default Messages;
