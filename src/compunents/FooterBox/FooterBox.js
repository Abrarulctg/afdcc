import React from 'react';
import './FooterBox.css';
import logo from '../../resources/logo.png';
import { Container } from 'react-bootstrap';

const FooterBox = () => {
    return (
        <div className="footer-box">
            <Container>
            <div className="row">
                <div className="col-6">
                    <img className="w-25" src={logo} alt=""/>
                </div>
                <div className="col-3">
                    <a href='/'>About Online Food</a><br/>
                    <a href='/'>Read Our Blog</a><br/>
                    <a href='/signup'>Sign Up For Delivery</a><br/>
                    <a href='/'>Add Your Restaurant</a><br/>
                </div>
                <div className="col-3">
                    <a href='/'>Get Help</a><br/>
                    <a href='/'>Read FAQs</a><br/>
                    <a href='/'>View All Cities</a><br/>
                    <a href='/'>Restaurants Near Me</a><br/>
                </div>
            </div>
            <p className="text-center text-secondary"><small>Copyright © 2020 <a href="/home">Red Onion Restaurent </a></small></p>
            </Container>
        </div>
    );
};

export default FooterBox;