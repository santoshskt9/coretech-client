import React, { useEffect } from 'react';

import { FaCloudscale, FaShieldVirus } from 'react-icons/fa';
import { FaBuildingColumns, FaShieldHalved } from 'react-icons/fa6';
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';
import { Link } from 'react-router-dom';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
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
                                <div className="icon-box"><FaShieldVirus className='icon'/></div>
                                <h5 className="title"><Link to="/vulnerability-assessment-penetration-testing">VAPT</Link></h5>
                                <div className="text">Stay ahead of cyber threats with proactive detection and continuous monitoring.</div>
                                <Link to="/vulnerability-assessment-penetration-testing" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaCloudscale className='icon'/></div>
                                <h5 className="title"><Link to="/cloud-architecture">Cloud Architecture</Link></h5>
                                <div className="text">Streamline infrastructure, optimize performance, secure data.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaBuildingColumns className='icon'/></div>
                                <h5 className="title"><Link to="/it-infrastructure">IT Infrastructure</Link></h5>
                                <div className="text">Optimize networks, enhance operations with IT Infrastructure Excellence.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>

                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="/cyber-security">Cyber Security</Link></h5>
                                <div className="text">Safeguard data, protect networks, mitigate risks.</div>
                                <Link to="/cyber-security" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="/business-optimization">Business Optimization</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="managed-services">Managed Services</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><FaShieldHalved className='icon'/></div>
                                <h5 className="title"><Link to="/cloud-infrastructure">Cloud & Infra Security</Link></h5>
                                <div className="text">Tincidunt elit magnis nulla facilisis sags maecenas nunc amet ultrices.</div>
                                <Link to="#" className="read-more"><i className="fa fa-long-arrow-alt-right"></i> Read more</Link>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </section>
        </>
    )
}

export default Services;