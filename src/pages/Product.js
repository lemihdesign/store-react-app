import { useParams } from "react-router-dom";
import classes from "./Product.module.css";
const Product = (props) => {
  const { productsList } = props;
  const params = useParams();
  const productId = params.id;

  const product = productsList.filter((product) => product.id === productId);
  const productSummary = product.map((product) => (
    <div>
      <h1>{product.brand}</h1>
      <p>{product.title}</p>
      <p>Color: {product.colorway}</p>
      <p>Release Date: {product.releaseDate}</p>
      <p>Price: ${product.retailPrice}</p>
      <p>Year: {product.year}</p>
      <img src={product.media.imageUrl} alt="shoe" />
    </div>
  ));

  return <div className={classes["product-container"]}>{productSummary}</div>;
};

export default Product;
