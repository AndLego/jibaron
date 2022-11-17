import React from "react";
import { Fruits } from "./Fruits/Fruits";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";

const MainContainer = () => {
  return (
    <>
      <Home />
      <Fruits />
      <Menu />
    </>
  );
};

export { MainContainer };
