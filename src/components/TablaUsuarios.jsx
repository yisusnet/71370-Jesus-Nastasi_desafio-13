import TablaFilaUsuario from "./TablaFilaUsuario"

const TablaUsuarios = ({usuariosInicial, EliminarUsuario, setUsuarioAEditar, usuarioAEditar}) => {
  return (
    <>
    <h2>Tabla de Usuarios</h2>

    <table className="table w-75">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Edad</th>
      <th scope="col">Color Favorito</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>

  {usuariosInicial.map((user, idx) => (
    <TablaFilaUsuario  user={user} key={idx} 
    EliminarUsuario={EliminarUsuario}

setUsuarioAEditar={setUsuarioAEditar}
  />
))}


  </tbody>
</table>


    </>

  )
}

export default TablaUsuarios
