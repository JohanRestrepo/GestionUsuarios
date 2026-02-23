import React from "react";
import { useForm } from "react-hook-form";



function NameFilter({setFiltro,setValorFiltro}){

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        setFiltro(data.filtro);
        setValorFiltro(data.value);
    }

    const filtros = [
        { value: 'nombre', label: 'nombre' },
        { value: 'email', label: 'email' }
    ]

    return (
        <form className='tarea-formulario' onSubmit={handleSubmit(enviar)}>
                <select className='tarea-input' {... register("filtro")}>
                <option value="" disabled>--Seleccione--</option>
                {
                    filtros.map(filtro => (
                        <option key={filtro.value} value={filtro.value}>
                            {filtro.label}
                        </option>
                    ))
                }
                </select>
                <input className='tarea-input' type='text' placeholder="Filtra por..." required {... register("value")}/>
                <button className='tarea-boton' type="submit">buscar</button>
        </form>
    );
}

export default NameFilter;