import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

	const { cart, setCart } = useContext(CartContext)

	const precioTotal = () => cart.reduce((acc, item) => acc + item.cantidad * item.precio , 0)

	const handleVaciarCarrito = () => setCart([]);

	const CheckoutButton = () => {
		return (
			<Link to="/checkout" >
				<button className='enviar'>checkout</button>
			</Link>
		)
	}
  return (
    <div className='container'>
				<h1 className='main-title'>Carrito</h1>
        		{
					cart.map( item => {
						return (
							<div key={item.titulo}>
								<br />	
								<h3>Producto: {item.titulo}</h3>
								<p>Cantidad: {item.cantidad} unid.</p>
								<p>Precio unit: ${item.precio} </p>
								<p>Precio total: ${item.precio * item.cantidad}</p>
								<br />
							</div>
						)
					})
				}

				{ cart.length > 0 ? <h2>Total a pagar: ${precioTotal()}</h2> : "El carrito esta vacio" }
				{ cart.length > 0 && <CheckoutButton />  }
				<br />
				<br />
				{ cart.length > 0 && <button className="enviar" onClick={handleVaciarCarrito}> Vaciar Carrito </button> }
				
    </div>
  )
}

export default Cart;