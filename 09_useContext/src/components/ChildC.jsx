import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
        Name:{user.name}<br />
        Age:{user.age}<br />
        Email:{user.email}
    </div>
  )
}

export default ChildC
