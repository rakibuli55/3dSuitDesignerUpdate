import { AuthContext } from "../context/index";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {token} = useContext(AuthContext)

  if (!token) {
    toast("Please login first.", {
      icon: "ℹ️",
    });
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
