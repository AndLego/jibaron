import React from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  const { addToCart } = React.useContext(AppContext);

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <div id={product.id} className={styles.Product}>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>
      </div>
      <img src={product.images[0]} alt={product.title} />
      <button onClick={() => handleClick(product)}>Add to Basket</button>
    </div>
  );
};

export { Product };
