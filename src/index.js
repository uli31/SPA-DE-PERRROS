import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Pagina_Principal from './routers/Pagina_Principal';
import Inicio_Sesion from './routers/Inicio_Sesion';
import Productos from './Components/Productos';
import Por_que_Nosotros from './Components/Por_que_Nosotros';
import Encuentranos from './Components/Encuentranos';



ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
        <Route index element={<Pagina_Principal/>} />
        <Route path='Inicio_Sesion' element={<Inicio_Sesion/>} />
        <Route path='productos' element={<Productos/>} />
        <Route path='Nosotros' element={<Por_que_Nosotros/>} />
        <Route path='Encuentranos' element={<Encuentranos/>} />
         </Route>

      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

