import classes from "./ProductsItem.module.css";
const ProductsItem = (props) => {
  return (
    <div className={classes["product-box"]}>
      <img src={props.img} alt="Obraaz" />
      <p className={classes["product-name"]}>{props.title}</p>
      <div className={classes["product-controls"]}>
        <p className={classes["product-price"]}>USD {props.price}</p>
        <button className={classes["add-to-cart-btn"]}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsItem;
