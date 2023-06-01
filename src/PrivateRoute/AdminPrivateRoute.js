import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader";

const AdminPrivateRoute = ({ children }) => {
  const { loading, isLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  if (loading || isLoading) {
    return <Loader />;
  }
  if (user?.role === "admin" && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminPrivateRoute;
