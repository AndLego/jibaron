import React from "react";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
let items = [];

export const useCartHandle = (item, indexValue) => {
  const [cartUpdater, setCartUpdater] = React.useState(false);

  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
      });
      cartDispatch();
    } else {
      // initial state value es one so you need to check if 1 then remove it
      if (item.qty == 1) {
        items = cartItems.filter((item, index) => index !== indexValue);
        cartDispatch();
      } else {
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
          }
        });
        cartDispatch();
      }
    }
  };

  React.useEffect(() => {
    items = cartItems;
  }, [items]);

  return { updateQty, cartUpdater, setCartUpdater };
};
