import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

//PrivateRoute se encarga de verificar si el usuario peude ingresar a los componentes, en caso negativo lo devuelve al login
function PrivateRoute({children}){
    const {logueado} = useContext(UserContext);
    console.log(logueado)
    return( logueado === 'Logueado' ? children : <Navigate to="/login" />);
}

export default PrivateRoute;