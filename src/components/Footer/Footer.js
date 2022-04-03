import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Influencer products</h1>
            <p>Copyright &copy;2022 influencer products</p>
            <small>All rights reserved</small><br />
            <div className="social-icons">
                <FontAwesomeIcon icon={faHome} />
                <FontAwesomeIcon className="icon" icon={faHome} />
                <FontAwesomeIcon className="icon" icon={faHome} />
                <FontAwesomeIcon className="icon" icon={faHome} />
            </div>
        </footer>
    );
};

export default Footer;