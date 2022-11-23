import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { actionType } from "../../../../context/reducer";
import { useCartHandle } from "../../../../hooks/useCartHandle";

const Item = ({ item, styles, indexValue }) => {
  const { qty, updateQty } = useCartHandle(item, indexValue);

  return (
    <div className={styles.Item}>
      <img src={item?.imageURL} alt={item?.title} />
      {/* name section */}
      <div className={styles.name}>
        <p>{item?.title}</p>
        <p>$ {item?.price * item?.qty}</p>
      </div>
      {/* button section */}
      <div className={styles.buttons}>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus />
        </motion.div>
        <p>{item?.qty}</p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus />
        </motion.div>
      </div>
    </div>
  );
};

export { Item };
