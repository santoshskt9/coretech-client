
import React from 'react'
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2'
import { PiEnvelope, PiEnvelopeFill, PiNavigationArrowFill, PiPhoneCallFill } from 'react-icons/pi'
import './ContactUs.css';
import { FaMap } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <>
            <BreadCrumb2
                heading='Contact Us' />

            <section className="contact-details my-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 mb-md-60">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch with us</h2>
                                    <div className="text fw-light">

                                        For any inquiries, feedback, or collaboration opportunities, please don't hesitate to reach out to us. Our corporate office is dedicated to providing excellent support and fostering meaningful connections with our stakeholders.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiPhoneCallFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Have any question?</h4>
                                            <a href="tel:+19452785774">USA: +1 (945) 278 5774</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiEnvelopeFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Write email</h4>
                                            <a href="mailto:info@coretecchinfra.com">info@coretecchinfra.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiNavigationArrowFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Visit anytime</h4>
                                            <span>Vista Point North <br/>405 State Highway 121, <br/>Suite A250, Lewisville, <br/>Texas, 75067, USA</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/* <!-- Google Map HTML Codes --> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3346.4578352604344!2d-96.981067!3d32.991703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2e6ea5f206db%3A0x1e31269da04d94f1!2sRegus%20-%20Lewisville%20-%20Vista%20Point%20North!5e0!3m2!1sen!2sin!4v1714313080357!5m2!1sen!2sin" width="100%" height="550" className='rounded-4' frameborder="0" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </section>


            {/* Office Addresses */}
            <section className="office-addresses mb-5">
                <div className="container">
                    <div class="sec-title text-center">
                        <span class="sub-title">Other Offices</span>
                        <h2 class="section-title__title">Offices in India</h2>
                    </div>
                    <div className="row">
                        <div className="col office">
                            <h3>Uttar Pradesh</h3>
                            <ul className="list-unstyled contact-details__offices">
                                <li>
                                    <div className="icon icon-contact">
                                        <PiPhoneCallFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Call Us</h4>
                                        <a href="tel:+918050572875">+91 (805)-0572875</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon icon-contact">
                                        <PiEnvelopeFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Write email</h4>
                                        <a href="mailto:info@coretechinfra.com">info@coretechinfra.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon icon-contact">
                                        <PiNavigationArrowFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Visit anytime</h4>
                                        <a href='https://maps.app.goo.gl/42UdWMYrBT3T4CpX8' >Plot No 9, A Block, Ambedkarnagar, <br /> Shaktinagar, Sonebhadra, Uttar Pradesh, <br />India - 231222</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col office">
                            <h3>Maharastra</h3>
                            <ul className="list-unstyled contact-details__offices">
                                <li>
                                    <div className="icon icon-contact">
                                        <PiPhoneCallFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Call Us</h4>
                                        <a href="tel:+917757881212">+ 91 (775) 7881212</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon icon-contact">
                                        <PiEnvelopeFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Write email</h4>
                                        <a href="mailto:info@coretechinfra.com">info@coretechinfra.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon icon-contact">
                                        <PiNavigationArrowFill />
                                    </div>
                                    <div className="contact-items">
                                        <h4>Visit anytime</h4>
                                        <a href='https://maps.app.goo.gl/EYyynCYt3zfaNgzK7'>Diwan deodi, Gulmandi, Chhatrapati <br/> Sambhaji Nagar, (Aurangabad), Maharashtra, <br/> India - 431001</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section class="team-contact-form">
                <div class="container pb-100">
                    <div class="sec-title text-center">
                        <span class="sub-title">Contact With Us Now</span>
                        <h2 class="section-title__title">Feel Free to Write Our <br /> Technology Experts</h2>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            {/* <!-- Contact Form --> */}
                            <form id="contact_form" name="contact_form" class="" action="" method="post">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_name" class="form-control" type="text" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_email" class="form-control required email" type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_phone" class="form-control" type="text" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                </div>
                                <div class="mb-3 text-center">
                                    <input name="form_botcheck" class="form-control" type="hidden" value="" />
                                    <button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
                                    <button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button>
                                </div>
                            </form>
                            {/* <!-- Contact Form Validation--> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs