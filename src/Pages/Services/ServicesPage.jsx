import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderTwo';
import bannerBg from '../../assets/img/video-1.jpg';
import Video from '../HomeOne/Video/Video';
import { pageTitle } from '../PageTitle';
import {GoGraph} from "react-icons/go";
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaComputer,FaPlus } from 'react-icons/fa6';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

const ServicesPage = () => {
    pageTitle('Services');
    // const servicesData = [
    //     {
    //         id: 1,
    //         title: 'UI/UX Designing',
    //         description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
    //         imgOne: 'assets/img/icon/service-1.png',
    //         imgTwo: 'assets/img/icon/services-1.png',
    //         href: '/services-details',
    //     },
    //     {
    //         id: 2,
    //         title: 'Web & Apps Development',
    //         description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
    //         imgOne: 'assets/img/icon/service-2.png',
    //         imgTwo: 'assets/img/icon/services-2.png',
    //         href: '/services-details',
    //     },
    //     {
    //         id: 3,
    //         title: 'Digital Marketing',
    //         description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
    //         imgOne: 'assets/img/icon/service-3.png',
    //         imgTwo: 'assets/img/icon/services-3.png',
    //         href: '/services-details',
    //     },
    //     {
    //         id: 4,
    //         title: 'Branding Strategy',
    //         description: 'Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis',
    //         imgOne: 'assets/img/icon/service-4.png',
    //         imgTwo: 'assets/img/icon/services-4.png',
    //         href: '/services-details',
    //     },
    // ];
    // const feedbackData = [
    //     {
    //         id: 1,
    //         name: 'David Bowie',
    //         title: 'UX Designer',
    //         description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
    //         quote: 'assets/img/icon/quote.png',
    //         avatar: 'assets/img/avatar/feedback-1.jpg',
    //     },
    //     {
    //         id: 2,
    //         name: 'Michel Aoun',
    //         title: 'Marketing',
    //         description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
    //         quote: 'assets/img/icon/quote.png',
    //         avatar: 'assets/img/avatar/feedback-2.jpg',
    //     },
    //     {
    //         id: 3,
    //         name: 'Steve Rhodes',
    //         title: 'Developer',
    //         description: 'pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.',
    //         quote: 'assets/img/icon/quote.png',
    //         avatar: 'assets/img/avatar/feedback-3.jpg',
    //     },
    // ];
    return (
        <>
        <Header></Header>
            <div className="services__page section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-8">
                            <div className="services__page-title lg-t-center">
                                <span className="subtitle">Our Services</span>
                                <h2 style={{color:"white"}}>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-12">
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <MdOutlineDesignServices className='icons-two'/>
                                        <div className="services__area-item-icon-one">
                                            <img src="/services-details" alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to="/services-details">UI/UX Designing</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to="/services-details"><FaPlus className='footer-icons'/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <FaComputer className='icons-two'/>
                                        <div className="services__area-item-icon-one">
                                            <img src="/services-details" alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to="/services-details">Web & Apps Development</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to="/services-details"><FaPlus className='footer-icons'/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <GoGraph className='icons-two'/>
                                        <div className="services__area-item-icon-one">
                                            <img src="/services-details" alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to="/services-details">Digital Marketing</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to="/services-details"><FaPlus className='footer-icons'/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <MdOutlineMiscellaneousServices className='icons-two'/>
                                        <div className="services__area-item-icon-one">
                                            <img src="/services-details" alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to="/services-details">Branding Strategy</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to="/services-details"><FaPlus className='footer-icons'/></Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* <Video bannerBg={bannerBg}></Video> */}
            <div className="feedback__area section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-12">
                            <div className="feedback__area-title">
                                <span className="subtitle-one">Our Reviews</span>
                                <h2 style={{color:"white"}}>Awesome client Feedback</h2>                         
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-4 col-lg-6">
                                <div className="feedback__area-item">
                                    <div className="feedback__area-item-quote">
                                        <FaRegUserCircle style={{color:"#1776c1"}}/>
                                    </div>
                                    <div className="feedback__area-item-reviews">
                                        <h5 style={{color:"#1776c1",fontSize:"40px",cursor:"pointer"}}>Good :</h5>
                                        <ul>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="feedback__area-item-content">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="feedback__area-item-bottom">
                                        <div className="feedback__area-item-bottom-avatar">
                                           {/*  */}
                                        </div>
                                        <div className="feedback__area-item-bottom-title">
                                            <h5 style={{color:"#1776c1"}}>David Bowie</h5>
                                            <span  style={{color:"#ffffff60"}}>UI/UX Desinger</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="feedback__area-item">
                                    <div className="feedback__area-item-quote">
                                        <FaRegUserCircle style={{color:"#1776c1"}}/>
                                    </div>
                                    <div className="feedback__area-item-reviews">
                                        <h5 style={{color:"#1776c1",fontSize:"40px",cursor:"pointer"}}>Good :</h5>
                                        <ul>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="feedback__area-item-content">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="feedback__area-item-bottom">
                                        <div className="feedback__area-item-bottom-avatar">
                                           {/*  */}
                                        </div>
                                        <div className="feedback__area-item-bottom-title">
                                            <h5 style={{color:"#1776c1"}}>David Bowie</h5>
                                            <span style={{color:"#ffffff60"}}>UI/UX Desinger</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="feedback__area-item">
                                    <div className="feedback__area-item-quote">
                                        <FaRegUserCircle style={{color:"#1776c1"}}/>
                                    </div>
                                    <div className="feedback__area-item-reviews">
                                        <h5 style={{color:"#1776c1",fontSize:"40px",cursor:"pointer"}}>Good :</h5>
                                        <ul>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="feedback__area-item-content">
                                        <p>Pellentesque In Dolor Vel Malesuada. Donec Finibus Libero Odio, Ac Iaculis</p>
                                    </div>
                                    <div className="feedback__area-item-bottom">
                                        <div className="feedback__area-item-bottom-avatar">
                                           {/*  */}
                                        </div>
                                        <div className="feedback__area-item-bottom-title">
                                            <h5 style={{color:"#1776c1"}}>David Bowie</h5>
                                            <span style={{color:"#ffffff60"}}>UI/UX Desinger</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
        <FooterThree></FooterThree>         
        </>
    );
};

export default ServicesPage;