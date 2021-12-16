import React,{useState,useContext} from 'react'
import { UsuarioContex } from '../context/usuario-context';

export default function DetallesDatos({titulo,stock,descripcion,img,precio}) {
  const [contador, setContador] = useState(0);
  const {carrito,agregarCarrito} =  useContext(UsuarioContex)
  const [datos, setdatos] = useState(null);
  
  const resta =()=>{
      if(contador>0){
         setContador(contador-1)  
      }else{
          alert('agrega un producto')
      }
     
  }
  
  const suma = ()=>{
      if(contador<stock){

         setContador(contador+1)
      }else{
        alert('pasaste el limite de stock');
      }
         
  }  
 


    const tomaDatos= ()=>{
       
  




              agregarCarrito(titulo,contador,descripcion,img,precio);

              console.log(carrito)

        
    } 
   
    

    
             return(
              <div className="Producto">
              <h1  name='titulo'>{titulo}</h1>
              <div className="contenedor">
                   <div className="datosp">
                       <h1>Descripcion de Producto</h1>
                       <h1>{descripcion}</h1>
                       <h1>{descripcion}</h1>
                       <h2>{`Numero de Stock ${stock}`}</h2>
                      <div className="contador"> <button onClick={resta} >-</button><p>{contador}</p><button onClick={suma}>+</button></div>
                     <br></br>
                     <button className="carritoo" onClick={tomaDatos}>Agregar Al Carrito</button>
                     <br></br>
                      <a href="/Carrito">Carrito</a>
                           <h2>{` Costo Total ${precio}`}</h2>
                        
                   </div>
              
              <img src={img} height='450px'></img>
               </div>
          </div>
              )
        
    
}
