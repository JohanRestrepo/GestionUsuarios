import React, { useContext} from "react";
import { UserContext } from "../context/UserContext";
import '../style/UserList.css';
import User from "./User";

function UserList(){

    const {currentList} = useContext(UserContext);

    return(
        <>
        <div className='contenedor-titulo'>
            <h1 className='titulo'>Usuarios en el sistema</h1>
        </div>
            <div className='contenedor-usuarios'>
                {
                    currentList.results.map((user) => {
                            return (
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
                    )
                    })
                }
            </div>
            
        </>     
    )
}

export default UserList;