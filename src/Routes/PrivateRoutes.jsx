import { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../Context/AuthContext";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content">
        <FaSpinner className="animate-spin text-4xl text-[#F97316]" />
        
      </div>
    );
  }

  
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }
  else{
    return children;
  }

  
  
};

export default PrivateRoute;
