import React from "react";
import s from "./Header.module.css";
import logo from "./../../Images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} className={s.logo}></img>
      <div className={s.login}>
        {props.isAuth ? (
          <div>
            {props.login} - <button className={s.logout} onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"} className={s.login__link}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
