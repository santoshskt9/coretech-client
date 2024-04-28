import React, { useEffect, useRef } from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';
import FeatureSectionTwo from '../Sections/FeatureSectionTwo';
import IntroductionSection from '../Sections/IntroductionSection';
import WhySection from '../Sections/WhySection';
import ProcessSection from '../Sections/ProcessSection';
import SubServicesSection from '../Sections/SubServicesSection';
import VAPTFormSection from '../Sections/VAPTFormSection';
import ProcessSection2 from '../Sections/ProcessSection2';





const ManagedServices = () => {
    const formSectionRef = useRef(null);

    const navigateToSection = () => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const videos = [
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
        'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/vapt1.mp4',
    ];

    const slideContent = [
        {
            title: "Empower Your Business with Cutting-Edge Solutions",
            description: "Unlock the potential of your business with our innovative software solutions. From seamless automation to enhanced customer experiences, we have you covered.",
            buttonText: "Explore Solutions",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Streamline Operations, Boost Productivity",
            description: "Transform your workflow with our integrated solutions tailored to your needs. Say goodbye to manual processes and hello to increased efficiency.",
            buttonText: "Learn More",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Join the Ranks of Satisfied Clients",
            description: "Discover why our clients rave about our solutions. With a proven track record of success, we deliver results that exceed expectations.",
            buttonText: "See Success Stories",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },
        {
            title: "Partner with Us for Your Next Success Story",
            description: "Take the next step towards achieving your business goals. Partner with us to unlock unlimited possibilities and propel your business forward.",
            buttonText: "Get Started Today",
            buttonNavigation: navigateToSection,
            animation: 'fadeInRight',
        },

    ];

    const introduction = {
        "sectionTitle": "What are Managed Services?",
        "title": "Efficient IT Management Solutions",
        "description": "Managed services involve outsourcing the responsibility for maintaining, monitoring, and managing various aspects of an organization's IT infrastructure and systems to a third-party service provider. These services are designed to enhance operational efficiency, minimize downtime, and improve overall performance.",
        "features": [
            {
                "title": "Proactive Monitoring",
                "description": "Constantly monitor IT systems and infrastructure to identify and address potential issues before they escalate.",
                "iconClass": "flaticon-monitoring"
            },
            {
                "title": "24/7 Support",
                "description": "Provide round-the-clock technical support and assistance to address any IT-related issues or emergencies.",
                "iconClass": "flaticon-support"
            },
            {
                "title": "Security Management",
                "description": "Implement robust security measures and protocols to protect sensitive data and prevent cyber threats.",
                "iconClass": "flaticon-security"
            },
            {
                "title": "Regular Maintenance",
                "description": "Perform routine maintenance tasks and updates to ensure the smooth operation of IT systems and applications.",
                "iconClass": "flaticon-maintenance"
            }
        ],
        "images": [
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-3.jpg",
            "https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/images/resource/about-4.jpg"
        ]
    };

    const benefits = {
        "sectionTitle": "Benefits of Managed Services",
        "title": "Unlocking Business Advantages with Managed IT Solutions",
        "description": "Managed services offer numerous benefits to businesses by providing proactive IT management and support, enabling organizations to focus on their core objectives and strategic initiatives.",
        "services": [
            {
                "title": "Cost Savings",
                "description": "Reduce IT infrastructure and operational costs by outsourcing management and support tasks to a managed services provider.",
            },
            {
                "title": "Enhanced Security",
                "description": "Ensure data security and compliance with industry regulations through robust security management and monitoring.",
            },
            {
                "title": "Improved Efficiency",
                "description": "Minimize downtime and IT-related disruptions with proactive monitoring, maintenance, and support services.",
            },
            {
                "title": "Scalability",
                "description": "Easily scale IT resources and services to accommodate business growth and evolving needs without incurring additional expenses.",
            },
            {
                "title": "Focus on Core Activities",
                "description": "Free up internal resources and personnel to focus on core business activities and strategic initiatives.",
            },
            {
                "title": "Access to Expertise",
                "description": "Leverage the specialized knowledge and expertise of managed services providers to address complex IT challenges and issues.",
            }
        ]
    };

    const process = {
        "sectionTitle": "Our Managed Services Process",
        "title": "Efficient IT Management Workflow",
        "process": [
            {
                "stepId": 1,
                "title": "Assessment & Planning",
                "description": "Conduct a thorough assessment of existing IT infrastructure and business requirements to develop a customized managed services plan.",
                "iconClass": "flaticon-strategy"
            },
            {
                "stepId": 2,
                "title": "Implementation & Deployment",
                "description": "Deploy managed services solutions and tools to monitor, manage, and secure IT systems and assets.",
                "iconClass": "flaticon-settings"
            },
            {
                "stepId": 3,
                "title": "Monitoring & Management",
                "description": "Monitor IT infrastructure and systems in real-time, proactively address issues, and optimize performance.",
                "iconClass": "flaticon-monitoring"
            },
            {
                "stepId": 4,
                "title": "Support & Maintenance",
                "description": "Provide continuous support, maintenance, and updates to ensure the smooth operation of IT environments.",
                "iconClass": "flaticon-maintenance"
            }
        ]
    };

    const services = {
        "sectionTitle": "Our Managed Services Offerings",
        "title": "Comprehensive IT Management Solutions",
        "description": "We offer a wide range of managed services tailored to meet the unique needs and requirements of businesses across various industries.",
        "services": [
            {
                "index": "01",
                "title": "Network Monitoring & Management",
                "description": "Monitor and manage network infrastructure to ensure optimal performance, security, and reliability.",
                "iconClass": "flaticon-network"
            },
            {
                "index": "02",
                "title": "Server Management",
                "description": "Proactively manage and maintain servers to optimize performance, security, and uptime.",
                "iconClass": "flaticon-server"
            },
            {
                "index": "03",
                "title": "Desktop & Endpoint Management",
                "description": "Provide comprehensive management and support for desktops, laptops, and endpoint devices to enhance productivity and security.",
                "iconClass": "flaticon-desktop"
            },
            {
                "index": "04",
                "title": "Cloud Services Management",
                "description": "Manage cloud infrastructure, platforms, and services to ensure reliability, security, and cost-effectiveness.",
                "iconClass": "flaticon-cloud"
            }
        ],
        "cta": {
            "buttonText": "Get Started",
            "buttonLink": "#contact"
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <CarouselTwo videos={videos[0]} slideContent={slideContent} />
            {/* <FeatureSectionTwo /> */}
            <IntroductionSection data={introduction} />
            <WhySection data={benefits} />
            <ProcessSection2 data={process} />
            <SubServicesSection data={services} />
            <VAPTFormSection ref={formSectionRef} />

            {/* <section id="resources" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Resources</h2>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Articles</h5>
                                    <p class="card-text">Explore our collection of articles covering various topics related to ManagedServices and cybersecurity.</p>
                                    <a href="#" class="btn btn-primary">Read Articles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Whitepapers</h5>
                                    <p class="card-text">Download our whitepapers to learn more about ManagedServices methodologies and best practices.</p>
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

export default ManagedServices;