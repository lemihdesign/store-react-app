import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { onHideCart } = props;
  let items = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
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
        {hasItems && (
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
        {hasItems && (
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
        {hasItems && <button>Place Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
