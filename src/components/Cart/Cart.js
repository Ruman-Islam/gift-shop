import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { handleRandomization } from '../Utilities/UtilitiesFunction';
import './Cart.css';

const Cart = ({ cart, setCart, handleClearCart }) => {
    const [index, setIndex] = useState();

    return (
        <div className='cart'>
            <h6>Auto Suggest:</h6>
            {
                cart[index] ?
                    <CartItem cartItem={cart[index]} />
                    : null
            }
            <h5>Selected Gifts: {cart.length}</h5>
            <div className="cart-items-container">
                {
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />)
                }
            </div>
            <div className='btn-container'>
                <button onClick={() => handleRandomization(cart, setIndex)} className='randomize-btn'>
                    Choose Random
                </button>
                <button onClick={() => handleClearCart(setCart)} className='clear-items-btn'>
                    Remove Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;