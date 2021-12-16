import React,{useState,useContext,useEffect} from 'react';
import Encuentranos from '../Components/Encuentranos';
import Header from '../Components/Header';
import Nosotros from '../Components/Nosotros';
import Por_que_Nosotros from '../Components/Por_que_Nosotros';
import Productos from '../Components/Productos';



import { collection, getDocs } from "firebase/firestore";
import db from '../Firnabase';








function Pagina_Principal() {
const [producto, setProducto]=useState([])




    return (
        <div>
            <Header/> 
            <Productos producto={producto}/>
           <Por_que_Nosotros/>
            <Nosotros/>   
            
         
            <Encuentranos/>
           

        </div>
    )
}

export default Pagina_Principal
