import { useEffect, useState } from "react"

const FormularioUsuarios = ({ agregarNuevoUsuario, usuarioAEditar, setUsuarioAEditar, editarUsuario}) => {

  const formInicial = {
    nombre: '',
    apellido: '',
    edad: '',
    colorFavorito: '',
    id: null

  } 

  
 const [formUsuarioInicial, setformUsuarioInicial] = useState(formInicial)

 useEffect(() => {

  usuarioAEditar ? setformUsuarioInicial(usuarioAEditar) :  setformUsuarioInicial (formInicial)

}, [usuarioAEditar])



 const handleChange = e => {
 const formularioChange = {
  ...formUsuarioInicial, 
  [e.target.name]: e.target.value }

  setformUsuarioInicial(formularioChange)

}


    const handleSubmit= (e) => {
      e.preventDefault()

      if(formUsuarioInicial.id === null){
        agregarNuevoUsuario(formUsuarioInicial)
      
      }else{
        editarUsuario(formUsuarioInicial)
      }
      handleResetear()
    }
  
    const handleResetear = () => {

 setformUsuarioInicial(formInicial)
 setUsuarioAEditar(null)
  
    }
  
    
  return (

    <form className="w-75 mt-2 mb-5 border border-primary p-4 rounded round m-2 mt-3" onSubmit={handleSubmit} >
    <h1 className="p-2"> {formUsuarioInicial.id ? `Edición de usuario` : `Creación de usuarios`}</h1>
    

  <div className="mb-3 row">
    <label htmlFor="nombre" className="col-sm-2 col-form-label fs-3 p-1">Ingrese su nombre</label>
      <input type="text" className="form-control" id="Nombre" name="nombre"
      value={formUsuarioInicial.nombre}
      onChange={handleChange}
      />
  </div>
  <div className="mb-3 row">
    <label htmlFor="apellido" className="col-sm-2 col-form-label fs-4 p-1">Ingrese su apellido</label>
      <input type="text" className="form-control" id="apellido" name="apellido"
               value={formUsuarioInicial.apellido}
               onChange={handleChange} 
      />
  </div>

  <div className="mb-3 row">
    <label htmlFor="edad" className="col-sm-2 col-form-label fs-3 p-1">Ingrese su edad</label>
      <input type="number" className="form-control" id="edad" name="edad"
            value={formUsuarioInicial.edad}
            onChange={handleChange}
      />
  </div>

  <div className="mb-3 row">
    <label htmlFor="color" className="col-sm-2 col-form-label fs-3 p-1">Ingrese su color favorito</label>
      <input type="text" className="form-control" id="color" name="colorFavorito"
      
      value={formUsuarioInicial.colorFavorito}
      onChange={handleChange}
      />
  </div>


  

 

  <button  type="submit"  className="btn btn-danger me-2 p-3">{formUsuarioInicial.id ? `Editar Usuario` :  `Crear usuario`}</button>
  <button type="reset" className="btn btn-warning p-3" onClick={handleResetear}>Resetear</button>
  </form>
  
  )
} 

export default FormularioUsuarios
