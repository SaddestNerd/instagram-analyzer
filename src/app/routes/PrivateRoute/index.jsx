import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "../../../shared";

const PrivateRoute = () => {
  const location = useLocation();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="account-creating-wrapper"><div className="create-acc-section"><Loader/></div></div>
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;