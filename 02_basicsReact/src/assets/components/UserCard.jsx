import React from 'react'




import "./UserCard.css"


const userCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <h1 id='user-name'>{props.name}</h1>

        <img id='user-img' src={props.image} alt={props.name}></img>

        <h2 id='user-desc'>{props.desc}</h2>
    </div>
  )
}

export default userCard
