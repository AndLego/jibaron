import React from "react";
import { CartContainer } from "./CartContainer/CartContainer";
import { Fruits } from "./Fruits/Fruits";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

const MainContainer = () => {
/* Using the useStateValue hook to get the state and dispatch from the context. */
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

 /**
  * When the user clicks on the cart icon, the cart will show or hide depending on the current state of
  * the cart.
  */
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <>
      <Home />
      <Fruits foodItems={foodItems} />
      <Menu />
      {cartShow && <CartContainer showCart={showCart} />}
    </>
  );
};

export { MainContainer };
