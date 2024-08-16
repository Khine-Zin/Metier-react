import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from "../../../assets/img/portfolio1.jpeg"
import portfolio2 from "../../../assets/img/portfolio2.webp"
import portfolio3 from "../../../assets/img/portfolio3.jpg"
import portfolio4 from "../../../assets/img/portfolio4.jpg"

const Portfolio = () => {
    return (
        <div className="portfolio__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title lg-t-center"> 
                            <span className="subtitle">Portfolio</span>
                            <h2 style={{color:"white"}}>Create Portfolio</h2> 
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src={portfolio} alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src={portfolio2} alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img  className="img__full" src={portfolio3} alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src={portfolio4} alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-5.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-6.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Photography</span>
                                        <h4><Link to="#">Photography</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;