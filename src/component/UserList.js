import React, { useContext} from "react";
import { UserContext } from "../context/UserContext";
import '../style/UserList.css';
import User from "./User";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function UserList(){

    const {currentList, deleteUser} = useContext(UserContext);
    const navigate = useNavigate();

    const eliminar = username => {
        deleteUser(username);
    }

    const editar = username => {
        navigate(`/usuarios/edit/${username}`);
    }

    return(
        <>
        <div className='contenedor-titulo'>
            <h1 className='titulo'>Usuarios en el sistema</h1>
        </div>
            <div className='contenedor-usuarios'>
                {
                    currentList.results.map((user) => {
                            return (
                                <div>
                                    <User 
                                    key={user.user.username}
                                    picture={user.user.picture.medium}
                                    name={user.user.name.first}
                                    lastname={user.user.name.last}
                                    email={user.user.email}
                                    cell={user.user.cell}
                                    location={user.user.location.street}
                                    city={user.user.location.city}
                                    />
                                    <div className='contenedor-botones'>
                                        <Button value={<FaEdit />} logic={'edit'} action={editar} id={user.user.username}/> 
                                        <Button value={<FaRegTrashAlt />} logic={'delete'} action={eliminar} id={user.user.username}/> 
                                    </div>
                                     
                                </div>  
                    )
                    })
                }
                
            </div>
            
            
        </>     
    )
}

export default UserList;