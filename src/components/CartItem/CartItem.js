import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';


const CartItem = ({ cartItem: { img, name } }) => {
    return (
        <div className='cart-item'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='name-container'>
                <h6>{name.length <= 25 ? name : name.slice(0, 20) + '...'}</h6>
            </div>
            <div className='btn-container'>
                <button className='delete-btn'>
                    <FontAwesomeIcon className='icon' icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;