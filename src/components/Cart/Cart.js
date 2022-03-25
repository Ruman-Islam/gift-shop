import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            {/* <h4>Order Summary</h4> */}
            <h5>Selected Gifts: {cart.length}</h5>
            <div className="cart-items-container">
                {
                    cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>
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