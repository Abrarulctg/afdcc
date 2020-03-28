import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './FoodsItem.css';
import Foods from '../Foods/Foods';


const FoodsItem = () => {
    const food = fakeData;
    const [foods, setFoods] = useState(food);
    console.log(foods);

    return (
        <div className="food-container">
            <ul>
                {
                    foods.map(fd => <Foods foods={fd}></Foods>)
                }
            </ul>
            <button className="checkoutBtn">Checkout Food</button>

        </div>
    );
};

export default FoodsItem;