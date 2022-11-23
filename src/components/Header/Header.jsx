import React from "react";
import styles from "./Header.module.css";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase.config.js";

import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { Nav } from "./Nav/Nav";
import { useWidth } from "../../hooks/useWidth";
import { Cart } from "./Cart/Cart";
import { CartContainer } from "../MainContainer/CartContainer/CartContainer";

const Header = () => {
  const [isMenu, setIsMenu] = React.useState(false);

  /* A custom hook that I created to check the width of the screen. */
  const width = useWidth();
  const size = width.width < 820;

  /* This is the code that is used to login with google. */
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //Context variables
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <nav className={styles.Nav}>
      {size && (
        <Cart
          styles={styles}
          MdShoppingBasket={MdShoppingBasket}
          showCart={showCart}
          cartItems={cartItems}
        />
      )}

      <Link to={"/"}>
        <img src="https://i.postimg.cc/yx8Qrhg4/Jibaro.png" alt="logo" />
      </Link>

      {/* shopping cart */}
      <div className={styles.Nav_right}>
        {!size && (
          <>
            <Nav size={size} setIsMenu={setIsMenu} />
            <Cart
              styles={styles}
              MdShoppingBasket={MdShoppingBasket}
              showCart={showCart}
              cartItems={cartItems}
            />
          </>
        )}

        {/* avatar and Nav */}
        <div className={styles.Avatar}>
          {/* whiletap adds a small animation on click */}
          <motion.img
            onClick={login}
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : "https://i.postimg.cc/y6JFDpNh/avatar.png"}
            alt="avatar"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              {user && user.email === "galeon.gb@gmail.com" && (
                <Link to={"/createItem"}>
                  <p onClick={() => setIsMenu(false)}>
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              {size && <Nav size={size} setIsMenu={setIsMenu} />}
              <p onClick={logout} className={size ? styles.out : undefined}>
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
      {cartShow && (
        <CartContainer
          cartItems={cartItems}
          user={user}
          dispatch={dispatch}
        />
      )}
    </nav>
  );
};

export { Header };
