import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Brands from "../components/UI/Brands";
import Cart from "../components/Cart/Cart";

const MainPage = (props) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <Layout>
      {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      <Header />
      <Brands />
    </Layout>
  );
};

export default MainPage;
