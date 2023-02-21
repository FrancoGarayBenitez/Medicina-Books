import React from 'react'
import img_cart from '../assets/carts.png'

const CartWidget = () => {
  return (
    <div className='cartContainer'>
        <img src={img_cart}/>
        <span>4</span>
    </div>
  )
}

export default CartWidget