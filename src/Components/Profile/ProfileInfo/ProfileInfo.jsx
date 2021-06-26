import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import background from "../../../Images/background.jpg";
import user_photo from "../../../Images/friend.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={s.profile__user}>
      <img src={background} className={s.user__background} />
      <div className={s.user__main}>
        <div className={s.user__left}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : user_photo
            }
            className={s.user__ava}
          />
          {props.isOwner &&
            (editMode ? (
              <div className={s.editBlock}>
                <button
                  className={s.editBtn}
                  onClick={() => {
                    setEditMode(false);
                  }}
                >
                  Exit
                </button>
              </div>
            ) : (
              <div className={s.editBlock}>
                <button
                  className={s.editBtn}
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Edit
                </button>
              </div>
            ))}
        </div>
        <div className={s.user__right}>
          {editMode ? (
            <ProfileDataFormReduxForm
              initialValues={props.profile}
              onSubmit={onSubmit}
              {...props}
            />
          ) : (
            <ProfileData
              profile={props.profile}
              isOwner={props.isOwner}
              {...props}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={s.user__description}>
      <h3 className={s.user__name}>{props.profile.fullName}</h3>
      <ul className={s.user__info}>
        {props.status && (
          <li className={s.info__item}>
            Status:
            <p>
              {
                <ProfileStatus
                  status={props.status}
                  updateStatus={props.updateStatus}
                />
              }
            </p>
          </li>
        )}
        <li className={s.info__item}>
          Contacts:{" "}
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contacts
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </li>
        <li className={s.info__item}>
          Job: <p>{props.profile.lookingForAJob ? "Yes" : "No"}</p>
        </li>
        <li className={s.info__item}>
          Skills:
          <p>
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : "It`s absent"}
          </p>
        </li>
        <li className={s.info__item}>
          About me:
          <p>{props.profile.aboutMe ? props.profile.aboutMe : "It`s absent"}</p>
        </li>
      </ul>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      <div className={s.contactTitle}>
        {contactTitle}: <div className={s.contactValue}> {contactValue}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
