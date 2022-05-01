import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import emptyCartIcon from "../../assets/icons/empty-cart.svg";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const { onHideCart } = props;
  let items = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const dispatch = useDispatch();
  const hasItems = items.length > 0;

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      brand={item.brand}
      name={item.name}
      price={item.price}
      color={item.color}
      image={item.imgSmall}
      quantity={item.quantity}
    />
  ));

  const hideCartHandler = () => {
    dispatch(cartActions.showCart());
  };

  let cartContent = "";
  if (hasItems) {
    cartContent = (
      <Fragment>
        <div className={classes["cart-header"]}>
          <h2>Cart</h2>{" "}
          <i className="fa-solid fa-xmark" onClick={onHideCart}></i>
        </div>
        <ul className={classes.cartList}>{cartItems}</ul>
        <div className={classes["prices-details"]}>
          <span>
            Subtotal:{" "}
            <span className={classes.pricesSpan}>
              ${cartTotalAmount.toFixed(2)}
            </span>
          </span>
          <span>
            Shipping:{" "}
            <span className={classes.pricesSpan}>
              ${shippingCost.toFixed(2)}
            </span>
          </span>
        </div>
        <div className={classes["total-amount"]}>
          <span>Total </span>
          <span className={classes.pricesSpan}>
            ${(shippingCost + cartTotalAmount).toFixed(2)}
          </span>
          {items.length === 0 && (
            <span className={classes.pricesSpan}>
              ${cartTotalAmount.toFixed(2)}
            </span>
          )}
        </div>
        <div className={classes.action}>
          <button>Place Order</button>
        </div>
      </Fragment>
    );
  }

  if (!hasItems) {
    cartContent = (
      <div className={classes["empty-cart-container"]}>
        <img src={emptyCartIcon} alt="Empty" />
        <h2>Your Cart is Empty</h2>
        <p>I think blue button below is very important.</p>
        <p>Begin ordering your products.</p>
        <button onClick={hideCartHandler}>Begin Ordering</button>
      </div>
    );
  }

  return <Modal onHideCart={onHideCart}>{cartContent}</Modal>;
};

export default Cart;
