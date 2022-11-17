import React from "react";
import styles from "./Menu.module.css";

import { MdFastfood } from "react-icons/md";

const Menu = () => {
  return (
    <section className={styles.Menu}>
      <div className={styles.Title}>
        <p>Our Best Menu</p>
      </div>

      <div className={styles.Options}>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
        <div className={styles.Card}>
          <div>
            <MdFastfood />
          </div>
          <p>Curry</p>
        </div>
      </div>
    </section>
  );
};

export { Menu };
