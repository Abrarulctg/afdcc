import React from 'react';
import { useAuth } from '../useAuth/useAuth';
import rider from '../../resources/Image/rider.png';
import helmet from '../../resources/Image/helmet.png';
import './Rider.css';

const Rider = () => {
    const auth = useAuth();
    return (
        <div className="rider-info">
            <img className="w-25" src={rider} alt="" />
            <div className="message">
                <p>Hello <stron> {auth.user.name}</stron>!!</p>
                <p>Soon I will reach your address, be ready...</p>
            </div>
            <div className="row">
                <div className="col-1"> </div>
                <div className="col-3">
                    <img className="w-100" src={helmet} alt=""/>
                </div>
                <div className="col-6 text-left">
                    Your Rider <br/>
                    +88 01533-000000
                </div>
                <button className="button">Contact</button>

            </div>
        </div>
    );
};


export default Rider;