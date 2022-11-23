import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = ({ size, setIsMenu }) => {
  const desktop = (
    <motion.ul
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <Link to="/">
        <li onClick={() => setIsMenu(false)}>Home</li>
      </Link>
      <Link to="/Menu">
        <li onClick={() => setIsMenu(false)}>Menu</li>
      </Link>
      <Link to="/Building">
        <li onClick={() => setIsMenu(false)}>About Us</li>
      </Link>
      <Link to="/Building">
        <li onClick={() => setIsMenu(false)}>Service</li>
      </Link>
    </motion.ul>
  );

  const mobile = (
    <>
      <Link to="/">
        <p onClick={() => setIsMenu(false)}>Home</p>
      </Link>
      <Link to="/Menu">
        <p onClick={() => setIsMenu(false)}>Menu</p>
      </Link>
      <Link to="/Building">
        <p onClick={() => setIsMenu(false)}>About Us</p>
      </Link>
      <Link to="/Building">
        <p onClick={() => setIsMenu(false)}>Service</p>
      </Link>
    </>
  );

  return <>{!size ? desktop : mobile}</>;
};

export { Nav };
