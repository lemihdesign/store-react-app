import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    { id: "0", brand: "Nike", name: "Air Max", price: 250 },
  ].map((item) => (
    <li>
      {item.brand} - {item.name}
    </li>
  ));
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes["total-amount"]}>
        <span>Total Amount</span>
        <span>30.00</span>
      </div>
      <div className={classes.action}>
        <button onClick={props.onHideCart}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
