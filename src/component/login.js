import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { UserContextGlobaly } from "../context/UserContext";
import '../style/login.css';

function Login(){


    const {loginExitoso, currentList, logueado} = useContext(UserContextGlobaly);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const enviar = (data) => {
        console.log(currentList)
        currentList.results.map((usuario) => {
            if(usuario.user.username === data.user && usuario.user.password === data.password){
                loginExitoso();
                return navigate('/bienvenida');
            }
        });
        if(logueado !== 'Logueado'){
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