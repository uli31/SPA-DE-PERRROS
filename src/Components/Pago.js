import React,{useContext} from 'react';
import { UsuarioContex } from '../context/usuario-context';
import CarritoPago from './CarritoPago';
import firebaseApp from "../Firnabase";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import FormularioInico from '../routers/FormularioInico';

const auth = getAuth(firebaseApp);


export default function Pago() {
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
        <div>
            {usuario ? <CarritoPago dueño={usuario.email}/> :<FormularioInico/> }
        </div>
    )
}
