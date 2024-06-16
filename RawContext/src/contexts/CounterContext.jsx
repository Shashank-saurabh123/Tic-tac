import React, { createContext, useState } from 'react'

export const CounterContext = createContext(null)

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(10)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  )
}
