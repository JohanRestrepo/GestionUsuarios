import React from "react";
import { Link } from "react-router-dom";

function Bienvenida(){
    return(
        <div>
            <h1>Bienvenido:</h1>
            <h2>¿Que deseas hacer el dia de hoy?</h2>
            <h3><Link to="/usuarios">ver usuarios</Link></h3>
        </div>
    )
}

export default Bienvenida;