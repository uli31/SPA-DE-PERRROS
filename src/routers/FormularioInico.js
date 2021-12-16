import React,{useState} from 'react'
import '../style.css'
import img from "../img/ropa para perros.png";
import  firebaseApp  from "../Firnabase";
import{getAuth,
       createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
       signInWithRedirect,
        GoogleAuthProvider} from "firebase/auth"
const auth = getAuth(firebaseApp);

const googleProvider= new GoogleAuthProvider();




export default function FormularioInico() {

    const fallo=false;

    const [registra, setRegistro] = useState(false)
        const [datos,setDatos]=useState({
                nombre:'',
                contraseña:''
            })

 const tomaDeDatos= (e)=>{

    

    setDatos({...datos,
    [e.target.name]:e.target.value});
      
}

    const enviar=async(e)=>{

        e.preventDefault()
        const {email,password}=datos;
        
        if(registra === false){ 
            try {
                const registros= await signInWithEmailAndPassword(auth,email,password);
            } catch (error) {
               alert('Tu contraseña o tu correo esta mal');
            }
            
            
        }else{
           const usuario=  await createUserWithEmailAndPassword(auth,email,password); 
        }

        }

    return (
        <div className='Registro'>
        <h1>{registra ? "Registate" : "Inicia Sesión"}</h1>
      
        <div class="perrito">
           


<form  onSubmit={enviar}>
<input type="email"  onChange={tomaDeDatos} name="email" id="email" placeholder="correo electronico"/ >
<br/> <br/>
<input type="password" onChange={tomaDeDatos} name="password" id="password" placeholder="Contraseña"/>
<brs/>
<br/>
<button type="submit" >{registra ? "Registate" : "Inicia Sesión"}</button>

<br></br>
<button type="submit" onClick={()=>signInWithRedirect(auth,googleProvider)}>Entra con google</button>

<br/>
{fallo ? <p> Tu Contraseña o Correo esta mal</p>: null}
</form>

<img src={img} height="350px" alt=""/>

</div>
<button className='button' onClick={()=>setRegistro(!registra)}>{registra ? "¿ Ya tienes cuenta? Inicia sesión" : "¿ No tienes Cuenta ? Registrate"}</button>

    </div>
    )
}
