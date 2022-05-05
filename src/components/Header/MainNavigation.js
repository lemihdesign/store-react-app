import classes from "./MainNavigation.module.css";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logoImage from "../../assets/logo2.png";

import CartIcon from "../Cart/CartIcon";
import Hamburger from "../UI/Hamburger";

const MainNavigation = (props) => {
  const [showLinks, setShowLinks] = useState(false);

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
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
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
