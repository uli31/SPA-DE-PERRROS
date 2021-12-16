import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../style.css';



const Navbar = ()=>{

    return(
        <div>
        <nav>
        <Link to="/Inicio_Sesion">Iniciar Sesion</Link>
        <a href="/productos">Productos</a>
        <a href="/Nosotros">Nosotros</a>
        <a href="/Encuentranos">Encuentranos</a>
        <a href="/Carrito">Carrito</a>
        <a href="#">Citas y Pedidos</a>
    </nav>
    <Outlet/>
    </div>
    )

}

export default Navbar