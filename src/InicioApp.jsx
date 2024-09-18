import { useState } from "react"
import FormularioUsuarios from "./components/FormularioUsuarios"
import usuarios from "./constants/usuarios.js"
import TablaUsuarios from "./components/TablaUsuarios.jsx"
import { v4 as uuidv4 } from 'uuid';



function InicioApp() {

  const [usuariosInicial, setUsuariosinicial] = useState(usuarios)

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)


  const agregarNuevoUsuario = (usuario) =>{ 
    usuario.id = uuidv4();
    const nuevoEstadoUsuario = [
      ...usuariosInicial, usuario ]
      setUsuariosinicial(nuevoEstadoUsuario)
  }

  const EliminarUsuario = (id) => {

   const nuevoEstadoUsuarios = usuariosInicial.filter( usuarios =>  usuarios.id !== id)
   setUsuariosinicial(nuevoEstadoUsuarios)

   }

   const editarUsuario = (usuarioEditado) => {

    console.log('se comenzo a editar ', usuarioEditado)

    const nuevoEstadoUsuario = usuariosInicial.map(user => user.id === usuarioEditado.id ?  usuarioEditado : user)

    setUsuariosinicial(nuevoEstadoUsuario)

   }


    
  
  
  return (
    <>
      <FormularioUsuarios
        agregarNuevoUsuario={agregarNuevoUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
        />
      <TablaUsuarios 
      usuariosInicial={usuariosInicial}
      EliminarUsuario={EliminarUsuario}
      setUsuarioAEditar={setUsuarioAEditar}

       />

    </>
  )
}

export default InicioApp
