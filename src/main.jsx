import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoEncontrado from '../pages/NoEncontrado';
import Contacto from '../pages/Contacto';
import Nosotros from '../pages/Nosotros';
import Navbar from './components/Navbar';
import Usuarios from '../pages/Usuarios';
import Inicio from '../pages/Inicio';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>   

  <Route path='*'  element={<NoEncontrado/>} />
  <Route path='/usuarios'  element={<Usuarios/>} />
  <Route path='/'  element={<Inicio/>} />
  <Route path='/contacto'  element={<Contacto/>} />
  <Route path='/nosotros'  element={<Nosotros/>} />

    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
