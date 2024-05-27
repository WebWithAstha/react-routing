import axios from '../helper/Instance.jsx'
import {React,useState} from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const [users, setusers] = useState([])
  const handleClick = async () => {
    const { data } = await axios.get('/users')
    setusers([...data])
  }
  return (
    <>
    <div className='w-full h-full p-20 flex items-center gap-10'>
      <img className='w-1/3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" />
      <div className="w-1/2 px-6">
        <p className=''>Hello! This is a very basic website built using React, one of the most popular JavaScript libraries for building user interfaces. React allows developers to create dynamic and interactive web applications with ease. This website serves as a simple example of what can be achieved using React's fundamental concepts.</p>
        <NavLink to="/about"><button className='px-3 py-1 mt-4 rounded font-medium text-sm uppercase bg-zinc-500 text-white'>About </button></NavLink>
      </div>
    </div>
    <div className='px-20'>

        <button onClick={handleClick} className='text-mb'>Click to get <span className='text-blue-500 underline font-medium'>users</span></button>
    <h1 className='font-bold uppercase text-xl my-4'>Users</h1>
    {users.map((user,i)=>{
      return(
        <h1 key={i} className='mt-2'>{i+1}. {user.name}</h1>
      )
    })}
    </div>
    </>
  )
}

export default Home