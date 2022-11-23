import React from "react";

const Cart = ({ styles, MdShoppingBasket, showCart, cartItems }) => {
  const numberOfItems = () => {
    const sum = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty;
    }, 0);
    return sum;
  };

  return (
    <>
      <div className={styles.Cart} onClick={showCart}>
        <MdShoppingBasket />
        {cartItems && cartItems.length > 0 && (
          <div>
            <p>{numberOfItems()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export { Cart };
