import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import MainNavigation from "./components/Header/MainNavigation";
import TopBar from "./components/UI/TopBar";

import Home from "./pages/Home";
import Store from "./pages/Store";
import { loadingActions } from "./store/loading-slice";
import { cartActions } from "./store/cart-slice";
import Footer from "./components/UI/Footer";

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
    <>
      <TopBar />
      <MainNavigation onShowCartHandler={showCartHandler} />
      <main className={pathname === "/" ? "landing-page" : ""}>
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
