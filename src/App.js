import "./App.css";

import React, { Suspense } from "react";
import { Fragment, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainNavigation from "./components/Header/MainNavigation";
import TopBar from "./components/UI/TopBar";
import Footer from "./components/UI/Footer";
import Product from "./pages/Product";

import { cartActions } from "./store/cart-slice";
import { loadingActions } from "./store/loading-slice";

import LoadingModal from "./components/UI/LoadingModal";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Store = React.lazy(() => import("./pages/Store"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    };

    dispatch(loadingActions.loading(true));
    //
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.results);
        dispatch(loadingActions.loading(false));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  const showCartHandler = () => {
    dispatch(cartActions.showCart(true));
  };

  const hideCartHandler = () => {
    dispatch(cartActions.showCart(false));
  };

  return (
    <Fragment>
      {<TopBar id={products.id} />}
      <MainNavigation onShowCartHandler={showCartHandler} />
      <main className={pathname === "/" ? "landing-page" : ""}>
        <Suspense
          fallback={
            <LoadingModal>
              <LoadingSpinner />
            </LoadingModal>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Home onHideCartHandler={hideCartHandler} />}
            />
            <Route
              path="/store/:type"
              element={
                <Store
                  productsList={products}
                  onHideCartHandler={hideCartHandler}
                />
              }
            />
            <Route
              path="/store/:type/:id"
              element={
                <Product
                  productsList={products}
                  onHideCartHandler={hideCartHandler}
                />
              }
            />
            <Route
              path="*"
              element={<NotFound onHideCartHandler={hideCartHandler} />}
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
