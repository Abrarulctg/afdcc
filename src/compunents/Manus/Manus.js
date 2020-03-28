import React from 'react';
import './Manus.css';

const Manu = (props) => {
    return (
        <div>
            <button onClick={() => props.handleManu('breakfast')}
                className={`manu-toggle ${props.cartCategory === 'breakfast' ? 'text-danger' : ''}`}
            >
                <h5>Breakfast</h5>
            </button>

            <button onClick={() => props.handleManu('lunch')}
                className={`manu-toggle ${props.cartCategory === 'lunch' ? 'text-danger' : ''}`}
            >
                <h5>Lunch</h5>
            </button>

            <button onClick={() => props.handleManu('dinner')}
                className={`manu-toggle ${props.cartCategory === 'dinner' ? 'text-danger' : ''}`}
            >
                <h5>Dinner</h5>
            </button>
        </div>
    );
};

export default Manu;