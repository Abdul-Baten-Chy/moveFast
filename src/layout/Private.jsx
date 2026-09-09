import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/auth/AuthContext";

function Private({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default Private;
