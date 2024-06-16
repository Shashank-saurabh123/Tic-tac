import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

function Counter() {
  const testing = useContext(CounterContext)

  return (
    <div>
      
      <button onClick={() => testing.setCount(testing.count + 1)}>Increase count</button>
      <button onClick={() => testing.setCount(testing.count - 1)}>Decrease count</button>
    </div>
  )
}

export default Counter
