import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductsItem from "../components/Products/ProductsItem";

import classes from "./Store.module.css";

const Store = (props) => {
  const params = useParams();
  const productsType = params.type;

  const { productsList } = props;

  const products = productsList.filter(
    (product) => product.source === `${productsType}-shoes`
  );

  const filteredProducts = products.map((product) => (
    <ProductsItem
      key={product.img}
      title={product.title}
      price={product.price}
      source={product.source}
      img={product.img}
    />
  ));

  const numberOfResults = filteredProducts.length;

  let storeHeader;
  if (productsType === "men")
    storeHeader = <p className={classes.storeHeader}>Men's Trainers & Shoes</p>;
  if (productsType === "women")
    storeHeader = (
      <p className={classes.storeHeader}>Women's Trainers & Shoes</p>
    );
  if (productsType === "kids")
    storeHeader = (
      <p className={classes.storeHeader}>Kids's Trainers & Shoes</p>
    );

  return (
    <Layout>
      <div className={classes.productsHeader}>
        {storeHeader}
        <div className={classes.resultSection}>
          {storeHeader}
          <p className={classes["number-of-results"]}>
            - {numberOfResults} results
          </p>
        </div>
      </div>
      <div className={classes.productsContainer}>{filteredProducts}</div>
    </Layout>
  );
};

export default Store;
