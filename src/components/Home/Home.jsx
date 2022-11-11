import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      ❤️
      <div className={styles.content}>
        {/* {products.map((item) => (
          <Product product={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
};

export { Home };
