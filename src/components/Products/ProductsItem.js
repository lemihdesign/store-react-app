import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./ProductsItem.module.css";

const ProductsItem = (props) => {
  const { brand, name, color, imgSmall, price, id } = props;
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
      <div className={classes["product-image"]}>
        <img src={imgSmall} alt="Shoe" />
      </div>
      <div className={classes["product-info"]}>
        <p className={classes["product-brand"]}>{brand}</p>
        <p className={classes["product-name"]}>{name}</p>
        <p className={classes["product-color"]}>Colors: {color}</p>
      </div>
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
