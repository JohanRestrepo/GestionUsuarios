import React, { useContext, useState } from "react";
import { UserContextGlobaly } from "../context/UserContext";
import NameFilter from "./NameFilter";

function UserList(){

    const {currentList} = useContext(UserContextGlobaly);

    const [filtro, setFiltro] = useState('');
    const [valorFiltro, setValorFiltro] = useState('');

    return(
        <div>
            <NameFilter setFiltro={setFiltro} setValorFiltro={setValorFiltro}/>
            {
                
                    currentList.results.map((user) => {
                        //if(filtro === '' && valorFiltro === ''){
                            <div key={user.user.username}>
                                <img src={user.user.picture.medium} alt={user.user.name.first}></img>
                                <h1>{user.user.name.first}</h1>
                                <p>{user.user.email}</p>
                                <p>{user.user.cell}</p>
                                <p>ubicacion: {user.user.location.street} - {user.user.location.city}</p>
                            </div>
                        //}
                })
            }
        </div>     
    )
}

export default UserList;