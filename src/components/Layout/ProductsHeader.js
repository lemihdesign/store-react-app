import classes from "./ProductsHeader.module.css";

const ProductsHeader = (props) => {
  return <div className={classes["products-header"]}>{props.storeHeader}</div>;
};

export default ProductsHeader;
