import React from 'react';
import '../menu.css'
import img from '../img/perros  juguetes.png';
import firebaseApp from "../Firnabase";
import { getAuth,signOut } from 'firebase/auth';
const auth = getAuth(firebaseApp);


export default function CarritoPago({dueño}) {


    


    return (
        <div className='Envios'>

            <img src={img} height='400px'></img>
             <main>
                    <h1>{dueño}</h1>
                 <form > 
                      <h1>Datos De Envio</h1>
                 <input type="text" placeholder="Calle" name='Calle'></input> <input type="number" placeholder="Numero de calle" name='number'></input> <input type="text" placeholder="Colonia" name='Colonia'></input>
            <br/><br/>
            <input type="number" placeholder="Codigo postal" name='Codigo_Postal'></input>      <input type="Ciudad" placeholder="Ciudad" name='Ciudad'></input>

                 </form>

                 <section>
                     <h1>Metodo de Pago</h1>
                     <div>

                     </div>
                 </section>


             </main>
        </div>
    )
}
