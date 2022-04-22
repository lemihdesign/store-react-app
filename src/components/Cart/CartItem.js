import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, brand, name, price, image, quantity } = props;
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const filteredItems = items.filter((item) => item.id === id);
  const itemsQuantity = filteredItems.map(
    (itemQuantity) => itemQuantity.quantity
  );

  const decreaseNumberOfItemsHandler = () => {
    const item = {
      id,
      price,
      quantity,
    };

    dispatch(cartActions.decreaseNumberOfItems(item));
  };

  const removeItemFromCartHandler = () => {
    const item = {
      id,
      price,
      quantity,
    };
    dispatch(cartActions.removeItem(item));
  };

  const increaseNumberOfItemsHandler = () => {
    const item = {
      id,
      price,
      quantity,
    };
    dispatch(cartActions.increaseNumberOfItems(item));
  };

  return (
    <li key={id} className={classes["cart-item"]}>
      <div className={classes["product-info"]}>
        <div className={classes["product-image"]}>
          <img src={image} alt="ProductImage" />
        </div>
        <div className={classes["product-details"]}>
          <p className={classes.brand}>{brand}</p>
          <p className={classes.name}>{name}</p>
          <p className={classes.price}>${price.toFixed(2)}</p>
          <button onClick={removeItemFromCartHandler}>Remove</button>
        </div>
      </div>
      <div className={classes["product-count-input"]}>
        <button onClick={decreaseNumberOfItemsHandler}>-</button>
        <input type="text" value={itemsQuantity} />
        <button onClick={increaseNumberOfItemsHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
