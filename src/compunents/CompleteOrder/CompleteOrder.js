import React from 'react';
import map from '../../resources/bg/ordercomplete.png';
import Rider from '../Rider/Rider';

const CompleteOrder = () => {
    return (
        <div className="completeOrderPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <img className="w-75" src={map} alt="" />
                    </div>
                    <div className="col-md-4">
                        <Rider></Rider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteOrder;