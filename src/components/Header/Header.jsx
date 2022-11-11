import React from "react";
import styles from "./Header.module.css";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase.config.js";

import Avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const res = await signInWithPopup(firebaseAuth, provider);
    console.log(res);
  };

  return (
    <nav className={styles.Nav}>
      <Link to={"/"}>
        <img src="https://i.postimg.cc/yx8Qrhg4/Jibaro.png" alt="logo" />
      </Link>

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

        <div className={styles.Avatar}>
          {/* whiletap adds a small animation on click */}
          <motion.img
            onClick={login}
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            alt="avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export { Header };
