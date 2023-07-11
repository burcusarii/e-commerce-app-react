import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to={"/"}>E-Commerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to={"/signin"}>
          <Button colorScheme="blue">Login</Button>
        </Link>
        <Link to={"/signup"}>
          <Button colorScheme="blue">Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
