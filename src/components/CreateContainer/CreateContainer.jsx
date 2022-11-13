import React from "react";
import styles from "./CreateContainer.module.css";
import { motion } from "framer-motion";

import { MdFastfood } from "react-icons/md";
import { categories } from "../../utils/data";

const CreateContainer = () => {
  // const [title, setTitle] = React.useState("");
  const title = React.useRef("");
  // const [category, setCategory] = React.useState(null);
  const category = React.useRef(null);
  const [calories, setCalories] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [imageAsset, setImageAsset] = React.useState(null);

  const [fields, setFields] = React.useState(false);
  const [alertStatus, setAlertStatus] = React.useState("danger");
  const [msg, setMsg] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className={styles.Create}>
      <form>
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styles.status} ${
              alertStatus === "danger" ? styles.danger : styles.cool
            }`}
          >
            Something is Wrong
          </motion.p>
        )}

        <div className={styles.title}>
          <MdFastfood />
          <input
            type="text"
            required
            ref={title}
            placeholder="Give me a title..."
          />
        </div>

        <div className={styles.category}>
          <select ref={category} name="" id="">
            <option value="other">Select Category</option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.urlParamName}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export { CreateContainer };
