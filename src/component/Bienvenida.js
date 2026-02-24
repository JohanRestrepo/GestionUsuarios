import React from "react";
import '../style/Bienvenida.css';
import { Link } from "react-router-dom";

function Bienvenida(){
    return(
        <div >
            <h1 className="titulo">Bienvenido:</h1>
            <p className="texto">¿Que deseas hacer el dia de hoy?</p>
            <h3>- <Link to="/usuarios">ver usuarios</Link></h3>
        </div>
    )
}

export default Bienvenida;