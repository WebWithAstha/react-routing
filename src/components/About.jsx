import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='w-full h-full p-20'>
        <h1 className='font-semibold text-xl'>Who we are ?</h1>
        <p className='mt-2 leading-tight w-'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime, adipisci corporis voluptatem quaerat dignissimos et consectetur accusantium deserunt consequuntur iusto, non repudiandae nemo tempore, esse nesciunt magni praesentium dolorum?</p>
          <h1 className='font-semibold text-xl mt-10'>Take a Look At...</h1>
          <div className="items flex list-disc mt-6">
            <NavLink to="/about/1" className='hover:bg-zinc-300 border border-r-0 px-3 py-1 '>Section 1</NavLink>
            <NavLink to="/about/2" className='hover:bg-zinc-300 border border-r-0 px-3 py-1 '>Section 2</NavLink>
            <NavLink to="/about/3" className='hover:bg-zinc-300 border px-3 py-1 '>Section 3</NavLink>

          </div>

        <Outlet/>
      </div>
    </>
  )
}

export default About