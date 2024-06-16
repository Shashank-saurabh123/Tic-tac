import React from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './contexts/CounterContext'
import { useContext } from 'react'
import { CounterContextProvider } from './contexts/CounterContext.jsx'
function App() {
  const counterstate=useContext(CounterContext)
//console.log(counterstate);
// counterstate ko acces isilye kar pa rhe ho because 
//full app is wrrapped with countercontext provider.
  return (
    <>
   
    
  
      <h1>Count App {counterstate.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    
    </>
  )
}

export default App
