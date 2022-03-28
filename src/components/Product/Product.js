import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, product: { name, price, img }, handleAddToCart }) => {
    return (
        <div className="card h-100 rounded">
            <div className="product-img-container">
                <img src={img} alt="product" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {'$'}{price}</p>
            </div>
            <button
                onClick={() => handleAddToCart(product)}
                className='add-to-cart'>
                Add to Cart
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;