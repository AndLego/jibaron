import React from "react";
import { CartContainer } from "./CartContainer/CartContainer";
import { Fruits } from "./Fruits/Fruits";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { useStateValue } from "../../context/StateProvider";

const MainContainer = () => {
  /* Using the useStateValue hook to get the state and dispatch from the context. */
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <>
      <Home />
      <Fruits foodItems={foodItems} />
      <Menu />
    </>
  );
};

export { MainContainer };
