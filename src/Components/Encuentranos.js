import React from "react";
import mapa from '../img/UAGOCODQDJDNRG7KSJ7Z3PTJ2E.jpg';
import calendario from '../img/calendarioo.png';
import direccion from '../img/icono direccion.png';
import llamada from '../img/llamada-telefonica.png';

import '../style.css'


const Encuentranos = ()=>{
    return(
        <div className="encuentranos">
        <div className="titulo">
            <h2>Encuentranos</h2>
        </div>

        <div class="encuentranos-info">
            <div class="mapa">
                <img src={mapa}alt=""/>
            </div>
            <div class="contacto">
                <div class="telefon">
                    <img src={llamada} alt="telefono"/>
                    <p>Contacto</p>
                    <p>55-12-32-12-43</p>
                </div>

                <div class="telefon">
                    <img src={calendario} alt="calendario"/>
                    <p>Lunes a Viernes
                    </p>
                    <p>9:00 a.m. a 6:00 p.m.
                    </p>
                </div>

                <div class="telefon">
                    <img src={direccion} alt="direccion"/>

                </div>

            </div>
        </div>

    </div>
    )
}

export default Encuentranos;