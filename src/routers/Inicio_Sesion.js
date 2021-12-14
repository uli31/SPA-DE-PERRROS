import React from "react"
import img from "../img/ropa para perros.png"



function Inicio_Sesion() {
    return (
        <div className='Registro'>
            <h1>Inciar Sesion</h1>
            <div class="perrito">


<form action="">
<input type="email" name="email" id="email" placeholder="correo electronico"/>
    <br/> <br/>
    <input type="password" name="password" id="password" placeholder="Contraseña"/>
    <brs/>
    <br/>
    <button type="submit">Iniciar Sesion</button>
    <br/>

</form>

<img src={img} height="350px" alt=""/>

</div>

        </div>
    )
}

export default Inicio_Sesion;
