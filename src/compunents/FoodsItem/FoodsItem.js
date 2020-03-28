import React, { useState } from 'react';
import fakeData from '../../resources/fakeData';
import './FoodsItem.css';
import Manus from '../Manus/Manus';
import FoodDetails from '../FoodDetails/FoodDetails';
import SubManus from '../SubManus/SubManus';


const FoodsItem = () => {
    const [cartCategory, setCartCategory] = useState('lunch');
    const [cartManu, setCartManu] = useState(fakeData.filter(item => {
        return item.type === cartCategory
    }));
    const [cartItem, setCartItem] = useState(null);
    const [cart, setCart] = useState(
        sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []
    );
    const handleManu = subManus => {
        setCartCategory(subManus);
        setCartManu(fakeData.filter(item => {
            return item.type === subManus
        }))
    }

    const handleItem = item => {
        setCartItem(item);
        setCartCategory('');
    }
    const handleCart = (item, quantity) => {
        const newCart = cart.filter(el => el.title !== item.title);

        setCart([...newCart, {
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: quantity
        }])
        setCartItem(null)
        setCartCategory(item.type);
    }

    const handleOrder = () => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div>
            <Manus handleManu={handleManu}
                cartCategory={cartCategory}
            >
            </Manus>
            {
                cartItem ?
                    <FoodDetails item={cartItem}
                        handleCart={handleCart}
                    >
                    </FoodDetails> :
                    <SubManus cartManu={cartManu}
                        handleItem={handleItem}
                        handleOrder={handleOrder}
                        emptyCart={!cart.length}
                    >
                    </SubManus>
            }

        </div>
    );
};

export default FoodsItem;