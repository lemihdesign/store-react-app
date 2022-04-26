import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import classes from "./Product.module.css";
const Product = (props) => {
  const { productsList } = props;
  const params = useParams();
  const productId = params.id;

  const product = productsList.filter((product) => product.id === productId);
  const productSummary = product.map((product) => (
    <Layout>
      <div className={classes["product-container"]}>
        <aside className={classes["left"]}>
          <img src={product.media.imageUrl} alt="shoe" />
        </aside>
        <aside className={classes["right"]}>
          <h1>{product.brand}</h1>
          <p className={classes.title}>{product.title}</p>
          <p className={classes.colorway}>
            Available colors: {product.colorway}
          </p>
          <p className={classes.title}>Release Date: {product.releaseDate}</p>
          <p className={classes.title}>Price: ${product.retailPrice}</p>
          <p className={classes.title}>Year: {product.year}</p>
          <button>Add To Cart</button>
        </aside>
      </div>
    </Layout>
  ));

  return <div className={classes["product-container"]}>{productSummary}</div>;
};

export default Product;
