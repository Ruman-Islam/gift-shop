import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Influencer products</h1>
            <p>Copyright &copy;2022 influencer Gears</p>
            <small>All rights reserved</small><br />
            <div className="social-icons">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </div>
        </footer>
    );
};

export default Footer;