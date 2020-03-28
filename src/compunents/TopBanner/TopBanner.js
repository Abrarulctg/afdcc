import React from 'react';
import './TopBanner.css';
import { InputGroup, FormControl, Button, Container, Row } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className="Top-Banner">
            <div className="search-food">
            <h2>Best food waiting for your belly</h2>
                <input type="text" className="search-input" placeholder="Search Food Items..."/>
                <input type="submit" className="button" value="Search"/>
            </div>
        </div>
    );
};

export default TopBanner;