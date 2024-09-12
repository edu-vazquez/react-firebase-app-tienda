import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cartInLocalStorage")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem("cartInLocalStorage", JSON.stringify(cart));
    },[cart])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}


