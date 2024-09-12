import React, { useEffect } from 'react'

const Nosotros = () => {

  const imprimirClick = () => console.log("click");

  useEffect(() => {
    window.addEventListener("click", imprimirClick)

    return () => { window.removeEventListener("click", imprimirClick)}
    {/* todo lo que se retorna en un useEffect se ejecuta al demostar el componente */}

  }, [])


  return (
    <div className='container'>
      <h1 className='main-title'>Nosotros</h1>
      <p>Este es el componente "Nosotros"</p>
    </div>
  )
}

export default Nosotros;
