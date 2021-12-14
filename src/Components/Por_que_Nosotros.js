import React from 'react'
import '../style.css'



const Por_que_Nosotros = ()=>{

    return(
        <div className="Nosotros">
        <h3>POR QUE COMPRAR CON NOSOTROS</h3>

        <div className="nosotros-seccion">
            <div className="precio">
                <div className="imagen">
                    <img src="/img/Precio.png" height="120px" alt="Precio"/>
                </div>
                <div className="titulo-nosotros">
                    <p>Precio</p>
                </div>
                <div className="info">
                    <p>Contamos con los <br/> mejores precios en el mercado </p>
                </div>

            </div>
            <div className="tiempo">
                <div className="imagen">
                    <img src="/img/cronometro.png" height="120px" alt="Precio"/>
                </div>
                <div className="titulo-nosotros">
                    <p>Tiempo</p>
                </div>
                <div className="info">
                    <p>Nuestros Tiempos de entrega de productos <br/> y servico son los mejores <br/>en el mercado </p>
                </div>
            </div>
        </div>
    </div>

    )

}

export default Por_que_Nosotros;
