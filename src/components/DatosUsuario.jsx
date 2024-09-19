import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DatosUsuario = () => {

const [usuario, setUsuario] = useState([])

const {idUsuario} = useParams()

const url = import.meta.env.VITE_API_USUARIOS


useEffect(() => {
  getOneUsuario(idUsuario)
    
  }, [])

  const getOneUsuario = async (id) => {

    try {

      const urlGetOne = url + id

      const res = await fetch (urlGetOne)

      if(!res.ok){
        throw new Error("no se pudo obtener el usuario" , res.status);
        
      }

      const data = await res.json()

      setUsuario (data)


      
    } catch (error) {
      console.error('ah ocurrido un error [getOneUsuario]')
    }

  }




  return (
<div className="container border border-danger rounded rounder-2 p-4 m-5 w-50 rounded bg-light shadow-sm">
  <h2 className="mb-3">Datos de usuario</h2>
  <p><strong>Nombre:</strong> {usuario.nombre}</p>
  <hr />
  <p><strong>Apellido:</strong> {usuario.apellido}</p>
  <hr />
  <p><strong>Edad:</strong> {usuario.edad}</p>
  <hr />
  <p><strong>Color Favorito:</strong> {usuario.colorFavorito}</p>
  <hr />
</div>
  )
}

export default DatosUsuario
