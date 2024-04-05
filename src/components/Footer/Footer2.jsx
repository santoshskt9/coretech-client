import React, { useState } from 'react';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import Brand from "../../assets/logo-5.png";
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../global/context';

const Footer2 = () => {
    const {api} = useGlobalContext();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = async () => {
        try {
            const res = await api.post(`/api/subscriber`, { email });
            if (res?.status === 201) {
                console.log(res);
                setEmail("");
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    };



    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-9"></div>
                <div className="container">
                    <div className="subscribe-form">
                        <div className="title-column">
                            <h5 className="title"><span className="icon"><LiaEnvelopeOpenTextSolid /> </span> Subscribe now to get <br />latest updates</h5>
                        </div>
                        <div className="form-column">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <input type="email" name="email" className="email" placeholder="Email Address" value={email} onChange={handleEmailChange} required />
                                    <button type="button" className="theme-btn" onClick={handleSubscribe}><i className="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!--Widgets Section--> */}
                <div className="widgets-section">
                    <div className="container">
                        <div className="row">
                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link to="/"><img src={Brand} alt="" className='w-75' /></Link></div>
                                    <div className="text fw-light">
                                        We collaborate closely with you to maximize our partnerships with top technology firms, ensuring optimal implementation, integration, and support. Harnessing cutting-edge solutions drives innovation and maximizes your tech investments.
                                    </div>
                                    <ul className="social-icon-two">
                                        <li><Link target='_blank' to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link target='_blank' to="https://www.linkedin.com/company/coretechinfra"><i className="fab fa-linkedin"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link target='_blank' to="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!--Footer Column--> */}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div className="footer-widget links-widget">
                                    <h6 className="widget-title">Explore</h6>
                                    <ul className="user-links">
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
                            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                                <div className="footer-widget links-widget">
                                    <h6 className="widget-title">Our Services</h6>
                                    <ul className="user-links">
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
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text"><p>&copy; {new Date().getFullYear()} Coretech Infrastructure Solutions, Inc. All Rights Reserved.</p></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2;