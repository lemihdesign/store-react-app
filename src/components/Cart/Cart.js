import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { onHideCart } = props;
  const items = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingCost);

  console.log(items);
  const cartItems = items.map((item) => (
    <CartItem
      id={item.id}
      brand={item.brand}
      name={item.name}
      price={item.price}
      color={item.color}
      image={item.imgSmall}
    />
  ));
  return (
    <Modal onHideCart={onHideCart}>
      <h2 className={classes["cart-header"]}>Koszyk</h2>
      <ul className={classes.cartList}>{cartItems}</ul>
      <div className={classes["prices-details"]}>
        <span>
          Subtotal:{" "}
          <span className={classes.pricesSpan}>
            ${cartTotalAmount.toFixed(2)}
          </span>
        </span>
        {items.length > 0 && (
          <span>
            Shipping:{" "}
            <span className={classes.pricesSpan}>
              ${shippingCost.toFixed(2)}
            </span>
          </span>
        )}
      </div>
      <div className={classes["total-amount"]}>
        <span>Total </span>
        {items.length > 0 && (
          <span className={classes.pricesSpan}>
            ${(shippingCost + cartTotalAmount).toFixed(2)}
          </span>
        )}
        {items.length === 0 && (
          <span className={classes.pricesSpan}>
            ${cartTotalAmount.toFixed(2)}
          </span>
        )}
      </div>
      <div className={classes.action}>
        {/* <button onClick={onHideCart}>Close</button> */}
        <button>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
