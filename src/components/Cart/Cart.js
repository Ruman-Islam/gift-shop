import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: </p>
            <p>Total Price: {'$'} </p>
            <p>Total Shipping Charge: {'$'} </p>
            <p>Tax: {'$'} </p>
            <h5>Grand Total: {'$'} </h5>
            {/* <div className='btn-container'>
                <button className='clear-btn' onClick={handleDeleteCart}>
                    Clear Cart
                    <FontAwesomeIcon className='icon' icon={faTrashCan} />
                </button>
                <button className='review-btn'>
                    Review Order
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                </button>
            </div> */}
        </div>
    );
};

export default Cart;