import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
const PrivateRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  if (loading) {
    return <HashLoader color="#36d7b7" cssOverride={override} />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
