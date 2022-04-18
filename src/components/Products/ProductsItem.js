const ProductsItem = (props) => {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <p>Price: {props.price}</p>
      <p>Source: {props.source}</p>
      <img src={props.img} alt="Obraaz" />
    </div>
  );
};

export default ProductsItem;
