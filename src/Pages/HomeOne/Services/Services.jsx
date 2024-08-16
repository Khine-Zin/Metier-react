import React from 'react';
import { Link } from 'react-router-dom';
import {GoGraph} from "react-icons/go";
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

const Services = () => {
    
    // const servicesData = [
    //   {
    //     id: 1,
    //     title: 'Marketing',
    //     batch: '01',
    //     description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
    //     imgOne:icons[0],
    //     imgTwo: icons[0],
    //     href: '/services-details',
    //   },
    //   {
    //     id: 2,
    //     title: 'Designing',
    //     batch: '02',
    //     description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
    //     imgOne:icons[1],
    //     imgTwo:icons[1],
    //     href: '/services-details',
    //   },
    //   {
    //     id: 3,
    //     title: 'Development',
    //     batch: '03',
    //     description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
    //     imgOne: icons[2],
    //     imgTwo: icons[2],
    //     href: '/services-details',
    //   },
    //   {
    //     id: 4,
    //     title: 'Designing',
    //     batch: '04',
    //     description: 'Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.',
    //     imgOne: icons[3],
    //     imgTwo: icons[3],
    //     href: '/services-details',
    //   },
    // ];
    return (
        <div className="services__area section-padding" >
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="services__area-title lg-t-center"> 
                            <span className="subtitle one">Services</span>
                            <h1>Solutions We Can Provide</h1> 
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6" >
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <GoGraph className='icons-one'/>
                                    <div className="services__area-item-icon-one">
                                       <GoGraph className='icons-two'/>
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><Link to="/services-details">Marketing</Link></h4>
                                    <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                                </div>
                            </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <MdOutlineDesignServices className='icons-one'/>
                                    <div className="services__area-item-icon-one">
                                    <MdOutlineDesignServices className='icons-two'/>
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><Link to="/services-details">Designing</Link></h4>
                                    <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                                </div>
                            </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <FaComputer className='icons-one'/>
                                    <div className="services__area-item-icon-one">
                                    <FaComputer className='icons-two'/>
                                    </div>
                                </div>
                                <div className="services__area-item-content">
                                    <h4><Link to="/services-details">Development</Link></h4>
                                    <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                                </div>
                            </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="services__area-item">
                    <div className="services__area-item-icon">
                        <MdOutlineMiscellaneousServices className='icons-one'/>
                        <div className="services__area-item-icon-one">
                            <MdOutlineMiscellaneousServices className='icons-two'/>
                        </div>
                    </div>
                        <div className="services__area-item-content">
                           <h4><Link to="/services-details">Services</Link></h4>
                            <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;