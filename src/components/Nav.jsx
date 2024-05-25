import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center justify-center gap-8 mt-10'>
        <NavLink className={(e)=>(e.isActive?'text-blue-500 font-bold':'text-zinc-800')} to='/'>Home</NavLink>
        <NavLink className={(e)=>(e.isActive?'text-blue-500 font-bold':'text-zinc-800')} to='/about'>About</NavLink>
        <NavLink className={(e)=>(e.isActive?'text-blue-500 font-bold':'text-zinc-800')} to='/users'>Users</NavLink>
      </nav>
  )
}

export default Nav