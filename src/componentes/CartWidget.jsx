import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
        <Link className="menu-link" to="/cart">
          {"Carrito "}  
          <strong>
            {cart.length > 0 && cart.length}
          </strong>
        </Link>
    </div>
  )
}

export default CartWidget