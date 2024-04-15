import React from 'react'
import { Link } from 'react-router-dom';

const WhySection = () => {
    return (
        <>
            <section className="about-section-two pt-1">
                <div className="container">
                    <div className="sec-title text-center px-5">
                        <span className="sub-title">Why VAPT?</span>
                        <h2>It's Very Crucial</h2>
                    </div>
                    <div className="text text-center px-5 mb-5">
                        <p>
                            VAPT (Vulnerability Assessment and Penetration Testing) is crucial for organizations to identify and address security vulnerabilities in their systems before malicious actors exploit them.
                        </p>

                        <p>
                            By conducting VAPT, organizations can proactively identify and mitigate security
                            weaknesses, protect sensitive data, and prevent potential cyber attacks.
                        </p>
                    </div>
                    <div className="row px-4">
                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-user-interface"></i>
                                <h6 className="title">Proactive Security Measures</h6>
                                <div className="text">Identify and mitigate potential security risks and vulnerabilities.</div>
                            </div>
                        </div>

                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-front-end"></i>
                                <h6 className="title">Compliance Requirements</h6>
                                <div className="text">Exploit these vulnerabilities to assess the effectiveness.</div>
                            </div>
                        </div>
                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-front-end"></i>
                                <h6 className="title">Risk Reduction</h6>
                                <div className="text">Identifying and addressing vulnerabilities early on.</div>
                            </div>
                        </div>
                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-front-end"></i>
                                <h6 className="title">Protecting Customer Data</h6>
                                <div className="text">Protect sensitive customer data, such as personal and financial information.</div>
                            </div>
                        </div>
                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-front-end"></i>
                                <h6 className="title">Maintaining Reputation</h6>
                                <div className="text"> Maintain a positive reputation by demonstrating a commitment.</div>
                            </div>
                        </div>
                        <div className="about-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <i className="icon flaticon-front-end"></i>
                                <h6 className="title">Cost Savings</h6>
                                <div className="text">Organizations avoid the costly consequences of security breaches.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhySection;