import classes from "./Product.module.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../store/cart-slice";
import { Fragment } from "react";

import Layout from "../components/Layout/Layout";
import Cart from "../components/Cart/Cart";
import LoadingModal from "../components/UI/LoadingModal";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Product = (props) => {
  const { productsList } = props;
  const params = useParams();
  const productId = params.id;
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  const loadingStatus = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    const currentItem = productsList.filter(
      (product) => product.id === productId
    );

    const id = currentItem[0].id;
    const brand = currentItem[0].brand;
    const name = currentItem[0].name;
    const color = currentItem[0].colorway;
    const price = currentItem[0].retailPrice;
    const imgSmall = currentItem[0].media.smallImageUrl;

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

  const product = productsList.filter((product) => product.id === productId);
  const productSummary = product.map((product) => (
    <Layout>
      <div className={classes["product-container"]}>
        <aside className={classes["left"]}>
          <div className={classes["aside-container"]}>
            <p className={classes.title}>{product.title}</p>
          </div>
        </aside>
        <aside className={classes.center}>
          <img src={product.media.imageUrl} alt="shoe" />
        </aside>
        <aside className={classes["right"]}>
          <div className={classes["aside-container"]}>
            <p className={classes.colorway}>SHOWN: {product.colorway}</p>
            <p className={classes.styleId}>STYLE: {product.styleId}</p>
            <p className={classes.price}>${product.retailPrice}</p>
            <button onClick={addItemToCartHandler}>Add To Cart</button>
          </div>
        </aside>
      </div>
    </Layout>
  ));

  return (
    <Fragment>
      <Layout>
        {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      </Layout>
      {loadingStatus && (
        <LoadingModal>
          <LoadingSpinner />
        </LoadingModal>
      )}
      {!loadingStatus && (
        <div className={classes["product-container"]}>{productSummary}</div>
      )}
    </Fragment>
  );
};

export default Product;
