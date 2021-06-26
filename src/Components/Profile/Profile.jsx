import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../Common/Preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPosts
        profile={props.profile}
        addPost={props.addPost}
        postData={props.postData}
      />
    </div>
  );
};

export default Profile;
