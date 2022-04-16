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
          <li>Home</li>
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
        </ul>
      </nav>
      <div className={classes.cart}>
        <CartIcon />
      </div>
    </div>
  );
};

export default MainNavigation;
