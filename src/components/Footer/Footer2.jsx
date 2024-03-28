import React from 'react';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import Brand from "../../assets/logo-5.png";
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <>
            <footer class="main-footer">
                <div class="bg bg-pattern-9"></div>
                <div class="container">
                    <div class="subscribe-form">
                        <div class="title-column">
                            <h5 class="title"><span className="icon"><LiaEnvelopeOpenTextSolid /> </span> Subscribe now to get <br />latest updates</h5>
                        </div>
                        <div class="form-column">
                            <form method="post" action="#">
                                <div class="form-group">
                                    <input type="email" name="email" class="email" value="" placeholder="Email Address" required="" />
                                    <button type="button" class="theme-btn"><i class="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!--Widgets Section--> */}
                <div class="widgets-section">
                    <div class="container">
                        <div class="row">
                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-12 col-md-12">
                                <div class="footer-widget about-widget">
                                    <div class="logo"><Link to="/"><img src={Brand} alt="" className='w-75' /></Link></div>
                                    <div class="text fw-light">
                                    We collaborate closely with you to maximize our partnerships with top technology firms, ensuring optimal implementation, integration, and support. Harnessing cutting-edge solutions drives innovation and maximizes your tech investments.
                                    </div>
                                    <ul class="social-icon-two">
                                        <li><Link target='_blank' to="#"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i class="fab fa-facebook"></i></Link></li>
                                        <li><Link target='_blank' to="https://www.linkedin.com/company/coretechinfra"><i class="fab fa-linkedin"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i class="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div class="footer-widget links-widget">
                                    <h6 class="widget-title">Explore</h6>
                                    <ul class="user-links">
                                        <li><Link to="#">About Company</Link></li>
                                        <li><Link to="#">Meet the Team</Link></li>
                                        <li><Link to="#">News & Media</Link></li>
                                        <li><Link to="#">Blogs & Articles</Link></li>
                                        <li><Link to="#">Trainings</Link></li>
                                        <li><Link to="#">Career</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--Footer Column--> */}
                            <div class="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div class="footer-widget links-widget">
                                    <h6 class="widget-title">Our Services</h6>
                                    <ul class="user-links">
                                        <li><Link to="#">Cloud Architecture</Link></li>
                                        <li><Link to="#">IT Infrastructure</Link></li>
                                        <li><Link to="#">Cyber Security</Link></li>
                                        <li><Link to="#">Business Optimazation</Link></li>
                                        <li><Link to="#">Cloud & Infra Security</Link></li>
                                        <li><Link to="#">Application Development</Link></li>
                                        <li><Link to="#">Service Management</Link></li>
                                    </ul>
                                </div>
                                
                            </div>

                            {/* <!--Footer Column--> */}
                            {/* <div class="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
						<div class="footer-widget gallery-widget">
							<h6 class="widget-title">Portfolio</h6>
							<div class="widget-content">
								<div class="outer clearfix">
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-1.jpg" alt=""/></Link>
									</figure>
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-2.jpg" alt=""/></Link>
									</figure>
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-3.jpg" alt=""/></Link>
									</figure>
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-4.jpg" alt=""/></Link>
									</figure>
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-5.jpg" alt=""/></Link>
									</figure>
									<figure class="image">
										<Link to="#"><img src="images/resource/project-thumb-6.jpg" alt=""/></Link>
									</figure>
								</div>
							</div>
						</div>
					</div> */}

                            {/* <!--Footer Column--> */}
                            {/* <div class="footer-column col-xl-3 col-lg-4 col-md-4">
						<div class="footer-widget contacts-widget">
							<h6 class="widget-title">Contact</h6>
							<div class="text">66 Road Broklyn Street, 600 New York, USA</div>
							<ul class="contact-info">
								<li><i class="fa fa-envelope"></i> <Link to="mailto:needhelp@potisen.com">needhelp@company.com</Link><br/></li>
								<li><i class="fa fa-phone-square"></i> <Link to="tel:+926668880000">+92 666 888 0000</Link><br/></li>
							</ul>
						</div>
					</div> */}

                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <h5 className='widget-title'><FaLocationArrow className='me-2' /> Corporate Office</h5>
                               <ul className="user-links">
                                <li>
                                <Link to="#">
                                    Coppell, Texas
                                </Link>
                                </li>
                               </ul>
                                <h5 className='widget-title'><FaPhoneAlt className='me-2' /> Call us on</h5>
                                <ul className="user-links">
                                <li><Link to="#">
                                USA: +1 (945) 278 5774
                                </Link></li>
                                <li>
                                <Link to='#'>
                                India: +91 (775) 788 1212
                                </Link>
                                </li>
                                </ul>
                                <h5 className='widget-title'><FaMessage className='me-2' /> Mail us on</h5>
                                <ul className="user-links">
                                    <li><Link to="#">
                                    info@coretechinfra.com
                                </Link>
                                </li>
                                <li>
                                <Link to="#">
                                    hr@coretechinfra.com
                                </Link>
                                </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Footer Bottom--> */}
                <div class="footer-bottom">
                    <div class="auto-container">
                        <div class="inner-container">
                            <div class="copyright-text"><p>&copy; {new Date().getFullYear()} Coretech Infrastructure Solutions, Inc. All Rights Reserved.</p></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2;