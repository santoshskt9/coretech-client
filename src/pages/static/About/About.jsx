import React from 'react'
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';
import './About.css';
import { FaBuildingColumns, FaChartSimple, FaShieldHalved } from 'react-icons/fa6';
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { FaCloudscale } from 'react-icons/fa';
import TeamSection from '../Sections/TeamSection';

const About = () => {
    return (
        <>
            <BreadCrumb2
                heading="About Us"
            />
            <section className="mission-section container">
                <div className="row mb-5">
                    <div className="col">
                        <img src="images/about/mission.jpg" alt="about" className='w-100' />
                    </div>
                    <div className="col p-5">
                        <h1 className='text-warning'>Our Mission</h1>
                        <p>Enterprise Solutions, Inc has established itself as a premier provider of contingent labor within the industry since its establishment in 2000.
                        </p><p>
                            Our core objective is to effect meaningful change by providing a gateway to boundless opportunities that facilitate the connection, empowerment, and success of our talent ecosystem.

                        </p>
                    </div>
                </div>
                <div className="row">

                    <div className="col p-5">
                        <h1 className='text-warning'>Our Vision</h1>
                        <p>Enterprise Solutions, Inc has established itself as a premier provider of contingent labor within the industry since its establishment in 2000.
                        </p><p>
                            Our core objective is to effect meaningful change by providing a gateway to boundless opportunities that facilitate the connection, empowerment, and success of our talent ecosystem.

                        </p>
                    </div>
                    <div className="col">
                        <img src="images/about/mission.jpg" alt="about" className='w-100' />
                    </div>
                </div>
            </section>

            <section className="services-section container pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">What We’re Offering</span>
                        <h2>Services we’re offering to <br />our customers.</h2>
                    </div>

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

                    <div className="bottom-box">
                        <div className="text">Trust the experts for all your <strong>web design & development</strong> needs.</div>
                        <a href="page-services.html" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></a>
                    </div>
                </div>
            </section>

            <TeamSection/>
        </>
    )
}

export default About;