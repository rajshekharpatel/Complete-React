import React from 'react'
import './counter.css'
import { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked the button {count} times</p>
      <button id='btn' onClick={()=> {setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default counter

