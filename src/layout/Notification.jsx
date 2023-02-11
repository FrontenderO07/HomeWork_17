import React from 'react'
import { NavLink } from 'react-router-dom'

const Notification = () => {
  return (
    <div>
    <NavLink 
     to="/notifications"
     style={({ isActive }) => ({
       color: isActive ? "#fff" : "#545e6f",
       background: isActive ? "#370c0c" : "#fefbfb",
     })}>Notification</NavLink>
    </div>
  )
}

export default Notification