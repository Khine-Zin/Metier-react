import React from 'react';
import FooterOne from '../../Footer/FooterOne';
import HeaderOne from '../../Header/HeaderOne';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Video from '../Video/Video';
import bannerBg from '../../../assets/img/video.jpg';
import Work from '../Work/Work';
import { pageTitle } from '../../PageTitle';
import bannerImage from "../../../assets/img/video.png"

const HomeOne = () => {
    pageTitle('Metier');
    return (
        <div className=''>
            <HeaderOne></HeaderOne>
            <Banner></Banner>
            {/* <Features></Features> */}
            <Services></Services>
            <Video bannerBg="QyhwSYhX09s?si=K327ydkJoh8uphHy" bannerImage={bannerImage}></Video>
            <Work></Work>
            <FooterOne></FooterOne>
        </div>
    );
};

export default HomeOne;