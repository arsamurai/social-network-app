import React from "react";
import s from "./Users.module.css";
import user_photo from "../../Images/friend.jpg";
import { NavLink } from "react-router-dom";

const Users = ({ user, key, followingInProgress, follow, unfollow }) => {
  return (
    <div className={s.users__items}>
      <div className={s.user__item} key={key}>
        <div className={s.info__box_1}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : user_photo}
              alt=""
              className={s.user__photo}
            />
          </NavLink>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={s.fw__btn}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={s.fw__btn}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className={s.info__box_2}>
          <div className={s.nameAndStatus}>
            <div className={s.user__name + " " + s.bolder}>{user.name}</div>
            <div className={s.user__status}>{user.status}</div>
          </div>
          <div className={s.user__location + " " + s.bolder}>
            <div className={s.location__city}>user.location.city</div>
            <div className={s.location__city}>user.location.country</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
