import React, { useContext} from "react";
import { UserContext } from "../context/UserContext";
import '../style/UserList.css';
import User from "./User";

function UserList(){

    const {currentList} = useContext(UserContext);

    return(
        <div>
            <h1>Usuarios en el sistema</h1>
            
            {
                    currentList.results.map((user) => {
                            return (
                                <User 
                                    key={user.user.username}
                                    picture={user.user.picture.medium}
                                    name={user.user.name.first}
                                    email={user.user.email}
                                    cell={user.user.cell}
                                    location={user.user.location.street}
                                    city={user.user.location.city}
                                />

                                
                    )
                })
            }
        </div>     
    )
}

export default UserList;