import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, requiresAuth }) => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  if (requiresAuth && !authUser) {
    return <Navigate to="/login" />;
  }
  if (!requiresAuth && authUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
