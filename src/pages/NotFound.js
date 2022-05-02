import classes from "./NotFound.module.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import image from "../assets/icons/website-maintenance.svg";
import Cart from "../components/Cart/Cart";

const NotFound = (props) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      <div className={classes["not-found-container"]}>
        <img src={image} alt="notFoundImage" />
        <p>
          <span>404</span> Page Not Found.
        </p>
        <button>
          <Link to="/">Go to Home Page</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default NotFound;
