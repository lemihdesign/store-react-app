import { useParams, useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductsItem from "../components/Products/ProductsItem";

const DUMMY_DATA = [
  {
    title: "Nike Air Force 1 Pixel",
    price: "$110",
    source: "woman-shoes",
  },
  {
    title: "Nike Free Metcon 4",
    price: "$120",
    source: "men-shoes",
  },
  {
    title: "Nike Air Max 90 LTR SE",
    price: "$110",
    source: "kids-shoes",
  },
];

const Store = (props) => {
  const params = useParams();
  const productsType = params.type;

  const { productsList } = props;

  const products = productsList.map((product) => (
    <ProductsItem
      title={product.title}
      price={product.price}
      source={product.source}
      img={product.img}
    />
  ));

  const filteredProducts = products.filter((product) =>
    console.log(product.source)
  );

  let storeHeader;
  if (productsType === "men") storeHeader = <p>Men's Trainers & Shoes</p>;
  if (productsType === "woman") storeHeader = <p>Woman's Trainers & Shoes</p>;
  if (productsType === "kids") storeHeader = <p>Kids's Trainers & Shoes</p>;

  return (
    <Layout>
      {storeHeader}
      <div>{products}</div>
    </Layout>
  );
};

export default Store;
