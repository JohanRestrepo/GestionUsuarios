import React, { useContext} from "react";
import { UserContext } from "../context/UserContext";
import '../style/UserList.css';

function UserList(){

    const {currentList} = useContext(UserContext);

    return(
        <div>
            <h1>Usuarios en el sistema</h1>
            
            {
                    currentList.results.map((user) => {
                            return (
                                <div key={user.user.username}>
                                    <img src={user.user.picture.medium} alt={user.user.name.first}></img>
                                    <h1>{user.user.name.first}</h1>
                                    <p>{user.user.email}</p>
                                    <p>{user.user.cell}</p>
                                    <p>ubicacion: {user.user.location.street} - {user.user.location.city}</p>
                                </div>
                            )
                })
            }
        </div>     
    )
}

export default UserList;