import React from 'react';
import logo from '../../resources/logo2.png';
import '../Header/Header.css';
import { NavbarBrand, NavLink, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="navbar">
            <a><NavbarBrand href="#home"><img src={logo} alt="Red Onion Restaurent" /></NavbarBrand></a>
                <Nav className="ml-auto">
                    <NavLink href="/cart" className="topBtn"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    <NavLink href="/login" className="topBtn">Login</NavLink>
                    <NavLink href="/signup" className="button">Sign up</NavLink>
                </Nav>
            
        </div>
    );
};

export default Header;