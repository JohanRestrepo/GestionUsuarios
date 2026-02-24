import React from "react";
import '../style/button.css';

function Button({value, logic, action, id}){
    return(
        <button className={logic==='edit' ? "boton edit" : "boton delete"} onClick={() => action(id)}>{value}</button>
    );
}

export default Button;