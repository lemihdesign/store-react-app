import classes from "./ProductsHeader.module.css";

const ProductsHeader = (props) => {
  return (
    <div className={classes["products-header"]}>
      {props.storeHeader}
      <div className={classes["results-section"]}>
        {props.storeHeader}
        <p className={classes["number-of-results"]}>
          - {props.numberOfResults} results
        </p>
      </div>
    </div>
  );
};

export default ProductsHeader;
