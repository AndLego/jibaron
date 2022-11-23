import React from "react";
import { MdAttachMoney, MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";
import { useCartHandle } from "../../../hooks/useCartHandle";

const RowItem = ({ item, styles }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const { updateQty } = useCartHandle(item);

  const addToCart = (product) => {
    const checker = cartItems?.find((obj) => obj.id === product.id);

    if (!checker) {
      dispatch({
        type: actionType.SET_CART_ITEMS,
        cartItems: [...cartItems, product],
      });

      if (localStorage.getItem("cartItems") === null) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...cartItems, product])
        );
      }
    } else {
      updateQty("add", product.id);
    }
  };

  return (
    <div key={item?.id} className={styles.card}>
      <motion.img
        whileHover={{ scale: 1.2 }}
        src={item?.imageURL}
        alt={item?.title}
      />

      <div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className={styles.cart}
          onClick={() => addToCart(item)}
        >
          <MdShoppingBasket />
        </motion.div>
        <div>
          <p>{item?.title}</p>
          <p>{item?.calories} calories</p>
          <p>
            <MdAttachMoney /> {item?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export { RowItem };
