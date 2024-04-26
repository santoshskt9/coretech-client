import React, { useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
];



const VAPT = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const slideContent = [
        {
            title: "Comprehensive Security Assessment",
            description: "Identify vulnerabilities across your network, applications, and systems with our comprehensive security assessment.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Proactive Threat Detection",
            description: "Stay ahead of cyber threats with proactive detection and continuous monitoring of your IT infrastructure.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Expert Penetration Testing",
            description: "Leverage our team of experienced security experts to conduct thorough penetration testing and secure your assets.",
            buttonText: 'Find your security loopholes',
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
    
    ];

    const introduction = {
        sectionTitle: "What is VAPT?",
        title: "Vulnerability Assesment and Penetration Testing",
        description: "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a comprehensive security testing process that evaluates the security posture of an organization's systems and infrastructure.",
        paragraphs: [],
        features: [
            {
                title: "Vulnerability Assessment",
                description: "VA identifies and quantifies vulnerabilities in the system.",
                iconClass: "flaticon-user-interface"
            },
            {
                title: "Penetration Testing",
                description: "Exploit these vulnerabilities to assess the effectiveness.",
                iconClass: "flaticon-front-end"
            },
        ],
        cta: {
            buttonText: "Explore now",
            buttonLink: "#"
        },
        images: [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ],
    };

    return (
        <>
            <CarouselTwo videos={videos[0]} slideContent={slideContent} />
            <FeatureSectionTwo />
            <IntroductionSection data={introduction}/>
            <WhySection />
            <ProcessSection />
            <SubServicesSection />

            <VAPTFormSection ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
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
            </section> */}



        </>
    )
}

export default VAPT;