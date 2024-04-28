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
import ApplicationDevelopment from '../pages/static/Services/ApplicationDevelopment';
import Infrastructure from '../pages/static/Services/Infrastructure';
import CloudArchitecture from '../pages/static/Services/CloudArchitecture';
import BusinessOptimization from '../pages/static/Services/BusinessOptimization';
import ManagedServices from '../pages/static/Services/ManagedServices';
import CloudInfraSecurity from '../pages/static/Services/CloudInfraSecurity';
import NotFound from '../pages/static/Error/NotFound';

const MainRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/service-details' element={<ServiceDetails/>}/>
        <Route exact path='/cyber-security' element={<CyberSecurityService/>}/>
        <Route exact path='/vulnerability-assessment-penetration-testing' element={<VAPT/>}/>
        <Route exact path='/application-development' element={<ApplicationDevelopment/>}/>
        <Route exact path='/it-infrastructure' element={<Infrastructure/>}/>
        <Route exact path='/cloud-architecture' element={<CloudArchitecture/>}/>
        <Route exact path='/business-optimization' element={<BusinessOptimization/>}/>
        <Route exact path='/managed-services' element={<ManagedServices/>}/>
        <Route exact path='/cloud-and-infra-security' element={<CloudInfraSecurity/>}/>

        <Route exact path='/blogs' element={<Blogs/>}/>
        <Route exact path='/:slug' element={<BlogDetails/>}/>
        <Route exact path='/training' element={<Training />}/>
        <Route exact path='/career' element={<Careers />}/>
        <Route exact path='/contact' element={<ContactUs />}/>
        <Route exact path='/team' element={<Teams />}/>
        <Route exact path='/404' element={<NotFound />}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default MainRouter;