import React, { useContext } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { UseCart } from '../Shop/Shop';
import { handleAddToCart } from '../../components/Utilities/UtilitiesFunction';

const Product = ({ product, product: { name, price, img, id } }) => {
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
            </div>
            <button
                onClick={() => handleAddToCart(cart, setCart, product)}
                className='add-to-cart'>
                Add to Cart
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;