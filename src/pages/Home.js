import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Brands from "../components/UI/Brands";
import Cart from "../components/Cart/Cart";
import NewCollection from "../components/UI/NewCollection";

const MainPage = (props) => {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <Layout>
      {cartIsShown && <Cart onHideCart={props.onHideCartHandler} />}
      <Header />
      <NewCollection />
      <Brands />
    </Layout>
  );
};

export default MainPage;
