import React from 'react';

import { FaCloudscale } from 'react-icons/fa';
import { FaBuildingColumns, FaShieldHalved } from 'react-icons/fa6';
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';

const Services = () => {
    return (
        <>
            <BreadCrumb2
                heading="Services"
            />
            <section className="services-section container pt-0">
                <div className="auto-container">
                    

                    <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudscale className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">Cloud Architecture</a></h5>
                                <div className="text">Streamline infrastructure, optimize performance, secure data.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBuildingColumns className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">IT Infrastructure</a></h5>
                                <div className="text">Optimize networks, enhance operations with IT Infrastructure Excellence.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">Cyber Security</a></h5>
                                <div className="text">Safeguard data, protect networks, mitigate risks.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">Business Optimization</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">Service Management</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><a href="page-service-details.html">Cloud & Infra Security</a></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <a href="page-service-details.html" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</a>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </section>
        </>
    )
}

export default Services;