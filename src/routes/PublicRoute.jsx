import React from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  if(isAuthenticated) {
    toast("You are already logged in", {
      icon: "ℹ️",
    });
    return <Navigate to="/" replace />;
  }

  return children
};

export default PublicRoute;