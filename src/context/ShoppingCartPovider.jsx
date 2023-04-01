import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext(null)

const ShoppingCartPovider = ({children}) => {
    const [cart, setCart] = useState([])

    //Agregar al carrito
    const addItem = (item, quantity) => {

      let newCart;
      //Verificamos si ya existe el producto en el carrito
      let book = cart.find(book => book.id === item.id)

      if (book) {
        book.quantity += quantity;
        newCart = [...cart]
      } else {
        book = {...item, quantity: quantity}
        newCart = [...cart, book]
      }
      setCart(newCart)
    }

    //Cantidad total en CardWidget
    const totalQuantity = cart.reduce((acc, currItem) => {
      return acc + currItem.quantity;
    }, 0)

    
  return (
    <CartContext.Provider value={{cart, setCart, addItem, totalQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartPovider