import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="banner__area-three" style={{backgroundImage: `url('assets/img/banner-3.jpg')`}}>
            <div className="custom-container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-three-content">
                            <h1 style={{color:"#1776c1"}}>Design <span>Development</span></h1>
                             <Link className="theme-btn-1" to="/contact">Get A Quote <i className="fal fa-long-arrow-right"></i></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-three-bottom">
                <div className="container custom-container">
                    <div className="banner__area-three-bottom-icon">
                        <ul>
                        <li><Link to=""><FaFacebook className='footer-icons'/></Link></li>
                            <li><Link to=""><FaInstagram className='footer-icons'/></Link></li>
                            <li><Link to=""><FaTwitter className='footer-icons'/></Link></li>
                            <li><Link to=""><FaWhatsapp className='footer-icons'/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;