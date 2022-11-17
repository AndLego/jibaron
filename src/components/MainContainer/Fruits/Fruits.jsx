import React from "react";
import styles from "./Fruits.module.css";
import { motion } from "framer-motion";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RowContainer } from "../../RowContainer/RowContainer";
import { useStateValue } from "../../../context/StateProvider";

const Fruits = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const rowContainer = React.useRef();

  const scroll = (scrollOffSet) => {
    rowContainer.current.scrollLeft += scrollOffSet;
  };

  return (
    <>
      <section className={styles.Fruits}>
        <div>
          <p>Our Fresh & Healthy Fruits</p>
        </div>

        <div className={styles.fruits_arrows}>
          <motion.div whileTap={{ scale: 0.75 }} onClick={() => scroll(-200)}>
            <MdChevronLeft />
          </motion.div>
          <motion.div whileTap={{ scale: 0.75 }} onClick={() => scroll(200)}>
            <MdChevronRight />
          </motion.div>
        </div>
      </section>
      <RowContainer
        ref={rowContainer}
        flag={true}
        data={foodItems?.filter((n) => n.category === "fruits")}
      />
    </>
  );
};

export { Fruits };
