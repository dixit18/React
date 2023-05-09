import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  let location = useLocation()
  console.log(location)
  return (
    <>
    <div>Login</div>
   <h2>{location.state.st}</h2>
    </>
  )
}

export default Login