import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className={fixed ? classes["navigation-fixed"] : classes.navigation}>
      <div className={classes["navigation-container"]}>
        <div className={classes["navigation-logo"]}>
          <img src={logoImage} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store/men">Men</Link>
            </li>
            <li>
              <Link to="/store/women">Women</Link>
            </li>
            <li>
              <Link to="/store/child">Kids</Link>
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
