import { NavLink } from "react-router-dom";

const NavItem = ({ objItem }) => {
 

  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={objItem}>{objItem.nombre}</NavLink>
    </li>
  );
}

export default NavItem;
