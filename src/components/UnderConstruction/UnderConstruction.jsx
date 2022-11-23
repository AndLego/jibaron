import React from "react";
import construction from "../../assets/images/construction.svg";
import styles from "./Under.module.css";

const UnderConstruction = () => {
  return (
    <section className={styles.Build}>
      <h1>Under Construction</h1>
      <img src={construction} alt="we are building" />
      <p>Making lots of improvements</p>
    </section>
  );
};

export { UnderConstruction };
