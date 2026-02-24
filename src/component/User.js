import React from "react";
import '../style/User.css';

function User(props){
    return (
        <div className="contendor-usuario">
            <div>
                <img className='imagen-usuario'
                src={props.picture} 
                alt={props.name}>
                </img>
            </div>
            <div className='contenedor-texto'>
                <p className='nombre'><strong>{props.name} {props.lastname}</strong></p>
                <p>Email: {props.email}</p>
                <p>Cel: {props.cell}</p>
                <p className='ubicacion'>ubicacion: {props.location} - {props.city}</p>
            </div>
        </div>
    )
}

export default User;