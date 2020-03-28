import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [cart, setCart] = useState(
        JSON.parse(sessionStorage.getItem('cart'))
    );

    
    const handleCart = item => {
        const newCart = cart.filter(el=> el.title !== item.title)
        setCart(newCart);
        sessionStorage.setItem('cart',JSON.stringify(newCart))
    }

    return (
        <div className='text-left cart-block'>
            <small>From: <span>Uttara, Dhaka</span></small>
            <br/>
            <small>Arriving within 1 Hour</small>
            <div>Total: <strong>${cart?
                (cart.reduce((a,b)=>a+(b.price*b.quantity),0)).toFixed(2):
                '0.00'}</strong>
            </div>
            {
               cart? cart.map(item => {
                    return <CartItem item={item} handleCart={handleCart}></CartItem>
                }): ''
            } 
            <Link to='/completeOrder'>
                <button className="button"
                        disabled={!props.formComplete || !cart.length}
                >Place Order</button>
            </Link>
            
        </div>
    );
};

export default Cart;