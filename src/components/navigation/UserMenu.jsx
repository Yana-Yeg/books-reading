import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";
import Icons from "../../images/symbol-defs.svg";
import { getUserName } from "../../redux/auth/authSelectors";

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const firsLetter = userName.split("")[0].toUpperCase();
  return (
    <div className={styles.user_menu}>
      <div className={styles.letter_wrapper}>
        <span className={styles.firs_letter}>{firsLetter}</span>
      </div>
      <span className={styles.name}>{userName}</span>
      <NavLink
        to="/training"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <svg class={styles.book__icon} width="22px" height="17px">
          <use xlinkHref={`${Icons}#icon-flat-grey`} />
        </svg>
      </NavLink>
      <NavLink
        to="/library"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <svg className={styles.home__icon} width="20px" height="17px">
          <use xlinkHref={`${Icons}#icon-icon-home`} />
        </svg>
      </NavLink>
      <span className={styles.line}></span>
      <button
        type="button"
        className={styles.logout_btb}
        onClick={(e) => dispatch(logout())}
      >
        Вихід
      </button>
    </div>
  );
}
