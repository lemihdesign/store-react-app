import classes from "./ProductsItem.module.css";
import "aos/dist/aos.css";

import Aos from "aos";

import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { cartActions } from "../../store/cart-slice";

const ProductsItem = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { brand, name, color, imgSmall, price, id } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  const onMouseOverHandler = () => {
    setIsMouseOver(!isMouseOver);

    Aos.init({ disable: true });
  };

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
    <div
      data-aos="fade-up"
      className={
        isMouseOver ? classes["product-box-active"] : classes["product-box"]
      }
      onClick={onMouseOverHandler}
    >
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
        <p className={classes["product-price"]}>${price}</p>
      </div>
      <div className={classes["product-controls"]}>
        {isMouseOver && (
          <Fragment>
            <button onClick={addItemToCartHandler}>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
            <Link to={`${id}`}>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductsItem;
