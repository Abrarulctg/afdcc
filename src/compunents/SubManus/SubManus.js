import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const SubManus = (props) => {
    return (
        <div className="container">
            <div className="row">
                {
                    props.cartManu.map(item => {
                        return <Item 
                                    item={item}
                                    handleItem={props.handleItem}
                                >
                                </Item>
                    })
                }
            </div> <br />
            {/* <Link to="/signup">
                <button 
                    className="btn btn-danger"
                    disabled={props.emptyCart}
                    onClick={props.handleOrder}
                >
                    Checkout Your Food
                </button>
            </Link> */}
        </div>
    );
};

export default SubManus;