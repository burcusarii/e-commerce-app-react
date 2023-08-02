import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
function Navbar() {
  const { isLoggedIn } = useAuth();
  const { items } = useBasket();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to={"/"}>E-Commerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!isLoggedIn && (
          <>
            <Link to={"/signin"}>
              <Button colorScheme="blue">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button colorScheme="blue">Register</Button>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            {items.length > 0 && (
              <Link to="/basket">
                <Button colorScheme="blue">Basket ({items.length})</Button>
              </Link>
            )}
            <Link to={"/profile"}>
              <Button colorScheme="pink">Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
