import { Outlet } from 'react-router';
import Header from './Components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Pagina_Principal from './routers/Pagina_Principal';
import Inicio_Sesion from './routers/Inicio_Sesion';
import Productos from './Components/Productos';
import Por_que_Nosotros from './Components/Por_que_Nosotros';
import Encuentranos from './Components/Encuentranos';
import React,{useState,useEffect } from 'react';



import './style.css'
import { UsuarioContex } from './context/usuario-context';
import Navbar from './Components/Navbar';
import Pago from './Components/Pago';
import Producto from './Components/Producto';
import DetallesProducto from './Components/DetallesProducto';



function App() {
const[usuario, usuarioGlobal]=  useState(null);
const[carrito, setCarrito]=  useState([]);

function agregarCarrito (titulo,contador,descripcion,img,precio){
  setCarrito([...carrito,{titulo:titulo,contador:contador,desc:descripcion,img:img,total:precio}]);
}


  return (
   
          <div className="App">   
            
       <UsuarioContex.Provider value={{usuario,usuarioGlobal,carrito,agregarCarrito}}>
            <Routes>
           
                <Route  path='/' element={<Navbar/>}>
                <Route index element={<Pagina_Principal/>} />
                    <Route path='/Inicio_Sesion' element={<Inicio_Sesion />} />
                    <Route path='/productos' element={<Productos/>} />
                    <Route path='/Nosotros' element={<Por_que_Nosotros/>} />
                    <Route path='/Encuentranos' element={<Encuentranos/>} />
                    <Route path='/Carrito' element={<Pago/>} />
                    <Route path='/item/:Titulo' element={<DetallesProducto/>} />

                </Route>
            
          
            </Routes>
           </UsuarioContex.Provider>  
            
          </div>
  
  );
}

export default App;
