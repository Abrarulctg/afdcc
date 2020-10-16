import React from 'react';
import './Footer.css'
import Logo from '../../resources/ICON/logo1.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark py-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-4 mb-5">
                        <img src={Logo} alt="Hot Onion White Logo" />
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Online Food</Link></li>
                            <li><Link to="/blog">Read Our Blog</Link></li>
                            <li><Link to="/login">Sign up to deliver</Link></li>
                            <li><Link to="/about">Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/help">Get Help</Link></li>
                            <li><Link to="/faq">Read FAQ</Link></li>
                            <li><Link to="/cities">View All Cities</Link></li>
                            <li><Link to="/nearMe">Restaurants near me</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <ul className="list-unstyled">
                            <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of use</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="">
                    <small className="text-secondary">Copyright &copy; 2020 || Red Onion Restaurant || <a className="copyright-link" href="https://www.linkedin.com/in/abrarul-hoque/" target="_blank">Abrarul Hoque</a></small>
                </div>

            </div>
        </footer>
    );
};

export default Footer;