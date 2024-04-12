import React from 'react';
import { FiActivity, FiAlertOctagon, FiSettings, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhatWeDoSection = () => {
    return (
        <>
            <section className="container-fluid  bg-light p-0">
                <div className="container-fluid bg-black ">
                    <div className="container py-5">
                        <div className="sec-title text-center">
                            <span className="sub-title">Services</span>
                            <h2 className='mb-3 text-white'>What We Do</h2>

                        </div>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col p-5">
                                <Link to="" className="mb-3 text-warning    ">
                                    <h2>Development</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{color: "lightgrey"}}>
                                    Frontend, Backend, HTML, CSS, JavaScript, SASS, Wordpress,
                                    Angular, React, PHP, NodeJS
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="" className="mb-3 text-warning    ">
                                    <h2>Cyber Security</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{color: "lightgrey"}}>
                                    Frontend, Backend, HTML, CSS, JavaScript, SASS, Wordpress,
                                    Angular, React, PHP, NodeJS
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="" className="mb-3 text-warning    ">
                                    <h2>Managed Services</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{color: "lightgrey"}}>
                                    Frontend, Backend, HTML, CSS, JavaScript, SASS, Wordpress,
                                    Angular, React, PHP, NodeJS
                                </p>
                            </div>
                            <div className="col p-5">
                                <Link to="" className="mb-3 text-warning    ">
                                    <h2>Corporate Training</h2>
                                </Link>
                                <p className="text w-75 fw-semibold" style={{color: "lightgrey"}}>
                                    Frontend, Backend, HTML, CSS, JavaScript, SASS, Wordpress,
                                    Angular, React, PHP, NodeJS
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="process-title text-center">
                        {/* <span className='fs-2 fw-bold'>the</span> */}
                        <h2 className='fw-bolder'>
                            PROCESS
                        </h2>

                    </div>
                    <div className="services-section-three">

                        <div class="row">
                            <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div class="inner-box">
                                    <div class="content">
                                        <div class="icon-box"><span className="icon"><FiTarget /></span></div>
                                        <h5 class="title"><a href="page-service-details.html">Assessment</a></h5>
                                        <div class="text">Conduct a comprehensive assessment of your existing security posture and vulnerabilities.</div>
                                    </div>
                                    <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>

                            <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div class="inner-box">
                                    <div class="content">
                                        <div class="icon-box"><span className="icon"><FiSettings /></span></div>
                                        <h5 class="title"><a href="page-service-details.html">Implementation</a></h5>
                                        <div class="text">Deploy customized security solutions based on assessment findings for cyber defense.</div>
                                    </div>
                                    <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>

                            <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div class="inner-box">
                                    <div class="content">
                                        <div class="icon-box"><span className="icon"><FiActivity /></span></div>
                                        <h5 class="title"><a href="page-service-details.html">Monitoring</a></h5>
                                        <div class="text">Continuously monitor network traffic, logs, and user activity for signs of suspicious behavior.</div>
                                    </div>
                                    <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>


                            <div class="service-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div class="inner-box">
                                    <div class="content">
                                        <div class="icon-box"><span className="icon"><FiAlertOctagon /></span></div>
                                        <h5 class="title"><a href="page-service-details.html">Incident Response</a></h5>
                                        <div class="text">Swiftly respond to security incidents with predefined incident response procedures.</div>
                                    </div>
                                    <a href="page-service-details.html" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatWeDoSection;