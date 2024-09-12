import { useForm } from "react-hook-form"

const Contacto = () => {

  const {register, handleSubmit} = useForm()

  const enviar = data => {
    console.log(data);
  }
  

  return (
    <div className='container'>
        <h1 className="main-title">Contacto</h1>

        <form action="" className='formulario' onSubmit={handleSubmit(enviar)}>

          <input type="text" placeholder='Ingresa tu nombre...' {...register("nombre")}/>
          
          <input type="text" placeholder='Ingresa tu apellido...' {...register("apellido")} />
          
          <input type="email" placeholder='Ingresa tu email...' {...register("nombre")} />

          <button type="submit" className='enviar'> Enviar </button>

        </form> 

    </div>
  )
}

export default Contacto
