import classes from "./Store.module.css";

import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import FilterBar from "../components/Layout/FilterBar";
import Layout from "../components/Layout/Layout";
import ProductsHeader from "../components/Layout/ProductsHeader";
import ProductsItem from "../components/Products/ProductsItem";

import Cart from "../components/Cart/Cart";
import LoadingModal from "../components/UI/LoadingModal";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Store = (props) => {
  const params = useParams();
  const productsType = params.type;
  const priceValue = useSelector((state) => state.price.priceValue);
  const brandValue = useSelector((state) => state.filter.brand);
  const genderValue = useSelector((state) => state.filter.gender);
  const loadingStatus = useSelector((state) => state.loading.isLoading);
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  const colorValue = useSelector((state) => state.filter.color);

  const { productsList } = props;

  const products = productsList.filter(
    (product) =>
      product.gender === `${productsType}` &&
      product.media.smallImageUrl !== "" &&
      product.retailPrice <= priceValue &&
      product.retailPrice !== 0 &&
      product.brand === brandValue &&
      product.gender.includes(genderValue) &&
      product.colorway.includes(colorValue)
  );

  const filteredProducts = products.map((product) => (
    <ProductsItem
      key={product.id}
      id={product.id}
      brand={product.brand}
      name={product.name}
      gender={product.gender}
      img={product.media.thumbUrl}
      imgSmall={product.media.smallImageUrl}
      price={product.retailPrice}
      color={product.colorway}
      realeaseDate={product.releaseDate}
      silhouette={product.silhouette}
      title={product.title}
    />
  ));

  const prices = products.map((product) => product.retailPrice);

  const filteredBrands = productsList.filter(
    (brand) => brand.gender === `${productsType}`
  );

  const brands = filteredBrands.map((product) => product.brand);
  const genders = productsList.map((product) => product.gender);

  const fiteredColors = productsList.filter(
    (product) => product.gender === `${productsType}`
  );

  const colors = fiteredColors.map((product) => product.colorway);

  const numberOfResults = filteredProducts.length;

  let storeHeader;
  if (productsType === "men")
    storeHeader = <p className={classes.storeHeader}>FOR MEN</p>;
  if (productsType === "women")
    storeHeader = <p className={classes.storeHeader}>FOR WOMEN</p>;
  if (productsType === "child")
    storeHeader = <p className={classes.storeHeader}>FOR KID</p>;

  console.log(colorValue);

  return (
    <Fragment>
      <ProductsHeader storeHeader={storeHeader} />
      <Layout>
        {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      </Layout>
      <FilterBar
        numberOfResults={numberOfResults}
        prices={prices}
        brands={brands}
        genders={genders}
        colors={colors}
      />
      <Layout>
        {loadingStatus && (
          <LoadingModal>
            <LoadingSpinner />
          </LoadingModal>
        )}
        {!loadingStatus && (
          <div className={classes.productsContainer}>{filteredProducts}</div>
        )}
      </Layout>
    </Fragment>
  );
};

export default Store;
