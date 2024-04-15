import React from 'react';

const ProcessSection = () => {
    return (
        <>
            <section className="process-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Work Process</span>
                        <h2>3 easy working steps</h2>
                    </div>

                    <div className="row">
                        {/* <!-- Process block --> */}
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="count">01</span>
                                    <i className="icon flaticon-concept"></i>
                                </div>
                                <h5 className="title">Vulnerability Assessment</h5>
                                <div className="text">Identifying vulnerabilities, misconfigurations, and weaknesses in systems, networks, and applications.</div>
                            </div>
                        </div>

                        {/* <!-- Process block --> */}
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="count">02</span>
                                    <i className="icon flaticon-programmer"></i>
                                </div>
                                <h5 className="title">Penetration Testing</h5>
                                <div className="text">Simulating real-world cyber attacks to exploit vulnerabilities and assess security controls.</div>
                            </div>
                        </div>

                        {/* <!-- Process block Two  --> */}
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="count">03</span>
                                    <i className="icon flaticon-access"></i>
                                </div>
                                <h5 className="title">Reporting and Remediation</h5>
                                <div className="text">Providing detailed reports of vulnerabilities and recommendations for remediation.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessSection;