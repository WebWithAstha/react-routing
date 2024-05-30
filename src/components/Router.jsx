import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import Users from './Users';
import About from './About';
import NotFound from './NotFound.jsx';
import Details from './Details.jsx';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/about' element={<About />}>
                <Route path='/about/:section' element={<Details />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router