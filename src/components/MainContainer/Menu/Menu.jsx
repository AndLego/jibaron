import React from "react";
import styles from "./Menu.module.css";

import { MdFastfood } from "react-icons/md";
import { categories } from "../../../utils/data";
import { motion } from "framer-motion";
import { RowContainer } from "../../RowContainer/RowContainer";
import { useStateValue } from "../../../context/StateProvider";

const Menu = () => {
  const [filter, setFilter] = React.useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();

  React.useEffect(() => {}, [filter]);

  return (
    <section className={styles.Menu} id="Menu">
      <div className={styles.Title}>
        <p>Our Menu</p>
      </div>

      <div className={styles.Options}>
        {categories?.map((item) => (
          <motion.div
            whileTap={{ scale: 0.75 }}
            key={item.id}
            className={`${
              filter === item.urlParamName ? styles.Card_active : ""
            } ${styles.Card}`}
            onClick={() => setFilter(item.urlParamName)}
          >
            <div>
              <MdFastfood />
            </div>
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>

      <div>
        <RowContainer
          flag={false}
          data={foodItems?.filter((n) => n.category === filter)}
        />
      </div>
    </section>
  );
};

export { Menu };
