import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import mainCamera from '../../images/main-camera.png';
import './Banner.css';

const Banner = () => {
    return (
        <section id="banner" className='container'>
            <div className="banner-left">
                <h1>Start your <span className='banner-title'>Journey</span> as
                    Influencer</h1>
                <p>Grab your gears and fly beyond imagination. A brand is worthless if it doesn't connect with the right
                    audience in a relevant way!
                </p>
                <button className="primary-button">
                    Order Now
                    <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} />
                </button>
            </div>
            <div className="banner-right">
                <img src={mainCamera} alt="" />
            </div>
        </section>
    );
};

export default Banner;