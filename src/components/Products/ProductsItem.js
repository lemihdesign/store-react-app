import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./ProductsItem.module.css";

const ProductsItem = (props) => {
  const { brand, name, color, imgSmall, price, id } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    <div data-aos="fade-up" className={classes["product-box"]}>
      <div className={classes["product-box-label"]}>
        <span className={classes.label}></span>
        <div className={classes.info}>
          <p className={classes["product-name"]}>{name}</p>
          <p className={classes["product-brand"]}>{brand}</p>
        </div>
      </div>
      <div className={classes["product-image"]}>
        <img src={imgSmall} alt="Shoe" />
      </div>
      <div className={classes["product-price-box"]}>
        <p>Price</p>
        <p className={classes["product-price"]}>$ {price}</p>
      </div>
      <div className={classes["product-controls"]}>
        <button
          onClick={addItemToCartHandler}
          className={classes["add-to-cart-btn"]}
        >
          <i class="fa-solid fa-cart-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
