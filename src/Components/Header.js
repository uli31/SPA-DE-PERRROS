import React,{Fragment} from 'react'
import img from '../img/spa-perro-1280x720x80xX.jpg'
import '../style.css'
import Navbar from './Navbar'


const Header = ()=> {
    return (
        <> 
       
        <div className='principal'>
            <img className="img-perro" src={img} alt="perritos"/>

            <div className="parafo">
                <p>POR QUE TU PERRO  SE MERECE  LO MEJOR</p>

            </div>
                    <div className="boton">
                        <a href="/"> CONOCENOS</a>
                    </div>
            
                  
        </div>
           
      </>  

    )
}

export default Header;
