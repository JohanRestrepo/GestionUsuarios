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
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Cel:</strong> {props.cell}</p>
                <p className='ubicacion'><strong>ubicacion:</strong> {props.location} - {props.city}</p>
            </div>
        </div>
    )
}

export default User;