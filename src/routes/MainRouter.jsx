import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/static/Home/Home';
import About from '../pages/static/About/About';
import Services from '../pages/static/Services/Services';
import ServiceDetails from '../pages/static/Services/ServiceDetails';
import Blogs from '../pages/static/Blogs/Blogs';
import BlogDetails from '../pages/static/Blogs/BlogDetails';

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service-details' element={<ServiceDetails/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/:slug' element={<BlogDetails/>}/>
        <Route path='*' element={<div className="p-5 d-flex justify-content-center align-items-center"><h1 className='text-center'>Page Not Found</h1></div>} />
    </Routes>
  )
}

export default MainRouter;