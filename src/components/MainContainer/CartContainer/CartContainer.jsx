import React from "react";
import styles from "./CartContainer.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import EmptyCart from "../../../assets/images/emptyCart.svg";
import { Item } from "./Item/Item";
import { actionType } from "../../../context/reducer";
import { useStateValue } from "../../../context/StateProvider";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

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

  const sumTotal = () => {
    const sum = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    return sum;
  };

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={styles.CartContainer}
    >
      <div className={styles.Top}>
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace />
        </motion.div>
        <p>Cart</p>
        <motion.p whileTap={{ scale: 0.75 }} onClick={clearCart}>
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className={styles.Bottom}>
          {/* cart container */}
          <div>
            {/* cart Item */}
            {cartItems &&
              cartItems.map((item, index) => (
                <Item
                  indexValue={index}
                  key={index}
                  item={item}
                  styles={styles}
                  cartItems={cartItems}
                  dispatch={dispatch}
                />
              ))}
          </div>
          {/* cart total */}
          <div className={styles.recipe}>
            <div className={styles.sub}>
              <p>Sub Total</p>
              <p>$ {sumTotal()}</p>
            </div>
            <div className={styles.sub}>
              <p>Delivery</p>
              <p>$ 2.5</p>
            </div>
            <div className={styles.division}></div>
            <div className={styles.total}>
              <p>Total</p>
              <p>$ {sumTotal() + 2.5}</p>
            </div>
            {user ? (
              <motion.button whileTap={{ scale: 0.8 }} type="button">
                Check Out
              </motion.button>
            ) : (
              <motion.button whileTap={{ scale: 0.8 }} type="button">
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={EmptyCart} alt="" />
          <p>Add some items to your cart</p>
        </div>
      )}
    </motion.section>
  );
};

export { CartContainer };
