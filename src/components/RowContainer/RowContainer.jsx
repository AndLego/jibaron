import React from "react";
import styles from "./RowContainer.module.css";
import { motion } from "framer-motion";
import { MdAttachMoney, MdShoppingBasket } from "react-icons/md";

const RowContainer = React.forwardRef(({ flag, data }, ref) => {
  return (
    <section
      ref={ref}
      className={`${styles.row} ${flag ? styles.overflow : styles.hide}`}
    >
      {data?.map((item) => (
        <div key={item?.id} className={styles.card}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={item?.imageURL}
            alt={item?.title}
          />

          <div>
            <motion.div whileTap={{ scale: 0.75 }} className={styles.cart}>
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
      ))}
    </section>
  );
});
export { RowContainer };
