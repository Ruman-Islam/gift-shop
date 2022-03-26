import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';
import { removeFromLocalStorage } from '../Utilities/UtilitiesFunction';


const CartItem = ({ cartItem, cartItem: { img, name }, handleRemoveFromCart }) => {

    return (
        <div className='cart-item'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='name-container'>
                <h6>{name.length <= 15 ? name : name.slice(0, 15) + '...'}</h6>
            </div>
            <div className='item-btn-container'>
                <button
                    onClick={() => handleRemoveFromCart(cartItem) + removeFromLocalStorage(cartItem.id)}
                    className='delete-btn'>
                    <FontAwesomeIcon className='icon' icon={faTrashCan} />
                </button>
            </div>
        </div >
    );
};

export default CartItem;