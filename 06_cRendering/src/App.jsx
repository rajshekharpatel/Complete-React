import { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);


  // by if statement
  if(!isLoggedIn) {
    return (
      <Login />
    )
  }


  // by logical && operator
  return (
    <div>
      <h1>Welcome to my Web Development Journey</h1>
      <div>{isLoggedIn && <Logout />}</div>
    </div>
  )


  // by ternary operator
  // return (
  //   <div>{ isLoggedIn ? <Logout/> : <Login/> }</div>
  // )

  // by if-else statement
  // if (isLoggedIn) {
  //   return (<Logout />)
  // }
  // else {
  //   return (<Login />)
  // }

  return (
    <>

    </>
  )
}

export default App
