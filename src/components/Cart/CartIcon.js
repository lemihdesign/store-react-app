import icon from "../../assets/bag.png";

import classes from "./CartIcon.module.css";

const CartIcon = (props) => {
  return (
    <button
      onClick={props.onShowCart}
      className={classes["cart-icon-container"]}
    >
      <div className={classes.count}>
        <p>10</p>
      </div>
      <div className={classes["cart-icon"]}>
        <img src={icon} alt="Cart Icon" />
      </div>
    </button>
  );
};

export default CartIcon;
