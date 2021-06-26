import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../utils/validators";
import { Textarea } from "../Common/FormControls/FormsControls";

let maxLength100 = maxLength(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addnewMessage}>
      <Field
        className={s.write__message}
        component={Textarea}
        name="newMessageText"
        placeholder="Enter your message..."
        validate={[required, maxLength100]}
      />
      <button className={s.add__message}>Send</button>
    </form>
  );
};

let AddMessageReduxForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);

const Dialogs = (props) => {
  let dialogElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <Messages
      dialogPhoto={el.photo}
      dialogName={el.authorName}
      message={el.message}
    />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
    values.newMessageText = "";
  };

  return (
    <div className={s.dialogs}>
      <h3 className={s.title}>Dialogs</h3>
      <div className={s.dialogs__items}>
        <div className={s.dialogs__persons}>{dialogElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
