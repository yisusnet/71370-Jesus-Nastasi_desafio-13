import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InicioApp from './InicioApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<InicioApp/>
  </StrictMode>,
)
