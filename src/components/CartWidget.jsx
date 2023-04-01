import React, { useContext } from 'react'
import img_cart from '../assets/carts.png'
import { CartContext } from '../context/ShoppingCartPovider'

const CartWidget = () => {

  //Recibo del context la cantidad total de productos seleccionados
  const {totalQuantity} = useContext(CartContext)
  
  return (
    <div className='cartContainer'>
        <img src={img_cart}/>
        <span>{totalQuantity || ""}</span>
    </div>
  )
}

export default CartWidget