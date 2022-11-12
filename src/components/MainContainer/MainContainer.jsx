import React from "react";
import styles from "./MainContainer.module.css";

import { Home } from "../Home/Home";

const MainContainer = () => {
  return (
    <div className={styles.Main}>
      <Home />
    </div>
  );
};

export { MainContainer };
