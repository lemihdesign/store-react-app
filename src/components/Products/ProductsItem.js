import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./ProductsItem.module.css";

const ProductsItem = (props) => {
  const { brand, name, color, imgSmall, silhouette, price, id } = props;
  // const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    const item = {
      id,
      brand,
      name,
      color,
      price,
      imgSmall,
    };
    dispatch(cartActions.addItem(item));
    dispatch(cartActions.increaseTotalAmount(price));
  };
  return (
    <div className={classes["product-box"]}>
      <img src={imgSmall} alt="Shoe" />
      <p className={classes["product-brand"]}>{brand}</p>
      <p className={classes["product-name"]}>{name}</p>
      <p className={classes["product-color"]}>Colors: {color}</p>
      <p className={classes["product-silhouette"]}>Silhouette: {silhouette}</p>
      <div className={classes["product-controls"]}>
        <p className={classes["product-price"]}>${price}</p>
        <button
          onClick={addItemToCartHandler}
          className={classes["add-to-cart-btn"]}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
