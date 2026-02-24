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
        setToken(sha256);
    }

    const deleteUser = (username) => {
        
        //prevData es un estado anterior que React inyecta automaticamente, previene errores
        setCurrentlist(prevData => ({
            ...prevData,
            results: prevData.results.filter(
                item => item.user.username !== username
            )
        }));
    }

    const modifyUser = (data) => {
        
        //Se hace asi la modificacion por las capas que trae, hay que especificar cada capa

        setCurrentlist(prevData => ({
            ...prevData,
            results: prevData.results.map(item =>
                item.user.username === data.username
                ?{
                    ...item,
                    user: {
                        ...item.user,
                        email: data.email,
                        cell: data.cel,
                        name: {
                            ...item.user.name,
                            first: data.name,
                            last: data.lastname
                        },
                        location: {
                            ...item.user.location,
                            street: data.ubicacion,
                            city: data.ciudad
                        }
                    }
                }
                : item
            )
        }));
    }

    return(
        <UserContext.Provider value={{
                currentList,
                loginExitoso,
                token,
                deleteUser,
                modifyUser
            }}>
            {children}
        </UserContext.Provider>
    ) 
}