import React from 'react'

function Postcard(props) {
  return (
    <div className='post-card'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  ) 
}

export default Postcard
