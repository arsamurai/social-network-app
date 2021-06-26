import React from "react";
import s from "./Users.module.css";
import Preloader from "../Common/Preloader";
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
  return (
    <div className={s.users}>
      <div className={s.title}>Users</div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.isFetching && <Preloader />}
      {props.users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
