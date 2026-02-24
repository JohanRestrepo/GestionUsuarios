import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import '../style/EditUser.css';
import { UserContext } from "../context/UserContext";

function EditUser(){

    const {register, handleSubmit} = useForm();
    const {modifyUser} = useContext(UserContext);
    const navigate = useNavigate();

    const username = useParams().id;

    const enviar = (data) => {
        modifyUser(data);
        navigate('/usuarios');
    }

    return(
        <div className="pagina-edicion">
            <div className="contenedor-edicion">
                <h1 className="titulo-edicion">Modificar usuario</h1>
                <form className='formulario-edicion' onSubmit={handleSubmit(enviar)}>
                    <input className='input-edicion' type='text' placeholder="Ingresa el nombre" required {... register("name")}/>
                    <input className='input-edicion' type='text' placeholder="Ingresa el apellido" required {... register("lastname")}/>
                    <input className='input-edicion' type='text' placeholder="Ingresa el email" required {... register("email")}/>
                    <input className='input-edicion' type='number' placeholder="Ingresa el numero celular" required {... register("cel")}/>
                    <input className='input-edicion' type='text' placeholder="Ingresa la ubicacion" required {... register("ubicacion")}/>
                    <input className='input-edicion' type='text' placeholder="Ingresa la ciudad" required {... register("ciudad")}/>
                    <input className='input-edicion' type='hidden' value={username} required {... register("username")}/>
                    <button className='boton-edicion' type="submit">Editar</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;