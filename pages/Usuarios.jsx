import { useState } from "react"
import FormularioUsuarios from "../src/components/FormularioUsuarios.jsx"
import usuarios from "../src/constants/usuarios.js"
import TablaUsuarios from "../src/components/TablaUsuarios.jsx"
import { v4 as uuidv4 } from 'uuid';



function Usuarios() {

  const url = import.meta.env.VITE_API_USUARIOS

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

export default Usuarios
