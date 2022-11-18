import React from "react";
import styles from "./CartContainer.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const CartContainer = ({ showCart }) => {
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
        <motion.p whileTap={{ scale: 0.75 }}>
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}

      <div className={styles.Bottom}>
        {/* cart container */}
        <div>
          {/* cart Item */}
          <div className={styles.Item}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668553893454-i6.png?alt=media&token=ed8ce880-de80-4fdb-a55d-c8652261e855"
              alt=""
            />
            {/* name section */}
            <div className={styles.name}>
              <p>Chocolate Vainilla</p>
              <p>$ 8.5</p>
            </div>
            {/* button section */}
            <div className={styles.buttons}>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus />
              </motion.div>
              <p>1</p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus />
              </motion.div>
            </div>
          </div>
        </div>
        {/* cart total */}
        <div className={styles.recipe}>
          <div className={styles.sub}>
            <p>Sub Total</p>
            <p>$ 8.5</p>
          </div>
          <div className={styles.sub}>
            <p>Delivery</p>
            <p>$ 2.5</p>
          </div>
          <div className={styles.division}></div>
          <div className={styles.total}>
            <p>Total</p>
            <p>$ 11</p>
          </div>
          <button>Check Out</button>
        </div>
      </div>
    </motion.section>
  );
};

export { CartContainer };
