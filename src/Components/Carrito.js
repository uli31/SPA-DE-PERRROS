import React,{useState,useContext} from 'react'
import { UsuarioContex } from '../context/usuario-context';

export default function Carrito() {
    const {carrito,agregarCarrito} =  useContext(UsuarioContex)

    console.log(carrito)
    return (
        <div>
            <table>
            <tr>hola</tr>
            <th>adios</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>

            {carrito.map(datos=>{
                return(
                    <tr>
                    <td><img src={datos.img}></img></td>
                    <td>{datos.titulo}</td>
                    <td>{datos.contador}</td>
                    <td>{datos.total}</td>
                    <td><button>X</button></td>
                  </tr>
                )
            })}
        </table>            
        </div>
    )
}
