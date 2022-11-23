import React from "react";
import styles from "./RowContainer.module.css";
import NotFound from "../../assets/images/NotFound.svg";
import { RowItem } from "./RowItem/RowItem";

const RowContainer = React.forwardRef(({ flag, data }, ref) => {
  const [currentItem, setCurrentItem] = React.useState();

  return (
    <section
      ref={ref}
      className={`${styles.row} ${flag ? styles.overflow : styles.hide}`}
    >
      {data && data.length > 0 ? (
        data.map((item, i) => <RowItem key={i} item={item} styles={styles} />)
      ) : (
        <div className={styles.NotAvailable}>
          <img src={NotFound} alt="not found" />
          <p>Items not available</p>
        </div>
      )}
    </section>
  );
});
export { RowContainer };
