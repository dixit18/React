import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let nevigate = useNavigate()
  return (
    <>
    <div>Dashboard</div>
    <button onClick={()=>{nevigate("/logout")
    }}>Logout</button>
    </>
  )
}

export default Dashboard