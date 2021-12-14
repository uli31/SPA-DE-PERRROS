import React from "react";

const Producto = ({producto,id})=>{

    const {Titulo,img,descripcion,precio}=producto

   
    return(
        <div class="card-productos">
        <p>{Titulo}</p>
        <img src={img}
            height="200px" alt="Shampo"/><br/>
        <a href="" class="btn">Ver Mas</a>
    </div>
    )
}

export default Producto;