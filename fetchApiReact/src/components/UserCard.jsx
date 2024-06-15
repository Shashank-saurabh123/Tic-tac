import React from 'react'

function UserCard(props) {
 // console.log(props.data);
  return (
    <div className='user-car'>
    <img className="user-img"/>
    <h3>{props.data.name.first}</h3>
    <p>{props.data.phone}</p>
    <p>{props.data.location.city}</p>
    </div>
  )
}

export default UserCard
