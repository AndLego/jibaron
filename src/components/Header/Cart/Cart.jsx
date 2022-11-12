import React from "react";

const Cart = ({ styles, MdShoppingBasket }) => {
  return (
    <div className={styles.Cart}>
      <MdShoppingBasket />
      <div>
        <p>2</p>
      </div>
    </div>
  );
};

export { Cart };
