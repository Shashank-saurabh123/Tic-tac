import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Item name="macbook pro" price={10}/>
    <Item name="pendrive" price={12}/>
     <Item name="mobile" price={4}/>
     <Cart/>
    </>
  )
}

export default App
