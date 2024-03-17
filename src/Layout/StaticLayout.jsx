import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Footer2 from '../components/Footer/Footer2';

const StaticLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer /> */}
            <Footer2/>
        </>
    )
}

export default StaticLayout;