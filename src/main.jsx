import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InicioApp from './InicioApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoEncontrado from '../pages/NoEncontrado';
import Contacto from '../pages/Contacto';
import Nosotros from '../pages/Nosotros';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>   
      
  <Route path='*'  element={<NoEncontrado/>} />
  <Route path='/'  element={<InicioApp/>} />
  <Route path='/contacto'  element={<Contacto/>} />
  <Route path='/nosotros'  element={<Nosotros/>} />

    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
