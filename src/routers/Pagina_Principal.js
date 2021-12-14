import React from 'react';
import { Outlet } from 'react-router';
import Encuentranos from '../Components/Encuentranos';
import Header from '../Components/Header';
import Nosotros from '../Components/Nosotros';
import Por_que_Nosotros from '../Components/Por_que_Nosotros';
import Productos from '../Components/Productos';


function Pagina_Principal() {
    return (
        <div>
            <Header/> 
            <Productos/>
           <Por_que_Nosotros/>
            <Nosotros/>   
            
         
            <Encuentranos/>
        </div>
    )
}

export default Pagina_Principal
