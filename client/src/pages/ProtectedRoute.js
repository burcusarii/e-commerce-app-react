import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
