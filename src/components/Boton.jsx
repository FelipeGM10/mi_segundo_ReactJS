import React from 'react'

const Boton = ({nombre, funcion}) => {
  return (
    <button
        onClick={funcion}
        className="btn btn-danger btn-sm m-4"
    >
        {nombre}
    </button>
  )
}

export default Boton