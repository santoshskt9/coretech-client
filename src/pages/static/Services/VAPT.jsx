import React from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
];

const slideContent = [
    {
        title: "Comprehensive Security Assessment",
        description: "Identify vulnerabilities across your network, applications, and systems with our comprehensive security assessment.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },
    {
        title: "Proactive Threat Detection",
        description: "Stay ahead of cyber threats with proactive detection and continuous monitoring of your IT infrastructure.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },
    {
        title: "Expert Penetration Testing",
        description: "Leverage our team of experienced security experts to conduct thorough penetration testing and secure your assets.",
        buttonText: 'Find your security loopholes',
        buttonNavigation: "",
        animation: 'fadeInRight',
    },

];

const VAPT = () => {
    return (
        <>
            <CarouselTwo videos={videos[0]} slideContent={slideContent} />
            <section className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4">What is VAPT?</h2>
                        <p>
                            VAPT stands for Vulnerability Assessment and Penetration Testing. It is a comprehensive
                            security testing process that evaluates the security posture of an organization's systems
                            and infrastructure.
                        </p>
                        <p>
                            VAPT involves two main components: Vulnerability Assessment (VA) and Penetration Testing
                            (PT). VA identifies and quantifies vulnerabilities in the system, while PT attempts to
                            exploit these vulnerabilities to assess the effectiveness of existing security controls.
                        </p>
                        <p>
                            By conducting VAPT, organizations can proactively identify and mitigate security
                            weaknesses, protect sensitive data, and prevent potential cyber attacks.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Why VAPT?</h5>
                                <ul className="list-unstyled">
                                    <li>- Identify and prioritize security risks</li>
                                    <li>- Protect against cyber attacks</li>
                                    <li>- Ensure compliance with regulations</li>
                                    <li>- Enhance overall security posture</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="key-components-vapt-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mb-4">
                                <h2 className="section-title">Key Components of VAPT</h2>
                                <div className="title-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body">
                                    <h3 className="card-title">Vulnerability Assessment</h3>
                                    <p className="card-text">Identifying vulnerabilities, misconfigurations, and weaknesses in systems, networks, and applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body">
                                    <h3 className="card-title">Penetration <br/> Testing</h3>
                                    <p className="card-text">Simulating real-world cyber attacks to exploit vulnerabilities and assess security controls.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-body">
                                    <h3 className="card-title">Reporting and Remediation</h3>
                                    <p className="card-text">Providing detailed reports of vulnerabilities and recommendations for remediation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">VAPT Services</h2>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Web Application Security Testing</h3>
                                <p className="card-text">Ensure the security of your web applications through comprehensive testing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Network Security Testing</h3>
                                <p className="card-text">Evaluate the security of your network infrastructure to prevent unauthorized access.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">System Security Testing</h3>
                                <p className="card-text">Assess the security of your systems and servers to identify vulnerabilities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">API Security Testing</h3>
                                <p className="card-text">Ensure the security of your APIs to protect data and prevent unauthorized access.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Android Application Security Testing</h3>
                                <p className="card-text">Evaluate the security of your Android applications to identify and fix vulnerabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="why-choose-us" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5">Why Choose Us?</h2>
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Expertise and Experience</h3>
                        <p class="card-text">We have extensive expertise and experience in the field of cybersecurity.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Skilled Professionals</h3>
                        <p class="card-text">Our team consists of skilled and certified security professionals.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Proven Track Record</h3>
                        <p class="card-text">We have a proven track record of successful VAPT projects.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">Customized Solutions</h3>
                        <p class="card-text">We provide customized solutions tailored to our clients' specific needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="resources" class="py-5">
    <div class="container">
        <h2 class="text-center mb-4">Resources</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Articles</h5>
                        <p class="card-text">Explore our collection of articles covering various topics related to VAPT and cybersecurity.</p>
                        <a href="#" class="btn btn-primary">Read Articles</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Whitepapers</h5>
                        <p class="card-text">Download our whitepapers to learn more about VAPT methodologies and best practices.</p>
                        <a href="#" class="btn btn-primary">Download Whitepapers</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Industry Reports</h5>
                        <p class="card-text">Access industry reports and surveys on cybersecurity trends and threats.</p>
                        <a href="#" class="btn btn-primary">View Reports</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}

export default VAPT;