import React, { useState } from 'react';
import './FoodDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = sign => {
        const cartQuantity = quantity;
        let newQuantity;
        if (sign === '+') {
            newQuantity = cartQuantity + 1;
        }
        else {
            newQuantity = cartQuantity > 1 ? cartQuantity - 1 : cartQuantity;
        }
        setQuantity(newQuantity);
    }

    return (
        <div className="container food-detail">
            <div className="row">
                <div className="col-md-5 food-description">
                    <h3 className="text-center"> {props.item.title}</h3>
                    <p>{props.item.description}</p>
                    <div className="row">
                        <h3 className="col-4">
                            ${(props.item.price * quantity).toFixed(2)}
                        </h3>
                        <div className="col-6 counter">
                            <button
                                className="decreaseBtn"
                                onClick={() => handleQuantity('-')}
                            > -
                            </button>
                            <input
                                className="counter-field"
                                type="text"
                                value={quantity}
                                disabled
                            />
                            <button
                                className="increaseBtn"
                                onClick={() => handleQuantity('+')}
                            > +
                            </button>
                        </div>
                    </div> <br />
                    <button
                        className="button"
                        onClick={() => props.handleCart(props.item, quantity)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> Add
                    </button>
                </div>

                <div className="col-md-7">
                    <img className="w-100" src={props.item.image} alt="Press ctrl+shift+r to reload" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;