import React from 'react'
import { Link } from 'react-router-dom';

const IntroductionSection = () => {
    return (
        <>
            <section className="about-section-two">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                {/* <div className="float-text">VAPT</div> */}
                                <div className="sec-title">
                                    <span className="sub-title">What is VAPT?</span>
                                    <h2>Vulnerability Assesment and Penetration Testing</h2>
                                    <div className="text">
                                        <p>
                                            VAPT stands for Vulnerability Assessment and Penetration Testing. It is a comprehensive
                                            security testing process that evaluates the security posture of an organization's systems
                                            and infrastructure.
                                        </p>
{/*                                        
                                        <p>
                                            By conducting VAPT, organizations can proactively identify and mitigate security
                                            weaknesses, protect sensitive data, and prevent potential cyber attacks.
                                        </p> */}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-user-interface"></i>
                                            <h6 className="title">Vulnerability Assessment</h6>
                                            <div className="text">VA identifies and quantifies vulnerabilities in the system.</div>
                                        </div>
                                    </div>

                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-front-end"></i>
                                            <h6 className="title">Penetration Testing</h6>
                                            <div className="text">Exploit these vulnerabilities to assess the effectiveness.</div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg" alt="" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg" alt="" /></figure>
                                <div className="experience bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-design"></i>
                                        <div className="text">Founded<br /> 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroductionSection;