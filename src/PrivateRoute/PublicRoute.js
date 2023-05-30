import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux";
import { RoleAlertModal } from "../components/Modal/RoleAlertModal";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
const PublicRoute = ({ children }) => {
  const { loading, isLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  if (loading || isLoading) {
    return <HashLoader color="#36d7b7" cssOverride={override} />;
  }
  if (user?.role !== "admin") {
    return children;
  }
  return <RoleAlertModal showModal={true} />;
};

export default PublicRoute;
