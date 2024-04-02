import React, { useEffect, useState } from 'react';
import './TeamSection.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useGlobalContext } from '../../../global/context';
import TeamCard from '../../../components/Card/TeamCard';

const TeamSection2 = () => {
    const { api } = useGlobalContext();
    const [teams, setTeams] = useState();

    const getTeams = async () => {
        try {
            const res = await api.get(`/api/team?limit=${3}`);
            if (res?.status === 200) {
                console.log(res);
                setTeams(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    useEffect(() => {
        getTeams();
    }, []);

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