import React from 'react';
import './GiftCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const GiftCard = ({ gift }) => {
    const { name, price, img } = gift;
    console.log(gift);
    return (
        <div className="card h-100">
            <img src={img} className="img" alt="product" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {'$'}{price}</p>
            </div>
            <button
                className='add-to-cart'>
                Add to Cart
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </button>
        </div>
    );
};

export default GiftCard;