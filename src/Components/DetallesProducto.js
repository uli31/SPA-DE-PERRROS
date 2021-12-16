import React,{useState} from "react";
import { useParams } from "react-router-dom";
import '../menu.css';
import imgShampo from '../img/kisspng-dog-puppy-shampoo-pet-green-tea-shampoo-5ac77dd4245377.0489778415230233161488.png'
import imgBaño from '../img/pngwing.com.png'
import imgAlimento from '../img/alimento.png'
import DetallesDatos from "./DetallesDatos";

export default function DetallesProducto() {



  let {Titulo}= useParams();

    const Listas = [
        {
        Titulo:'Shampo',
        img: imgShampo,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:220,
        stock:2,

        id:1
    },{
        Titulo:'Baño',
        img: imgBaño,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:220,
        stock:1,

        id:2
    },
    {
        Titulo:'Alimento',
        img: imgAlimento,
        descripcion:'lalalalallalalaldllalslalslaslallalsalsla',
        precio:130,
        stock:4,
        id: 3
    }




    
    

]

const Producto=Listas.filter(x =>x.Titulo==Titulo);

const [contador, setContador] = useState(4);
const [datos, setdatos] = useState({});

const resta =()=>{
    if(contador>0){
       setContador(contador-1)  
    }else{
        alert('agrega un producto')
    }
   
}

const suma = ()=>{
    
        setContador(contador+1)
}


console.log(Producto)
    return (
        Producto.map(el =>{

            return(
               /* <div className="Producto">
                    <h1  name='titulo'>{el.Titulo}</h1>
                    <div className="contenedor">
                         <div className="datosp">
                             <h1>Descripcion de Producto</h1>
                             <h1>{el.descripcion}</h1>
                             <h1>{el.descripcion}</h1>
                             <h2>{`Numero de Stock ${el.stock}`}</h2>
                            <div className="contador"> <button onClick={resta} >-</button><p>{contador}</p><button onClick={suma}>+</button></div>
                           <br></br>
                           <button className="carritoo" onClick={tomaDatos}>Agregar Al Carrito</button>
                           <br></br>
                            <a href="/Carrito">Carrito</a>
                                 <h2>{` Costo Total ${el.precio}`}</h2>
                              
                         </div>
                    
                    <img src={el.img} height='450px'></img>
                     </div>
                </div> */ 
                <DetallesDatos titulo={el.Titulo}
                                stock={el.stock}
                                descripcion={el.descripcion}
                                img={el.img}
                                precio={el.precio} />
            )
        })
    )
}
