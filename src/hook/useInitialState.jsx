import React from "react";

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [basket, setBasket] = React.useState(initialState);

  //product or also known as payload
  const addToCart = (product) => {
    setBasket({
      ...basket,
      cart: [...basket.cart, product],
    });
  };
  return {
    basket,
    addToCart,
  };
};
