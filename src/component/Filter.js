import React from "react";
import { useForm } from "react-hook-form";
import '../style/Filter.css';

function Filter({filtrarUsuarios, borrarFiltros}){

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        filtrarUsuarios(data);
    }

    const filtros = [
        { value: 'nombre', label: 'Nombre' },
        { value: 'email', label: 'Email' }
    ]

    return(
        <div className="pagina-filtro">
            <div className="contenedor-filtro">
                <form className='formulario-filtro' onSubmit={handleSubmit(enviar)}>
                    <select className='tarea-input' {... register("filter")}>
                        <option value="" disabled>--Seleccione--</option>
                        {
                            filtros.map(filt => (
                                <option key={filt.value} value={filt.value}>
                                    {filt.label}
                                </option>
                            ))
                        }
                    </select>
                    <input className='input-filtro' type='text' placeholder="valor para filtrar" {... register("valor")}/>
                    <button className='boton-filtro' type="submit">Filtrar</button>
                </form>
                    <button className='boton-borrar-filtro' onClick={borrarFiltros}>Borrar Filtro</button>
            </div>
        </div>
    )
}

export default Filter;