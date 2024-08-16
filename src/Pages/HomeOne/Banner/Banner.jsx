import React from "react";
import { Link } from "react-router-dom";
import { Typewriter, Cursor } from "react-simple-typewriter";
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa";


const Banner = () => {
  return (
    <div
      className="banner__area"
      style={{ backgroundImage: `url('assets/img/banner.png')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner__area-content">
              <h1>focused on </h1>
                <h2>
              <Typewriter
                words={["UI/UX Design", "Web Dev","Mobile Dev"]}
                cursor={false}
                loop={false}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              
              />
          </h2>
          <p>For Myanmar entrepreneurs aspiring to enter foreign markets and build international-level businesses, eeaio offers comprehensive, high-quality technology solutions.</p>
              <Link className="theme-btn" to="/portfolio-three">
                All Project 
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__area-bottom">
        <div className="banner__area-bottom-icon">
          <ul>
            <li>
              <Link to="">
                <FaFacebook className="icons"/>
              </Link>
            </li>
            <li>
              <Link to="">
                <FaInstagram className="icons"/>
              </Link>
            </li>
            <li>
              <Link to="">
                <FaTwitter className="icons"/>
              </Link>
            </li>
            <li>
              <Link to="">
                <FaWhatsapp className="icons"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;