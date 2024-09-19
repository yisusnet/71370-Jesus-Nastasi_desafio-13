import { useEffect } from "react"


const NoEncontrado = () => {

  useEffect(() => {

    document.title = ('No encontrado')

  }, [])
  return (
    <div>NoEncontrado</div>
  )
}

export default NoEncontrado
