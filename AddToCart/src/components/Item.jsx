import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
function Item(props) {
    const cart=useContext(CartContext)
    console.log(cart)
  return (
    <div>
        <h4>name:{props.name}</h4>
        <p>price $:{props.price}</p>
      <button onClick={()=>
        cart.setitems([...cart.items,
        {name:props.name,
        price:props.price} ])}
        >add to cart</button>
    </div>
  )
}

export default Item
