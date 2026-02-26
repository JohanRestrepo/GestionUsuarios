import React, { useContext, useState} from "react";
import { UserContext } from "../context/UserContext";
import '../style/UserList.css';
import User from "./User";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";

function UserList(){

    const {currentList, deleteUser} = useContext(UserContext);
    const [filterList, setFilterList] = useState(currentList);
    const navigate = useNavigate();

    const eliminar = username => {
        deleteUser(username);
    }

    const editar = username => {
        navigate(`/usuarios/edit/${username}`);
    }

    const filtrarUsuarios = data => {

        if(data.filter === 'nombre' && data.valor !== ''){
            const datosFiltrados = { ...currentList,
                results: currentList.results.filter(persona =>
                    persona.user.name.first
                    .toLowerCase()
                    .includes(data.valor.toLowerCase())
                )
            }
            setFilterList(datosFiltrados);

        }else if(data.filter === 'email' && data.valor !== ''){
            const datosFiltrados = { ...currentList,
                results: currentList.results.filter(persona =>
                    persona.user.email
                    .toLowerCase()
                    .includes(data.valor.toLowerCase())
                )
            }
            setFilterList(datosFiltrados);
        }
        else{
            setFilterList(currentList);
        }
    }

    const borrarFiltros = () => {
        console.log('entre');
        setFilterList(currentList);
    }

    return(
        <>
        <div className='contenedor-titulo'>
            <h1 className='titulo'>Usuarios en el sistema</h1>
        </div>
            <div className='contenedor-filtro'>
                <Filter filtrarUsuarios={filtrarUsuarios} borrarFiltros={borrarFiltros}/>
            </div>
            <div className='contenedor-usuarios'>
                {
                    filterList.results.map((user) => {
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