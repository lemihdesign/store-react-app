import classes from "./Cart.module.css";

import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import emptyCartIcon from "../../assets/icons/empty-cart.svg";
import Form from "./Order Form/Form";

import { cartActions } from "../../store/cart-slice";

import image from "../../assets/icons/olympic-athlete.gif";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { onHideCart } = props;
  let items = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const placeOrder = useSelector((state) => state.cart.placeOrder);
  const completedOrder = useSelector((state) => state.cart.completedOrder);
  const showPlaceOrderBtn = useSelector(
    (state) => state.cart.showPlaceOrderBtn
  );
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
    dispatch(cartActions.changeCompletedOrderState(false));
    dispatch(cartActions.clearCart());
  };

  const placeOrderHandler = () => {
    dispatch(cartActions.placeOrder(true));
    dispatch(cartActions.showPlaceOrderBtn(false));
  };

  let cartContent = "";
  if (hasItems && !completedOrder) {
    cartContent = (
      <Fragment>
        <div className={classes["cart-header"]}>
          <p>Cart</p> <i className="fa-solid fa-xmark" onClick={onHideCart}></i>
        </div>
        <div className={classes["cart-container"]}>
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
          {placeOrder && <Form />}
          <div className={classes.action}>
            {showPlaceOrderBtn && (
              <button onClick={placeOrderHandler}>Place Order</button>
            )}
          </div>
        </div>
      </Fragment>
    );
  }

  if (!hasItems && !completedOrder) {
    cartContent = (
      <Fragment>
        <div className={classes["cart-header"]}>
          <p>Cart</p> <i className="fa-solid fa-xmark" onClick={onHideCart}></i>
        </div>
        <div className={classes["empty-cart-container"]}>
          <img src={emptyCartIcon} alt="Empty" />
          <h2>Your Cart is Empty</h2>
          <p>I think blue button below is very important.</p>
          <p>Begin ordering your products.</p>
          <button onClick={onHideCart}>Begin Ordering</button>
        </div>
      </Fragment>
    );
  }

  if (completedOrder) {
    cartContent = (
      <Fragment>
        <div className={classes["cart-header"]}>
          <p>Cart</p> <i className="fa-solid fa-xmark" onClick={onHideCart}></i>
        </div>
        <div className={classes["order-done"]}>
          <div className={classes["order-done-container"]}>
            <img src={image} alt="orderSuccessImage" />
            <h2>The order has been accepted.</h2>
            <p>Your shoes are ready for shipment. Wait for the parcel.</p>
            <div className={classes["btns-section"]}>
              <button onClick={hideCartHandler}>
                <Link to={`/store/men`}>Continue Shopping</Link>
              </button>
              <button onClick={hideCartHandler}>
                <Link to="/">Home Page</Link>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return <Modal onHideCart={onHideCart}>{cartContent}</Modal>;
};

export default Cart;
