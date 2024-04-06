import React, { useEffect, useState } from 'react';
import './TeamSection.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useGlobalContext } from '../../../global/context';
import TeamCard from '../../../components/Card/TeamCard';

const TeamSection2 = () => {
    const { api } = useGlobalContext();
    const [teams, setTeams] = useState([
        {
            "_id": "660c575715adad8d3026f54d",
            "name": "Kailash Nath",
            "jobTitle": "CEO And Co-Founder",
            "profileImage": "https://coretech-s3.s3.ap-south-1.amazonaws.com/team/de97a611-5eef-46bb-84b9-19dd16cd153e.jpg",
            "__v": 0
        },
        {
            "_id": "660c5af115adad8d3026f553",
            "name": "Vikram Varma",
            "jobTitle": "Chief Information Security Officer",
            "profileImage": "https://coretech-s3.s3.ap-south-1.amazonaws.com/team/20af5ce0-05fc-4c84-a71d-fe165e2c1701.jpeg",
            "__v": 0
        },
        {
            "socialLinks": {
                "facebook": "https://www.facebook.com/santoshskt9",
                "linkedin": "https://www.linkedin.com/in/santoshskt9",
                "twitter": "https://www.twitter.com/santoshskt9",
                "instagram": "https://www.instagram.com/santoshskt9"
            },
            "_id": "660c589415adad8d3026f54f",
            "name": "Santosh Kushwaha",
            "jobTitle": "Chief Technical Officer",
            "profileImage": "https://coretech-s3.s3.ap-south-1.amazonaws.com/team/de7730e5-ce24-436c-ba0a-d4b108561e11.jpg",
            "__v": 0
        },
        {
            "socialLinks": {
                "facebook": "",
                "linkedin": "",
                "twitter": "https://twitter.com/Gayatri_Kuswaha",
                "instagram": ""
            },
            "_id": "660c5aac15adad8d3026f551",
            "name": "Gayatri Kushwaha ",
            "jobTitle": "Chief Design Officer",
            "profileImage": "https://coretech-s3.s3.ap-south-1.amazonaws.com/team/143a36d1-957c-4d65-a546-49c134c8175c.jpg",
            "__v": 0
        },
        
    ]);

    // const getTeams = async () => {
    //     try {
    //         const res = await api.get(`/api/team?limit=${3}`);
    //         if (res?.status === 200) {
    //             console.log(res);
    //             setTeams(res?.data);
    //         }

    //     } catch (error) {
    //         console.log("Error fetching post", error);
    //     }
    // }

    // useEffect(() => {
    //     getTeams();
    // }, []);

    return (
        <section className="container-fluid">
            <div className="container">
                <div class="sec-title text-center">
                    <span class="sub-title">Team</span>
                    <h2>Meet Our Team</h2>
                </div>
                <div className="row">
                    {
                        teams?.map((member, i) => (
                            <TeamCard data={member} key={i} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamSection2