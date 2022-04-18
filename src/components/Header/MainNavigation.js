import { Link } from "react-router-dom";

import logoImage from "../../assets/logo2.png";

import CartIcon from "../Cart/CartIcon";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
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
            <Link to="/store/women">Woman</Link>
          </li>
          <li>
            <Link to="/store/kids">Kids</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.cart}>
        <CartIcon />
      </div>
    </div>
  );
};

export default MainNavigation;
