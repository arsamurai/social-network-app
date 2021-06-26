import React from "react";
import ProfileStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.user__description}>
      <h3 className={s.user__name}>
        {createField("", s.fullName, "fullName", Input, "Full name", [])}
      </h3>
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
              <div className={s.contacts}>
                <div className={s.contactTitle}>
                  {key}:{" "}
                  {createField(
                    "",
                    s.contactValue,
                    "contacts." + key,
                    Input,
                    key,
                    []
                  )}
                </div>
              </div>
            );
          })}
        </li>
        <li className={s.info__item}>
          Job:{" "}
          {createField(
            s.lookingForAJob,
            s.lookingForAJobBox,
            "lookingForAJob",
            Input,
            "",
            [],
            {
              type: "checkbox",
            }
          )}
        </li>
        <li className={s.info__item}>
          Skills:{" "}
          <div>
            {createField(
              "",
              s.lookingForAJobDescription,
              "lookingForAJobDescription",
              Textarea,
              "It`s absent",
              []
            )}
          </div>
        </li>
        <li className={s.info__item}>
          About me:{" "}
          <div>
            {createField("", s.aboutMe, "aboutMe", Textarea, "It`s absent", [])}
          </div>
        </li>
      </ul>
      <button className={s.saveBtn}>Save</button>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
