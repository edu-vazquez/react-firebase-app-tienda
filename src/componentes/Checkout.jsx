import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from "react-hook-form";
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';


const Checkout = () => {

  const [pedidoId, setPedidoId] = useState("");
  
  const { cart, setCart } = useContext(CartContext);
  const {register, handleSubmit} = useForm();

  const precioTotal = () => cart.reduce((acc, item) => acc + item.cantidad * item.precio , 0)

  const pedidoRef = collection(db, "pedidos");
  
  const confirmarPedido = (data) => {
    const pedido = {
      cliente: data,
      pedido: cart,
      precioTotal: precioTotal(),
    }
    addDoc(pedidoRef, pedido)
      .then( resp => setPedidoId(resp.id))
    setCart([]);


  }

  if (pedidoId) {
    return (
      <div className='container'>
        <h2 className='main-title'>Pedido confirmado, muchas gracias!</h2>
        <br />
        <p>Su ID de pedido es: <strong>{pedidoId}</strong></p>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Checkout</h1>
      <div>
        {
					cart.map( item => {
						return (
							<div key={item.titulo}>
								<br />
								<p>Total a pagar: <strong>${item.precio * item.cantidad}</strong></p>
								<br />
							</div>
						)
					})
				}
      </div>
      <form action="" className='formulario' onSubmit={handleSubmit(confirmarPedido)}>

          <input type="text" placeholder='Ingresa tu nombre...' {...register("nombre")}/>
          
          <input type="text" placeholder='Ingresa tu email...' {...register("email")} />
          
          <button type="submit" className='enviar'> Confirmar Pedido </button>

        </form>  
    </div>
  )
}

export default Checkout
