import React, { useContext } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { UseCart } from '../Shop/Shop';
import { handleAddToCart } from '../../components/Utilities/UtilitiesFunction';
import { UseCartIcon } from '../../App';

const Product = ({ product, product: { name, price, img, id, ratings } }) => {
    const [, setIsCartOpen] = useContext(UseCartIcon);
    const navigate = useNavigate();
    const [cart, setCart] = useContext(UseCart);
    return (
        <div className="card h-100">
            <div
                onClick={() => navigate(`/product-detail/${id}`)}
                className="product-img-container">
                <img src={img} alt="product" />
            </div>
            <div
                onClick={() => navigate(`/product-detail/${id}`)}
                className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {'$'}{price}</p>
                <div style={{ display: 'flex' }}>
                    <small><FontAwesomeIcon className="star-icon" icon={faStar} /></small>
                    <small><FontAwesomeIcon className="star-icon" icon={faStar} /></small>
                    <small><FontAwesomeIcon className="star-icon" icon={faStar} /></small>
                    <small><FontAwesomeIcon className="star-icon" icon={faStar} /></small>
                    <small><FontAwesomeIcon className="star-icon" icon={faStarHalf} /></small>
                    <small>{ratings}</small>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(cart, setCart, product) + setIsCartOpen(true)}
                className='add-to-cart'>
                Add to Cart
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;