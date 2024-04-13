import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/static/Home/Home';
import About from '../pages/static/About/About';
import Services from '../pages/static/Services/Services';
import ServiceDetails from '../pages/static/Services/ServiceDetails';
import Blogs from '../pages/static/Blogs/Blogs';
import BlogDetails from '../pages/static/Blogs/BlogDetails';
import Training from '../pages/static/Training/Training';
import Careers from '../pages/static/Careers/Careers';
import ContactUs from '../pages/static/Contact/ContactUs';
import Teams from '../pages/static/Team/Teams';
import CyberSecurityService from '../pages/static/Services/CyberSecurityService';
import VAPT from '../pages/static/Services/VAPT';

const MainRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/service-details' element={<ServiceDetails/>}/>
        <Route exact path='/cyber-security' element={<CyberSecurityService/>}/>
        <Route exact path='/vulnerability-assessment-penetration-testing' element={<VAPT/>}/>

        <Route exact path='/blogs' element={<Blogs/>}/>
        <Route exact path='/:slug' element={<BlogDetails/>}/>
        <Route exact path='/training' element={<Training />}/>
        <Route exact path='/career' element={<Careers />}/>
        <Route exact path='/contact' element={<ContactUs />}/>
        <Route exact path='/team' element={<Teams />}/>
        <Route path='*' element={<div className="p-5 d-flex justify-content-center align-items-center"><h1 className='text-center'>Page Not Found</h1></div>} />
    </Routes>
  )
}

export default MainRouter;