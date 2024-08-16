import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';
import profile1 from"../../assets/img/profile1.webp"
import profile2 from"../../assets/img/profile2.jpeg"
import profile3 from"../../assets/img/profile3.webp"
import profile5 from"../../assets/img/profile5.webp"
import brand1 from "../../assets/img/brand/brand-1.png"
import brand2 from "../../assets/img/brand/brand-2.png"
import brand3 from "../../assets/img/brand/brand-3.png"
import brand4 from "../../assets/img/brand/brand-4.png"
import brand5 from "../../assets/img/brand/brand-5.png"
import brand6 from "../../assets/img/brand/brand-6.png"
import brand7 from "../../assets/img/brand/brand-7.png"
import brand8 from "../../assets/img/brand/brand-8.png"

const AboutPage = () => {
    pageTitle('About Us');
    const [skillBar, setSkillBar] = useState(false);
    const teamData = [
        {
            id: 1,
            name: 'David Beckham',
            title: 'UI Designer',
            image:profile1,
        },
        {
            id: 2,
            name: 'Michel Aoun',
            title: 'CEO & Founder',
            image:profile2,
        },
        {
            id: 3,
            name: 'Steve Rhodes',
            title: 'Project Manager',
            image: profile3,
        },
        {
            id: 4,
            name: 'Cansu Tuman',
            title: 'Senior Designer',
            image: profile5,
        },
    ];    
    const counterData = [
        {
            id: 520,
            description: 'Project Complete At Last 5 Years',
            value: 'K'
        },
        {
            id: 95,
            description: 'Clients Happy With Metier',
            value: '%'
        },
        {
            id: 987,
            description: 'Project Complete At Last 5 Years',
            value: '+'
        },
        {
            id: 50,
            description: 'Clients Active With Metier',
            value: '%'
        },
    ];    
    const sponsorsData = [
        {
            id: 1,
            image: brand1,
        },
        {
            id: 2,
            image: brand2,
        },
        {
            id: 3,
            image: brand3,
        },
        {
            id: 4,
            image:brand4,
        },
        {
            id: 5,
            image:brand5,
        },
        {
            id: 6,
            image: brand6,
        },
        {
            id: 7,
            image:brand7,
        },
        {
            id: 8,
            image: brand8,
        },
    ];
    return (
        <>
            <Header></Header>                
            <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
            <div style={{marginTop:"50px"}}  className="about__page section-padding pb-100">
                <div  className="container">
                    <div className="row mb-60">
                        <div className="col-xl-6 col-lg-8">
                            <div  className="about__page-title">
                                <span className="subtitle">About Us</span>
                                <h2 style={{color:"white"}}>Best Portfolio Management Software</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-100">
                        <div className="col-xl-12">
                            <div className="about__page-area">
                                <div className="about__page-area-experience">
                                    <h3><span style={{color:"white"}} className="counter">{skillBar && <CountUp start={0} end={16} duration={3} delay={0}></CountUp>}</span ><span style={{color:"white"}}>+</span></h3>
                                    <p style={{color:"#1776c1"}}>Years Experience In Our Company</p>
                                </div>
                                <img src="assets/img/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"140px"}}>
                        {counterData.map((item, id)=>(
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={id}>
                            <div className="about__page-area-item">
                                <h2><span style={{color:"white"}} className="counter">{skillBar && <CountUp start={0} end={item.id} duration={4} delay={0}></CountUp>}{item.value}</span></h2>
                                <p>{item.description}</p>
                            </div>					
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </ScrollTrigger>
            <div className="team__area">
                <div className="container">
                    <div className="row mb-30 team__area-border">
                        <div className="col-xl-12">
                            <div className="team__area-title lg-t-center">
                                <span className="subtitle">Team</span>
                                <h2 style={{color:"white"}}> Experience</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamData.map((item, id)=>(
                        <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                            <div className="team__area-item">
                                <div className="team__area-item-image">
                                    <img src={item.image} alt="" />
                                    <div className="team__area-item-image-social">
                                        <ul>
                                            <li><Link to=''><i className="fab fa-twitter"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-behance"></i></Link> </li>
                                            <li><Link to=''><i className="fal fa-basketball-ball"></i></Link> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__area-item-content">
                                    <h5 style={{color:"#1776c1"}}>{item.name}</h5>
                                    <span >{item.title}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="client__area">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-12">
                            <div className="client__area-title"> 
                                <span className="subtitle-one">Global Clients</span>
                                <h2 style={{color:"white"}}>We have more than 599+ global clients</h2> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {sponsorsData.map((item, id)=>(
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={id}>
                            <div className="client__area-item">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterThree></FooterThree>
        </>
    );
};

export default AboutPage;