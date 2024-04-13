import React from 'react';
import CarouselTwo from '../../../components/Carousel/CarouselTwo';

const videos = [
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/pixels.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/pixels.mp4',
    'https://coretech-prod-s3.s3.ap-south-1.amazonaws.com/public/videos/pixels.mp4',
];

const slideContent = [
    {
        title: "Comprehensive Security Assessment",
        description: "Identify vulnerabilities across your network, applications, and systems with our comprehensive security assessment.",
        buttonText: 'Explore more',
        animation: 'fadeInRight',
    },
    {
        title: "Proactive Threat Detection",
        description: "Stay ahead of cyber threats with proactive detection and continuous monitoring of your IT infrastructure.",
        buttonText: 'Explore more',
        animation: 'fadeInRight',
    },
    {
        title: "Expert Penetration Testing",
        description: "Leverage our team of experienced security experts to conduct thorough penetration testing and secure your assets.",
        buttonText: 'Explore more',
        animation: 'fadeInRight',
    },

];

const VAPT = () => {
    return (
        <>
            <CarouselTwo videos={videos} slideContent={slideContent} />
        </>
    )
}

export default VAPT;