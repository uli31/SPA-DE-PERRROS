import React from "react";
import imgShampo from '../img/kisspng-dog-puppy-shampoo-pet-green-tea-shampoo-5ac77dd4245377.0489778415230233161488.png'
import imgBaño from '../img/pngwing.com.png'
import imgAlimento from '../img/alimento.png'
import Producto from "./Producto";




const Productos =()=>{

    const Listas = [
        {
        Titulo:'Shampo',
        img: imgShampo,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:220,
        id:1
    },{
        Titulo:'Baño',
        img: imgBaño,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:220,
        id:2
    },
    {
        Titulo:'Alimento',
        img: imgAlimento,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:130,
        id: 3
    }
    

]
    return(
        <div className='Productos' id='productos' >
                    <h2>Productos y Servicos</h2>
                    <div className='servicios'>
                    {Listas.map(producto=>{
                        return <Producto
                        key={producto.id}
                        producto={producto}
                        />
                    })}

               </div>
            
        </div>

    )
}

export default Productos;