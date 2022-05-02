import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import NewCollection from "../components/UI/NewCollection";

const MainPage = (props) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <Fragment>
      <Header />
      {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      <NewCollection />
    </Fragment>
  );
};

export default MainPage;
