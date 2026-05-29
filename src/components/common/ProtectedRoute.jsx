import {
    useContext,
  } from "react";
  
  import {
    Navigate,
  } from "react-router-dom";
  
  import {
    AuthContext,
  } from "../../context/AuthContext";
  
  import Loader from "./Loader";
  
  const ProtectedRoute = ({
    children,
    role,
  }) => {
    const {
      user,
      loading,
    } = useContext(AuthContext);
  
    if (loading) {
      return <Loader />;
    }
  
    if (!user) {
      return (
        <Navigate to="/login" />
      );
    }
  
    if (
      role &&
      user.role !== role
    ) {
      return (
        <Navigate
          to="/unauthorized"
        />
      );
    }
  
    return children;
  };
  
  export default ProtectedRoute;