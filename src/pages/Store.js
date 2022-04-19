import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterBar from "../components/Layout/FilterBar";
import Layout from "../components/Layout/Layout";
import ProductsHeader from "../components/Layout/ProductsHeader";
import ProductsItem from "../components/Products/ProductsItem";

import classes from "./Store.module.css";

const Store = (props) => {
  const params = useParams();
  const productsType = params.type;
  const priceValue = useSelector((state) => state.price.priceValue);
  const brandValue = useSelector((state) => state.brand.brand);

  const { productsList } = props;

  const products = productsList.filter(
    (product) =>
      product.gender === `${productsType}` &&
      product.image.small !== "" &&
      product.estimatedMarketValue <= priceValue &&
      product.estimatedMarketValue !== 0 &&
      product.brand === brandValue
  );

  const filteredProducts = products.map((product) => (
    <ProductsItem
      key={product.id}
      brand={product.brand}
      name={product.name}
      gender={product.gender}
      img={product.image.thumbnail}
      imgSmall={product.image.small}
      price={product.estimatedMarketValue}
      retailPrice={product.retailPrice}
      color={product.colorway}
      realeaseDate={product.releaseDate}
      silhouette={product.silhouette}
      story={product.story}
    />
  ));

  const prices = products.map((product) => product.estimatedMarketValue);

  const brands = productsList.map((product) => product.brand);

  const numberOfResults = filteredProducts.length;

  let storeHeader;
  if (productsType === "men")
    storeHeader = <p className={classes.storeHeader}>Men's Trainers & Shoes</p>;
  if (productsType === "women")
    storeHeader = (
      <p className={classes.storeHeader}>Women's Trainers & Shoes</p>
    );
  if (productsType === "infant")
    storeHeader = (
      <p className={classes.storeHeader}>Kids's Trainers & Shoes</p>
    );

  return (
    <Fragment>
      <Layout>
        <ProductsHeader
          storeHeader={storeHeader}
          numberOfResults={numberOfResults}
        />
      </Layout>
      <FilterBar prices={prices} brands={brands} />
      <Layout>
        <div className={classes.productsContainer}>{filteredProducts}</div>
      </Layout>
    </Fragment>
  );
};

export default Store;
