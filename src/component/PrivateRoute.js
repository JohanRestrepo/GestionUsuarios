import { useContext } from 'react';
import { UserContextGlobaly } from "../context/UserContext";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}){
    const {logueado} = useContext(UserContextGlobaly);
    console.log(logueado)
    return( logueado === 'Logueado' ? children : <Navigate to="/login" />);
}

export default PrivateRoute;