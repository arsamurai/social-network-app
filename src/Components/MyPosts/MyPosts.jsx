import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../utils/validators";
import { Textarea } from "../Common/FormControls/FormsControls";
import user_photo from "../../Images/friend.jpg";

let maxLength30 = maxLength(30);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.new__post}>
      <Field
        className={s.write__post}
        component={Textarea}
        name="newPostText"
        placeholder="Your news..."
        validate={[required, maxLength30]}
      />
      <button className={s.add__post}>Send</button>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

const MyPosts = React.memo((props) => {
  console.log("RENDER YO");

  let postElements = props.postData.map((el) => (
    <Post
      ava={
        props.profile.photos.large != null
          ? props.profile.photos.large
          : user_photo
      }
      message={el.message}
      likeCount={el.likeCount}
    />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };

  return (
    <div className={s.my__posts}>
      <h3 className={s.title}>My posts</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      {postElements}
    </div>
  );
});

export default MyPosts;
