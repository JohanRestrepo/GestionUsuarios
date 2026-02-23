import React, { createContext, useEffect, useState } from "react";

export const UserContextGlobaly = createContext();

export function UserContext({children}){
    
    const [currentList, setCurrentlist] = useState([]);
    const [logueado, setLogueado] = useState('Logueado');
    
    useEffect(()=>{
        fetch('https://randomuser.me/api/0.8/?results=100')
            .then((resp) => resp.json())
            .then((data) => {
            setCurrentlist(data);
            })
    }, [])

    const loginExitoso = () => {
        console.log("Se ha logueado con exito");
        setLogueado('Logueado');
    }

    return(
        <UserContextGlobaly.Provider value={{
                currentList,
                loginExitoso,
                logueado
            }}>
            {children}
        </UserContextGlobaly.Provider>
    ) 
}