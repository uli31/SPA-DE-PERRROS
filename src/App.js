import { Outlet } from 'react-router';
import Header from './Components/Header';
import Navbar from './Components/Navbar';





import './style.css'




function App() {
  return (
    <div className="App">
      
        
   <Navbar/>
       
      

     
      <div>
         <Outlet/>
      </div>
     
    </div>
  );
}

export default App;
