import { useState } from "react";
import { NavLink } from "react-router-dom";

import logoImage from "../../assets/logo2.png";

import CartIcon from "../Cart/CartIcon";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [fixed, setFixed] = useState(false);

  const changeBarPositionHandler = () => {
    if (window.scrollY >= 230) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBarPositionHandler);

  return (
    <div className={classes.navigation}>
      <div className={classes["navigation-container"]}>
        <div className={classes["navigation-logo"]}>
          <img src={logoImage} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/men"
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/women"
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                to="/store/child"
              >
                Kids
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.cart}>
          <CartIcon onShowCart={props.onShowCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
