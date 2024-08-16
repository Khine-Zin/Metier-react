import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderOne';
import { pageTitle } from '../PageTitle';
import portfolio1 from '../../assets/img/portfolio1.jpeg';
import portfolio2 from '../../assets/img/portfolio2.webp';
import portfolio3 from '../../assets/img/portfolio3.jpg';
import portfolio4 from '../../assets/img/portfolio4.jpg';
import portfolio5 from '../../assets/img/portfolio5.jpg';
import portfolio6 from '../../assets/img/portfolio6.jpg';

const PortfolioTwo = () => {
    pageTitle('Portfolio Two');
    return (
        <>
        <Header></Header>
        <div className="portfolio__column-two section-padding">
            <div style={{marginTop:"50px"}} className="container">
                <div  className="row"> 
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img  className="img__full" src={portfolio1} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span style={{color:"#1776c1"}}>Photography</span>
                                <h4 ><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 md-mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src={portfolio2} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>Photography</span>
                                <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src={portfolio6} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>Photography</span>
                                <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 md-mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src={portfolio3} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>Photography</span>
                                <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 md-mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src={portfolio4} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>Photography</span>
                                <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src={portfolio5} alt="" />
                            <div className="portfolio__column-two-item-content">
                                <span>Photography</span>
                                <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"20px",color:"white"}} className="col-xl-12 mt-60 t-center">
                        <Link className="theme-btn-1" to="">All Project<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <FooterThree></FooterThree>            
        </>
    );
};

export default PortfolioTwo;