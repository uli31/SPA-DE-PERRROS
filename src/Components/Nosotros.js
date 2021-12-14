import React from "react";
import img from '../img/depositphotos_9402396-stock-photo-dog-with-blue-towel-and.jpg'


const Nosotros =()=>{
    return(
        <div className='Nosotros'>
             <img src={img} height="600px" alt=""/>
        <div className="texto-nosotros">
            <h2>Nosotros</h2>
            <p> Time Wash Spa, se caracteriza por ser una empresa mexicana comprometida
                en la atención, cuidado y embellecimiento de sus mascotas en la comodidad de su hogar.
                Además de ofrecer productos y servicios de alta calidad para su mascota.</p>
        </div>
        </div>
    )
}

export default Nosotros;