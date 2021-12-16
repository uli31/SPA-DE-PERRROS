import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UsuarioContex } from "../context/usuario-context";



const Producto = ({producto,id})=>{

    const {Titulo,img,descripcion,precio}=producto

    const {setDatosProduc,datProductos}= useContext(UsuarioContex);

    const mandarDatos= (Titulo,img,descripcion,precio)=>{
        datProductos({
            titulo:Titulo,
            img:img,
            descripcion:descripcion,
            precio:precio
        })
    }

   
    return(
        <div class="card-productos">
        <p>{Titulo}</p>
        <img src={img}
            height="200px" alt="Shampo"/><br/>
         <Link className="btn" to={`/item/${Titulo}`} onClick={()=>mandarDatos(Titulo,img,descripcion,precio)}>
          Ver detalle
        </Link>
    </div>
    )
}

export default Producto;