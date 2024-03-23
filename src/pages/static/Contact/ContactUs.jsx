
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
                                    <div className="text fw-light">Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiPhoneCallFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Have any question?</h4>
                                            <a href="tel:980089850"> +92 (020)-9850</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiEnvelopeFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Write email</h4>
                                            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon icon-contact">
                                            <PiNavigationArrowFill />
                                        </div>
                                        <div className="contact-items">
                                            <h4>Visit anytime</h4>
                                            <span>66 broklyn golden street. New York</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/* <!-- Google Map HTML Codes --> */}
                            <iframe src="https://www.google.com/maps/embed" width="100%" height="550" frameborder="0" allowfullscreen=""></iframe>
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
                                            <span>Plot No 9, A Block, Ambedkarnagar, <br/> Shaktinagar, Sonebhadra, Uttar Pradesh, <br/>India - 231222</span>
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
                                            <span>Diwan deodi, Gulmandi, Chhatrapati <br/>Sambhaji Nagar, Maharashtra, India</span>
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