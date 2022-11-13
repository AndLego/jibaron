import React from "react";
import { motion } from "framer-motion";

const Menu = ({ size, setIsMenu }) => {
  const desktop = (
    <motion.ul
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <li onClick={() => setIsMenu(false)}>Home</li>
      <li onClick={() => setIsMenu(false)}>Menu</li>
      <li onClick={() => setIsMenu(false)}>About Us</li>
      <li onClick={() => setIsMenu(false)}>Service</li>
    </motion.ul>
  );

  const mobile = (
    <>
      <p onClick={() => setIsMenu(false)}>Home</p>
      <p onClick={() => setIsMenu(false)}>Menu</p>
      <p onClick={() => setIsMenu(false)}>About Us</p>
      <p onClick={() => setIsMenu(false)}>Service</p>
    </>
  );

  return <>{!size ? desktop : mobile}</>;
};

export { Menu };
