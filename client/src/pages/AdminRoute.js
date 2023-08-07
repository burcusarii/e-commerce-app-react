import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function AdminRoute() {
  const { user } = useAuth();
  return user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute;
