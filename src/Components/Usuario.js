import React,{useEffect,useState} from 'react'
import firebaseApp from "../Firnabase";
import { getAuth,signOut } from 'firebase/auth';
import{getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
import CarritoPago from './CarritoPago';
import Pedidos from './Pedidos';

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp); 

export default function Usuario({ usuarioGlobal }) {

    const [listaDePedidos,setDatosPedidos]= useState(null)
    

    const prueba=[{direccion:'sanguan 1212 calle pensamiento , san miguel',Numpedido:'323edsds',total:250},{direccion:'sanguan 1212 calle pensamiento , san miguel',Numpedido:'323edsds',total:250},{direccion:'sanguan 1212 calle pensamiento , san miguel',Numpedido:'323edsds',total:250}]
    console.log('hola '+usuarioGlobal);


    const buscarPedidos= async(idDocumento)=>{
        // referencia al documento
        const docuRef=doc(firestore,`ususarios/${idDocumento}`)
        // revisar si exte
       const consulta = await getDoc(docuRef);

       if (consulta.exists()) {
                const infoDocu= consulta.data();
                return infoDocu.pedidos;
       }else{
           await setDoc(docuRef,{pedidos:[...prueba]});
           const consulta = await getDoc(docuRef);
           const infoDocu= consulta.data();
           return infoDocu.pedidos;
       }
    }

    useEffect( ()=>{

        const data=buscarPedidos(usuarioGlobal);

        

    },[])

        
    
    

    return (
        <div>
            <h1>{`Bienvenido`}</h1>


            <button onClick={()=>{signOut(auth)}}>
                Cerrar Sesion 
            </button>
            

           
       

        </div>
    )
}
