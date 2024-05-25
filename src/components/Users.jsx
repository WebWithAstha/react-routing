import {React} from 'react'
import { useNavigate } from 'react-router-dom'


const Users = () => {
  const navigate = useNavigate('')
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className='flex mt-10 items-center flex-col justify-center'>
      <h1 className='font-medium'>Hello User! Let's get you registered.</h1>
      <form onSubmit={submitHandler} className='w-96 mt-8 p-4 bg-zinc-50 rounded-lg shadow-md' action="">
        <input className='border-2 mt-2 w-full px-2 py-1 border-zinc-200 outline-zinc-300 rounded' type="text" placeholder="Name" />
        <input className='border-2 mt-2 w-full px-2 py-1 border-zinc-200 outline-zinc-300 rounded' type="email" placeholder="Email" />
        <input className='border-2 mt-2 w-full px-2 py-1 border-zinc-200 outline-zinc-300 rounded' type="password" placeholder="Password" />
        <input className='font-medium px-2 p-1 text-white mt-2 rounded block bg-blue-600/[.8] uppercase text-sm' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Users