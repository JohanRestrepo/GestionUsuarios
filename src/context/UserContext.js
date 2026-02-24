import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [currentList, setCurrentlist] = useState([]);
    const [token, setToken] = useState('');
    
    useEffect(()=>{
        fetch('https://randomuser.me/api/0.8/?results=100')
            .then((resp) => resp.json())
            .then((data) => {
            console.log('username: ' + data.results[0].user.username); //Esto lo hago para tener info con que loguearme
            console.log('password: ' + data.results[0].user.password);
            setCurrentlist(data);
            })
    }, [])

    const loginExitoso = ({sha256}) => {
        console.log("Se ha logueado con exito");
        setToken(sha256);
    }

    return(
        <UserContext.Provider value={{
                currentList,
                loginExitoso,
                token
            }}>
            {children}
        </UserContext.Provider>
    ) 
}