import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h3>Budget XP</h3>
      <div className="nav-wrapper">
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/create'} >Create</NavLink>
        <NavLink to={'/help'} >help</NavLink>
      </div>
    </nav>
  )
}

export default Navbar