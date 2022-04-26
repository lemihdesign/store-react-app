import { useState } from "react";
import { NavLink } from "react-router-dom";

import logoImage from "../../assets/logo2.png";

import CartIcon from "../Cart/CartIcon";
import Hamburger from "../UI/Hamburger";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [fixed, setFixed] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const changeBarPositionHandler = () => {
    if (window.scrollY >= 230) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBarPositionHandler);

  const showMenuHandler = () => {
    setShowLinks(!showLinks);
  };

  const hideMenuHandler = () => {
    setShowLinks(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes["nav-container"]}>
        <div className={classes["nav-logo"]}>
          <img src={logoImage} alt="Logo" />
        </div>
        <div
          className={
            showLinks ? classes["nav-links-active"] : classes["nav-links"]
          }
        >
          <ul>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/"
                onClick={hideMenuHandler}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/men"
                onClick={hideMenuHandler}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/women"
                onClick={hideMenuHandler}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/child"
                onClick={hideMenuHandler}
              >
                Kids
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes["nav-buttons"]}>
          <div className={classes.cart}>
            <CartIcon onShowCart={props.onShowCartHandler} />
          </div>
          <Hamburger onClick={showMenuHandler} activeMenu={showLinks} />
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
