import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const currentUser = user || storedUser;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;