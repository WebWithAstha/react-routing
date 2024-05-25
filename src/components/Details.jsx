import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Details = () => {
    const {section} =useParams()
    return (
        <div className='border rounded p-4 mt-4'>
            <h1 className='font-bold mb-2'>Details</h1>
            <p className='mb-2'>This is section {section}</p>
            <NavLink to="/about"><button className='px-3 py-1 rounded font-medium text-sm uppercase bg-zinc-500 text-white'>back</button></NavLink>
        </div>
    )
}

export default Details