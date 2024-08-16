import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
import { FaPlay } from 'react-icons/fa';

const Video = ({bannerBg,bannerImage}) => {
    const [openVideo, setOpenVideo] = useState(false)
    const openVideoModal = () => {
        setOpenVideo(true)
    }
    return (
        <div className="video__area" style={{backgroundImage: `url(${bannerImage})`,opacity:0.8}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div onClick={openVideoModal} className="video__area-play-icon video-pulse"><FaPlay style={{color:"#050035",fontSize:'30px'}}/></div>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" autoplay isOpen={openVideo} videoId={bannerBg} onClose={() => setOpenVideo(false)} />
        </div>
    );
};

export default Video;