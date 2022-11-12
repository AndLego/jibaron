import React from "react";
import { motion } from "framer-motion";

const Menu = ({ size }) => {
  const desktop = (
    <motion.ul
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <li>Home</li>
      <li>Menu</li>
      <li>About Us</li>
      <li>Service</li>
    </motion.ul>
  );

  const mobile = (
    <>
      <p>Home</p>
      <p>Menu</p>
      <p>About Us</p>
      <p>Service</p>
    </>
  );

  return <>{!size ? desktop : mobile}</>;
};

export { Menu };
