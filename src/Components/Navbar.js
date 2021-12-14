import React from "react";
import { Link } from "react-router-dom";
import '../style.css';



const Navbar = ()=>{

    return(
        <nav>
        <Link to="/Inicio_Sesion">Iniciar Sesion</Link>
        <a href="/productos">Productos</a>
        <a href="/Nosotros">Nosotros</a>
        <a href="/Encuentranos">Encuentranos</a>
        <a href="#">Citas y Pedidos</a>
    </nav>
    )

}

export default Navbar