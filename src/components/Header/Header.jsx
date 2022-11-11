import React from "react";
import styles from "./Header.module.css";
import { MdShoppingBasket } from "react-icons/md";

import Avatar from "../../assets/images/avatar.png";

const Header = () => {
  return (
    <nav className={styles.Nav}>
      <img src="https://i.postimg.cc/yx8Qrhg4/Jibaro.png" alt="logo" />

      <div className={styles.Nav_right}>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Service</li>
        </ul>

        <div className={styles.Cart}>
          <MdShoppingBasket />
          <div>
            <p>2</p>
          </div>
        </div>

        <img src={Avatar} alt="" />
      </div>

      {/* <div className={styles.misc}>
        <p>Sign In</p>

        <span>
          <RiShoppingCartLine />
        </span>
      </div> */}
    </nav>
  );
};

export { Header };
