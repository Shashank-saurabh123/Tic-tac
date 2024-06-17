import React from 'react'

function Btn(props) {
  return (
    <div className='btn'>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

export default Btn
