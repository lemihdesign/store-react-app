import classes from "./CartIcon.module.css";

import { useSelector } from "react-redux";

import icon from "../../assets/bag.png";

const CartIcon = (props) => {
  const items = useSelector((state) => state.cart.items);
  const itemsCount = items.length;
  return (
    <button
      onClick={props.onShowCart}
      className={classes["cart-icon-container"]}
    >
      <div className={classes.count}>
        <p>{itemsCount}</p>
      </div>
      <div className={classes["cart-icon"]}>
        <img src={icon} alt="Cart Icon" />
      </div>
    </button>
  );
};

export default CartIcon;
