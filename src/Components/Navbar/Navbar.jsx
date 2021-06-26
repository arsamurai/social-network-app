import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.list__item}>
          <NavLink
            to="/profile"
            className={s.list__link}
            activeClassName={s.active}
          >
            {props.sideBar.title[0]}
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink
            to="/dialogs"
            className={s.list__link}
            activeClassName={s.active}
          >
            {props.sideBar.title[1]}
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink
            to="/news"
            className={s.list__link}
            activeClassName={s.active}
          >
            {props.sideBar.title[2]}
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink
            to="/music"
            className={s.list__link}
            activeClassName={s.active}
          >
            {props.sideBar.title[3]}
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink
            to="/users"
            className={s.list__link + " " + s.special}
            activeClassName={s.active}
          >
            {props.sideBar.title[4]}
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink
            to="/settings"
            className={s.list__link}
            activeClassName={s.active}
          >
            {props.sideBar.title[5]}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
