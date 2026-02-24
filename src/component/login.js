import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import '../style/login.css';

function Login(){

    const {loginExitoso, currentList} = useContext(UserContext);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const enviar = (data) => {
        const usuarioEncontrado = currentList.results.find((usuario)=>
            usuario.user.username === data.user &&
            usuario.user.password === data.password
        );
        
        if(usuarioEncontrado){
            loginExitoso();
            navigate('/bienvenida');
        }else{
            alert("No hay ningun usuario con esa información en el sistema");
        }
    }

    return(
        <div>
            <form className='tarea-formulario' onSubmit={handleSubmit(enviar)}>
                <input className='tarea-input' type='text' placeholder="Ingresa el usuario" required {... register("user")}/>
                <input className='tarea-input' type='text' placeholder="Ingresa la contraseña" required {... register("password")}/>
                <button className='tarea-boton' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;