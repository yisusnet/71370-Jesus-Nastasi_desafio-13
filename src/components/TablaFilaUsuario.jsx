import Swal from "sweetalert2";
import notificaSweet from "./TablaFilaUsuarios.service";


const TablaFilaUsuario = ({user, EliminarUsuario, setUsuarioAEditar}) => {

const handleEliminar = () => {
  notificaSweet (
    
    user.nombre, user.apellido, () => {

    EliminarUsuario (user.id)
})
}

const handleEditarUsuario = (userEditar) =>{

  setUsuarioAEditar(userEditar)

}




  return (
    <>

    <tr >
      <th scope="row">Usuario</th>
      <td>{user.nombre}</td>
      <td>{user.apellido}</td>
      <td>{user.edad}</td>
      <td>{user.colorFavorito}</td>


      <td>
        <button className="btn btn-primary m-2"  onClick={() => handleEditarUsuario(user)}>Editar</button>
      <button className="btn btn-secondary"  onClick={handleEliminar}>Eliminar</button>
      </td>

    </tr>


</>
  )
}

export default TablaFilaUsuario
