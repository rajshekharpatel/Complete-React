import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>Click Here !</button>
    </div>
  )
}

export default Button
