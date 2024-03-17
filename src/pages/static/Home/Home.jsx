import React from 'react';
import './home.css';
import Carousel from '../../../components/Carousel/Carousel';
import Featured from '../../../components/Featured/Featured';
import TeamSection from '../Sections/TeamSection';
import ClientsSlider from '../Sections/ClientsSlider';
import WhyChooseUs from '../Sections/WhyChooseUs';

const Home = () => {

    const videos = [
        'videos/pixels.mp4',
        'videos/network.mp4',
        'videos/security.mp4'
    ];

    const slideContent = [
        {
            title: 'Healthcare Opportunity',
            description: 'Looking for a perfect healthcare job?',
            buttonText: 'Learn More About Jobs',
            animation: 'fadeInUp',
        },
        {
            title: 'Network with Professionals',
            description: 'Need a professionals?',
            buttonText: 'Explore Our Network',
            animation: 'fadeInRight',
        },
        {
            title: 'Security and Compliance',
            description: 'Want to secure your infrastructure?',
            buttonText: 'Learn More About Security',
            animation: 'fadeInLeft',
        },
    ];

    const featuredContent = {
        sectionName: "About Us",
        title: "Who we are",
        description: "Our purpose is to help people and organizations dream bigger, move faster, and build better tomorrows for all. We offer IT consulting services that will help you improve your software architecture, create a tech-driven digital strategy, and improve operations by optimising your software portfolio. Now we has been helping organizations of different scale and structure to improve and modernise their IT strategies.",
        analytics: [
            {
                count: "500+",
                name: "Projects Done",
            },
            {
                count: "20K+",
                name: "Happy Clients",
            },
        ],
        imgSrc: "images/about/1.png",
    };


    return (
        <>
            <Carousel videos={videos} slideContent={slideContent} />
            <WhyChooseUs/>
            <Featured featuredContent={featuredContent} />
            <ClientsSlider/>
            <TeamSection/>
        </>
    );
};

export default Home;
