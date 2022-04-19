import classes from "./ProductsItem.module.css";
const ProductsItem = (props) => {
  return (
    <div className={classes["product-box"]}>
      <img src={props.imgSmall} alt="Shoe" />
      <p className={classes["product-brand"]}>{props.brand}</p>
      <p className={classes["product-name"]}>{props.name}</p>
      <p className={classes["product-color"]}>Colors: {props.color}</p>
      <p className={classes["product-silhouette"]}>
        Silhouette: {props.silhouette}
      </p>
      <div className={classes["product-controls"]}>
        <p className={classes["product-price"]}>${props.price}</p>
        <button className={classes["add-to-cart-btn"]}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsItem;
