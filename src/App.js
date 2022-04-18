import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/Header/MainNavigation";
import TopBar from "./components/UI/TopBar";

import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "nike-products.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    fetch("https://nike-products.p.rapidapi.com/shoes", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <TopBar />
      <MainNavigation />
      <main className={pathname === "/" ? "landing-page" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store/:type"
            element={<Store productsList={products} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
