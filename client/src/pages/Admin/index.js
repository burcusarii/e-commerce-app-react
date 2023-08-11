import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./styles.css";
import { Box } from "@chakra-ui/react";
function Admin() {
  return (
    <div>
      <nav>
        <Box bg="blue.300" p="3">
          <ul className="admin-menu">
            <li>
              <Link to={"/admin"}>Home</Link>
            </li>
            <li>
              <Link to={"/admin/orders"}>Orders</Link>
            </li>
            <li>
              <Link to={"/admin/products"}>Products</Link>
            </li>
          </ul>
        </Box>
      </nav>

      <Outlet />
    </div>
  );
}

export default Admin;
