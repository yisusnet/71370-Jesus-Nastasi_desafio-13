import React, { useEffect } from 'react'

const Inicio = () => {

  useEffect(() => {

    document.title = ('Inicio')

  }, [])
  return (
    <div>Inicio</div>
  )
}

export default Inicio
