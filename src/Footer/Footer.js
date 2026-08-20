import './Footer.css'
import My_R_logo from '../images/r_logo.jpeg'
import React from 'react';

function Footer({ onChange }) {
    const LogoClickFooter = () => {
        onChange('main');
    };

    return (
        <div className="App-footer">
            <div className="footer-logo-and-name" onClick={LogoClickFooter}>
                <img src={My_R_logo} alt="logo" className='my-r-logo-footer'></img>
                <div className="footer-logo-text-container">
                    Reliable Fire Systems Inc. All rights reserved
                </div>
            </div>
            <div className="copyright-container">
                © 2024, Developed with exceptional care by Pavel Technologies LLC
            </div>
        </div>
    );
}

export default Footer;