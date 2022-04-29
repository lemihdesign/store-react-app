import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Brands from "../components/UI/Brands";
import Cart from "../components/Cart/Cart";
import NewCollection from "../components/UI/NewCollection";
import { Fragment } from "react";

const MainPage = (props) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <Fragment>
      <Header />
      {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      <NewCollection />
      <Layout>
        <Brands />
      </Layout>
    </Fragment>
  );
};

export default MainPage;
