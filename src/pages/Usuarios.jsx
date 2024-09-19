import { useEffect, useState } from "react"
import FormularioUsuarios from "../components/FormularioUsuarios.jsx"
import TablaUsuarios from "../components/TablaUsuarios.jsx"




function Usuarios() {

  const url = import.meta.env.VITE_API_USUARIOS

  const [usuariosInicial, setUsuariosinicial] = useState([])

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  useEffect(() => {

    document.title = ('Usuarios')

console.log('se monta el componente en la pantalla')
obtenerTodosLosUsuarios()
  }, [])
  

const obtenerTodosLosUsuarios = async () => {
try {
  const res = await fetch(url)

if(!res.ok){
  throw new Error("algo salio mal al obtener los usuarios", res.status);
}
const dataUsuarios = await res.json()


setUsuariosinicial (dataUsuarios)



} catch (error) {
  console.error('ah ocurrido un error [obtenerTodosLosUsuarios]')
  
}


}

  const agregarNuevoUsuario = async (usuario) =>{ 

    try {

      const options = {
        method: 'POST',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(usuario)
      }

      const res = await fetch (url, options)
      if(!res.ok){
        throw new Error("algo sucedio al obtener los usuarios", res.status);
      }

      const dataNuevaUsuario = await res.json()

      setUsuariosinicial([...usuariosInicial, dataNuevaUsuario])
      
    } catch (error) {
      console.error('ah ocurrido un error [agregarNuevoUsuario]')
    }

  }

  const EliminarUsuario = async (id) => {
    try {
      
      const options = {
        method: 'DELETE'
      }
  
      const urlEliminar = url + id
  
      const res = await fetch(urlEliminar, options)
  
      if(!res.ok){
        throw new Error("algo ocurrio al trata de eliminar el usuario", res.status);
      }
  
      const dataEliminacionUsuario = await res.json()
  
      const data = {
        id: id,
        usuario: dataEliminacionUsuario
      }
  
      const nuevaArrayUsuarios = usuariosInicial.filter(user => user.id !== data.id )

      
      setUsuariosinicial(nuevaArrayUsuarios)

      } catch (error) {
        console.error('ah ocurrido un error [EliminarUsuario]')
        
      }
  
      
  
   }

   const editarUsuario = async (usuarioEditado) => {

    try {

      const options = {
        method: 'PUT',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(usuarioEditado)
      }

      const urlEditar = url + usuarioEditado.id

        const res = await fetch (urlEditar, options)

        if(!res.ok){
          throw new Error("algo ocurrio al trata de eliminar el usuario", res.status);
        }

         const data = await res.json()

        const nuevoEstadoUsuarios = usuariosInicial.map(user => 
          (user.id === usuarioEditado.id)? usuarioEditado : user)

          setUsuariosinicial(nuevoEstadoUsuarios)
      
    } catch (error) {  console.error('ah ocurrido un error [editarUsuario]')
      
    }

 

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
