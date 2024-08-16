import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="banner__area-two" style={{backgroundImage: `url('assets/img/banner.jpg')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-two-content"> 
                            <span>Best Portfolio Builder</span>
                            <h1 style={{color:"white"}}>Portfolio</h1> <Link className="theme-btn-1" to="/portfolio-two">All Project</Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-two-bottom">
                <div className="container">
                    <div className="banner__area-two-bottom-icon">
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