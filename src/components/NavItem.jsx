import { NavLink } from "react-router-dom";

const NavItem = ({ objItem }) => {
  const { nombre, ruta } = objItem

  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={ruta}>{nombre}</NavLink>
    </li>
  );
}

export default NavItem;
/*     <>
    
    <li className="nav-item">
    <NavLink className="nav-link" to="/" >Inicio </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
  </li>
  </> */
