import React from "react";

const Cart = ({ styles, MdShoppingBasket, showCart }) => {
  return (
    <div className={styles.Cart} onClick={showCart}>
      <MdShoppingBasket />
      <div>
        <p>2</p>
      </div>
    </div>
  );
};

export { Cart };
