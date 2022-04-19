import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logoImage from "../../assets/logo2.png";

import CartIcon from "../Cart/CartIcon";

import classes from "./MainNavigation.module.css";
import { cartActions } from "../../store/cart-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCart(true));
  };

  return (
    <div className={classes.navigation}>
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
              <Link to="/store/infant">Kids</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.cart}>
          <CartIcon onShowCart={showCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
