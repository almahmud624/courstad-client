import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useSelector } from "react-redux";
import { RoleAlertModal } from "../components/Modal/RoleAlertModal";
import { Loader } from "../components/Loader/Loader";

const PublicRoute = ({ children }) => {
  const { loading, isLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  if (loading || isLoading) {
    return <Loader />;
  }
  if (user?.role !== "admin") {
    return children;
  }
  return <RoleAlertModal showModal={true} />;
};

export default PublicRoute;
