import React from 'react';
import logo from '../../resources/logo2.png';
import '../Header/Header.css';
import { NavbarBrand, NavLink } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../useAuth/useAuth';

const Header = () => {
    const auth = Auth();
    return (
        <div className="navbar">
            <NavbarBrand href="#home"><img src={logo} alt="Red Onion Restaurent" /></NavbarBrand>
                <Nav className="ml-auto">
                    <NavLink href="/cart" className="topBtn"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    <NavLink href="/login" className="topBtn">Login</NavLink>
                    
                    {
                        auth.user.name ? 
                        <a onClick={auth.signOut} className="nav-item nav-link" href="/home"> Sign Out</a> : <a className="nav-item nav-link" href="/signup">Sign Up</a>
                    }
                </Nav>
            
        </div>
    );
};

export default Header;