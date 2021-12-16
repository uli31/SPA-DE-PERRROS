import React,{useContext} from "react"
import Usuario from "../Components/Usuario";
import { UsuarioContex } from "../context/usuario-context";

import img from "../img/ropa para perros.png"
import FormularioInico from "./FormularioInico";
import firebaseApp from "../Firnabase";
import { getAuth,onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);


function Inicio_Sesion() {
   
       const {usuario,usuarioGlobal}= useContext(UsuarioContex)
       
         onAuthStateChanged(auth,(usuarioFirebase)=>{

               if(usuarioFirebase){
                           // si exite si no exite
                           usuarioGlobal(usuarioFirebase);

                        }else{
                           usuarioGlobal(null);

                        }


         });

         







    return (
       <>{usuario ? <Usuario usuarioGlobal={usuario.email}/> : <FormularioInico/>}</>
    )
}

export default Inicio_Sesion;
