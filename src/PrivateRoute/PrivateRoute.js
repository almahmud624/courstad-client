import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { loading, isLoading, authUser } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  if (isLoading || loading) {
    return <Loader />;
  }
  if ((user && user?.email) || authUser?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
