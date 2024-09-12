import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCantidad = ( {item} ) => {
  
  const [cantidad, setCantidad] = useState(1);
  const {cart, setCart} = useContext(CartContext);

  const handleSumar = () => cantidad < Number(item.stock) && setCantidad(cantidad + 1);
  const handleRestar = () => cantidad > 1 && setCantidad(cantidad - 1);
  
  const handleAgregar = () => {
    const itemAgregado = {...item, cantidad};
    
    const isInTheCart = cart.find( producto => producto.id === itemAgregado.id);
    const tmpCart = [...cart];

    if (isInTheCart){
      tmpCart.map( item => item.id === itemAgregado.id ? item.cantidad += itemAgregado.cantidad : false );
    } else {
      tmpCart.push(itemAgregado);
    }
    setCart(tmpCart);
  }
  
  return (
    <div>
        <div className='item-count'>
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCantidad
