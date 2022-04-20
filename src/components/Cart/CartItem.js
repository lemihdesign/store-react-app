import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, brand, name, price, image } = props;
  return (
    <li key={id} className={classes["cart-item"]}>
      <div className={classes["product-image"]}>
        <img src={image} alt="ProductImage" />
      </div>
      <div className={classes["product-details"]}>
        <p className={classes.brand}>{brand}</p>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
      <div className={classes["product-count-input"]}></div>
    </li>
  );
};

export default CartItem;
