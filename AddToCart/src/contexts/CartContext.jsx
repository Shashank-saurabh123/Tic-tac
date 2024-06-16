import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext=createContext(null)

// Context provider should start with the Capital letter
export const CartContextProvider=(props)=>{
 
    const [items,setitems]=useState([])
 return (
 <CartContext.Provider value={{items,setitems}}>
 {props.children}
</CartContext.Provider>
 )
}