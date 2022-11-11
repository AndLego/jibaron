import axios from "axios";
import React from "react";

export const userGetProducts = (API) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(API);
        setProducts(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  return products;
};
