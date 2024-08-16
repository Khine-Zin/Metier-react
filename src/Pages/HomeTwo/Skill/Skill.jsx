import React from 'react';
import SkillArea from './SkillArea';
import skill from "../../../assets/img/skill2.webp"

const Skill = () => {
    return (
        <div className="skill__area" style={{backgroundImage: `url(${skill})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-4 lg-mb-50">
                        <div className="skill__area-left">
                            <div className="skill__area-left-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=QyhwSYhX09s"><i className="fas fa-play"></i></a> </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <SkillArea></SkillArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;