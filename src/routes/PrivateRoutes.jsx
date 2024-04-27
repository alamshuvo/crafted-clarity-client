import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if (loading) {
        return     <div className="w-16 mx-auto text-red flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    }
    if (user) {
    
        return children; 
       
      
    }
     
return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;