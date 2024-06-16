import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Cart() {
  const cart = useContext(CartContext)

  // Ensure prices are treated as numbers by using parseFloat
  const total = cart.items.reduce((a, b) => a + (b.price), 0)

  return (
    <div>
      <h1>Cart</h1>
      {
        cart && cart.items.map((item, index) => <li key={index}>{item.name} - {item.price}</li>)
      }
      <h5>Total bill: ${total}</h5>
    </div>
  )
}

export default Cart
