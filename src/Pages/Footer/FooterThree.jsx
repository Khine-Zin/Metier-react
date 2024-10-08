import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa";

const FooterThree = () => {
    return (
        <>
            <div className="footer__area pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12">
                            <div className="footer__area-widget t-center">
                                <div className="footer__area-widget-about">
                                    <div className="footer__area-widget-about-social three">
                                        <ul>
                                            <li><Link to=''><FaFacebook className='footer-icons'/></Link> </li>
                                            <li><Link to=''><FaInstagram className='footer-icons'/></Link></li>
                                            <li><Link to=''><FaTwitter className='footer-icons'/></Link> </li>
                                            <li><Link to=''><FaWhatsapp className='footer-icons'/></Link> </li>
                                            
                                        </ul>
                                    </div>
                                    <div className="footer__area-widget-about-menu three">
                                        <ul>
                                            <li><Link to='/'>Home</Link></li>
                                            <li><Link to='/services'>Services</Link></li>
                                            <li><Link to='/news'>News</Link></li>
                                            <li><Link to='/portfolio'>Portfolio</Link></li>
                                            <li><Link to='/contact'>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area">
                <div className="container">
                    <div className="row align-items-center copyright__area-border">
                        <div className="col-xl-12">
                            <div className="copyright__area-left t-center">
                                <p>Copyright © 2023<a href="index.html"> ThemeOri</a> Website by Metier </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterThree;