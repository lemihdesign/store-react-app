import classes from "./CartItem.module.css";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, brand, name, price, image, quantity } = props;
  const items = useSelector((state) => state.cart.items);
  const itemQuantity = useSelector((state) => state.cart.items.quantity);
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
        </div>
      </div>
      <div className={classes["product-count-input"]}>
        <div>
          <button
            className={classes["control-btns"]}
            onClick={decreaseNumberOfItemsHandler}
          >
            -
          </button>
          <input type="text" value={itemsQuantity} disabled />
          <button
            className={classes["control-btns"]}
            onClick={increaseNumberOfItemsHandler}
          >
            +
          </button>
        </div>
        <div>
          <button
            className={classes["remove-item-btn"]}
            onClick={removeItemFromCartHandler}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
