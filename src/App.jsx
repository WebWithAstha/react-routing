import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Nav from './components/Nav';
import NotFound from './components/NotFound.jsx';

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App