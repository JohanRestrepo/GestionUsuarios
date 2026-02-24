import React from "react";

function User(props){
    return (
        <div>
            <img src={props.picture} alt={props.name}></img>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.cell}</p>
            <p>ubicacion: {props.location} - {props.city}</p>
        </div>
    )
}

export default User;