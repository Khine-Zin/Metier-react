import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa";
import { FaPlus } from 'react-icons/fa';

const FooterOne = () => {
    return (
        <>
            <div className="footer__area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="footer__area-widget">
                                <div className="footer__area-widget-about lg-t-center">
                                    <div className="footer__area-widget-about-logo">
                                        <Link to="/"><img src="assets/img/logo-1.png" alt="" /></Link>
                                    </div>
                                    <div className="footer__area-widget-about-social">
                                        <ul>
                                            <li><Link to=''><FaFacebook className='footer-icons'/></Link> </li>
                                            <li><Link to=''><FaInstagram className='footer-icons'/></Link> </li>
                                            <li><Link to=''><FaTwitter className='footer-icons'/></Link> </li>
                                            <li><Link to=''><FaWhatsapp className='footer-icons'/></Link> </li>
                                           
                                        </ul>
                                    </div>
                                    <div className="footer__area-widget-about-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/news">News</Link></li>
                                            <li><Link to="/portfolio">Portfolio</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="footer__area-widget">
                                <div className="footer__area-widget-subscribe one">
                                    <h4>Subscribe</h4>
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" required />
                                        <button type="submit"><FaPlus/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area copyright__area-one">
                <div className="container">
                    <div className="row align-items-center copyright__area-border">
                        <div className="col-xl-12">
                            <div className="copyright__area-left copyright__area-one-left">
                                <p>Copyright © 2023<Link to="/"> ThemeOri</Link> Website by Metier </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterOne;