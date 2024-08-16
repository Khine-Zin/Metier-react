import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

const NewsSideBar = () => {
    return (
        <>
        <div className="all__sidebar ml-25 xl-ml-0">
            <div className="all__sidebar-item">
                <h4 style={{color:"#1776c1"}}>Search Here</h4>
                <div className="all__sidebar-item-search">
                    <form action="#">
                        <input type="text" placeholder="Search....." required />
                        <button type="submit"><FaPlus/></button>
                    </form>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4 style={{color:"#1776c1"}}>Top Category</h4>
                <div className="all__sidebar-item-category">
                    <ul>                                    
                        <li><Link to=""><i className="far fa-angle-double-right"></i>Design Research<span>(08)</span></Link></li>
                        <li><Link to=""><i className="far fa-angle-double-right"></i>Development<span>(06)</span></Link></li>
                        <li><Link to=""><i className="far fa-angle-double-right"></i>Digital Marketing<span>(05)</span></Link></li>
                        <li><Link to=""><i className="far fa-angle-double-right"></i>Branding<span>(09)</span></Link></li>
                        <li><Link to=""><i className="far fa-angle-double-right"></i>Market Research<span>(03)</span></Link></li>
                        <li><Link to=""><i className="far fa-angle-double-right"></i>SEO marketing<span>(02)</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4 style={{color:"#1776c1"}}>Recent Post</h4>
                <div className="all__sidebar-item-post">
                    <div className="all__sidebar-item-post-item">
                        <div className="all__sidebar-item-post-item-image">
                            <Link to="/news-details"><img src="assets/img/post-1.jpg" alt="" /></Link>
                        </div>
                        <div className="all__sidebar-item-post-item-content">
                            <span style={{color:"#ffffff60"}}><CiCalendar style={{fontSize:"17px"}}/> 05 June, 2023</span>
                            <h5><Link to="/news-details">Sample Brochure Design</Link></h5>
                        </div>
                    </div>
                    <div className="all__sidebar-item-post-item">
                        <div className="all__sidebar-item-post-item-image">
                            <Link to="/news-details"><img src="assets/img/post-2.jpg" alt="" /></Link>
                        </div>
                        <div className="all__sidebar-item-post-item-content">
                            <span style={{color:"#ffffff60"}}><CiCalendar style={{fontSize:"17px"}}/> 02 June, 2023</span>
                            <h5><Link to="/news-details">Sample Brochure Design</Link></h5>
                        </div>
                    </div>
                    <div className="all__sidebar-item-post-item">
                        <div className="all__sidebar-item-post-item-image">
                            <Link to="/news-details"><img src="assets/img/post-3.jpg" alt="" /></Link>
                        </div>
                        <div className="all__sidebar-item-post-item-content">
                            <span style={{color:"#ffffff60"}}><CiCalendar style={{fontSize:"17px"}}/> 04 June, 2023</span>
                            <h5><Link to="/news-details">Sample Brochure Design</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4 style={{color:"#1776c1"}}>Tag</h4>
                <div className="all__sidebar-item-tag">
                    <ul>
                        <li><Link to="">Design</Link></li>
                        <li><Link to="">Brochure</Link></li>
                        <li><Link to="">Product</Link></li>
                        <li><Link to="">Business</Link></li>
                        <li><Link to="">Developemnt</Link></li>
                        <li><Link to="">Design</Link></li>
                        <li><Link to="">Marketing</Link></li>
                        <li><Link to="">Branding</Link></li>
                    </ul>
                </div>
            </div>
        </div>            
        </>
    );
};

export default NewsSideBar;